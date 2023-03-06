import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const RootCmp = () => {
    return (
        <Link to="/test">to test path</Link>
    )
}

export const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootCmp />} />
                <Route path="/test" element={<div>another path</div>} />
            </Routes>
        </Router>
    );
};