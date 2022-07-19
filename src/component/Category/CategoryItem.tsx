import { ProductItemProps } from "./Category.model";

const CategoryItem: React.FC<ProductItemProps> = (props) => {
  return (
    <>
      <figure className="mb-6 w-[330px] border-2 bg-[#f8f8f8] bg-cover">
        <div className="h-[300px]">
          <img
            loading="lazy"
            src={props.imageUrl}
            alt=""
            className="h-full w-[100%]"
          />
        </div>
        <figcaption className="text-center text-2xl">
          {props.category}
        </figcaption>
      </figure>
    </>
  );
};

export default CategoryItem;
