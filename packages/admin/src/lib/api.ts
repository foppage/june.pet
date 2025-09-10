import { query, action } from "@solidjs/router"
import {prisma} from "shared/src/lib/db"

export const getPosts = query(async () => {
    "use server"

    return prisma.post.findMany({orderBy: {id: "desc"}})

}, "post")

export const setPostVisibility = action(async (id: number, visible: boolean) => {
    "use server"

    return prisma.post.update({
        where: {
            id
        },
        data: {
            visible,
            handled: true
        }
    })

})

export const deletePost = action(async (id: number) => {
    "use server"

    return prisma.post.delete({
        where: {
            id
        }
    })

})