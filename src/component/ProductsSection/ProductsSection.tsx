import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoProductBar from "../NoProductBar/NoProductBar";
import ProductCard from "../ProductCard/ProductCard";
import { Products } from "../../utility/Logic.model";
import { axiosInstance } from "../../utility/Axios";

const ProductsSection = () => {
  const [products, setProducts] = useState<Products[]>();
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState<string | null>(
    searchParams.get("category")
  );

  useEffect(() => {
    setParams(searchParams.get("category"));
  }, [searchParams.get("category")]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await axiosInstance.post(
          "/products/getWithFilters",
          {
            category: params,
            isIgnorePagination: false,
            pageSize: 9,
          }
        );

        const { data } = productsData.data.data;
        setProducts(data);
      } catch (e) {
        throw new Error("There must be some network issue.");
      }
    }
    fetchData();
  }, [params]);

  return (
    <>
      {products?.length == 0 && <NoProductBar />}
      <div className="flex flex-wrap justify-between md:justify-start">
        {products?.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductsSection;
