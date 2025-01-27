const express = require('express');
const configData = require('./configs/env');
const errorhandler = require('./middlewares/errorHandler');
const sequelize = require('./configs/database');
const Routes = require('./routes');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// const helmet = require('helmet');
const app = express();
app.use(express.json());

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || configData.allowedOrigins.split(",").includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors());

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: configData.MaxRequestsPerMinute || 100,
    message: 'Too many requests from this IP, please try again later!',
});
app.use(limiter);

//helmet

app.use('/api/v1', Routes);

app.use(errorhandler);

sequelize.authenticate()
.then(() => console.log('Database connected'))
.catch((error) => console.error('Database connection failed:', error));


app.listen(configData.PORT, () => console.log(`Server running on port ${configData.PORT}`));

