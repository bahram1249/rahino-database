import { Table, Column, Model, DataType } from "sequelize-typescript";
@Table
export class UserType extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;
}
