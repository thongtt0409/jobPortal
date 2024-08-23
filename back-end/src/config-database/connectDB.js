import Sequelize from 'sequelize';

const sequelize = new Sequelize('jobportal', 'root', 'thongttdev', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connect to DB successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
