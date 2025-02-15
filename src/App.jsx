import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/app/Layout";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";
import MobileFooter from "./components/app/MobileFooter";
import MobileHeader from "./components/app/MobileHeader";
import Loader from "./utils/Loader";

const Home = lazy(() => import("./pages/Home"));
const Expenses = lazy(() => import("./pages/Expenses"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const Approval = lazy(() => import("./pages/Approval"));
const Settings = lazy(() => import("./pages/Settings"));
const Support = lazy(() => import("./pages/Support"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Header />
      <MobileHeader />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="approval" element={<Approval />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default App;


