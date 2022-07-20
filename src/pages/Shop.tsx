import { lazy, Suspense } from "react";
import ProductsSection from "../component/ProductsSection/ProductsSection";
const CategoryList = lazy(
  () => import("../component/Category/CategoryList/CategoryList")
);

const Shop: React.FC = () => {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <section className="flex justify-center">
          <div className="my-20 w-[80%] md:flex">
            <div className="mr-6 min-w-[250px]">
              <CategoryList />
            </div>
            <div className="w-full">
              <ProductsSection />
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Shop;
