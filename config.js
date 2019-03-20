const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
    mongoUrl: 'mongodb://localhost:27017/beron',
    port: env.PORT || 3000,
    host: env.host || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};