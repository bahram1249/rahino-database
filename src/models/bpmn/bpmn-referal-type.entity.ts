import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "BPMNReferalTypes" })
export class BPMNReferalType extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
