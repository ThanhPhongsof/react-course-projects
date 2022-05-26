import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
const UserUpdate = React.lazy(() => import("module/user/UserUpdate"));
const UserProfile = React.lazy(() => import("module/user/UserProfile"));
const UserManager = React.lazy(() => import("module/user/UserManage"));
const UserAddNew = React.lazy(() => import("module/user/UserAddNew"));
const SignUpPage = React.lazy(() => import("./page/SignUpPage"));
const SignInPage = React.lazy(() => import("page/SignInPage"));
const PostUpdate = React.lazy(() => import("module/post/PostUpdate"));
const PostManage = React.lazy(() => import("module/post/PostManage"));
const PostDetailsPage = React.lazy(() => import("page/PostDetailsPage"));
const PostAddNew = React.lazy(() => import("module/post/PostAddNew"));
const PageNotFound = React.lazy(() => import("page/PageNotFound"));
const HomePage = React.lazy(() => import("page/HomePage"));
const DashboardPage = React.lazy(() => import("page/DashboardPage"));
const DashboardLayout = React.lazy(() =>
  import("module/dashboard/DashboardLayout")
);
const CategoryUpdate = React.lazy(() =>
  import("module/category/CategoryUpdate")
);
const CategoryManage = React.lazy(() =>
  import("module/category/CategoryManage")
);
const CategoryAddNew = React.lazy(() =>
  import("module/category/CategoryAddNew")
);

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            <Route
              path="/:slug"
              element={<PostDetailsPage></PostDetailsPage>}
            ></Route>
            <Route element={<DashboardLayout></DashboardLayout>}>
              <Route
                path="/dashboard"
                element={<DashboardPage></DashboardPage>}
              ></Route>
              <Route
                path="/manage/posts"
                element={<PostManage></PostManage>}
              ></Route>
              <Route
                path="/manage/add-post"
                element={<PostAddNew></PostAddNew>}
              ></Route>
              <Route
                path="/manage/update-post"
                element={<PostUpdate></PostUpdate>}
              ></Route>
              <Route
                path="/manage/categories"
                element={<CategoryManage></CategoryManage>}
              ></Route>
              <Route
                path="/manage/add-category"
                element={<CategoryAddNew></CategoryAddNew>}
              ></Route>
              <Route
                path="/manage/update-category"
                element={<CategoryUpdate></CategoryUpdate>}
              ></Route>
              <Route
                path="/manage/users"
                element={<UserManager></UserManager>}
              ></Route>
              <Route
                path="/manage/add-user"
                element={<UserAddNew></UserAddNew>}
              ></Route>
              <Route
                path="/manage/update-user"
                element={<UserUpdate></UserUpdate>}
              ></Route>
              <Route
                path="/profile"
                element={<UserProfile></UserProfile>}
              ></Route>
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
};

export default App;
