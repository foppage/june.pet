import {saveMessage} from "~/lib/api";
import styles from './GuestbookForm.module.scss'
import {useSubmission} from "@solidjs/router";

export const GuestbookForm = () => {

    const submission = useSubmission(saveMessage);

    return (
    <form action={saveMessage} method={"post"} id={"submissionform"}>
        <div class={styles.inputs}>
            <input type={"text"} name={"author"} placeholder={"Name"} maxlength={25}></input>
            <textarea name={"content"} placeholder={"Message"} maxlength={80} rows={3}></textarea>

            {submission.pending ?
                <button disabled>Sending...</button> :
                <button type={"submit"} >Send</button>
            }

        </div>

    </form>
    )
}