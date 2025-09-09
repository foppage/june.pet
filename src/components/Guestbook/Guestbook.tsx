import {Component, For, Show, Suspense} from "solid-js";
import {getMessages, saveMessage} from "~/lib/api";
import {createAsync, createAsyncStore, revalidate} from "@solidjs/router";
import styles from './Guestbook.module.scss'
import {GuestbookForm} from "~/components/GuestbookForm/GuestbookForm";

export const Guestbook: Component = () => {

    const messages = createAsync(() => getMessages())

    return (
        <div class={styles.guestbook}>
            <div class={styles.container}>
                <h3 class={"text-blue"}>Guestbook</h3>
                <div class={styles.messages}>
                    <Suspense>
                        {messages()?.toSorted((a, b) => a.createdAt.valueOf() - b.createdAt.valueOf()).map(message => (
                            <div><span class={styles.author}>{message.author}</span>: {message.content}</div>
                        ))}
                    </Suspense>
                </div>

                <GuestbookForm></GuestbookForm>

            </div>
        </div>
    )
}