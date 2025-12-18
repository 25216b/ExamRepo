import { boolean, pgTable, text, uuid,integer } from 'drizzle-orm/pg-core'

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

export const bookingTable = pgTable('bookings', {
  id: uuid().defaultRandom().primaryKey(),
  nameB: text().notNull(),
  nbPerson: text().notNull(),
  phoneNumber:text().notNull(),
  dateBooking: text().notNull()
})