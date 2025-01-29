import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { BPMNActivity } from "./bpmn-activity.entity";
import { BPMNAction } from "./bpmn-action.entity";
import { BPMNReferalType } from "./bpmn-referal-type.entity";
import { Role, User } from "../core";

@Table({ tableName: "BPMNNodes" })
export class BPMNNode extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => BPMNActivity)
  fromActivityId: number;

  @BelongsTo(() => BPMNActivity)
  fromActivity?: BPMNActivity;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => BPMNActivity)
  toActivityId: number;

  @BelongsTo(() => BPMNActivity)
  toActivity?: BPMNActivity;

  @Column({
    type: DataType.BOOLEAN,
  })
  autoItrate: boolean;
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => BPMNAction)
  conditionFailedActionRunnerId?: number;

  @BelongsTo(() => BPMNAction)
  conditionFailedActionRunner?: BPMNAction;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => BPMNReferalType)
  referalTypeId: number;

  @BelongsTo(() => BPMNReferalType)
  referalType?: BPMNReferalType;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => Role)
  roleId?: number;

  @BelongsTo(() => Role)
  role?: Role;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  @ForeignKey(() => User)
  userId?: bigint;

  @BelongsTo(() => User)
  user?: User;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  injectForm?: string;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  isDeleted?: boolean;
}
