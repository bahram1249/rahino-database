import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { BPMNRequest } from "./bpmn-request.entity";
import { BPMNNode } from "./bpmn-node.entity";
import { BPMNNodeCommand } from "./bpmn-node-command.entity";
import { BPMNActivity } from "./bpmn-activity.entity";
import { Role, User } from "../core";
import { BPMNOrganization } from "./bpmn-organization.entity";

@Table({ tableName: "BPMNRequestHistories" })
export class BPMNRequestHistory extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
  })
  @ForeignKey(() => BPMNRequest)
  requestId: bigint;

  @BelongsTo(() => BPMNRequest)
  request: BPMNRequest;

  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  id: bigint;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => BPMNNode)
  nodeId: number;

  @BelongsTo(() => BPMNNode)
  node: BPMNNode;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => BPMNNodeCommand)
  nodeCommandId: number;

  @BelongsTo(() => BPMNNodeCommand)
  nodeCommand: BPMNNodeCommand;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => BPMNActivity)
  fromActivityId: number;

  @BelongsTo(() => BPMNActivity)
  fromActivity: BPMNActivity;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => BPMNActivity)
  toActivityId: number;

  @BelongsTo(() => BPMNActivity)
  toActivity: BPMNActivity;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  @ForeignKey(() => User)
  fromUserId?: bigint;

  @BelongsTo(() => User)
  fromUser?: User;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => BPMNOrganization)
  fromOrganizationId?: number;

  @BelongsTo(() => BPMNOrganization)
  fromOrganization?: BPMNOrganization;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => Role)
  fromRoleId?: number;

  @BelongsTo(() => Role)
  fromRole?: Role;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  @ForeignKey(() => User)
  toUserId?: bigint;

  @BelongsTo(() => User)
  toUser?: User;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => Role)
  toRoleId?: number;

  @BelongsTo(() => Role)
  toRole?: Role;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => BPMNOrganization)
  toOrganizationId?: number;

  @BelongsTo(() => BPMNOrganization)
  toOrganization?: BPMNOrganization;
}
