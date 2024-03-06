import winston from "winston";
import util from "util";
const { combine, colorize } = winston.format;

const transform = () => {
  return {
    transform: (info) => {
      info.oldMessage = info.message;
      info.message = util.format(
        info.stack || info.message,
        ...(info[Symbol.for("splat")] || [])
      );
      return info;
    },
  };
};

const transformBack = () => {
  return {
    transform: (info) => {
      info.message = info.oldMessage;
      return info;
    },
  };
};

const logger = winston.createLogger({
  format: combine(
    colorize(),
    transform(),
    winston.format.printf((info) => {
      return `${new Date().toISOString()} [${info.level}] : ${
        info.stack || info.message
      }`;
    }),
    transformBack()
  ),
});

logger.add(
  new winston.transports.Console({
    level: "debug",
  })
);

export { logger };
