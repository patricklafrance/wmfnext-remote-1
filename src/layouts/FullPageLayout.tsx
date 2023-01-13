import { Link, Outlet } from "react-router-dom";

export default function FullPageLayout() {
    return (
        <>
            <h1>Custom full page layout from remote-1</h1>
            <div>
                <Link to="/">Go back</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}
