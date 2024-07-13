import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-[29.9px] pb-9 pr-14 pl-[97px] box-border gap-[73.5px] max-w-full z-[1] text-left text-lg text-gray-100 font-montserrat mq750:gap-[37px] mq750:pl-12 mq750:pr-7 mq750:box-border mq450:gap-[18px] mq450:pl-5 mq450:pt-5 mq450:pb-[23px] mq450:box-border ${className}`}
    >
      <img
        className="w-[1366px] h-[390px] relative hidden max-w-full"
        alt=""
        src="/bg9.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1100:flex-wrap">
        <h1 className="m-0 relative text-35xl font-normal font-chilanka z-[1] text-tomato mq450:text-13xl mq1025:text-24xl">
          <p className="m-0">Macc</p>
          <p className="m-0 text-darkslateblue-200">Essentials</p>
        </h1>
        <div className="w-[133.6px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
          <div className="flex flex-col items-start justify-start gap-[21px]">
            <div className="relative inline-block min-w-[56px] z-[1]">Home</div>
            <div className="relative inline-block min-w-[91px] z-[1]">
              Collection
            </div>
            <div className="relative inline-block min-w-[82px] z-[1]">
              Products
            </div>
          </div>
        </div>
        <div className="w-[121.6px] flex flex-col items-start justify-start pt-[9.1px] px-0 pb-0 box-border font-italiana">
          <div className="w-[72px] flex flex-col items-start justify-start gap-[21px]">
            <div className="relative font-montserrat inline-block min-w-[56px] z-[1]">
              About
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
              <div className="h-[17px] flex-1 relative inline-block z-[1]">
                Contact
              </div>
            </div>
            <div className="h-[17px] relative inline-block min-w-[40px] z-[1]">
              FAQ
            </div>
          </div>
        </div>
        <div className="w-[428px] flex flex-col items-start justify-start pt-[10.1px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full shrink-0 mq450:gap-[16px]">
            <div className="self-stretch relative leading-[140%] z-[1]">
              Be the first to know about our biggest and best sales. We'll never
              send more than one email a month.
            </div>
            <div className="w-[400.5px] flex flex-col items-start justify-start gap-[21px] max-w-full">
              <div className="self-stretch bg-white flex flex-col items-start justify-start pt-3.5 px-0 pb-0 gap-[13px] z-[1]">
                <img
                  className="self-stretch h-[50px] relative max-w-full overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/path-53141.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative z-[1]">ENTER YOUR EMAIL</div>
                  <img
                    className="self-stretch w-[27.5px] relative max-h-full min-h-[22px] z-[1]"
                    alt=""
                    src="/ic-mail-outline-24px1.svg"
                  />
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/rectangle-161.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[17px]">
                <img
                  className="h-[38px] w-[38px] relative min-h-[38px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/twitter1.svg"
                />
                <img
                  className="h-[38px] w-[38px] relative min-h-[38px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/linkedin1.svg"
                />
                <img
                  className="h-[38px] w-[38px] relative min-h-[38px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/facebook1.svg"
                />
                <img
                  className="h-[38px] w-[38px] relative min-h-[38px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/insta1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1170.7px] flex flex-row items-start justify-center max-w-full">
        <div className="relative z-[1]">All rights are reserved</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
