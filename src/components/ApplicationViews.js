import { Route, Routes } from "react-router";
import Home from "../pages/Home";

export default function ApplicationViews() {
    return <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
}