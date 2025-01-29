import { ModuleMetadata } from "@nestjs/common";
import DatabaseOptions from "./databaseOptions.interface";
import { FactoryProvider } from "@nestjs/common/interfaces/modules/provider.interface";

type DatabaseAsyncOptions = //Pick<ModuleMetadata, "imports"> &
  Pick<FactoryProvider<DatabaseOptions>, "useFactory" | "inject">;

export default DatabaseAsyncOptions;
