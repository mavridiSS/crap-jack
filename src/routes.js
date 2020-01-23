import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/UI/Loading";
// import Layout from "./components/UI/Layout/Layout";

const Rules = lazy(() => import("./components/Rules/"));
const Main = lazy(() => import("./components/Main"));
const Game = lazy(() => import("./components/Game/"));

export const Routes = (
  <Suspense fallback={<Loading />}>
    <Switch>
      {/* <Layout> */}
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/rules">
        <Rules />
      </Route>
      <Route exact path="/new">
        <Game />
      </Route>
      {/* </Layout> */}
    </Switch>
  </Suspense>
);
