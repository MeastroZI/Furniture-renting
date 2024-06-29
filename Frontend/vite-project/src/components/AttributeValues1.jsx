import BenefitItems from "./BenefitItems";
import PropTypes from "prop-types";
import moreinfo from "../assets/images/moreinfoarrow.svg";

const AttributeValues1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch mt-20 flex flex-row bg-white items-start justify-end py-0 px-30 ml-10 box-border max-w-full text-left text-23xl text-gray-200 font-poppins mq800:pl-10 mq800:pr-10 mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[38px] px-0 pb-0 ml-10">
          <h1 className="m-0 h-[126px] ml-20 relative text-inherit font-bold font-inherit inline-block mq450:text-6xl mq800:text-15xl">
            <p className="m-0">Why</p>
            <p className="m-0">Choosing Us</p>
          </h1>
        </div>
        <div className="w-[950px] mr-20 flex flex-row items-start justify-start gap-[20px] max-w-full text-3xl text-gray-700 mq1150:flex-wrap">
          <BenefitItems
            luxuryFacilities="Luxury facilities"
            theAdvantageOfHiringAWork="The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
            grommetIconsformNextLink={moreinfo}
          />
          <BenefitItems
            luxuryFacilities="Best Renting Experince"
            theAdvantageOfHiringAWork="You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
            grommetIconsformNextLink={moreinfo}
            propFlex="0.9562"
            propPadding="0px 13px 0px 0px"
            propMinWidth="193px"
            propWidth="unset"
          />
          <BenefitItems
            luxuryFacilities="Many Choices"
            theAdvantageOfHiringAWork="We provide many unique work space choices so that you can choose the workspace to your liking."
            grommetIconsformNextLink={moreinfo}
            propFlex="unset"
            propPadding="unset"
            propMinWidth="unset"
            propWidth="284px"
          />
        </div>
      </div>
    </section>
  );
};

AttributeValues1.propTypes = {
  className: PropTypes.string,
};

export default AttributeValues1;