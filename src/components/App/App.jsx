import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";

import css from "./App.module.css";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const PostsPage = lazy(() => import("../../pages/PostsPage/PostsPage"));
const ContextExamplePage = lazy(() =>
  import("../../pages/ContextExamplePage/ContextExamplePage")
);
const PostDetailsPage = lazy(() =>
  import("../../pages/PostDetailsPage/PostDetailsPage")
);
const PostComments = lazy(() =>
  import("../../components/PostComments/PostComments")
);
const PostReviews = lazy(() =>
  import("../../components/PostReviews/PostReviews")
);

function App() {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/posts"
          >
            Posts
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/context-example"
          >
            Context Example
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/context-example" element={<ContextExamplePage />} />
            <Route path="/posts/:postId" element={<PostDetailsPage />}>
              <Route path="comments" element={<PostComments />} />
              <Route path="reviews" element={<PostReviews />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <footer>Footer content</footer>
    </div>
  );
}

export default App;
