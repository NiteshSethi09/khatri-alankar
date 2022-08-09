import { useEffect, useState } from "react";
import Logic from "../../utility/Logic";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import CategoryItem from "./CategoryItem";
import { ProductItemProps } from "./Category.model";

const Category: React.FC = () => {
  const [data, setData] = useState<ProductItemProps[]>();
  const [postPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    Logic.getCategories().then((data) => setData(data));

    return () => {
      Logic.getCategories();
    };
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [input]);

  const indexOfLastPost: number = currentPage * postPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postPerPage;
  const filteredPosts = data?.filter((post) =>
    post.category.toLowerCase().includes(input.toLowerCase())
  );
  const posts = filteredPosts?.slice(indexOfFirstPost, indexOfLastPost);
  if (!data) return <Loader />;

  return (
    <>
      <section className="flex justify-center py-20">
        <div className="block w-[80%]">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold md:text-4xl">Category</h3>
          </div>
          <div className="mb-6 flex justify-end">
            <SearchBar value={input} setInput={setInput} />
          </div>
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
              totalPostsSize={filteredPosts?.length!}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
