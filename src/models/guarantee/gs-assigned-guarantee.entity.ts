import { AutoMap } from "automapper-classes";
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "../core";
import { GSGuarantee } from "./gs-guarantee.entity";

@Table({ tableName: "GSAssignedGuarantees" })
export class GSAssignedGuarantee extends Model {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @AutoMap()
  @Column({
    type: DataType.BIGINT,
  })
  @ForeignKey(() => GSGuarantee)
  guaranteeId: bigint;

  @BelongsTo(() => GSGuarantee, { as: "guarantee", foreignKey: "guaranteeId" })
  guarantee?: GSGuarantee;

  @AutoMap()
  @Column({
    type: DataType.BIGINT,
  })
  @ForeignKey(() => User)
  userId?: bigint;

  @BelongsTo(() => User, { as: "user", foreignKey: "userId" })
  user?: User;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  isDeleted?: boolean;
}
