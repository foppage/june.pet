import {Component} from "solid-js";
import {Introduction} from "../../components/Introduction/Introduction";
import {Links} from "../../components/Links/Links";
import {Webring} from "../../components/Webring/Webring";
import {Projects} from "../../components/Projects/Projects";

export const Index: Component = () => (
    <>
        <Introduction></Introduction>

        <Projects></Projects>

        <Links></Links>

        <Webring></Webring>
    </>
)