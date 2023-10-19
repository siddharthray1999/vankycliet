import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Casino from "./Pages/Casino/Casino";
import Login from "./Components/Login/Login";
import CasinoAddPage from "./Pages/CasinoAddPage/CasinoAddPage";
import AllMarketBook from "./Pages/AllMarketBook/AllMarketBook";
import Profile from "./Pages/Profile/Profile";
import Password from "./Pages/Password/Password";
import MyCommission from "./Pages/MyCommission/MyCommission";
import IplWinner from "./Pages/IPLWinner/IplWinner";
import AccountStatement from "./Pages/AccountStatement/AccountStatement";
import ProfitLoss from "./Pages/Profit&Loss/ProfitLoss";
import TotalLedger from "./Pages/TotalLegder/TotalLedger";
import BetHistory from "./Pages/BetHistory/BetHistory";
import LiveBetHistory from "./Pages/LiveBetHistory/LiveBetHistory";
import AddPageLive from "./Pages/AddPageLive/AddPageLive";
import ViewMatch from "./Pages/ViewMatch/ViewMatch";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoutes from "./utils/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Allcasino",
    element: <Casino />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/CasinoAddPage",
    element: <CasinoAddPage />,
  },
  {
    path: "/runningmarketanalysis",
    element: <AllMarketBook />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Userchangepassword",
    element: <Password />,
  },
  {
    path: "/MyCommission",
    element: <MyCommission />,
  },
  {
    path: "/CupWinner",
    element: <IplWinner />,
  },
  {
    path: "/AccountStatement",
    element: <AccountStatement />,
  },
  {
    path: "/ProfitLoss",
    element: <ProfitLoss />,
  },

  {
    path: "/TotalLedger",
    element: <TotalLedger />,
  },
  {
    path: "/BetHistory",
    element: <BetHistory />,
  },
  {
    path: "/LiveBetHistory",
    element: <LiveBetHistory />,
  },
  {
    path: "/addapagelive",
    element: <AddPageLive />,
  },
  {
    path: "/ViewMatch",
    element: <ViewMatch />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
