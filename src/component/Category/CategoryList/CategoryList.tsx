import { useEffect, useState } from "react";
import Logic from "../../../utility/Logic";
import { ProductItemProps } from "../Category.model";

const CategoryList = () => {
  const [categories, setCategories] = useState<ProductItemProps[]>();

  useEffect(() => {
    Logic.getCategories().then((data) => setCategories(data));

    return () => {
      Logic.getCategories();
    };
  }, []);

  return (
    <>
      <div className="">
        <h3 className="mb-4 border-b-2 pb-4 text-2xl font-medium">
          Categories
        </h3>
        <ul>
          {categories?.map((cate) => (
            <li key={cate.id} className="text-and-hover mb-2 text-sm">
              {cate.category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
