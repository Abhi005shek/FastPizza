import React, { Children } from "react";
import Header from "./Header";
import CartOverview from "../cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
// import SearchOrder from "../order/SearchOrder";

const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="bg-lime-50 overflow-y-scroll">
        <main className="max-w-full h-full">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
