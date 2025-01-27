const fs = require('fs').promises;
const path = require('path');
const sequelize = require('../configs/database');

const models = {};

async function loadModels() {
    try {
        const files = await fs.readdir(__dirname);
        const modelFiles = files.filter((file) => file !== 'index.js' && file.endsWith('.js'));

        for (const file of modelFiles) {
            const model = require(path.join(__dirname, file))(sequelize);
            console.log(`Loaded model: ${model.name}`);
            models[model.name] = model;
        }

        for (const modelName of Object.keys(models)) {
            if (models[modelName].associate) {
                console.log(`Applying associations for: ${modelName}`);
                models[modelName].associate(models);
            }
        }

        models.sequelize = sequelize;
        models.Sequelize = sequelize.Sequelize;
    } catch (error) {
        console.error('Error loading models:', error);
    }
}

loadModels();

module.exports = models;
