import PropTypes from "prop-types";
import downarrownav from "../assets/images/downarrownav.png";
import cartnav from "../assets/images/cartnav.png";
import profile from "../assets/images/profile.png";
import search from "../assets/images/akar-icons_search.png";
import colorchange from "../assets/images/colorchange.png";
import colorchange2 from "../assets/images/colorchange2.png";
import colorchange3 from "../assets/images/colorchange3.png";

const AttributeValues = ({ className = "" }) => {
  return (
    <section
      className={`w-[1394px] flex flex-row items-start justify-end pt-0 px-[34px] pb-[254px] box-border max-w-full text-center text-61xl text-white font-poppins mq800:pb-[107px] mq800:box-border mq1150:pb-[165px] mq1150:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col  items-start justify-start gap-[90px] max-w-full mq450:gap-[22px] mq800:gap-[45px]">
        <header className="w-[1281px] flex flex-row items-start justify-start gap-[8px] max-w-full text-left text-9xl text-white font-poppins mq1350:w-[677px]">
          <div className="w-[400px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
            <a className="[text-decoration:none] h-[42px] relative tracking-[0.01em] capitalize font-bold text-[inherit] inline-block whitespace-nowrap z-[1]">
              Cozyrnt
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 text-lg">
            <a className="[text-decoration:none] h-[27px] relative font-medium text-[inherit] inline-block z-[1]">
              Furniture
            </a>
          </div>
          <div className="w-[67px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
            <img
              className="w-[18px] h-[18px] relative overflow-hidden shrink-0 object-contain z-[1]"
              alt=""
              src={downarrownav}
            />
          </div>
          <nav className="m-0 flex-1 flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border max-w-full mq1350:hidden">
            <nav className="m-0 w-[319px] flex flex-row items-start justify-between gap-[20px] text-left text-lg text-white font-poppins mq800:hidden">
              <a className="[text-decoration:none] relative font-medium text-[inherit] z-[1]">
                Shop
              </a>
              <a className="[text-decoration:none] h-[27px] w-[82px] relative font-medium text-[inherit] inline-block whitespace-nowrap z-[1]">
                About Us
              </a>
              <a className="[text-decoration:none] h-[27px] w-[74px] relative font-medium text-[inherit] inline-block z-[1]">
                Contact
              </a>
            </nav>
          </nav>
          <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[17px] pl-0 cursor-pointer">
            <img
              className="w-10 h-[34px] relative z-[1]"
              loading="lazy"
              alt=""
              src={cartnav}
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 cursor-pointer">
            <img
              className="w-8 h-8 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src={profile}
            />
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[23px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
            <div className="w-[1235px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 h-52 relative text-inherit tracking-[-0.01em] leading-[130%] capitalize font-bold font-inherit inline-block z-[1] mq450:text-5xl mq450:leading-[42px] mq800:text-21xl mq800:leading-[62px]">
                <p className="m-0">Make your interior more</p>
                <p className="m-0">{`minimalistic & modern`}</p>
              </h1>
            </div>
            <div className="w-[1236px] flex flex-row items-start justify-center pt-0 px-5 pb-[31px] box-border max-w-full text-5xl text-gray-400">
              <div className="h-[76px] w-[606px] relative leading-[160%] inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[31px]">
                Turn your room with Cozyrnt into a lot more minimalist and
                modern with ease and speed
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
              <div className="w-[1234px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[344px] [backdrop-filter:blur(8px)] rounded-23xl bg-gray-600 box-border flex flex-row items-start justify-between py-[7px] pr-[9px] pl-[19px] max-w-full gap-[20px] z-[1] border-[0.9px] border-solid border-gray-500 mq450:flex-wrap">
                  <input
                    className="w-36 [border:none] [outline:none] bg-[transparent] h-[33.5px] flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 box-border font-poppins text-lg text-white"
                    placeholder="Search furniture"
                    type="text"
                  />
                  <div className="h-10 w-10 rounded-3xl bg-darkorange-100 flex flex-row items-start justify-start p-[11px] box-border">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src={search}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start relative gap-[102px] max-w-full mq450:gap-[25px] mq800:gap-[51px]">
                {/* <div className="w-[404px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <img
                    className="h-14 w-28 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src={colorchange}
                  />
                </div> */}
                {/* <img
                  className="w-14 h-14 absolute !m-[0] top-[81.6px] left-[174px] z-[1]"
                  loading="lazy"
                  alt=""
                  src={colorchange2}
                /> */}
                <div className="self-stretch flex flex-col items-end justify-start gap-[1px] max-w-full">
                  {/* <div className="self-stretch flex flex-row items-start justify-start">
                    <img
                      className="h-8 w-8 relative z-[1]"
                      loading="lazy"
                      alt=""
                      src={colorchange3}
                    />
                  </div> */}
                  <div className="w-[1180px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <img
                      className="h-8 w-8 relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/group-48095393.svg"
                    />
                  </div>
                  <img
                    className="w-[37px] h-[37px] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-48095394.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AttributeValues.propTypes = {
  className: PropTypes.string,
};

export default AttributeValues;