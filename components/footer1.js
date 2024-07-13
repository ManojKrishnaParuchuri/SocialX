import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-[23.2px] pb-[27.8px] pr-[63px] pl-[110px] box-border gap-[56.9px] max-w-full z-[4] mt-[-351.1px] text-left text-lg text-gray-100 font-montserrat mq750:pl-[55px] mq750:pr-[31px] mq750:box-border mq450:gap-[28px] mq450:pl-5 mq450:box-border ${className}`}
    >
      <img
        className="w-[1546px] h-[301.6px] relative hidden max-w-full"
        alt=""
        src="/bg6.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1250:flex-wrap">
        <h1 className="m-0 h-[94.3px] w-[220.7px] relative text-35xl leading-[60px] font-normal font-chilanka inline-block shrink-0 z-[1] text-tomato mq750:text-24xl mq450:text-13xl">
          <p className="m-0">Macc</p>
          <p className="m-0 text-darkslateblue-200">Essentials</p>
        </h1>
        <div className="w-[151.2px] flex flex-col items-start justify-start pt-[6.2px] px-0 pb-0 box-border">
          <div className="w-[103px] flex flex-col items-start justify-start gap-[16.3px]">
            <div className="h-[17px] relative leading-[22.4px] inline-block shrink-0 min-w-[63.4px] z-[1]">
              Home
            </div>
            <div className="self-stretch h-[17px] relative leading-[22.4px] inline-block shrink-0 z-[1]">
              Collection
            </div>
            <div className="w-[92.8px] h-[17px] relative leading-[22.4px] inline-block shrink-0 z-[1]">
              Products
            </div>
          </div>
        </div>
        <div className="w-[137.6px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border font-italiana">
          <div className="w-[81.5px] flex flex-col items-start justify-start gap-[10.3px]">
            <a className="[text-decoration:none] relative font-montserrat text-[inherit] inline-block min-w-[63.4px] z-[1]">
              About
            </a>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9.8px]">
              <div className="h-[13.1px] flex-1 relative inline-block z-[1]">
                Contact
              </div>
            </div>
            <div className="w-[45.3px] h-[13.1px] relative inline-block shrink-0 z-[1]">
              FAQ
            </div>
          </div>
        </div>
        <div className="w-[484.4px] flex flex-col items-start justify-start pt-[7.8px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[33.3px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch relative leading-[140%] z-[1]">
              Be the first to know about our biggest and best sales. We'll never
              send more than one email a month.
            </div>
            <div className="w-[453.3px] flex flex-col items-start justify-start gap-[16.2px] max-w-full">
              <div className="self-stretch bg-white flex flex-col items-start justify-start pt-[10.8px] px-0 pb-[0.1px] gap-[4px] z-[1]">
                <img
                  className="self-stretch h-[38.7px] relative max-w-full overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/path-5314.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <input
                    className="w-[207.1px] [border:none] [outline:none] font-montserrat text-lg bg-[transparent] h-[23px] relative text-gray-100 text-left inline-block shrink-0 p-0 z-[1]"
                    placeholder="ENTER YOUR EMAIL"
                    type="text"
                  />
                  <img
                    className="h-[17px] w-[31.1px] relative shrink-0 z-[1]"
                    alt=""
                    src="/ic-mail-outline-24px.svg"
                  />
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/rectangle-16.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[19.3px]">
                <img
                  className="self-stretch w-[43px] relative max-h-full min-h-[29px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/twitter.svg"
                />
                <img
                  className="self-stretch w-[43px] relative max-h-full min-h-[29px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/linkedin.svg"
                />
                <img
                  className="self-stretch w-[43px] relative max-h-full min-h-[29px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/facebook.svg"
                />
                <img
                  className="self-stretch w-[43px] relative max-h-full min-h-[29px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/insta.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1325.9px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[221.8px] relative leading-[17px] inline-block shrink-0 z-[1]">
          All rights are reserved
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
