import {Component, Suspense} from "solid-js";
import {getMessages} from "shared/src/lib/api";
import {createAsync} from "@solidjs/router";
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
                        {messages()?.toSorted((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf()).map(message => (
                            <div><span class={styles.author}>{message.author}</span>: {message.content}</div>
                        ))}
                    </Suspense>
                </div>

                <GuestbookForm></GuestbookForm>

            </div>
        </div>
    )
}