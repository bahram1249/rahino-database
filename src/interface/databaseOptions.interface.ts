import { Dialect } from "sequelize";

export default interface DatabaseOptions {
  connectionName: string;
  dialect: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  autoLoadModels: boolean;
  logging: boolean;
  synchronize: boolean;
  timezone: string;
}
