import { useEffect, useState } from "react";
import Logic from "../../utility/Logic";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { ProductItemProps } from "./Category.model";
import CategoryItem from "./CategoryItem";

const Category: React.FC = () => {
  const [data, setData] = useState<ProductItemProps[]>();
  const [postPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    Logic.getCategories().then((data) => setData(data));

    return () => {
      Logic.getCategories();
    };
  }, []);

  const indexOfLastPost: number = currentPage * postPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postPerPage;
  const posts = data?.slice(indexOfFirstPost, indexOfLastPost);

  if (!data) return <Loader />;

  return (
    <>
      <section className="flex justify-center py-20">
        <div className="w-[80%]">
          <div className="flex flex-wrap justify-between">
            {posts?.map((item: ProductItemProps) => (
              <CategoryItem {...item} key={item.id} />
            ))}
          </div>
          <div className="flex justify-end">
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              postPerPage={postPerPage}
              totalPostsSize={data?.length!}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
