import { useEventBusDispatcher, useLogger } from "wmfnext-shell";

import { IncrementCountEvent } from "wmfnext-shared";
import { useCallback } from "react";

export default function Page7() {
    const logger = useLogger();
    const dispatch = useEventBusDispatcher();

    logger.debug("Rendering \"page7\" from module \"remote1\"");

    const handleIncrementCount = useCallback(() => {
        dispatch(IncrementCountEvent);
    }, [dispatch]);

    return (
        <main>
            <h1>Page 7</h1>
            <p>From remote-1</p>
            <button type="button" onClick={handleIncrementCount}>
                Increment count
            </button>
        </main>
    );
}
