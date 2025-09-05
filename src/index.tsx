/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";
import {Index} from "./pages/Index";
import {Default} from "./layouts/Default";

const root = document.getElementById('root');

const router = () => (
    <Router root={Default}>
        <Route path="/" component={Index} />
    </Router>
)

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(router, root!);
