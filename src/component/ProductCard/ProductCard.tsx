import { LazyLoadImage } from "react-lazy-load-image-component";
import { Products } from "../../utility/Logic.model";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard: React.FC<Products> = (props) => {
  return (
    <>
      <figure className="mb-6 w-[48%] border-2 bg-[#f8f8f8] bg-cover md:mx-4 md:w-[280px]">
        <div className="md:h-[280px]">
          <LazyLoadImage
            loading="lazy"
            src={props.images.at(0)}
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
      </figure>
    </>
  );
};

export default ProductCard;
