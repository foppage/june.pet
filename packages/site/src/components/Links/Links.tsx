import {Component} from "solid-js";
import styles from './Links.module.scss';

export const Links: Component = () => {
    return (
        <div class={styles.links + " text-normal"}>
            <h2 class="text-blue">links</h2>
            <p class={styles.list}>
                <a href="https://www.twitter.com/foppage">twitter</a>
                <a href="https://git.june.pet">git</a>
                <a href="https://bsky.app/profile/june.pet">bluesky</a>
                <a href="https://www.last.fm/user/foppage">last.fm</a>
                <a href="https://isabelle.gg">wife</a>
            </p>
            <p>
                email/xmpp: me@june.pet
            </p>
            <p>hire me: <a href={"https://pleaseletme.work"}>pleaseletme.work</a></p>
        </div>
    )
}