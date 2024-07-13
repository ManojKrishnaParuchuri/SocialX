import PropTypes from "prop-types";

const Thumbnail = ({ className = "", productImage, oFF }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[317.3px] box-border relative min-w-[235px] shrink-0 max-w-full z-[2] text-left text-base text-white font-montserrat ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={productImage}
      />
      <div className="bg-tomato flex flex-row items-start justify-start pt-[3.9px] pb-[4.6px] pr-[41px] pl-[43px] whitespace-nowrap z-[1]">
        <img
          className="h-6 w-[166.4px] relative hidden"
          alt=""
          src="/bg4.svg"
        />
        <div className="relative leading-[15.5px] font-medium inline-block min-w-[81.5px] z-[1]">
          {oFF}
        </div>
      </div>
    </div>
  );
};

Thumbnail.propTypes = {
  className: PropTypes.string,
  productImage: PropTypes.string,
  oFF: PropTypes.string,
};

export default Thumbnail;
