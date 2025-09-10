import {type Post} from "shared/src/generated/prisma/client"
import {deletePost, setPostVisibility} from "~/lib/api";
import styles from './PostRow.module.scss'

export const PostRow = (props: {post: Post}) => {

    return (
        <tr class={
            !props.post.handled ? styles.blue :
                props.post.visible ? styles.green : styles.red
        }>
            <td>
                <form action={setPostVisibility.with(props.post.id, !props.post.visible)} method={"post"}>
                    <button type={"submit"} class={styles.button}>{props.post.visible ? "Hide" : "Show"}</button>
                </form>
            </td>
            <td>
                <form action={deletePost.with(props.post.id)} method={"post"}>
                    <button type={"submit"} class={`${styles.button} ${styles.red}`}>Delete</button>
                </form>
            </td>
            <td>{props.post.id}</td>
            <td>{props.post.createdAt.toUTCString()}</td>
            <td>{props.post.visible ? "Yes" : "No"}</td>
            <td>{props.post.author}</td>
            <td>{props.post.content}</td>
        </tr>
    )
}