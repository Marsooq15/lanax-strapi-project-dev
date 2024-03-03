// Path: ./config/env/production/server.js
// starting from Strapi v 4.6.1 server.js has to be the following

module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: process.env.PORT,
  url: env("MY_HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
  keys: [
    "Isbqw6T7uIAEqP9DTNxzx5dBAQ583B0QcpILRkaEenw=",
    "6O/NoNZcdsUywMPLKwR04C6vRKpIZLIip9KAVkTsrJg=",
  ],
});
