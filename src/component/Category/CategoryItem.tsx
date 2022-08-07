import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { ProductItemProps } from "./Category.model";
import "react-lazy-load-image-component/src/effects/blur.css";

const CategoryItem: React.FC<ProductItemProps> = (props) => {
  return (
    <>
      <figure className="mb-6 w-[48%] border-2 bg-[#f8f8f8] bg-cover md:w-[330px]">
        <Link to={`/shop?category=${props.category}`}>
          <div className="md:h-[300px]">
            <LazyLoadImage
              loading="lazy"
              src={props.imageUrl}
              alt=""
              className="h-full w-full"
              width={`100%`}
              height={`100%`}
              effect="blur"
            />
          </div>
          <figcaption className="text-center md:text-2xl">
            {props.category}
          </figcaption>
        </Link>
      </figure>
    </>
  );
};

export default CategoryItem;
