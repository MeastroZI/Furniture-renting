import PropTypes from "prop-types";
import moreinfo from "../assets/images/moreinfoarrow.svg"
import expimg from "../assets/images/experienceimg.png"

const Experience = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex  flex-row items-center justify-start pt-0 px-0 pb-[130px] box-border gap-[120px] max-w-full text-left text-lg text-darkorange-200 font-poppins mq450:gap-[20px] mq800:gap-[40px] mq800:pb-[88px] mq800:box-border mq1350:flex-wrap ${className}`}
    >
      <div className="h-[541px] w-[663px] relative min-w-[663px] ml-4 max-w-full mq800:min-w-full mq1350:flex-1">
        <div className="absolute top-[118px] left-[20px] rounded-30xl w-[555px] h-[423px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute  left-[0px] top-[0px] [transform:scale(1.236)]"
            loading="lazy"
            alt="hi"
            src="/rectangle-1447@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[-65px] rounded-xl bg-whitesmoke-100 w-[495px] h-[422px] z-[1]" />
        <div className="absolute top-[138px] left-[168px] rounded-xl bg-whitesmoke-100 w-[495px] h-[301px] z-[2]" />
        <img
          className="absolute top-[66px] left-[-27px] ml-2 rounded-xl w-[629px] h-[445px] object-cover z-[3]"
          alt=""
          src={expimg}
        />
      </div>
      <div className="flex-1 flex flex-col ml-20 items-start justify-start pt-[83px] px-0 pb-0 box-border min-w-[453px] max-w-full mq450:pt-[54px] mq450:box-border mq800:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[27.4px] max-w-full">
          <div className="h-[27px] relative tracking-[0.18em] uppercase font-semibold inline-block">
            experiences
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[22px] max-w-full text-25xl text-gray-200">
            <h1 className="m-0 self-stretch h-[90px] relative text-inherit capitalize font-bold font-inherit inline-block mq450:text-6xl mq800:text-15xl">
              we provide you the best experience
            </h1>
            <div className="w-[576px] h-[99px]  relative text-lg leading-[185%] text-gray-1000 inline-block max-w-full box-border pr-4 z-[1]">
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </div>
          </div>
          <div className="flex flex-row items-start justify-start mt-4  py-0 pr-5 pl-0 gap-[7px] text-sm text-darkorange-100">
            <div className="relative  leading-[185%] font-medium">More Info</div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-12 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={moreinfo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  className: PropTypes.string,
};

export default Experience;