// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>june.pet</title>
          <link rel="icon" href="/favicon.jpg" />
          {assets}
          <script defer src="https://u.izzy.beer/script.js" data-website-id="f89eefe5-5561-4a64-b1b0-9fd20a7142a7"></script>
          <script defer src="https://u.izzy.beer/recorder.js" data-website-id="f89eefe5-5561-4a64-b1b0-9fd20a7142a7" data-sample-rate="0.15" data-mask-level="moderate" data-max-duration="300000"></script>
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
