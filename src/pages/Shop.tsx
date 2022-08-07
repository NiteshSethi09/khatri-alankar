import { lazy, Suspense } from "react";
import Loader from "../component/Loader/Loader";
const ProductsSection = lazy(
  () => import("../component/ProductsSection/ProductsSection")
);
const CategoryList = lazy(
  () => import("../component/Category/CategoryList/CategoryList")
);

const Shop: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <section className="flex justify-center">
          <div className="my-20 w-[80%] md:flex">
            <div className="min-w-[250px]">
              <CategoryList />
            </div>
            <div className="mt-8 w-full md:mt-0 md:pl-4">
              <ProductsSection />
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Shop;
