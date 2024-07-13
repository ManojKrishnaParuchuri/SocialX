import FrameComponent from "../components/frame-component";
import CardInformation from "../components/card-information";
import Footer from "../components/footer";

const Checkout = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[21px] box-border gap-[5px] max-w-full">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="/vector1.svg"
        />
        <FrameComponent />
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full mq750:pl-6 mq750:pr-6 mq750:box-border">
          <CardInformation />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Checkout;
