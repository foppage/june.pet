import {JSX} from "solid-js";

type ProjectType = {
    name: string,
    description: string,
    timeframe?: string | JSX.Element,
    link?: string,
    show: boolean
}

export const data: ProjectType[] = [
    {
        "name": "lightning arena",
        "description": "new, fast paced, fully automated chess arena-style tetr.io event",
        "timeframe": "20/04/2024 (ongoing)",
        "link": "https://lightningarena.com",
        "show": true
    },
    {
        "name":"multistream (by zudo)",
        "description":"multistream client for tetr.io",
        "link":"https://github.com/ZudoB/MultiStream",
        "show": false
    },
    {
        "name":"to be named",
        "description":"tetr.io replay archive and statistics website",
        "timeframe":"in early development - nowhere near even partially functional lmao",
        "link": "",
        "show": false
    },
    {
        "name":"the pitch",
        "description":"a competitive rocket league team matchmaking discord server. heavily inspired by \"the field\" by psyonix and rival esports",
        "timeframe":"never",
        "link":"https://pitch.tris.zone/",
        "show": false
    },
    {
        "name":"macro",
        "description":"quickly record and save rocket league game statistics",
        "timeframe":"26/01/2024",
        "link":"https://macro.june.pet",
        "show": true
    },
    {
        "name":"geonotes",
        "description":"geographical note taking web app",
        "timeframe":"06/11/2023",
        "link":"https://geonotes.june.pet",
        "show": false
    },
    {
        "name":"private 6 mans",
        "description":"a verified discord bot for custom matchmaking and lobby creation, designed for rocket league communities. used in over 2000 servers",
        "timeframe":<>26/12/2018 - 26/08/2022 (now maintained by <a href='https://github.com/coolcalcacol'>coolcal</a> and <a href='https://github.com/thebeardedb'>thebeardedb</a>)</>,
        "show": true
    }
]