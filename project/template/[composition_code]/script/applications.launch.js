#!/usr/bin/env node

const concurrently = require("concurrently");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

const COLORS = ["red", "green", "yellow", "blue", "magenta", "cyan"];
const APPS_INFRA_PATH = path.join(process.cwd(), "infra.dev/compose.yml");

const applicationCode = (process.argv[2] ? process.argv[2] : "").replace(
  /\/$/,
  ""
);
const commands = [];

let services = {};
try {
  const apps = yaml.load(fs.readFileSync(APPS_INFRA_PATH, "utf8"));
  if (apps && apps.services) {
    services = apps.services;
  }
} catch (e) {
  console.error(`Unable to process the infra file: ${APPS_INFRA_PATH}`);
  console.error(e);
  process.exit(1);
}

if (applicationCode) {
  if (applicationCode === "infra") {
    commands.push({
      command: `yarn dev:infra`,
      name: `infra`,
      prefixColor: "red",
    });
  } else {
    // start a particular application
    if (services[applicationCode]) {
      const service = services[applicationCode];
      const env = service.environment || [];
      commands.push({
        command: `cd ./${applicationCode}; ${env.join(" ")} yarn dev;`,
        name: `${applicationCode}_1`,
        prefixColor: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    } else {
      // app not listed, just start blindly
      commands.push({
        command: `cd ./${applicationCode}; yarn dev;`,
        name: applicationCode,
        prefixColor: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
  }
} else {
  // just start all of them
  Object.keys(apps.services).forEach((serviceCode) => {
    const service = apps.services[serviceCode];
    const env = service.environment || [];

    commands.push({
      command: `cd ./${serviceCode}; ${env.join(" ")} yarn run dev;`,
      name: `${serviceCode}_1`,
      prefixColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
  });
}

if (commands) {
  concurrently(commands, {
    prefix: "name",
    killOthers: ["failure", "success"],
    restartTries: 3,
  }).then(
    () => {},
    () => {
      process.exit(1);
    }
  );
} else {
  console.error("Nothing to run");
}
