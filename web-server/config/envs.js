const ENV = {
  DATABASE_URL: process.env.DATABASE_URL || "",
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV,
};

module.exports = ENV;
