import {Component} from "solid-js";
import styles from './Links.module.scss';

export const Links: Component = () => {
    return (
        <div id="links" class="text-normal">
            <h2 class="text-blue">links</h2>
            <div class={styles.list}>
                <a href="https://www.twitter.com/foppage">twitter</a>
                <a href="https://www.github.com/june-rl">github</a>
                <a href="https://ch.tetr.io/u/june">tetr.io</a>
                <a href="https://zudo.space">wife</a>
            </div>

        </div>
    )
}