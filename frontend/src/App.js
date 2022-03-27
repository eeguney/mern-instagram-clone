import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as ROUTE from "./constants/Routes";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader";
import { loadUser } from "./store/actions/user";
import AuthenticatedRoute from "./helpers/AuthenticatedRoute";
import Discover from "./pages/Discover";
import { SignIn } from "./pages/SignIn";

function App() {
  
  // lazy imports
  const Mainpage = lazy(() => import("./pages/Mainpage"));
  const SignUp = lazy(() => import("./pages/SignUp"));
  const AddPost = lazy(() => import("./pages/AddPost"));
  const AddStory = lazy(() => import("./pages/AddStory"));
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);

  const login = localStorage.getItem("firstLogin");

  return (
    
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTE.SIGNUP} element={login ? <Navigate to="/" /> : <SignUp />} />
          <Route path={ROUTE.SIGNIN} element={login ? <Navigate to="/" /> : <SignIn />} />
          <Route
            exact
            path={ROUTE.MAINPAGE}
            element={
              <AuthenticatedRoute user={login}>
                <Mainpage />
              </AuthenticatedRoute>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <AuthenticatedRoute user={login}>
                <Mainpage />
              </AuthenticatedRoute>
            }
          />
          <Route
            exact
            path={ROUTE.DISCOVER}
            element={
              <AuthenticatedRoute user={login}>
                <Discover />
              </AuthenticatedRoute>
            }
          />
          <Route
            exact
            path={ROUTE.ADDPOST}
            element={
              <AuthenticatedRoute user={login}>
                <AddPost />
              </AuthenticatedRoute>
            }
          />
          <Route
            exact
            path={ROUTE.ADDSTORY}
            element={
              <AuthenticatedRoute user={login}>
                <AddStory />
              </AuthenticatedRoute>
            }
          />
        </Routes>
      </Suspense>
  );
}

export default App;
