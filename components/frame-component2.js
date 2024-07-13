import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[73.5px] box-border max-w-full text-left text-35xl text-darkslateblue-100 font-poppins mq750:pb-12 mq750:box-border ${className}`}
    >
      <div className="flex-1 bg-whitesmoke-100 flex flex-row items-start justify-start pt-[43.8px] pb-[43.7px] pr-[83px] pl-[90px] box-border gap-[151.7px] max-w-full z-[1] mq750:gap-[38px] mq750:pl-[22px] mq750:pt-7 mq750:pb-7 mq750:box-border mq450:gap-[19px] mq1250:flex-wrap mq1250:gap-[76px] mq1250:pl-[45px] mq1250:pr-[41px] mq1250:box-border">
        <img
          className="h-[474.8px] w-[1546px] relative hidden max-w-full"
          alt=""
          src="/bg2.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[25.9px] px-0 pb-0 box-border min-w-[425px] max-w-full shrink-0 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[47.1px] mq750:gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.8px]">
              <h1 className="m-0 self-stretch h-[224.4px] relative text-inherit font-bold font-inherit inline-block shrink-0 z-[1] mq750:text-24xl mq450:text-13xl">
                PROVIDING SERVICES AT YOUR DOOR
              </h1>
              <div className="self-stretch relative text-xl text-dimgray shrink-0 z-[1] font-montserrat mq450:text-base">
                <b>MACC Essentials</b>
                <span>
                  {" "}
                  has an important role in making supplies and services
                  available to customers and their patients during this critical
                  time. This includes services from various domains. Our aim is
                  to aid you. As much we can.
                </span>
              </div>
            </div>
            <div className="w-[249px] flex flex-row items-start justify-start pt-[7.7px] px-[50px] pb-[7.8px] box-border relative z-[1] text-xl text-white">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
                <img
                  className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[3px] [transform:scale(1.31)]"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <b className="w-[142.6px] relative leading-[23.2px] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[19px]">
                LEARN MORE
              </b>
            </div>
          </div>
        </div>
        <img
          className="h-[387.3px] w-[565.9px] relative object-cover max-w-full z-[1] mq1250:flex-1"
          loading="lazy"
          alt=""
          src="/cover-img@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
