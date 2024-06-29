import { useMemo } from "react";
import PropTypes from "prop-types";

const BenefitItems = ({
  className = "",
  luxuryFacilities,
  theAdvantageOfHiringAWork,
  grommetIconsformNextLink,
  propFlex,
  propPadding,
  propMinWidth,
  propWidth,
}) => {
  const benefitItemsStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propPadding, propMinWidth, propWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[193px] text-left text-6xl text-gray-700 font-poppins ${className}`}
      style={benefitItemsStyle}
    >
      <b className="h-9 relative inline-block mq450:text-lgi">
        {luxuryFacilities}
      </b>
      <div className="self-stretch flex flex-col items-start justify-start text-mid text-gray-1000">
        <div className="self-stretch h-[120px] relative leading-[185%] inline-block">
          {theAdvantageOfHiringAWork}
        </div>
        <div className="flex flex-row items-start justify-start gap-[7px] mt-4 text-2xl text-darkorange-100">
          <div className="relative leading-[185%] font-medium z-[1]">
            More Info
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-12 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={grommetIconsformNextLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

BenefitItems.propTypes = {
  className: PropTypes.string,
  luxuryFacilities: PropTypes.string,
  theAdvantageOfHiringAWork: PropTypes.string,
  grommetIconsformNextLink: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default BenefitItems;