import PropTypes from "prop-types";

const Navbar1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white flex flex-col items-end justify-start pt-0 px-0 pb-[24.7px] box-border gap-[24.8px] top-[0] z-[99] sticky max-w-full text-left text-xs text-darkslategray font-montserrat ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="/bg.svg"
      />
      <div className="self-stretch h-[30.9px] bg-white flex flex-col items-end justify-start pt-[10.1px] pb-[4.8px] pr-1 pl-0 box-border gap-[4.1px] max-w-full z-[1]">
        <img
          className="self-stretch h-[30.9px] relative max-w-full overflow-hidden shrink-0 hidden"
          alt=""
          src="/bg1.svg"
        />
        <div className="w-[407.4px] flex flex-row items-start justify-end py-0 px-[58px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <a className="[text-decoration:none] w-[47.5px] relative text-[inherit] inline-block shrink-0 z-[1]">
              Return
            </a>
            <a className="[text-decoration:none] w-[32.8px] relative text-[inherit] inline-block shrink-0 z-[1]">
              Help
            </a>
            <a className="[text-decoration:none] w-[116.6px] relative text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1] mq1250:hidden">
              Register / Sign In
            </a>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
          loading="lazy"
          alt=""
          src="/bg.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[55px] box-border max-w-full text-base text-gray-100 mq750:pl-[27px] mq750:pr-[27px] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-[26.3px] px-0 pb-0">
            <img
              className="w-[24.9px] h-[17px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/search.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[79.3px] max-w-full mq750:gap-[20px] mq1250:gap-[40px]">
            <div className="w-[61.1px] flex flex-col items-start justify-start pt-[27px] pb-0 pr-1.5 pl-0 box-border">
              <a className="[text-decoration:none] self-stretch h-[15.5px] relative leading-[19.2px] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1]">
                SHOP
              </a>
            </div>
            <div className="w-[115.3px] flex flex-col items-start justify-start pt-[27px] pb-0 pr-[3px] pl-0 box-border">
              <a className="[text-decoration:none] self-stretch h-[15.5px] relative leading-[19.2px] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1]">
                ESSENTIALS
              </a>
            </div>
            <div className="w-[166.3px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border text-center text-21xl text-tomato font-chilanka">
              <a className="[text-decoration:none] self-stretch h-[69.6px] relative leading-[44.8px] inline-block shrink-0 z-[1] text-[inherit]">
                <p className="m-0">Macc</p>
                <p className="m-0 text-darkslateblue-200">Essentials</p>
              </a>
            </div>
            <div className="w-[133.5px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
              <a className="[text-decoration:none] self-stretch h-[15.5px] relative leading-[19.2px] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1]">
                BEST SELLERS
              </a>
            </div>
            <div className="w-[110.8px] flex flex-col items-start justify-start pt-[27px] pb-0 pr-[13px] pl-0 box-border">
              <a className="[text-decoration:none] self-stretch h-[15.5px] relative leading-[19.2px] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1]">
                ABOUT US
              </a>
            </div>
            <div className="h-[43.3px] w-[149.5px] flex flex-col items-start justify-start pt-[4.6px] px-0 pb-0 box-border text-xs text-white font-chilanka">
              <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                <div className="w-[30.7px] flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border">
                  <img
                    className="w-[21.2px] h-[17px] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/profile-img.svg"
                  />
                </div>
                <div className="self-stretch w-[31.6px] flex flex-col items-start justify-start gap-[1.2px]">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-[17px] pl-3.5">
                    <div className="self-stretch flex-1 relative whitespace-nowrap z-[1]">{` `}</div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[18px]">
                    <img
                      className="h-[9.3px] w-[13.6px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/group-109.svg"
                    />
                  </div>
                  <div className="w-[22.4px] h-[17px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-[22.4px] h-[12.8px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/path-5332.svg"
                    />
                    <img
                      className="absolute top-[16.2px] left-[9px] w-[4.3px] h-[0.8px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/path-5333.svg"
                    />
                  </div>
                </div>
                <img
                  className="h-[16.9px] w-[21.6px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/shopping-img.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar1.propTypes = {
  className: PropTypes.string,
};

export default Navbar1;
