import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Login } from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route element={<Login />} path="login" />
            </Route>
        </>
    )
)

export default routes;