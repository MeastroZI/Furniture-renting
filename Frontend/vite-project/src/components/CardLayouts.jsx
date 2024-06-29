import PropTypes from "prop-types";

const CardLayouts = ({
  className = "",
  sakariasArmchair,
  group172,
  prices,
  bxbxPlus,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[21px] text-left text-base-8 text-gray-100 font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[36.5px]">
        <div className="flex flex-col items-start justify-start gap-[6.1px]">
          <div className="relative z-[2]">Chair</div>
          <div className="flex flex-col items-start justify-start text-2xl-3 text-gray-300 font-poppins">
            <div className="h-8 relative capitalize font-semibold inline-block z-[2] mq450:text-mid">
              {sakariasArmchair}
            </div>
            <img
              className="w-[103.6px] h-[18.3px] relative z-[3]"
              loading="lazy"
              alt=""
              src={group172}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-base-2 text-gray-300 font-poppins">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[10.6px]">
            <div className="flex flex-row items-start justify-start gap-[3px] shrink-0">
              <div className="relative font-semibold z-[2]">$</div>
              <div className="h-[25.9px] relative text-2xl-3 font-semibold inline-block z-[2] mq450:text-mid">
                {prices}
              </div>
            </div>
          </div>
          <div className="h-[48.7px] w-[48.7px] rounded-12xl bg-gray-300 flex flex-row items-start justify-start py-[12.2px] px-3 box-border shrink-0 z-[2]">
            <img
              className="h-[24px] w-[26px] relative overflow-hidden shrink-0"
              alt=""
              src={bxbxPlus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CardLayouts.propTypes = {
  className: PropTypes.string,
  sakariasArmchair: PropTypes.string,
  group172: PropTypes.string,
  prices: PropTypes.string,
  bxbxPlus: PropTypes.string,
};

export default CardLayouts;