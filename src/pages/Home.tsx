import { lazy, Suspense } from "react";
import Loader from "../component/Loader/Loader";
const Category = lazy(() => import("../component/Category/Category"));
const Header = lazy(() => import("../component/Header/Header"));

const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Category />
      </Suspense>
    </>
  );
};

export default Home;
