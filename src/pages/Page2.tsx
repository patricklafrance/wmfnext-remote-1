import { useRuntime } from "wmfnext-shell";

export function Page2() {
    const runtime = useRuntime();

    runtime.logDebug("Rendering \"page2\" from module \"remote1\"");

    return (
        <main>
            <h1>Page 2</h1>
            <p>From remote1</p>
        </main>
    );
}
