import RoomType from "@/app/dashboard/create-new/_components/RoomType";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  imageUrl: varchar("image_url").notNull(),
  credits: integer("credits").default(3),
});

export const GeneratedImages = pgTable("GeneratedImages", {
  id: serial("id").primaryKey(),
  roomType: varchar("roomType").notNull(),
  designType: varchar("designType").notNull(),
  originalImage: varchar("originalImage").notNull(),
  aiImage: varchar("aiImage").notNull(),
  userEmail: varchar("userEmail").notNull(),
});