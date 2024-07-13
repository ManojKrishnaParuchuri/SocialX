import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const BreadcrumbLinks = ({ className = "", onActionBtnsClick }) => {
  const router = useRouter();

  const onActionBtnsClick1 = useCallback(() => {
    router.push("/product-added");
  }, [router]);

  return (
    <div
      className={`w-[1204px] flex flex-col items-start justify-start gap-[113px] max-w-full text-left text-sm text-gray-100 font-montserrat mq450:gap-[28px] mq750:gap-[56px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-start gap-[29px] max-w-full mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17px] box-border min-w-[412px] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
              <div className="w-[238px] flex flex-row items-start justify-start gap-[11px]">
                <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
                  <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[44px] z-[1]" href="/">
                    Home
                  </a>
                </div>
                <div className="relative font-light font-poppins inline-block min-w-[7px] z-[1]">
                  /
                </div>
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[63px] z-[1]">
                    Products
                  </a>
                  <div className="relative font-light font-poppins inline-block min-w-[7px] z-[1]">
                    /
                  </div>
                </div>
                <div className="relative font-light inline-block min-w-[56px] z-[1]">
                  Product
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full">
                <div className="flex flex-col items-start justify-start gap-[20px] mq450:hidden">
                  <img
                    className="w-[100px] h-[100px] relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/cover.svg"
                  />
                  <img
                    className="w-[100px] h-[100px] relative z-[2]"
                    alt=""
                    src="/cover.svg"
                  />
                  <img
                    className="w-[100px] h-[100px] relative z-[2]"
                    alt=""
                    src="/cover-2.svg"
                  />
                  <img
                    className="w-[100px] h-[100px] relative z-[2]"
                    alt=""
                    src="/cover.svg"
                  />
                </div>
                <img
                  className="h-[514px] flex-1 relative max-w-[calc(100%_-_120px)] overflow-hidden z-[2] mq450:max-w-full"
                  alt=""
                  src="/cover-4.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[501px] bg-white flex flex-col items-end justify-start pt-px px-0 pb-[29px] box-border gap-[27px] min-w-[501px] max-w-full z-[2] text-9xl text-gray-200 mq750:min-w-full mq1050:flex-1">
            <img
              className="self-stretch h-[529px] relative max-w-full overflow-hidden shrink-0 hidden"
              alt=""
              src="/bg13.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] font-poppins">
              <div className="w-[265px] flex flex-col items-start justify-start gap-[30px]">
                <div className="flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                    <h3 className="m-0 h-[42px] relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block z-[1] mq450:text-3xl">{`COLOROX  WIPES  `}</h3>
                  </div>
                  <b className="relative text-6xl inline-block font-montserrat text-tomato min-w-[100px] whitespace-nowrap z-[1] mq450:text-xl">
                    ₹ 40.00
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px text-sm text-gray-100 font-montserrat">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
                    <div className="w-[76px] flex flex-row items-start justify-start pt-[10.9px] px-[11px] pb-[12.1px] box-border relative z-[1]">
                      <img
                        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/bg-21.svg"
                      />
                      <div className="relative inline-block min-w-[49px] z-[1]">
                        BLACK
                      </div>
                    </div>
                    <div className="w-[69px] flex flex-row items-start justify-start pt-[10.9px] px-[11px] pb-[12.1px] box-border relative z-[1]">
                      <img
                        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/bg-32.svg"
                      />
                      <div className="relative inline-block min-w-[43px] z-[1]">
                        GOLD
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start pt-[10.9px] px-[11px] pb-[12.1px] relative z-[1]">
                      <img
                        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/bg-4.svg"
                      />
                      <div className="relative inline-block min-w-[60px] z-[1]">
                        APOLLO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[6.9px] px-0 pb-0">
                <img
                  className="w-[22.9px] h-[22px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/like-img.svg"
                />
              </div>
            </div>
            <Button
              className="self-stretch h-[45px] shrink-0 cursor-pointer z-[1]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "20",
                background: "#004197",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#004197" },
                height: 45,
              }}
              onClick={onActionBtnsClick}
            >
              ADD TO CART
            </Button>
            <div className="self-stretch relative text-sm leading-[140%] text-gray-100 text-justify z-[1]">{`Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, `}</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px] text-lg">
              <div className="self-stretch flex flex-row items-start justify-between pt-[11px] pb-3 pr-[21px] pl-[177px] relative gap-[20px] z-[1] mq450:pl-5 mq450:box-border mq750:pl-[88px] mq750:box-border">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg-5.svg"
                />
                <div className="relative inline-block min-w-[128px] z-[1]">
                  DESCRIPTION
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <img
                    className="w-[12.5px] h-[6.5px] relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/arrow-img1@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between pt-[11px] pb-3 pr-[21px] pl-[164px] relative gap-[20px] z-[1] mq450:pl-5 mq450:box-border mq750:pl-[82px] mq750:box-border">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg-5.svg"
                />
                <div className="relative z-[1]">RETURN POLICY</div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <img
                    className="w-[12.5px] h-[6.5px] relative object-contain z-[1]"
                    alt=""
                    src="/arrow-img1@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between pt-[11px] pb-3 pr-[21px] pl-[166px] relative gap-[20px] z-[1] mq450:pl-5 mq450:box-border mq750:pl-[83px] mq750:box-border">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg-5.svg"
                />
                <div className="relative z-[1]">CITIZEN POLICY</div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <img
                    className="w-[12.5px] h-[6.5px] relative object-contain z-[1]"
                    alt=""
                    src="/arrow-img1@2x.png"
                  />
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/separator.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full text-17xl text-gray-200 font-poppins mq750:gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[27px]">
          <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-3xl mq1050:text-10xl">
            YOU MAY ALSO LIKE
          </h1>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[17px] max-w-full grid-cols-[repeat(3,_minmax(292px,_1fr))] text-5xl text-gray-300 mq750:grid-cols-[minmax(292px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(292px,_507px))]">
          <div className="flex flex-col items-start justify-start gap-[25.1px] max-w-full">
            <div className="self-stretch bg-whitesmoke-200 flex flex-col items-end justify-start pt-0 px-0 pb-[108.9px] relative gap-[78px] z-[1] mq450:gap-[39px] mq750:pb-[71px] mq750:box-border">
              <img
                className="self-stretch h-[537.9px] relative max-w-full overflow-hidden shrink-0 hidden z-[0]"
                alt=""
                src="/bg14.svg"
              />
              <Button
                className="w-[147px] h-[31px] z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#e2342d",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#e2342d" },
                  width: 147,
                  height: 31,
                }}
              >
                TOP SELLER
              </Button>
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-[35px]">
                <img
                  className="h-80 flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/product-img1@2x.png"
                />
              </div>
              <div className="w-16 h-16 absolute !m-[0] bottom-[236.9px] left-[-32px] z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.5)]"
                  loading="lazy"
                  alt=""
                  src="/move.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
              <div className="relative font-medium z-[1] mq450:text-lgi">
                Face Masks
              </div>
            </div>
          </div>
          <div className="h-[599px] flex flex-col items-start justify-start gap-[25.1px] max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/thumbnail2.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
              <div className="relative font-medium z-[1] mq450:text-lgi">
                Body Spray
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[25.1px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[537.9px] flex-1 relative max-w-full overflow-hidden z-[1]"
                alt=""
                src="/thumbnail-12.svg"
              />
              <div className="h-16 w-16 absolute !m-[0] right-[-32px] bottom-[236.9px] z-[2] flex items-center justify-center">
                <img
                  className="h-full w-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.5)]"
                  alt=""
                  src="/move-11.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
              <div className="relative font-medium z-[1] mq450:text-lgi">
                Stay Free Ultra Pad
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbLinks.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onActionBtnsClick: PropTypes.func,
};

export default BreadcrumbLinks;
