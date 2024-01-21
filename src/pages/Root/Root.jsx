import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "../../components/shared/Footer";
import { Header } from "../../components/shared/Header";
import { Loading } from "../../components/shared/Loading";
import "./styles.css";

function Root() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />

      <ScrollRestoration />
    </>
  );
}

export default Root;
