import { useCallback } from "react";
import { useRouter } from "next/router";
import Navbar1 from "../components/navbar1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Discounts from "../components/discounts";
import TopSellings from "../components/top-sellings";
import Footer1 from "../components/footer1";

const Home = () => {
  const router = useRouter();

  const onHomeContainerClick = useCallback(() => {
    router.push("/all-products");
  }, [router]);

  return (
    <div
      className="w-full relative overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] cursor-pointer"
      onClick={onHomeContainerClick}
    >
      <main className="self-stretch bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[585.4px] box-border relative gap-[3.8px] max-w-full mq750:pb-[161px] mq750:box-border mq1250:pb-[248px] mq1250:box-border">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden z-[0]"
          alt=""
          src="/vector.svg"
        />
        <div className="w-[72.4px] h-[49.5px] absolute !m-[0] bottom-[801.1px] left-[51.3px] z-[3] flex items-center justify-center">
          <img
            className="w-full h-full z-[3] object-contain absolute left-[0px] top-[0px] [transform:scale(1.646)]"
            alt=""
            src="/move.svg"
          />
        </div>
        <Navbar1 />
        <div className="w-[72.4px] h-[49.5px] absolute !m-[0] right-[51.4px] bottom-[1398.7px] z-[3] flex items-center justify-center">
          <img
            className="w-full h-full z-[3] object-contain absolute left-[0px] top-[0px] [transform:scale(1.646)]"
            alt=""
            src="/move-1.svg"
          />
        </div>
        <FrameComponent2 />
        <FrameComponent1 />
        <Discounts />
        <TopSellings />
      </main>
      <Footer1 />
    </div>
  );
};

export default Home;
