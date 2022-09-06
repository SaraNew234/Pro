import React, { useEffect, useRef, useState } from "react";
import { StyledLayout } from "./styles";
import NProgress from "nprogress";
import { Router } from "next/router";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
export const Layout = ({children }) => {
 
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  );
};
