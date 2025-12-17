'use server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const tickets: { message: string; object: string; }[] = []


export async function getTasks() {
  return tickets;
}

export async function createTask(form: FormData) {
  tickets.push({
    message: String(form.get('message')),
    object: String(form.get('object')),
  })
  redirect((await headers()).get('referer') ?? '/')
}