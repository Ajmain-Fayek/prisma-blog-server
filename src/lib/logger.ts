type LogLevel = "info" | "error" | "warn" | "debug" | "success";

const LogColors = {
  info: "\x1b[36m", // Cyan
  error: "\x1b[31m", // Red
  warn: "\x1b[33m", // Yellow
  debug: "\x1b[35m", // Magenta
  success: "\x1b[32m", // Green
  reset: "\x1b[0m", // Reset
};

export const logger = {
  info: (message: string) => {
    console.log(
      `${LogColors.info}[info]${LogColors.reset} [${new Date().toISOString()}] ${message}`,
    );
  },
  error: (message: string) => {
    console.error(
      `${LogColors.error}[error]${LogColors.reset} [${new Date().toISOString()}] ${message}`,
    );
  },
  warn: (message: string) => {
    console.warn(
      `${LogColors.warn}[warn]${LogColors.reset} [${new Date().toISOString()}] ${message}`,
    );
  },
  debug: (message: string) => {
    console.log(
      `${LogColors.debug}[debug]${LogColors.reset} [${new Date().toISOString()}] ${message}`,
    );
  },
  success: (message: string) => {
    console.log(
      `${LogColors.success}[success]${LogColors.reset} [${new Date().toISOString()}] ${message}`,
    );
  },
};
