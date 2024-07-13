import Thumbnail from "./thumbnail";
import PropTypes from "prop-types";

const Discounts = ({ className = "" }) => {
  return (
    <section
      className={`w-[1478.9px] flex flex-row items-start justify-center pt-0 pb-[74.1px] pr-5 pl-0 box-border gap-[2.3px] max-w-full text-left text-17xl text-tomato font-poppins mq750:pb-12 mq750:box-border mq1250:flex-wrap ${className}`}
    >
      <img
        className="w-[644.7px] relative max-h-full object-cover shrink-0 max-w-full z-[1] mq1250:flex-1"
        alt=""
        src="/bg-1@2x.png"
      />
      <div className="flex-1 flex flex-col items-end justify-start gap-[3.1px] min-w-[528px] shrink-0 max-w-full mq750:min-w-full">
        <div className="self-stretch bg-white flex flex-col items-end justify-start pt-[20.9px] px-0 pb-[13.6px] box-border gap-[23.9px] max-w-full z-[1]">
          <img
            className="self-stretch h-[454.7px] relative max-w-full overflow-hidden shrink-0 hidden"
            alt=""
            src="/rectangle-4.svg"
          />
          <div className="w-[772.2px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border max-w-full gap-[20px] mq750:flex-wrap">
            <h1 className="m-0 w-[522.9px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[2] mq750:text-10xl mq450:text-3xl">
              <span>MACC</span>
              <span className="text-darkslategray"> WEEKLY DISCOUNT</span>
            </h1>
            <div className="w-[140.3px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-base text-darkslategray font-montserrat">
              <div className="self-stretch flex flex-row items-start justify-start pt-[7.4px] px-[22px] pb-2 relative z-[2]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
                  <img
                    className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[3px] [transform:scale(1.388)]"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <div className="relative leading-[15.5px] inline-block min-w-[89.4px] z-[1]">
                  VIEW ALL
                </div>
              </div>
            </div>
          </div>
          <div className="w-[777.2px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[32.8px] max-w-full text-base text-white font-montserrat mq750:flex-wrap mq450:gap-[16px]">
            <Thumbnail productImage="/product-image.svg" oFF="20% OFF" />
            <Thumbnail productImage="/product-image-1.svg" oFF="40% OFF" />
          </div>
        </div>
        <div className="w-[703.1px] flex flex-row items-start justify-end py-0 px-[50px] box-border max-w-full text-5xl text-gray-300 mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <div className="w-[156.2px] flex flex-col items-start justify-start gap-[5.5px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[27.8px] font-medium font-inherit z-[1] mq450:text-lgi mq450:leading-[22px]">
                Body Spray
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-[21px] text-base">
                <div className="flex-1 flex flex-row items-start justify-start gap-[10.2px]">
                  <div className="h-[18.6px] flex-1 relative [text-decoration:line-through] inline-block whitespace-nowrap z-[1]">
                    ₹ 500
                  </div>
                  <div className="h-[18.6px] flex-1 relative inline-block whitespace-nowrap z-[1]">
                    ₹ 400
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[258px] flex flex-col items-start justify-start gap-[5.5px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[27.8px] font-medium font-inherit z-[1] mq450:text-lgi mq450:leading-[22px]">
                Stay Free Ultra Pad
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[74px] pl-[72px] text-base mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 flex flex-row items-start justify-start gap-[10.7px]">
                  <div className="h-[18.6px] flex-1 relative [text-decoration:line-through] inline-block whitespace-nowrap z-[1]">
                    ₹ 400
                  </div>
                  <div className="h-[18.6px] flex-1 relative inline-block whitespace-nowrap z-[1]">
                    ₹ 250
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Discounts.propTypes = {
  className: PropTypes.string,
};

export default Discounts;
