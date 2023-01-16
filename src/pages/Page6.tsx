import { useLogger } from "wmfnext-shell";
import { useTrackingService } from "wmfnext-shared";

export default function Page6() {
    const logger = useLogger();
    const trackingService = useTrackingService();

    logger.debug("Rendering \"page6\" from module \"remote1\"");

    trackingService.track({
        page: "page6",
        module: "remote-1"
    });

    return (
        <main>
            <h1>Page 6</h1>
            <p>From remote-1</p>
        </main>
    );
}
