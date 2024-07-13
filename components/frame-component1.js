import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[73.6px] pr-[21px] pl-5 box-border max-w-full text-left text-17xl text-tomato font-poppins mq750:pb-12 mq750:box-border ${className}`}
    >
      <div className="w-[1362.6px] flex flex-col items-start justify-start gap-[13.8px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[73px] box-border max-w-full mq450:pl-5 mq450:box-border">
          <h1 className="m-0 w-[327.1px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq750:text-10xl mq450:text-3xl">
            <span>{`NEW `}</span>
            <span className="text-darkslateblue-200">PRODUCTS</span>
          </h1>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[19.2px] max-w-full grid-cols-[repeat(3,_minmax(331px,_1fr))] text-5xl text-gray-300 mq750:grid-cols-[minmax(331px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(331px,_574px))]">
          <div className="h-[463.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[47.2px] box-border gap-[19.4px] max-w-full text-base text-white font-montserrat mq750:pb-[31px] mq750:box-border">
            <div className="self-stretch bg-whitesmoke-200 flex flex-col items-end justify-start pt-0 px-0 pb-[84.2px] box-border relative gap-[60.3px] max-w-full z-[1] mq450:gap-[30px] mq450:pb-[55px] mq450:box-border">
              <img
                className="self-stretch h-[416px] relative max-w-full overflow-hidden shrink-0 hidden z-[0]"
                alt=""
                src="/bg3.svg"
              />
              <div className="w-[166.4px] bg-tomato flex flex-row items-start justify-start pt-[3.9px] pb-[4.6px] pr-[25px] pl-[26px] box-border whitespace-nowrap z-[2]">
                <img
                  className="h-6 w-[166.4px] relative hidden"
                  alt=""
                  src="/bg4.svg"
                />
                <div className="flex-1 relative leading-[15.5px] font-medium z-[1]">
                  TOP SELLER
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[39px] pl-10 box-border max-w-full">
                <img
                  className="h-[247.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/product-img@2x.png"
                />
              </div>
              <div className="w-[72.4px] h-[49.5px] absolute !m-[0] bottom-[183.2px] left-[-36.2px] z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.646)]"
                  alt=""
                  src="/move-2.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] text-5xl text-gray-300 font-poppins">
              <h3 className="m-0 w-[159.6px] relative text-inherit leading-[27.8px] font-medium font-inherit inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[22px]">
                Face Masks
              </h3>
            </div>
          </div>
          <div className="h-[463.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[47.2px] box-border gap-[19.4px] max-w-full mq750:pb-[31px] mq750:box-border">
            <img
              className="self-stretch h-[416px] relative max-w-full overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/thumbnail.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
              <h3 className="m-0 w-[156.2px] relative text-inherit leading-[27.8px] font-medium font-inherit inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[22px]">
                Body Spray
              </h3>
            </div>
          </div>
          <div className="h-[463.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[47.2px] box-border gap-[19.4px] max-w-full mq750:pb-[31px] mq750:box-border">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[416px] flex-1 relative max-w-full overflow-hidden z-[1]"
                alt=""
                src="/thumbnail-1.svg"
              />
              <div className="h-[49.5px] w-[72.4px] absolute !m-[0] right-[-36.2px] bottom-[183.2px] z-[2] flex items-center justify-center">
                <img
                  className="h-full w-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.646)]"
                  alt=""
                  src="/move-3.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
              <h3 className="m-0 w-[258px] relative text-inherit leading-[27.8px] font-medium font-inherit inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[22px]">
                Stay Free Ultra Pad
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
