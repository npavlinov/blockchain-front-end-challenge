import path from 'path';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../client/src/components/App';
import { StaticRouter } from 'react-router-dom';
import bodyParser from 'body-parser';

const server = express();

server.use(cors());
server.use(bodyParser.json());

// Serve static files
server.use(express.static(path.resolve(__dirname, '../client/public')));

// Render the server side
server.get('*', (req, res) => {
    const context = {};
    const app = renderToString(
    <StaticRouter location={req.url} context={context}>
        <App />
    </StaticRouter>
    );

    const indexFile = path.resolve(__dirname, '../client/public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
    });
});

export default server;
