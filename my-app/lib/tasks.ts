'use server'

import { db } from '@/db'
import { tasksTable ,postTable} from '@/db/schema'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getTasks() {
  return await db.select().from(tasksTable)
}

export async function getPost() {
  return await db.select().from(postTable)
}

export async function addTask(form: FormData) {
  await db.insert(tasksTable).values({
    title: String(form.get('title')),
    done: false,
  })
  revalidatePath('/') 

  redirect((await headers()).get('referer') ?? '/')
}

export async function editTask(form: FormData) {
  await db
    .update(tasksTable)
    .set({
      title: String(form.get('title')),
      done: form.get('done') === 'on',
    })
    .where(eq(tasksTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeTask(id: string) {
  await db.delete(tasksTable).where(eq(tasksTable.id, id))
    revalidatePath('/') 
  redirect((await headers()).get('referer') ?? '/')
}



export async function addPost(form: FormData) {
  await db.insert(postTable).values({
    postTitle: String(form.get('title')),
    postContent: String(form.get('content')),
  })
  revalidatePath('/') 

  redirect((await headers()).get('referer') ?? '/')
}