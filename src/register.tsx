import type { ModuleRegisterFunction, Runtime } from "wmfnext-shell";
import { Page1, Page2, Page3 } from "./pages";

export const register: ModuleRegisterFunction = (runtime: Runtime) => {
    runtime.registerRoutes([
        {
            path: "remote1/page-1",
            element: <Page1 />
        },
        {
            path: "remote1/page-2",
            element: <Page2 />
        },
        {
            path: "remote1/page-3",
            element: <Page3 />
        }
    ]);
};
