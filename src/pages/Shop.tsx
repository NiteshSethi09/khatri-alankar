import { lazy, Suspense, useEffect, useState } from "react";
// import CategoryList from "../component/CategoryList/CategoryList";
const CategoryList = lazy(
  () => import("../component/Category/CategoryList/CategoryList")
);
// import ProductCard from "../component/ProductCard/ProductCard";
const ProductCard = lazy(() => import("../component/ProductCard/ProductCard"));
import Logic from "../utility/Logic";
import { Products } from "../utility/Logic.model";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Products[]>();

  useEffect(() => {
    Logic.getAllProducts().then((data) => setProducts(data));

    return () => {
      Logic.getAllProducts();
    };
  }, []);

  return (
    <>
      <Suspense fallback={"Loading..."}>
        <section className="flex justify-center">
          <div className="my-20 flex w-[80%]">
            <div className="mr-6 min-w-[250px]">
              <CategoryList />
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-between">
                {products?.map((product) => (
                  <ProductCard {...product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Shop;
