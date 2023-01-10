import { useLogger } from "wmfnext-shell";

export function Page1() {
    const logger = useLogger();

    logger.debug("Rendering \"page1\" from module \"remote1\"");

    return (
        <main>
            <h1>Page 1</h1>
            <p>From remote-1</p>
        </main>
    );
}
