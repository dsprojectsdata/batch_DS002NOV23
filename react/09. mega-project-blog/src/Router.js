import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Login } from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/profile/Profile";
import AuthLayout from "./components/AuthLayout";
import AddBlog from "./pages/AddBlog/AddBlog";
import Signup from "./pages/Singup/Signup";
import Categories from "./pages/Categories/Categories";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route element={<AuthLayout authentication={false} />}>
                    <Route element={<Login />} path="login" />
                    <Route element={<Signup /> } path="signup" />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route element={<Profile />} path="profile" />
                    <Route element={<Categories />} path="user/categories" />
                    <Route element={<AddBlog />} path="user/add-blog" />
                    <Route element={<Blogs />} path="blogs" />
                    <Route element={<BlogDetails />} path="blog-details/:slug" />
                </Route>

            </Route>
        </>
    )
)

export default routes;