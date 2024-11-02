import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Notfoud from "@pages/NotFound/Notfoud";
import { LottieHandler, PageSuspenseFeedback } from "@components/Feedback";
import PageProtected from "@components/Auth/PageProtected";


const Mainlayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const HomePage = lazy(() => import("@pages/Home/HomePage"));
const CartPage = lazy(() => import("@pages/Cart/Cart"));
const PlaceOrder = lazy(() => import("@pages/PlaceOrder/PlaceOrder"));
const Wishlist = lazy(() => import("@pages/Wishlist/Wishlist"));

const routes = createBrowserRouter([
  {
    path: "/order_food_app",
    errorElement: <Notfoud />,
    element: (
      <Suspense
        fallback={
          <div className="d-flex align-items-center justify-content-center h-100">
            <LottieHandler type="fisrtLoading" />
          </div>
        }>
        <Mainlayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFeedback>
            <HomePage />
          </PageSuspenseFeedback>
        ),
      },
      {
        path: "cart",
        element: (
          <PageSuspenseFeedback>
            <CartPage />
          </PageSuspenseFeedback>
        ),
      },
      {
        path: "menu",
        element: (
          <PageSuspenseFeedback>
            <CartPage />
          </PageSuspenseFeedback>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PageProtected>
            <PageSuspenseFeedback>
              <Wishlist />
            </PageSuspenseFeedback>
          </PageProtected>
        ),
      },
      {
        path: "placeOrder",
        element: (
          <PageSuspenseFeedback>
            <PlaceOrder />
          </PageSuspenseFeedback>
        ),
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider  router={routes} />;
};

export default Routes;
