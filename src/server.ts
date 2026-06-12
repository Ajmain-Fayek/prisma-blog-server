import { prisma } from "./lib/prisma";
import { logger } from "./lib/logger";
import app from "./app";

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await prisma.$connect();
    logger.success("Database connected successfully");

    app.listen(PORT, () => {
      logger.info(`App listening to port: ${PORT}`);
    });
  } catch (error) {
    logger.error(
      `Failed to connect to database: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
