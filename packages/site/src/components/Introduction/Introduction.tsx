import {Component} from "solid-js";

export const Introduction: Component = () => {
    return (
        <div id="introduction">
            <h2 class="text-blue">hello! i am <span class="text-pink">june</span> -</h2>
            <ul>
                <li>23 years old</li>
                <li>british</li>
                <li>non binary (they/she)</li>
                <li>software developer</li>
                <li>master's student (computer science)</li>
                <li>guitarist</li>
                <li>tetr.io and rocket league enjoyer</li>
                <li>lead and developer @ <a href="https://lightningarena.com">lightning arena</a></li>
            </ul>

        </div>
    )
}