/* @refresh reload */
import { Default } from "~/layouts/Default";
import { Index } from "~/pages/Index"
import { Router, Route } from "@solidjs/router"

export default function App() {
    return (
        <Router root={Default}>
            <Route path="/" component={Index}></Route>
        </Router>
    )
}
