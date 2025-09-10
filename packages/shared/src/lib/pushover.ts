export const notify = async (author: string, content: string) => {
    const pushoverToken = process.env.PUSHOVER_TOKEN;
    const pushoverUser = process.env.PUSHOVER_USER;
    if(!pushoverToken) throw new Error("Environment variable PUSHOVER_TOKEN not set")
    if(!pushoverUser) throw new Error("Environment variable PUSHOVER_USER not set")

    const params = new URLSearchParams()
    params.set("token", pushoverToken);
    params.set("user", pushoverUser);
    params.set("title", `New message from ${author}`)
    params.set("message", content)

    const pushoverURL = `https://api.pushover.net/1/messages.json`
    console.log(pushoverURL)

    await fetch(pushoverURL, {
        method: "post",
        body: params
    })
}