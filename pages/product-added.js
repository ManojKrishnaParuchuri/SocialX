import Navbar from "../components/navbar";
import BreadcrumbLinks from "../components/breadcrumb-links";
import Footer from "../components/footer";

const ProductAdded = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-white flex flex-col items-start justify-start relative gap-[43px] max-w-full mq750:gap-[21px]">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden z-[0]"
          alt=""
          src="/vector4.svg"
        />
        <Navbar frameDivFlex="unset" frameDivAlignSelf="stretch" />
        <img
          className="w-full h-[579px] absolute !m-[0] top-[269px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/bg-13.svg"
        />
        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[23px] box-border max-w-full">
          <BreadcrumbLinks />
        </section>
        <img
          className="w-full h-10 absolute !m-[0] top-[197px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <Footer />
      </main>
    </div>
  );
};

export default ProductAdded;
