import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import WWatch from "./pages/WWatch";
import Movie from "./pages/Movie";
import AllMovies from "./pages/AllMovies";
import NotFound from "./pages/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <WWatch />,
    errorElement: <NotFound />
  },
  {
    path: "/filme/:id/:title",
    element: <Movie />
  },
  {
    path: "/todos-os-filmes/:year/:genreId",
    element: <AllMovies />
  }
], { basename: "/WWatch" });

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
