import {Component} from "solid-js";
import {Introduction} from "~/components/Introduction/Introduction";
import {Links} from "~/components/Links/Links";
import {Webring} from "~/components/Webring/Webring";
import {Projects} from "~/components/Projects/Projects";
import {Guestbook} from "~/components/Guestbook/Guestbook";

import styles from "./Index.module.scss"
import {Badges} from "~/components/Badges/Badges";

export const Index: Component = () => (
    <>
        <div class={styles.content}>
            <div>
                <Introduction></Introduction>

                <Projects></Projects>

                <Links></Links>
            </div>

            <Guestbook></Guestbook>
        </div>

        <hr />
        <Webring></Webring>

        <Badges></Badges>
    </>
)