import { useRuntime } from "wmfnext-shell";

export function Page1() {
    const runtime = useRuntime();

    runtime.logDebug("Rendering \"page1\" from module \"remote1\"");

    return (
        <main>
            <h1>Page 1</h1>
            <p>From remote1</p>
        </main>
    );
}
