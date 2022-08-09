import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Logic from "../../../utility/Logic";
import { ProductItemProps } from "../Category.model";

const CategoryList = () => {
  const [categories, setCategories] = useState<ProductItemProps[]>();
  const [, setSearchParams] = useSearchParams();

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
          {categories?.map((category) => (
            <li
              key={category.id}
              className="text-and-hover mb-2 cursor-pointer select-none text-sm"
              onClick={() =>
                setSearchParams({ category: `${category.category}` })
              }
            >
              {category.category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
