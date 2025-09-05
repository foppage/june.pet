/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";
import {Index} from "./pages/Index";
import {Default} from "./layouts/Default";

export default function App () {
    return (
        <Router root={Default}>
            <Route path="/" component={Index} />
        </Router>
    )
}