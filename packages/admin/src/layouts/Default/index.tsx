import {ParentComponent} from "solid-js";
import './default.scss';

export const Default: ParentComponent = (props) => (
    <div>
        {props.children}
    </div>
)