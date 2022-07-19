import { lazy, Suspense } from "react";
// import Category from "../component/Category/Category";
const Category = lazy(() => import("../component/Category/Category"));
// import Header from "../component/Header/Header";
const Header = lazy(() => import("../component/Header/Header"));

const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <Header />
        <Category />
      </Suspense>
    </>
  );
};

export default Home;
