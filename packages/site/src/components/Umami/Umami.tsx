import {Component} from "solid-js";
import styles from './Umami.module.scss';

export const Umami: Component = () => {
    return <div class={styles.small}>
        As of 09/01/2026, this site uses a self-hosted <a href={"https://umami.is/"}>umami</a> instance for analytics. <a href={"https://u.izzy.beer/share/RolrHG5mGFBHDSTl"}>Click to view the data!</a>
    </div>
}