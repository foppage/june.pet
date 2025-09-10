import {Component, For, Suspense} from "solid-js";
import {createAsync} from "@solidjs/router"
import {getPosts} from "~/lib/api";
import {PostRow} from "~/components/PostRow/PostRow";
import styles from './PostList.module.scss'

export const PostList: Component = () => {

    const posts = createAsync(() => getPosts())

    return (
        <>
            <table class={styles.table}>

                <thead class={styles.header}>
                <tr>
                    <th>Toggle</th>
                    <th>Delete</th>
                    <th>ID</th>
                    <th>Created at</th>
                    <th>Visible</th>
                    <th>Author</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody class={styles.body}>
                <Suspense>
                    <For each={posts()}>
                        {post =>
                            <PostRow post={post}></PostRow>
                        }
                    </For>
                </Suspense>

                </tbody>
            </table>
        </>


    )
}