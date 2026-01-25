import {Component, For} from "solid-js";
import styles from './Badges.module.scss';

type Badge = {
    link: string,
    src: string,
    title?: string
}

const badges: Badge[] = [
    { // me
        link: "https://june.pet/",
        src: "https://files.june.pet/88x31.png",
        title: "add me to your website if we're chill"
    },
    { // aspen
        link: "https://aspen.me.uk",
        src: "https://aspen.me.uk/88x31.gif",
        title: "aspen.me.uk"
    },
    { // annie
        link: "https://versary.town/",
        src: "/badges/versarytown.png",
        title: "versary.town",
    },
    { // chloe
        link: "https://sapphic.moe/",
        src: "https://sapphic.moe/buttons/sapphic.png",
        title: "sapphic.moe"
    },
    { // wam
        link: "https://wamwoowam.co.uk/",
        src: "https://wamwoowam.co.uk/88x31.png",
        title: "Wam's site",
    },
    { // aspyn
        link: "https://aspyn.gay/",
        src: "https://aspyn.gay/88x31.gif",
        title: "aspyn.gay"
    },
    { // maia
        link: "https://maia.crimew.gay/",
        src: "https://maia.crimew.gay/badges/maia.crimew.gay.png",
        title: "maia.crimew.gay"
    },
    {
        link: "https://faejr.gay/",
        src: "/badges/faejr.gif",
        title: "faejr.gay"
    }
]

export const Badges: Component = () => {
    return (<div class={styles.badges}>

    <For each={badges}>
        {badge =>
            <a href={badge.link} class={styles.badge}>
                <img class={styles.image} src={badge.src} width="88" height="31" title={badge.title} alt={"88x31 badge linking to " + badge.link} />
            </a>
        }
    </For>

    </div>)
}

