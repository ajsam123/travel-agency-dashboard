import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://2265b89faac3a5b3f1ada4119ec8c023@o4509227275124736.ingest.us.sentry.io/4509227305271301",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
