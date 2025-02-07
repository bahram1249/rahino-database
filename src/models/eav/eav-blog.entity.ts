import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { EAVEntityType } from "./eav-entity-type.entity";
import { EAVBlogPublish } from "./eav-blog-publish.entity";
import { User } from "../core";

@Table({ tableName: "EAVBlogs" })
export class EAVBlog extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
  })
  id: bigint;
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  @ForeignKey(() => EAVEntityType)
  entityTypeId?: number;

  @BelongsTo(() => EAVEntityType)
  entityType?: EAVEntityType;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => EAVBlogPublish)
  pubilshId: number;

  @BelongsTo(() => EAVBlogPublish)
  publish?: EAVBlogPublish;

  @Column({
    type: DataType.STRING,
  })
  title: string;
  @Column({
    type: DataType.STRING,
  })
  description: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  metaTitle?: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  metaDescription?: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  metaKeywords?: string;
  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  @ForeignKey(() => User)
  userId?: bigint;

  @BelongsTo(() => User)
  user?: User;
}
