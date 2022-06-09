import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connection = `postgres://${process.env.DATABASE_USER_NAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`;

const sequelize = new Sequelize(connection, {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // very important
    },
  },
});

const makeConnectionWithDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

export { sequelize, makeConnectionWithDB };
