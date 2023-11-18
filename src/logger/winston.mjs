import winston from "winston";
import moment from "moment-timezone";

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ level, message, label, timestamp }) => {
      return `${moment.utc(timestamp).format("YY-MM-DD HH:mm:ss")} ${level}: ${
        typeof message === "object" ? JSON.stringify(message) : message
      }`;
    })
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
