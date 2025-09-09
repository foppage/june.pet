import {Component} from "solid-js";
import styles from  './Webring.module.scss'

export const Webring: Component = () => {
    return (
        <>
            <hr class={styles.hr}/>
            <div id="webring">
                <a href="https://azurahori.zone">&lt;&lt; azurahori.zone</a> - <a
                href="https://zudo.space">zudo.space &gt;&gt;</a>
            </div>
        </>

    )
}