import { DynamicModule, Module } from "@nestjs/common";
import { SequelizeModule, SequelizeModuleOptions } from "@nestjs/sequelize";
import { SequelizeOverrideModule } from "./override/sequelize-override.module";

@Module({})
export class DatabaseModule {
  static forRootAsync(options: {
    useFactory: (
      ...args: any[]
    ) => Promise<SequelizeModuleOptions> | SequelizeModuleOptions;
    inject?: any[];
  }): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        SequelizeOverrideModule.override(),
        SequelizeModule.forRootAsync({
          useFactory: options.useFactory,
          inject: options.inject || [],
        }),
      ],
      exports: [SequelizeModule],
    };
  }
}
