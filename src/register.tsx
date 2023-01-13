import type { ModuleRegisterFunction, Runtime } from "wmfnext-shell";

import { lazy } from "react";

const FullLayout = lazy(() => import("./layouts/FullPageLayout"));

const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));
const Page3 = lazy(() => import("./pages/Page3"));
const Page4 = lazy(() => import("./pages/Page4"));

export const register: ModuleRegisterFunction = (runtime: Runtime) => {
    runtime.registerRoutes([
        {
            index: true,
            element: <Page1 />
        },
        {
            hoist: true,
            path: "remote1/page-2",
            element: <FullLayout />,
            children: [
                {
                    element: <Page2 />
                }
            ]
        },
        {
            path: "remote1/page-3",
            element: <Page3 />
        },
        {
            hoist: true,
            path: "remote1/page-4",
            element: <Page4 />
        }
    ]);

    runtime.registerNavigationItems([
        {
            to: "/",
            content: "Remote1/Page 1 - Home"
        },
        {
            to: "remote1/page-2",
            content: "Remote1/Page 2 - Override layout"
        },
        {
            to: "remote1/page-3",
            content: "Remote1/Page 3- Failing page"
        },
        {
            to: "remote1/page-4",
            content: "Remote1/Page 4 - Hoisted route"
        }
    ]);
};
