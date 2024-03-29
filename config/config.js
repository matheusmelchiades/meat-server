require('dotenv').config();

module.exports = {
    'server': {
        'host': process.env.SERVER_HOST || 'localhost',
        'port': process.env.PORT || process.env.SERVER_PORT,
    },
    'mongo': {
        'db': process.env.MONGO_DB || 'meatdb',
        'host': process.env.MONGO_HOST || 'localhost',
        'port': process.env.MONGO_PORT || 27017,
        'user': process.env.MONGO_USER || '',
        'password': process.env.MONGO_PASSWORD || '',
    }
};
