import {saveMessage} from "shared/src/lib/api";
import styles from './GuestbookForm.module.scss'
import {useSubmission} from "@solidjs/router";

export const GuestbookForm = () => {

    const submission = useSubmission(saveMessage);

    return (
    <form action={saveMessage} method={"post"} id={"submissionform"}>
        <div class={styles.inputs}>
            <input type={"text"} name={"author"} placeholder={"Name"} maxlength={25}></input>
            <textarea name={"content"} placeholder={"Message"} maxlength={80} rows={3}></textarea>

            {!submission.result ?
                (submission.pending ?
                    <button disabled>Sending...</button> :
                    <button type={"submit"} >Send</button>
                )
                : (
                <div class={styles.success}>
                    Message sent! It will be displayed here once I review it.
                </div>
            )}


            {submission.error && (
                <div class={styles.error}>
                    Something went wrong!
                </div>
            )}

        </div>

    </form>
    )
}