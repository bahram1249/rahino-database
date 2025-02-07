import {
  EAVAttribute,
  EAVAttributeType,
  EAVAttributeValue,
  EAVBlog,
  EAVBlogPublish,
  EAVEntity,
  EAVEntityAttribute,
  EAVEntityAttributeValue,
  EAVEntityModel,
  EAVEntityPhoto,
  EAVEntityType,
  EAVEntityVideo,
} from "../models/eav"; // Import everything from the barrel file

export const eavEntities = [
  EAVAttribute,
  EAVAttributeType,
  EAVAttributeValue,
  EAVEntity,
  EAVEntityAttribute,
  EAVEntityAttributeValue,
  EAVEntityModel,
  EAVEntityPhoto,
  EAVEntityType,
  EAVEntityVideo,
  EAVBlogPublish,
  EAVBlog,
];
