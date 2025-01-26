import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "app/app-worker.ts",
  swDest: "public/sw.js",
});

export default withSerwist();
