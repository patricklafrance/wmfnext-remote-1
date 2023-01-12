import type { ModuleRegisterFunction, Runtime } from "wmfnext-shell";

import { lazy } from "react";

const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));
const Page3 = lazy(() => import("./pages/Page3"));

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

    runtime.registerNavigationItems([
        {
            to: "remote1/page-1",
            content: "Remote1/Page 1"
        },
        {
            to: "remote1/page-2",
            content: "Remote1/Page 2"
        },
        {
            to: "remote1/page-3",
            content: "Remote1/Page 3"
        }
    ]);
};
