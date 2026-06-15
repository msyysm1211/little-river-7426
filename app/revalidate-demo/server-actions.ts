'use server';

import { updateTag, revalidatePath } from 'next/cache';

export async function revalidateByTag(tag: string) {
  updateTag(tag);
}

export async function revalidateByPath(path: string) {
  revalidatePath(path);
}
