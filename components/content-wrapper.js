import Navbar from "./navbar";
import PropTypes from "prop-types";

const ContentWrapper = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full ${className}`}
    >
      <Navbar frameDivFlex="unset" frameDivAlignSelf="stretch" />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1] mt-[-3px]"
        loading="lazy"
        alt=""
        src="/header@2x.png"
      />
    </section>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

export default ContentWrapper;
