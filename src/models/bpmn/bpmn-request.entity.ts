import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "../core";
import { BPMNPROCESS } from "./bpmn-process.entity";
import { BPMNOrganization } from "./bpmn-organization.entity";

@Table({ tableName: "BPMNRequests" })
export class BPMNRequest extends Model {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  id: bigint;
  @Column({
    type: DataType.BIGINT,
  })
  @ForeignKey(() => User)
  userId: bigint;

  @BelongsTo(() => User)
  user?: User;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => BPMNPROCESS)
  processId: number;

  @BelongsTo(() => BPMNPROCESS)
  process?: BPMNPROCESS;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => BPMNOrganization)
  organizationId?: number;

  @BelongsTo(() => BPMNOrganization)
  organization?: BPMNOrganization;
}
