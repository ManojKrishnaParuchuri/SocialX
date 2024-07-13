import PropTypes from "prop-types";

const ProductCardContainers1 = ({
  className = "",
  productImage,
  bodySpray,
  prop,
}) => {
  return (
    <div
      className={`w-80 flex flex-col items-end justify-start gap-[21.6px] min-w-[304px] text-left text-base text-white font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[410.4px] relative z-[3] mq450:pb-[267px] mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src={productImage}
        />
        <div className="bg-tomato flex flex-row items-start justify-start pt-[5px] pb-1.5 pr-9 pl-[38px] whitespace-nowrap z-[1]">
          <img
            className="h-[31px] w-[147px] relative hidden"
            alt=""
            src="/bg12.svg"
          />
          <div className="relative font-medium inline-block min-w-[72px] z-[1]">
            20% OFF
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] text-5xl text-gray-300 font-poppins">
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <h3 className="m-0 relative text-inherit font-medium font-inherit z-[3] mq450:text-lgi">
            {bodySpray}
          </h3>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[19px] text-base">
            <div className="flex flex-row items-start justify-start gap-[8.9px]">
              <div className="relative [text-decoration:line-through] inline-block min-w-[45px] whitespace-nowrap z-[3]">
                ₹ 500
              </div>
              <div className="relative inline-block min-w-[45px] whitespace-nowrap z-[3]">
                {prop}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCardContainers1.propTypes = {
  className: PropTypes.string,
  productImage: PropTypes.string,
  bodySpray: PropTypes.string,
  prop: PropTypes.string,
};

export default ProductCardContainers1;
