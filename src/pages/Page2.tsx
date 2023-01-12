import { useLogger } from "wmfnext-shell";

export default function Page2() {
    const logger = useLogger();

    logger.debug("Rendering \"page2\" from module \"remote1\"");

    return (
        <main>
            <h1>Page 2</h1>
            <p>From remote-1</p>
        </main>
    );
}
