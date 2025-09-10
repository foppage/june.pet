import {ParentComponent} from "solid-js";
import './default.scss';

export const Default: ParentComponent = (props) => {
    return (
        <>
            <div id="header">
                <p><a href="/" class="text-pink">june.pet</a></p>
            </div>

            <hr/>

            <div id="content" class="text-normal content">
                {props.children}
            </div>

        </>
    )
}