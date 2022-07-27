import { Products } from "../../utility/Logic.model";

const ProductCard: React.FC<Products> = (props) => {
  return (
    <>
      <figure className="mb-6 w-full border-2 bg-[#f8f8f8] bg-cover last:mb-0 md:mx-4 md:w-[280px] md:last:mb-6">
        <div className="h-[280px]">
          <img
            loading="lazy"
            src={props.images.at(0)}
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

export default ProductCard;
