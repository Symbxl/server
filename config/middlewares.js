module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: [env("CLIENT_URL", "http://localhost:3000")],
    },
  },
});
