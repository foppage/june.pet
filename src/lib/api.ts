import {prisma} from "~/lib/db";
import {action, query} from "@solidjs/router";
import * as z from 'zod'

const Submission = z.object({
    author: z.string().max(25).min(2),
    content: z.string().max(80).min(1)
})

export const getMessages = query(()=> {
    "use server"
    return prisma.post.findMany({take: 10, orderBy: { id: 'desc'}});
}, "getMessages")

export const saveMessage = action(async (formData: FormData) => {
    "use server"

    const parsed = Submission.safeParse({
        author: formData.get("author"),
        content: formData.get("content")
    });

    if(!parsed.success){
        return parsed.error;
    }

    await prisma.post.create({
        data: parsed.data
    })

}, "saveMessage");