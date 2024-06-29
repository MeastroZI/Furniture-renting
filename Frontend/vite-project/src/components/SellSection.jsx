import CardLayouts from "./CardLayouts";
import PropTypes from "prop-types";
import sakarischair from "../assets/images/sakarischair.svg";
import stars from "../assets/images/stars.svg"
import plus from "../assets/images/bx_bx-plus.svg"
import leftslider from "../assets/images/grommet-icons_form-next-link.png"
import baltsarchair from "../assets/images/baltsarchair.png"
import anjaychair from "../assets/images/anjaychair.png"
import lastchair from "../assets/images/lastchair.png"
import rightslider from "../assets/images/rightslider.svg"

const SellSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch  flex flex-row items-start justify-start pt-0 px-0 pb-[136px] box-border max-w-full text-left text-23xl text-gray-200 font-poppins mq800:pb-[57px] mq800:box-border mq1150:pb-[88px] mq1150:box-border ${className}`}
    >
      <div className="flex-1 bg-whitesmoke-100 flex flex-col items-center justify-start py-[50px] px-24 box-border gap-[60px] max-w-full mq450:gap-[15px] mq450:py-[21px] mq450:px-5 mq450:box-border mq800:gap-[30px] mq800:pl-12 mq800:pr-12 mq800:box-border mq1150:pt-8 mq1150:pb-8 mq1150:box-border">
        <div className="w-[1440px] h-[906px] relative bg-whitesmoke-100 hidden max-w-full" />
        <div className="w-[1210px] flex flex-row items-start justify-center pt-0 px-0 pb-5 box-border max-w-full">
          <div className="w-[428px] flex flex-col items-start justify-start gap-[21px] max-w-full">
            <h1 className="m-0 self-stretch h-[63px] relative text-inherit font-bold font-inherit inline-block z-[1] mq450:text-6xl mq800:text-15xl">
              Best Selling Product
            </h1>
            <div className="flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full text-lg text-gray-1000">
              <div className="rounded-25xl bg-whitesmoke-200 overflow-x-auto flex flex-row items-start justify-start p-1.5 box-border max-w-full z-[1]">
                <div className="rounded-13xl bg-white flex flex-row items-start justify-start py-1.5 px-[17px]">
                  <div className="relative leading-[185%] font-medium whitespace-nowrap">
                    Chair
                  </div>
                </div>
                <div className="rounded-13xl flex flex-row items-start justify-start py-1.5 px-5">
                  <div className="relative leading-[185%] whitespace-nowrap">
                    Beds
                  </div>
                </div>
                <div className="rounded-13xl flex flex-row items-start justify-start py-1.5 px-[21px]">
                  <div className="relative leading-[185%] whitespace-nowrap">
                    Sofa
                  </div>
                </div>
                <div className="rounded-13xl flex flex-row items-start justify-start py-1.5 px-4">
                  <div className="relative leading-[185%] whitespace-nowrap">
                    Lamp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-center gap-[42px] max-w-full text-base-8 text-gray-100 font-inter mq800:gap-[21px] mq1350:flex-wrap">
          <div className="h-[492px] w-[268.1px] relative">
            <div className="absolute top-[50.3px] left-[0px] rounded-xl bg-white w-full h-[441.7px] flex flex-col items-start justify-start pt-0 px-0 pb-[27.5px] box-border gap-[13.7px] z-[1]">
              <div className="self-stretch h-[441.7px] relative rounded-xl bg-white hidden z-[0]" />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                alt=""
                src={sakarischair}
              />
              <CardLayouts
                sakariasArmchair="Sakarias Armchair"
                group172={stars}
                prices="392"
                bxbxPlus={plus}
              />
              <div className="w-[50px] h-[50px] !m-[0] absolute top-[220.7px] left-[25px] shadow-[0px_7px_19.53px_rgba(0,_0,_0,_0.06)] rounded-[26.09px] bg-white flex flex-row items-start justify-start py-3 px-[11px] box-border [transform:_rotate(180deg)] [transform-origin:0_0] z-[4]">
                <img
                  className="h-[26.1px] w-[26.1px] relative overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
                  alt=""
                  src={leftslider}
                />
              </div>
            </div>
            {/* <div className="absolute top-[0px] left-[24.4px] w-[217.9px] h-[255.9px] z-[3]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-contain"
                alt="hi"
                src="/sakariasarmchairblackspordadarkgray--0729767-pe737131-s5-adobespark@2x.png"
              />
              <div className="absolute top-[181.3px] left-[33.5px] w-[150.8px] h-[72.4px] z-[1] flex items-center justify-center">
                <img
                  className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.674)]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-57.svg"
                />
              </div>
            </div> */}
          </div>
          <div className="h-[492px] w-[268.1px] relative">
            <div className="absolute top-[50.3px] left-[0px] rounded-xl bg-white w-full h-[441.7px] flex flex-col items-start justify-start pt-0 px-0 pb-[27.5px] box-border gap-[13.7px] z-[1]">
              <div className="self-stretch h-[441.7px] relative rounded-xl bg-white hidden" />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                alt=""
                src={baltsarchair}
              />
              <CardLayouts
                sakariasArmchair="Baltsar Chair"
                group172={stars}
                prices="299"
                bxbxPlus={plus}
              />
            </div>
            {/* <div className="absolute top-[0px] left-[24.4px] w-[217.9px] h-[255.9px] z-[3]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-contain"
                alt=""
                src="/sakariasarmchairblackspordadarkgray--0729767-pe737131-s5-adobespark-1@2x.png"
              />
              <div className="absolute top-[205.6px] left-[34.2px] w-[151.6px] h-[43.4px] z-[1] flex items-center justify-center">
                <img
                  className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(2.126)]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-57-1.svg"
                />
              </div>
            </div> */}
          </div>
          <div className="h-[492px] w-[268.1px] relative">
            <div className="absolute top-[50.3px] left-[0px] rounded-xl bg-white w-full h-[441.7px] flex flex-col items-start justify-start pt-0 px-0 pb-[27.5px] box-border gap-[13.7px] z-[1]">
              <div className="self-stretch h-[441.7px] relative rounded-xl bg-white hidden" />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                alt=""
                src={anjaychair}
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[36.5px]">
                  <div className="flex flex-col items-start justify-start gap-[6.1px]">
                    <div className="relative z-[2]">Chair</div>
                    <div className="h-[25.9px] relative text-2xl-3 font-semibold font-poppins text-gray-300 inline-block shrink-0 z-[2] mq450:text-mid">
                      Anjay Chair
                    </div>
                    <img
                      className="w-[103.6px] h-[18.3px] relative z-[2]"
                      loading="lazy"
                      alt=""
                      src={stars}
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-base-2 text-gray-300 font-poppins">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[10.6px]">
                      <div className="flex flex-row items-start justify-start gap-[3px] shrink-0">
                        <div className="relative font-semibold z-[2]">$</div>
                        <div className="h-[25.9px] w-[41.1px] relative text-2xl-3 font-semibold inline-block shrink-0 z-[2] mq450:text-mid">
                          519
                        </div>
                      </div>
                    </div>
                    <div className="h-[48.7px] w-[48.7px] rounded-12xl bg-gray-300 flex flex-row items-start justify-start py-[12.2px] px-3 box-border shrink-0 z-[2]">
                      <img
                        className="h-[24.4px] w-[24.4px] relative overflow-hidden shrink-0"
                        alt=""
                        src={plus}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="absolute top-[0px] left-[27px] w-[223px] h-[252.9px] z-[3]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-contain"
                alt=""
                src="/sakariasarmchairblackspordadarkgray--0729767-pe737131-s5-adobespark-2@2x.png"
              />
              <div className="absolute top-[192.7px] left-[36.9px] w-[148.5px] h-[60.2px] z-[1] flex items-center justify-center">
                <img
                  className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.81)]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-57-2.svg"
                />
              </div>
            </div> */}
          </div>
          <div className="h-[441.7px] w-[292.7px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-white w-[268.1px] h-[441.7px] flex flex-col items-start justify-start pt-0 px-0 pb-[27.5px] box-border gap-[13.7px] z-[1]">
              <div className="self-stretch h-[441.7px] relative rounded-xl bg-white hidden z-[0]" />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                alt=""
                src={lastchair}
              />
              <CardLayouts
                sakariasArmchair="Nyantuy Chair"
                group172={stars}
                prices="921"
                bxbxPlus={plus}
              />
              {/* <img
                className="w-[calc(100%_-_27.6px)] h-[289px] absolute !m-[0] top-[-50.3px] right-[14.5px] left-[13.1px] max-w-full overflow-hidden shrink-0 object-contain z-[3]"
                loading="lazy"
                alt=""
                src="/group-3742@2x.png"
              /> */}
            </div>
            <div className="absolute top-[170.7px] left-[242.7px] shadow-[0px_7px_19.53px_rgba(0,_0,_0,_0.06)] rounded-[26.09px] bg-white w-[50px] h-[50px] flex flex-row items-start justify-start py-3 px-[11px] box-border z-[4]">
              <img
                className="h-[26.1px] w-[26.1px] relative overflow-hidden shrink-0"
                alt=""
                src={rightslider}
              />
            </div>
          </div>
        </div>
        <div className="w-[1235px] flex flex-row items-start justify-center max-w-full text-lg text-darkorange-100">
          <div className="flex flex-row items-start justify-start gap-[5px]">
            <div className="relative leading-[185%] font-medium z-[1]">
              View All
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <img
                className="w-12 h-6 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src={rightslider}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SellSection.propTypes = {
  className: PropTypes.string,
};

export default SellSection;