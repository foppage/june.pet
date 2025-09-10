import {Component} from "solid-js";
import styles from './Index.module.scss'
import {PostList} from "~/components/PostList/PostList";

export const Index: Component = () => {
    return (<>
        <h1 class={styles.pink}>june.pet Guestbook Control</h1>
        <PostList></PostList>
    </>)
}