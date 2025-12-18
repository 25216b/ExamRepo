import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const tasksTable = pgTable('tasks', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  done: boolean().default(false).notNull(),
})

export const postTable = pgTable('post', {
  id: uuid().defaultRandom().primaryKey(),
  postTitle: text().notNull(),
  postContent: text().notNull()
})