import { useMemo } from "react";
import PropTypes from "prop-types";

const Navbar = ({ className = "", frameDivFlex, frameDivAlignSelf }) => {
  const navbarStyle = useMemo(() => {
    return {
      flex: frameDivFlex,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlex, frameDivAlignSelf]);

  return (
    <header
      className={`flex-1 bg-white flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border gap-[32px] max-w-full z-[1] text-left text-xs text-darkslategray font-montserrat mq750:gap-[16px] ${className}`}
      style={navbarStyle}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="/bg7.svg"
      />
      <div className="self-stretch bg-white flex flex-col items-end justify-start pt-[13px] pb-0 pr-1 pl-0 box-border gap-[11px] top-[0] z-[99] sticky max-w-full">
        <img
          className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 hidden"
          alt=""
          src="/bg8.svg"
        />
        <div className="w-[359.7px] flex flex-row items-start justify-end py-0 px-[51px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[42px] z-[1]">
              Return
            </a>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[29px] z-[1]">
              Help
            </a>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[103px] whitespace-nowrap z-[1]"  href="">
              Register / Sign In
            </a>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
          loading="lazy"
          alt=""
          src="/bg1.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full text-base text-gray-100 mq750:pl-6 mq750:pr-6 mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-[34px] px-0 pb-0">
            <img
              className="w-[22px] h-[22px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/search1.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[70px] max-w-[calc(100%_-_42px)] mq750:gap-[17px] mq1025:gap-[35px] mq1100:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[35px] pb-0 pr-1.5 pl-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px] z-[1]">
                SHOP
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[35px] pb-0 pr-[3px] pl-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[99px] z-[1]">
                ESSENTIALS
              </a>
            </div>
            <a className="[text-decoration:none] w-[145px] relative text-21xl font-chilanka text-center inline-block z-[1] text-tomato mq450:text-5xl mq1025:text-13xl">
              <p className="m-0">Macc</p>
              <p className="m-0 text-darkslateblue-200">Essentials</p>
            </a>
            <div className="flex flex-col items-start justify-start pt-[35px] px-0 pb-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[118px] z-[1]">
                BEST SELLERS
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[35px] pb-0 pr-3 pl-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[86px] z-[1]">
                ABOUT US
              </a>
            </div>
            <div className="w-[132px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-xs text-white font-chilanka">
              <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
                  <img
                    className="w-[18.7px] h-[22px] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/profile-img1.svg"
                  />
                </div>
                <div className="w-7 flex flex-col items-start justify-start gap-[1.5px]">
                  <div className="self-stretch h-[13px] flex flex-row items-start justify-start py-0 pr-[15px] pl-3 box-border">
                    <div className="self-stretch w-0 relative inline-block z-[1]">{` `}</div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-4">
                    <img
                      className="h-3 w-3 relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/group-1091.svg"
                    />
                  </div>
                  <div className="w-[19.8px] h-[22px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-[19.8px] h-[16.5px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/path-53321.svg"
                    />
                    <img
                      className="absolute top-[20.9px] left-[8px] w-[3.8px] h-[1.1px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/path-53331.svg"
                    />
                  </div>
                </div>
                <img
                  className="h-[21.9px] w-[19px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/shopping-img1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivFlex: PropTypes.any,
  frameDivAlignSelf: PropTypes.any,
};

export default Navbar;
