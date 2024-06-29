import AttributeValues from "../components/AttributeValues";
import AttributeValues1 from "../components/AttributeValues1";
import SellSection from "./SellSection";
import Experience from "./Experience";
import hero from "../assets/images/HeroImg.png";
import moreinfo from "../assets/images/moreinfoarrow.svg"
import material1 from "../assets/images/material1.png"
import material2 from "../assets/images/material2.png"
import material3 from "../assets/images/material3.png"
import review1 from "../assets/images/clientreview1.png"
import review2 from "../assets/images/review2.png"
import review3 from "../assets/images/review3.png"
import union1 from "../assets/images/union1.png"
import profilereview from "../assets/images/reviewpic.png"
import star1 from "../assets/images/Star1.png"
import leftslider from "../assets/images/grommet-icons_form-next-link.png"
import reviewpic2 from "../assets/images/reviewpic2.png"
import reviewpic3 from "../assets/images/reviewpic3.png"
import facebook from "../assets/images/001-facebook.svg"
import instagram from "../assets/images/004-instagram.svg"
import twitter from "../assets/images/003-twitter.svg"
import rightslider from "../assets/images/rightslider.svg"



const HomePage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[50px] px-0 pb-0 box-border gap-[106px] leading-[normal] tracking-[normal] mq450:gap-[26px] mq800:gap-[52px]">
      <img
        className="w-full h-[1084px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={hero}
      />
      <AttributeValues />
      <AttributeValues1 />
      <SellSection />
      <Experience />
      <section className="w-[1380px] flex flex-row items-end justify-start pt-0 pb-[136px] pr-0 pl-5 box-border gap-[94px] max-w-full text-left text-lg text-darkorange-200 font-poppins mq450:gap-[23px] mq800:gap-[47px] mq800:pb-[88px] mq800:box-border mq1150:flex-wrap">
        <div className="w-[556px] flex flex-col items-start justify-start pt-0 px-0 pb-[123px] box-border min-w-[556px] min-h-[490px] max-w-full mq800:pb-20 mq800:box-border mq800:min-w-full mq1150:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[27.4px] max-w-full">
            <div className="h-[27px] relative tracking-[0.18em] uppercase font-semibold inline-block">
              Materials
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-23xl text-gray-200 mq800:gap-[19px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[21.8px] max-w-full">
                <h1 className="m-0 w-[473px] mb-6 h-40 relative text-25xl capitalize font-bold font-inherit inline-block max-w-full mq450:text-6xl mq800:text-15xl">
                  Very serious materials for making furniture
                </h1>
                <div className=" self-stretch h-[75px] mt-6 mb-2  relative text-lg leading-[185%] text-gray-1000 inline-block z-[1]">
                  Because Cozyrnt was very serious about designing furniture for
                  our environment, using a very expensive and famous capital but
                  at a relatively low price
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[7px] text-sm text-darkorange-100">
                <div className="relative leading-[185%] font-medium">
                  More Info
                </div>
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
        </div>
        <div className="flex-1 flex flex-row items-end justify-start gap-[42px] min-w-[461px] max-w-full mq800:flex-wrap mq800:gap-[21px] mq800:min-w-full">
          <div className="w-[223px] flex flex-col items-start justify-start gap-[26px] min-w-[223px] mq800:flex-1">
            <div className="self-stretch h-[250px] flex flex-row items-start justify-start relative shrink-0">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                {/* <img
                  className="absolute top-[67px] left-[23px] rounded-10xl w-44 h-[183px] object-contain"
                  loading="lazy"
                  alt="hi"
                  src=""
                /> */}
                <img
                  className="absolute top-[0px] left-[0px] rounded-[14.25px] w-[223px] h-[300px] object-contain z-[1]"
                  alt=""
                  src={material1}
                />
              </div>
            </div>
            <div className="self-stretch h-[338.4px] flex flex-row items-start justify-start relative shrink-0">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute top-[37px] left-[22.8px] rounded-10xl w-[176.7px] h-[301.4px] object-contain"
                  loading="lazy"
                  alt=""
                  src={material2}
                />
                {/* <img
                  className="absolute top-[0px] left-[0px] rounded-[14.25px] w-[223px] h-[317px] object-contain z-[1]"
                  alt=""
                  src="/rectangle-1450-1@2x.png"
                /> */}
              </div>
            </div>
          </div>
          <div className="h-[541px] flex-1 relative min-w-[289px] max-w-full">
            <img
              className="absolute top-[118px] left-[27px] rounded-30xl w-[555px] h-[423px] object-contain"
              loading="lazy"
              alt=""
              src=""
            />
            <div className="absolute top-[422px] left-[667px] rounded-xl bg-whitesmoke-100 w-[495px] h-[422px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
            <img
              className="absolute top-[66px] left-[0px] rounded-xl w-[629px] h-[445px] object-contain z-[2]"
              alt=""
              src={material3}
            />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[110.6px] pr-5 pl-[21px] box-border max-w-full text-center text-lg text-darkorange-200 font-poppins mq450:pb-[47px] mq450:box-border mq800:pb-[72px] mq800:box-border">
        <div className="w-[1237px] flex flex-col items-start justify-start gap-[49px] max-w-full mq800:gap-[24px]">
          <div className="w-[1213px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[413px] flex flex-col items-start justify-start gap-[15px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                <div className="h-[27px] relative tracking-[0.18em] uppercase font-semibold inline-block">
                  Testimonials
                </div>
              </div>
              <h1 className="m-0 self-stretch h-[63px] relative text-23xl capitalize font-bold font-inherit text-gray-200 inline-block mq450:text-6xl mq800:text-15xl">
                Our Client Reviews
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[38.5px] max-w-full text-gray-200 mq800:gap-[19px] mq1150:flex-wrap">
            <div className="h-[506px] flex-1 relative min-w-[257px] max-w-full mq1150:flex-1">
              <div className="absolute top-[0px] left-[25px] w-[370px] flex flex-row items-start justify-start max-w-full">
                <div className="h-[506px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[126px] left-[36.9px] rounded-[44.39px] w-[300px] h-[380px] object-contain"
                    alt="hi"
                    src=""
                  />
                  <div className="absolute top-[0px] left-[0px] w-full h-[476px]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-[18.12px] w-full h-full object-contain"
                      alt="hi"
                      src={review1}
                    />
                    <div className="absolute top-[219px] left-[18px] w-[334px] h-[239px]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full z-[2]"
                        alt=""
                        src={union1}
                      />
                      <div className="absolute top-[8px] left-[142px] w-[50px] h-[55px] z-[3] flex items-center justify-center">
                        <img
                          className="w-full h-full z-[3] object-contain absolute left-[0px] top-[3px] [transform:scale(1.52)]"
                          loading="lazy"
                          alt=""
                          src={profilereview}
                        />
                      </div>
                      <b className="absolute top-[71px] left-[121px] capitalize z-[3]">
                        Bang Upin
                      </b>
                      <div className="absolute top-[99px] left-[108px] text-xs text-gray-800 z-[3]">
                        Pedagang Asongan
                      </div>
                      <blockquote className="m-0 absolute top-[135px] left-[42px] text-sm text-gray-1000 inline-block w-[252px] z-[3]">
                        “Terimakasih banyak, kini ruanganku menjadi lebih mewah
                        dan terlihat mahal“
                      </blockquote>
                      <img
                        className="absolute top-[208px] left-[122px] w-3.5 h-3.5 overflow-hidden z-[3]"
                        loading="lazy"
                        alt=""
                        src={star1}
                      />
                      <img
                        className="absolute top-[208px] left-[141px] w-3.5 h-3.5 overflow-hidden z-[3]"
                        loading="lazy"
                        alt=""
                        src={star1}
                      />
                      <img
                        className="absolute top-[208px] left-[160px] w-3.5 h-3.5 overflow-hidden z-[3]"
                        loading="lazy"
                        alt=""
                        src={star1}
                      />
                      <img
                        className="absolute top-[208px] left-[179px] w-3.5 h-3.5 overflow-hidden z-[3]"
                        alt=""
                        src={star1}
                      />
                      <img
                        className="absolute top-[208px] left-[198px] w-3.5 h-3.5 overflow-hidden z-[3]"
                        alt=""
                        src={star1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[193.6px] left-[50px] shadow-[0px_7px_19.53px_rgba(0,_0,_0,_0.06)] rounded-[26.09px] bg-white w-[50px] h-[50px] flex flex-row items-start justify-start py-3 px-[11px] box-border [transform:_rotate(180deg)] [transform-origin:0_0] z-[2]">
                <img
                  className="h-[26.1px] w-[26.1px] relative overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
                  alt=""
                  src={leftslider}
                />
              </div>
            </div>
            <div className="h-[476px] w-[370px] flex flex-row items-end justify-start py-[18px] px-[17px] box-border relative max-w-full">
              <img
                className="h-[380px] w-[300px] absolute !m-[0] bottom-[-30px] left-[33.9px] rounded-[44.39px] object-contain"
                alt=""
                src="/unsplashjaxs8tk5iww@2x.png"
              />
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[18.12px] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                alt=""
                src={review2}
              />
              <div className="flex-1 flex flex-col items-end justify-start pt-[71px] px-10 pb-[17px] box-border relative gap-[18px] max-w-full">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full z-[2]"
                    alt=""
                    src={union1}
                  />
                  <div className="absolute top-[8px] left-[142px] w-[50px] h-[55px] z-[3] flex items-center justify-center">
                    <img
                      className="w-full h-full z-[3] object-contain absolute left-[0px] top-[3px] [transform:scale(1.52)]"
                      loading="lazy"
                      alt=""
                      src={reviewpic2}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 pr-[68px] pl-[71px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex flex-col items-start justify-start gap-[1px]">
                    <b className="relative capitalize z-[3]">Ibuk Sukijan</b>
                    <div className="relative text-xs text-gray-800 z-[3]">
                      Ibu Rumah Tangga
                    </div>
                  </div>
                </div>
                <div className="self-stretch   flex flex-col items-start justify-start pt-0 px-0 pb-[1px] relative text-xs text-gray-1000">
                  <blockquote className="m-0  self-stretch h-[84px] relative inline-block z-[3]">
                    “Makasih Panto, aku sekarang berasa tinggal di apartment
                    karena barang-barang yang terlihat mewah“
                  </blockquote>
                  <img
                    className="w-3.5 h-3.5 absolute !m-[0] bottom-[0px] left-[80px] overflow-hidden shrink-0 z-[4]"
                    alt=""
                    src={star1}
                  />
                  <img
                    className="w-3.5 h-3.5 absolute !m-[0] bottom-[0px] left-[99px] overflow-hidden shrink-0 z-[4]"
                    alt=""
                    src={star1}
                  />
                  <img
                    className="w-3.5 h-3.5 absolute !m-[0] bottom-[0px] left-[118px] overflow-hidden shrink-0 z-[4]"
                    alt=""
                    src={star1}
                  />
                  <img
                    className="w-3.5 h-3.5 absolute !m-[0] right-[101px] bottom-[0px] overflow-hidden shrink-0 z-[4]"
                    alt=""
                    src={star1}
                  />
                  <img
                    className="w-3.5 h-3.5 absolute !m-[0] right-[82px] bottom-[0px] overflow-hidden shrink-0 z-[4]"
                    alt=""
                    src={star1}
                  />
                </div>
              </div>
            </div>
            <div className="h-[476px] flex-1 relative min-w-[257px] max-w-full mq1150:flex-1">
              <div className="absolute top-[0px] left-[0px] w-[370px] h-[476px] flex flex-row items-end justify-start py-[18px] px-[17px] box-border max-w-full">
                <img
                  className="h-[380px] w-[300px] absolute !m-[0] bottom-[-30px] left-[33.9px] rounded-[44.39px] object-contain"
                  alt=""
                  src="/unsplashh2-3dl9ylpu@2x.png"
                />
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[18.12px] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                  alt=""
                  src={review3}
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[71px] px-[42px] pb-[62px] box-border relative gap-[18px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-[72px]">
                    <div className="flex flex-col items-end justify-start gap-[1px]">
                      <div className="flex flex-row items-start justify-end py-0 pr-[11px] pl-3">
                        <b className="relative capitalize z-[3]">Mpok Ina</b>
                      </div>
                      <div className="relative text-xs text-gray-800 z-[3]">
                        Karyawan Swasta
                      </div>
                    </div>
                  </div>
                  <blockquote className="m-0 self-stretch relative text-sm text-gray-1000 z-[3]">
                    “It is very much affordable for my not-so-much pockets.“
                  </blockquote>
                  <div className="w-full h-full absolute !m-[0] top-[0px] right-[2px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full z-[2]"
                      alt=""
                      src={union1}
                    />
                    <div className="absolute top-[8px] left-[142px] w-[50px] h-[55px] z-[3] flex items-center justify-center">
                      <img
                        className="w-full h-full z-[3] object-contain absolute left-[0px] top-[3px] [transform:scale(1.52)]"
                        loading="lazy"
                        alt=""
                        src={reviewpic3}
                      />
                    </div>
                    <img
                      className="absolute top-[208px] left-[122px] w-3.5 h-3.5 overflow-hidden z-[3]"
                      alt=""
                      src={star1}
                    />
                    <img
                      className="absolute top-[208px] left-[141px] w-3.5 h-3.5 overflow-hidden z-[3]"
                      alt=""
                      src={star1}
                    />
                    <img
                      className="absolute top-[208px] left-[160px] w-3.5 h-3.5 overflow-hidden z-[3]"
                      alt=""
                      src={star1}
                    />
                    <img
                      className="absolute top-[208px] left-[179px] w-3.5 h-3.5 overflow-hidden z-[3]"
                      alt=""
                      src={star1}
                    />
                    <img
                      className="absolute top-[208px] left-[198px] w-3.5 h-3.5 overflow-hidden z-[3]"
                      alt=""
                      src={star1}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[143.6px] left-[345px] shadow-[0px_7px_19.53px_rgba(0,_0,_0,_0.06)] rounded-[26.09px] bg-white w-[50px] h-[50px] flex flex-row items-start justify-start py-3 px-[11px] box-border z-[2]">
                <img
                  className="h-[26.1px] w-[26.1px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={rightslider}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-whitesmoke-100 overflow-hidden flex flex-col items-center justify-start pt-[118px] pb-[55px] pr-[300px] pl-[188px] box-border gap-[118px] max-w-full text-left text-mini text-gray-1000 font-poppins mq450:gap-[29px] mq450:pt-[77px] mq450:px-5 mq450:pb-9 mq450:box-border mq800:gap-[59px] mq800:pl-[94px] mq800:pr-[89px] mq800:box-border">
        <div className="w-[1440px] h-[462px] relative bg-whitesmoke-100 hidden max-w-full" />
        <div className="w-[1042px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1150:flex-wrap mq1150:justify-center">
          <div className="w-[335px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[22px] max-w-full text-9xl text-gray-200">
            <h3 className="m-0 h-[42px] relative text-25xl tracking-[0.01em] capitalize font-bold font-inherit inline-block z-[1] mq450:text-[22px]">
              Cozyrnt
            </h3>
            <div className="w-[293px] h-[72px] mt-6 relative text-mid leading-[160%]  font-medium text-gray-1000 inline-block z-[1]">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </div>
          </div>
          <div className="w-[133px] mt-4   flex flex-col items-start justify-start gap-[16px]">
            <div className="h-[26px] relative text-5xl tracking-[-0.23px] text-sandybrown inline-block z-[1]">
              Services
            </div>
            <div className="self-stretch mt-2 relative leading-[160%] font-medium z-[1]">
              Email Marketing
            </div>
            <div className="relative leading-[160%] font-medium z-[1]">
              Campaigns
            </div>
            <div className="relative leading-[160%] font-medium z-[1]">
              Branding
            </div>
          </div>
          <div className="w-[133px] mt-4 flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch h-[26px] relative text-5xl tracking-[-0.23px] text-sandybrown inline-block z-[1]">
              Furniture
            </div>
            <div className="w-[67.5px] mt-2 relative leading-[160%] font-medium inline-block z-[1]">
              Beds
            </div>
            <div className="w-[73.2px] relative leading-[160%] font-medium inline-block z-[1]">
              Chair
            </div>
            <div className="w-[32.8px] relative leading-[160%] font-medium inline-block z-[1]">
              All
            </div>
          </div>
          <div className="mt-4 flex flex-col items-start justify-start gap-[15.7px]">
            <div className="h-[26px] relative text-5xl tracking-[-0.23px] text-sandybrown inline-block z-[1]">
              Follow Us
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-[5px]">
              <div className="flex flex-row items-start justify-start gap-[16.1px]">
                <img
                  className="h-[19.8px] w-[9.9px] mt-3 relative shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src={facebook}
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative mt-2 leading-[160%] font-medium shrink-0 z-[1]">
                    Facebook
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[11.4px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-[19.6px] h-[15.9px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src={twitter}
                />
              </div>
              <div className="relative leading-[160%] font-medium z-[1]">
                Twitter
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src={instagram}
                />
                <div className="relative leading-[160%] font-medium z-[1]">
                  Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-gray-900 mq800:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[-0.2px] mix-blend-normal z-[1]">
              Copyright © 2024
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px] text-gray-1000">
            <div className="relative leading-[160%] font-medium z-[1]">{`Terms & Conditions`}</div>
            <div className="relative leading-[160%] font-medium z-[1]">
              Privacy Policy
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;