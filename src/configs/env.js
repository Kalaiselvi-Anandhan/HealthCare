const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, '../../.env') });

const ConfigData = {
    db: {
        db_name: process.env.DB_NAME,
        user_name: process.env.DB_USERNAME,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
    },
    PORT: process.env.PORT,
    allowedOrigins: process.env.ALLOWED_DOMAINS,
    secret_key: process.env.SECRET_KEY,
    MaxRequestsPerMinute: process.env.MAX_REQUEST_PER_MIN
}

module.exports = ConfigData