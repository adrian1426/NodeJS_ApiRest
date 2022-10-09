const { Sequelize } = require('sequelize');

const dbserver = process.env.MSSQL_DATABASE_SERVER;
const db = process.env.MSSQL_DATABASE;
const dbuser = process.env.MSSQL_USER;
const dbpwd = process.env.MSSQL_PWD;

const sequelize = new Sequelize(db, dbuser, dbpwd, {
  host: dbserver,
  dialect: 'mssql'
});

// const sequelize = new Sequelize(db, dbuser, dbpwd, {
//   dialect: 'mssql',
//   host: 'localhost',
//   port: 1433,
//   dialectOptions: {
//     instanceName: 'SQLEXPRESS',
//     requestTimeout: 30000
//   },
//   pool: {
//     max: 50,
//     min: 0,
//     idle: 10000
//   }
// })

const dbConnectMSSQL = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexion exitosa a SQL server');
  } catch (error) {
    console.error('No se pudo conectar a SQL Server', error);
  }
};

module.exports = {
  sequelize,
  dbConnectMSSQL
};
