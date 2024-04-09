const config = {
  apiPort: process.env['PORT'],
  mongoPort: process.env['MONGO_PORT'],
  mongoHost: process.env['MONGO_HOST'],
  mongoDbName: process.env['MONGO_DB_NAME']
};

export default config;
