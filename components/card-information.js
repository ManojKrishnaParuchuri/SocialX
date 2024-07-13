import PropTypes from "prop-types";

const CardInformation = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 bg-white flex flex-row items-start justify-start pt-0 px-0 pb-[47.2px] box-border gap-[58.8px] max-w-full z-[1] text-left text-lg text-gray-100 font-montserrat mq750:gap-[29px] mq750:pb-[31px] mq750:box-border mq1100:flex-wrap ${className}`}
    >
      <img
        className="h-[597px] w-[1264px] relative hidden max-w-full"
        alt=""
        src="/cover.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[398px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[64.3px] shrink-0 mq750:gap-[32px] mq450:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19.6px]">
            <div className="flex flex-row items-start justify-start py-0 px-px text-17xl font-poppins">
              <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-3xl mq1025:text-10xl">
                CHECKOUT
              </h1>
            </div>
            <b className="relative text-xl font-poppins z-[1] mq450:text-base">
              Delivery Address
            </b>
            <div className="self-stretch flex flex-row items-start justify-start gap-[22px] mq750:flex-wrap">
              <div className="flex-1 flex flex-row items-start justify-start pt-3 px-5 pb-[11px] box-border relative min-w-[192px] z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg-11.svg"
                />
                <div className="relative inline-block min-w-[45px] z-[1]">
                  John
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-3 px-5 pb-[11px] box-border relative min-w-[192px] z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg-11.svg"
                />
                <div className="relative inline-block min-w-[46px] z-[1]">
                  Wick
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-3 px-5 pb-[11px] relative z-[1]">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/bg-3.svg"
              />
              <div className="relative z-[1]">
                Street 32, Pasror road, Daska
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-3 px-5 pb-[11px] relative z-[1]">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/bg-3.svg"
              />
              <div className="relative inline-block min-w-[33px] z-[1]">
                N/A
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[22px] mq750:flex-wrap">
              <div className="flex-1 flex flex-row items-start justify-start pt-3 px-5 pb-[11px] box-border relative min-w-[192px] z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg-11.svg"
                />
                <div className="relative inline-block min-w-[48px] z-[1]">
                  51010
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-3 px-5 pb-[11px] box-border relative min-w-[192px] z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg-11.svg"
                />
                <div className="relative inline-block min-w-[61px] z-[1]">
                  Sialkot
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-3 px-5 pb-[11px] relative z-[1]">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/bg-3.svg"
              />
              <div className="relative whitespace-nowrap z-[1]">
                +923445676890
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-sm text-gray-200 mq750:flex-wrap">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[13.4px]">
              <div className="flex flex-row items-start justify-start gap-[16.2px]">
                <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0">
                  <img
                    className="w-[8.1px] h-[15px] relative shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/arrow-img.svg"
                  />
                </div>
                <div className="relative inline-block min-w-[107px] shrink-0 z-[1]">
                  Go back to cart
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-[7px] pb-0.5 pr-7 pl-8 relative z-[1] text-5xl text-white font-poppins">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
                <img
                  className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[3px] [transform:scale(1.267)]"
                  loading="lazy"
                  alt=""
                  src="/group1.svg"
                />
              </div>
              <b className="relative z-[1] mq450:text-lgi">Save And Continue</b>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[597.3px] relative max-h-full object-cover shrink-0 max-w-full z-[1] mq1100:flex-1"
        alt=""
        src="/bg-8@2x.png"
      />
    </div>
  );
};

CardInformation.propTypes = {
  className: PropTypes.string,
};

export default CardInformation;
