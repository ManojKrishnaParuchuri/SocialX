import Thumbnail from "./thumbnail";
import PropTypes from "prop-types";

const TopSellings = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-17xl text-tomato font-poppins ${className}`}
    >
      <div className="w-[1478.9px] flex flex-row items-start justify-center py-0 pr-0 pl-5 box-border gap-[2.3px] max-w-full mq1250:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[3.2px] min-w-[528px] shrink-0 max-w-full mq750:min-w-full">
          <div className="self-stretch bg-white flex flex-col items-end justify-start pt-[20.9px] pb-[13.5px] pr-[55px] pl-0 box-border gap-[24px] max-w-full z-[1] mq1050:pr-[27px] mq1050:box-border">
            <img
              className="w-[811.5px] h-[454.7px] relative hidden max-w-full"
              alt=""
              src="/rectangle-41.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
              <h1 className="m-0 w-[413.1px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[2] mq750:text-10xl mq450:text-3xl">
                <span>MACC</span>
                <span className="text-darkslategray"> TOP SELLINGS</span>
              </h1>
              <div className="w-[140.3px] flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0 box-border text-base text-darkslategray font-montserrat">
                <div className="self-stretch flex flex-row items-start justify-start pt-[7.3px] px-[22px] pb-[8.1px] relative z-[2]">
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
            <div className="self-stretch flex flex-row items-start justify-start gap-[32.5px] max-w-full text-base text-white font-montserrat mq750:flex-wrap mq750:gap-[16px]">
              <Thumbnail productImage="/product-image.svg" oFF="20% OFF" />
              <div className="flex-1 bg-whitesmoke-200 flex flex-col items-end justify-start pt-0 px-0 pb-[62.2px] box-border gap-[38.6px] min-w-[235px] shrink-0 max-w-full z-[2] mq450:gap-[19px]">
                <img
                  className="self-stretch h-[341.3px] relative max-w-full overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/bg5.svg"
                />
                <div className="bg-tomato flex flex-row items-start justify-start pt-[3.8px] pb-[4.7px] pr-[41px] pl-[42px] whitespace-nowrap z-[3]">
                  <img
                    className="h-6 w-[166.4px] relative hidden"
                    alt=""
                    src="/bg4.svg"
                  />
                  <div className="relative leading-[15.5px] font-medium inline-block min-w-[82.6px] z-[1]">
                    40% OFF
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[22px] pl-[23px]">
                  <img
                    className="h-[216.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                    alt=""
                    src="/product-img-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[759.4px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-5xl text-gray-300">
            <div className="w-[551.2px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
              <div className="w-[156.2px] flex flex-col items-start justify-start gap-[5.4px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[27.8px] font-medium font-inherit shrink-0 z-[1] mq450:text-lgi mq450:leading-[22px]">
                  Body Spray
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[53px] pl-[52px] text-base">
                  <div className="h-[18.6px] flex-1 relative inline-block shrink-0 whitespace-nowrap z-[1]">
                    ₹ 400
                  </div>
                </div>
              </div>
              <div className="w-[156.2px] flex flex-col items-start justify-start gap-[5.4px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[27.8px] font-medium font-inherit shrink-0 z-[1] mq450:text-lgi mq450:leading-[22px]">
                  Body Spray
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[53px] pl-[52px] text-base">
                  <div className="h-[18.6px] flex-1 relative inline-block shrink-0 whitespace-nowrap z-[1]">
                    ₹ 400
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[519.7px] w-[644.7px] relative object-cover shrink-0 max-w-full z-[1] mq1250:flex-1"
          alt=""
          src="/bg-2@2x.png"
        />
      </div>
    </section>
  );
};

TopSellings.propTypes = {
  className: PropTypes.string,
};

export default TopSellings;
