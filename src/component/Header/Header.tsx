import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="flex h-[600px] w-[80%] items-center bg-banner bg-cover bg-center bg-no-repeat pl-32">
          <div className="w-[400px]">
            <h2 className="mb-4 text-5xl">Family Jewellery Collection</h2>
            <span>Designer Jewellery Necklaces-Braces-Earings</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Header);
