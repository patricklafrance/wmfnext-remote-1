import { useLocation, useRouteError } from "react-router-dom";

import { useLogger } from "wmfnext-shell";

export function ErrorBoundary() {
    const error = useRouteError();
    const location = useLocation();
    const logger = useLogger();

    logger.error(`[shell] An unmanaged error occured while rendering the route with path ${location.pathname}`, error);

    return (
        <p className="error-message">
            An unmanaged error occured!
        </p>
    );
}
