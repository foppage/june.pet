import {Component} from "solid-js";
import styles from  './Webring.module.scss'

export const Webring: Component = () => {
    return (
        <>
            <div id="webring" class={styles.webring}>
                <a href="https://azurahori.zone">&lt;&lt; azurahori.zone</a> - <a
                href="https://isabelle.gg">isabelle.gg &gt;&gt;</a>
            </div>
        </>

    )
}