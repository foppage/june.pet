import {Component, createSignal} from "solid-js";
import styles from './Badge.module.scss'

interface Props {
    link: string
    src: string,
    fallbackSrc?: string,
    title: string
}

export const Badge: Component<Props> = (props: Props) => {

    const [imageSrc, setImageSrc] = createSignal(props.src)

    const handleError = (error: ErrorEvent)=> {
        if(props.fallbackSrc){
            setImageSrc(props.fallbackSrc)
        }
    }

    return (<a href={props.link} class={styles.badge}>
                <img class={styles.image} src={imageSrc()} onError={handleError}
                    alt={"88x31 badge linking to " + props.link} title={props.title} width="88" height="31"/>
            </a>)
}