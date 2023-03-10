import { useLogger, useSession } from "wmfnext-shell";

import type { Session } from "wmfnext-shared";

export default function Page5() {
    const logger = useLogger();
    const session = useSession() as Session;

    logger.debug("Rendering \"page5\" from module \"remote1\"");

    return (
        <main>
            <h1>Page 5</h1>
            <p>From remote-1</p>
            <p>Authenticated user: {session.user.name}</p>
        </main>
    );
}
