import { Route, Routes } from "react-router";

export default function ApplicationViews() {
    return <Routes>
        <Route index path="/" element={<p>Hello, I am the home page</p>} />
        <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
}