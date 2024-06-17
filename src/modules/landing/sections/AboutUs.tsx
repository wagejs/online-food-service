import { AboutUsIllustration } from "@root/src/assets/images";
import { Button } from "@components";
import { ArrowRightWhite } from "@assets/icons";

function AboutUs() {
  return (
    <section className="p-[100px] mb-[150px]">
      <div className="flex justify-between bg-brand-primary items-center w-full py-[50px] px-[100px] rounded-[100px]">
        <div className="text-brand-dark max-w-[575px]">
          <h2 className="font-bold text-[50px] mb-12">Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</h2>
          <p className="font-semibold text-xl underline mb-0">Vulputate et vulputate suspendisse natoque!</p>
          <p className="text-xl tracking-wide">Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. </p>
          <Button className="mt-14 flex justify-between w-[350px]" size="lg" variant="inverse-primary" onClick={() => { }}>
            <span>Lorem Ipsum</span>
            <img src={ArrowRightWhite} alt="arrow-right-icon" width={30} height={30} />
          </Button>
        </div>
        <img src={AboutUsIllustration} alt="about-us-illustration" width={714} height={714} />
      </div>
    </section>
  )
};

export default AboutUs;