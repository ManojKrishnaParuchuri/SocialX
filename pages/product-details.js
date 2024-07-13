import { useCallback } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import BreadcrumbLinks from "../components/breadcrumb-links";
import Footer from "../components/footer";

const ProductDetails = () => {
  const router = useRouter();

  const onActionBtnsClick = useCallback(() => {
    router.push("/product-added");
  }, [router]);

  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-white flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border relative gap-[3px] max-w-full">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden z-[0]"
          alt=""
          src="/vector3.svg"
        />
        <Navbar frameDivFlex="unset" frameDivAlignSelf="stretch" />
        <img
          className="w-full h-[579px] absolute !m-[0] top-[229px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/bg-13.svg"
        />
        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[63px] box-border max-w-full lg:pb-[41px] lg:box-border mq750:pb-[27px] mq750:box-border">
          <BreadcrumbLinks onActionBtnsClick={onActionBtnsClick} />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default ProductDetails;
