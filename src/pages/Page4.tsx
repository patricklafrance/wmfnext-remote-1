import { useLogger } from "wmfnext-shell";

export default function Page4() {
    const logger = useLogger();

    logger.debug("Rendering \"page4\" from module \"remote1\"");

    return (
        <main>
            <h1>Page 4</h1>
            <p>From remote-1</p>
        </main>
    );
}
