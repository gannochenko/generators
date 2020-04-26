#!/usr/bin/env node

const concurrently = require("concurrently");
const yaml = require("js-yaml");
const fs = require("fs");

const colors = ["red", "green", "yellow", "blue", "magenta", "cyan"];

try {
  const apps = yaml.safeLoad(
    fs.readFileSync("./infra/development.yml", "utf8")
  );

  const commands = [];
  if (apps && apps.services) {
    Object.keys(apps.services).forEach(serviceName => {
      const service = apps.services[serviceName];
      const env = service.environment || [];

      commands.push({
        command: `cd ./app.${serviceName}; ${env.join(" ")} yarn run dev;`,
        name: `${serviceName}_1`,
        prefixColor: colors[Math.floor(Math.random() * colors.length)]
      });
    });
  }

  if (commands) {
    concurrently(commands, {
      prefix: "name",
      killOthers: ["failure", "success"],
      restartTries: 3
    }).then(
      () => {},
      () => {
        process.exit(1);
      }
    );
  }
} catch (e) {
  process.exit(1);
}
