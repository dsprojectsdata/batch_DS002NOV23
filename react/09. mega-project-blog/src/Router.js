import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Login } from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/profile/Profile";
import AuthLayout from "./components/AuthLayout";
import AddBlog from "./pages/AddBlog/AddBlog";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route element={<AuthLayout authentication={false} />}>
                    <Route element={<Login />} path="login" />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route element={<Profile />} path="profile" />
                    <Route element={<AddBlog />} path="user/add-blog" />
                </Route>

            </Route>
        </>
    )
)

export default routes;