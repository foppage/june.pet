import {prisma} from "./db";
import {action, query} from "@solidjs/router";
import * as z from 'zod'
import {notify} from "./pushover";

const Submission = z.object({
    author: z.string().max(25).min(2),
    content: z.string().max(80).min(1)
})

export const getMessages = query(()=> {
    "use server"
    return prisma.post.findMany({take: 20, orderBy: { id: 'asc'}, where: {visible: true}});
}, "getPosts")

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

    await notify(parsed.data.author, parsed.data.content)

    return {success: true}

}, "savePost");
