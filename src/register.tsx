import type { ModuleRegisterFunction, Runtime } from "wmfnext-shell";

import { ErrorBoundary } from "./ErrorBoundary";
import { lazy } from "react";

const FullLayout = lazy(() => import("./layouts/FullPageLayout"));

const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));
const Page3 = lazy(() => import("./pages/Page3"));
const Page4 = lazy(() => import("./pages/Page4"));
const Page5 = lazy(() => import("./pages/Page5"));
const Page6 = lazy(() => import("./pages/Page6"));
const Page7 = lazy(() => import("./pages/Page7"));
const Page8 = lazy(() => import("./pages/Page8"));

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
            errorElement: <ErrorBoundary />,
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
            element: <Page4 />,
            errorElement: <ErrorBoundary />
        },
        {
            path: "remote1/page-5",
            element: <Page5 />
        },
        {
            path: "remote1/page-6",
            element: <Page6 />
        },
        {
            path: "remote1/page-7",
            element: <Page7 />
        },
        {
            path: "remote1/page-8",
            element: <Page8 />,
            loader: async function loader() {
                return fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5", {
                    method: "GET",
                    headers: {
                        "Accept": "application/json"
                    }
                });
            }
        }
    ]);

    runtime.registerNavigationItems([
        {
            to: "/",
            content: "Remote1/Page 1 - Home"
        },
        {
            to: "remote1/page-2",
            content: "Remote1/Page 2 - Overrided layout"
        },
        {
            to: "remote1/page-3",
            content: "Remote1/Page 3- Failing page"
        },
        {
            to: "remote1/page-4",
            content: "Remote1/Page 4 - Hoisted route"
        },
        {
            to: "remote1/page-5",
            content: "Remote1/Page 5 - Using shared session"
        },
        {
            to: "remote1/page-6",
            content: "Remote1/Page 6 - Using the event bus"
        },
        {
            to: "remote1/page-7",
            content: "Remote1/Page 7 - Shared custom service"
        },
        {
            to: "remote1/page-8",
            content: "Remote1/Page 8 - Fetch data"
        }
    ]);
};
