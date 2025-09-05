import {Component} from "solid-js";
import {Introduction} from "../../components/Introduction/Introduction";
import {Links} from "../../components/Links/Links";
import {Webring} from "../../components/Webring/Webring";

export const Index: Component = () => (
    <>
        <Introduction></Introduction>

        <Links></Links>

        <Webring></Webring>
    </>
)