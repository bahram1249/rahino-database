import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { BPMNRequest } from "./bpmn-request.entity";
import { BPMNActivity } from "./bpmn-activity.entity";
import { Role, User } from "../core";
import { BPMNOrganization } from "./bpmn-organization.entity";

@Table({ tableName: "BPMNRequestStates" })
export class BPMNRequestState extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
  })
  @ForeignKey(() => BPMNRequest)
  requestId: bigint;

  @BelongsTo(() => BPMNRequest)
  request?: BPMNRequest;

  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  id: bigint;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => BPMNActivity)
  activityId: number;

  @BelongsTo(() => BPMNActivity)
  activity?: BPMNActivity;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  @ForeignKey(() => User)
  userId?: bigint;

  @BelongsTo(() => User)
  user?: User;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => Role)
  roleId?: number;

  @BelongsTo(() => Role)
  role?: Role;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => BPMNOrganization)
  organizationId?: number;

  @BelongsTo(() => BPMNOrganization)
  organization?: BPMNOrganization;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  returnRequestStateId?: bigint;
}
