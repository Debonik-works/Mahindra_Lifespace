

import svgPaths from "./svg-rf3hyryx6x";
import imgImage3 from "@/assets/b7cc202f00c639e8d1c10ac5e6e0b6ca9d974ecc.png";
import imgRectangle19 from "@/assets/4c016faccdacfa5b4b75b21e42954119b52b3e58.png";
import imgImage4 from "@/assets/ef5fab599da1461babc8d78af519985c7dcf31bb.png";
import img7 from "@/assets/a607d4da2bd0bbf94146dbb55346a24c7fd79e14.png";
import imgRectangle63 from "@/assets/01f06dd93195733a6bf18c52e5ab013336cd8186.png";
import imgRectangle62 from "@/assets/34d0ac30d3fdaf3b6a6383a9fb085f679211c008.png";
import imgMpovementSection from "@/assets/415b6d00158141c2286e3f3b3bb3dc2d3ba2dfee.png";
import imgImage17 from "@/assets/939fc0bbd2dca790cfa56405ebe66c64bebf2f53.png";
import imgFrame24 from "@/assets/daf93b865d4b39550a9a48508f4016cbb263cb71.png";
import imgRectangle64 from "@/assets/d4df73e0bb5607d02bd8e614a728cae70df00696.png";
import imgImages from "@/assets/a34c3d67c3b760deeb5890999efccceb361d7155.png";
import imgRectangle67 from "@/assets/d55e031fb938267c3cfa8e57281ecbcc1241f835.png";
import imgRectangle70 from "@/assets/b3313b666d29c044ab6b708c27667ae975ebf7da.png";
import imgRectangle65 from "@/assets/6550e6b4a3afe9337004a5de39e085f24f34278e.png";
import imgImage16 from "@/assets/2999d463e2f8a092c45763ddc24730d3ce89ff17.png";
import imgRectangle76 from "@/assets/148dd6b6be1dd668adda0f3bf161bea79aa0222d.png";
import imgRectangle71 from "@/assets/b52bd7eac260fe7d93e5bbf28320916dece154ac.png";
import imgImages1 from "@/assets/94ef86ebcf8bb751e374b8c2c0142e5e3b2d21a9.png";
import imgRectangle73 from "@/assets/a50579942cd02462603a3ef2f677ceaf72d1f76e.png";
import imgRectangle74 from "@/assets/b3b5980a1a244fe6c4d548fd8edfdb43d056a29a.png";
import imgFrame31 from "@/assets/e6ead2c6a6eaeeb7cf4bb2cc67c2820d8881c16d.png";
import imgFrame32 from "@/assets/69c1c9e6161ebf4d1bd9936e8a73f3769feead0a.png";
import imgRectangle68 from "@/assets/367c749b142b11886d59a9e9668d2f5c9b9424e6.png";
import imgRectangle72 from "@/assets/527021743e61933bae027cfae96bccab45fdd249.png";
import imgRectangle75 from "@/assets/9b7eb12eb535a2ac793b10b0f43762cf3631e036.png";
import imgRectangle864 from "@/assets/ef4b0a5d56b51c6154c8364b961acb93bd084477.png";

function Asset() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="asset">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1145)" id="asset">
          <g id="vector">
            <path clipRule="evenodd" d={svgPaths.p21d83c80} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2f55f800} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p40b4c80} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1145">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <Asset />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="bg-[#ed3237] min-h-[48px] min-w-[48px] relative rounded-[999px] shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
          <Icon />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            +91 9901717339
          </p>
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
      <Wrapper />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="button">
      <Root />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="button">
      <Button1 />
    </div>
  );
}

function TopNav() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-between left-0 px-[80px] py-[12px] top-0 w-[1440px]" data-name="top nav">
      <div className="h-[47.946px] relative shrink-0 w-[353.723px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <Button />
    </div>
  );
}

function Frame132() {
  return (
    <div className="absolute h-[600px] left-[850px] top-[150px] w-[420px]">
      <div className="absolute bottom-0 h-[600px] left-0 pointer-events-none rounded-tl-[400px] rounded-tr-[400px] w-[420px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full" src={imgRectangle19} />
        <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-[-8px] rounded-tl-[408px] rounded-tr-[408px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Playfair_Display:Medium',sans-serif] leading-[0] relative shrink-0 text-[#fafafa] text-[56px]">
        <span className="leading-[1.2] text-[#ed3237]">Mahindra</span>
        <span className="leading-[1.2]">{` `}</span>
        <span className="leading-[1.2]">Blossom</span>
      </p>
      <p className="font-['Instrument_Sans:Medium_Italic',sans-serif] italic leading-[1.45] min-w-full relative shrink-0 text-[#fffcfd] text-[18px] text-center tracking-[2.88px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        HOME OF POSITIVE ENERGY
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative shrink-0">
      <div className="absolute h-[51px] left-0 top-[-0.49px] w-[246px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 246 51">
          <g id="Rectangle 61">
            <path d="M10 0H246L236 51H0L10 0Z" fill="var(--fill-0, white)" fillOpacity="0.12" />
            <path d={svgPaths.p3e4a6c00} stroke="var(--stroke-0, white)" strokeOpacity="0.24" />
          </g>
        </svg>
      </div>
      <p className="font-['Instrument_Sans:Regular','Noto_Sans:Bold',sans-serif] font-normal leading-[0] relative shrink-0 text-[#fffcfd] text-[0px] text-center tracking-[1.6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:Medium','Noto_Sans:Bold',sans-serif] font-medium leading-[1.45] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
        <span className="font-['Instrument_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[24px] tracking-[1.92px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`₹1.88cr `}</span>
        <span className="font-['Instrument_Sans:Italic','Noto_Sans:Bold',sans-serif] italic leading-[1.45] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Onwards
        </span>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame />
      <div className="aspect-[1571/102] relative shrink-0 w-full" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#fffcfd] text-[18px] text-center tracking-[1.44px] w-[345px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`2, 3 & 4BHK premium homes in Hopefarm Jn., Whitefield, `}</p>
      <Frame10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#fffcfd] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        8 Acres | 1 Towers | 6 Wings | 733 Units
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#fffcfd] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Make it yours at just 7.5% down payment
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#fffcfd] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Abutting Hopefarm metro station
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#fffcfd] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        IGBC Gold rated green home
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#fffcfd] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        75+ Years of Mahindra Trust
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame2 />
      <Frame3 />
      <Frame7 />
      <Frame9 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bottom-[100.09px] content-stretch flex flex-col gap-[40px] items-start left-[2px] px-[80px]">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white h-[750px] overflow-clip relative shrink-0 w-full" data-name="Hero">
      <div className="-translate-x-1/2 absolute h-[750px] left-1/2 top-0 w-[1500px]" data-name="7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
      </div>
      <div className="absolute flex h-[753px] items-center justify-center left-0 top-[-3px] w-[685px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="backdrop-blur-[0px] bg-gradient-to-t from-[rgba(0,0,0,0)] h-[685px] to-1/2 to-black w-[753px]" />
        </div>
      </div>
      <TopNav />
      <Frame132 />
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[12px] items-center relative shrink-0 text-[#4b4d4c] w-full whitespace-pre-wrap">
      <p className="font-['Playfair_Display:Medium',sans-serif] leading-[0] relative shrink-0 text-[56px] w-[640px]">
        <span className="leading-[1.2] text-[#ed3237]">About</span>
        <span className="leading-[1.2]">{` `}</span>
        <span className="leading-[1.2]">Mahindra</span>
        <span className="leading-[1.2]">{` `}</span>
        <span className="leading-[1.2]">Blossom</span>
      </p>
      <p className="font-['Instrument_Sans:Medium_Italic',sans-serif] italic leading-[1.45] min-w-full relative shrink-0 text-[18px] text-center tracking-[2.88px] uppercase w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Premium Apartments in Whitefield, BEngalURU
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[800px] z-[2]">
      <Frame11 />
      <div className="aspect-[1571/102] relative shrink-0 w-full" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4b4d4c] text-[16px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] text-[#4b4d4c]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Mahindra
          </span>
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] text-[#4b4d4c]" style={{ fontVariationSettings: "'wdth' 100" }}>{` Blossom`}</span>
          <span className="leading-[1.45]">{` is a thoughtfully designed `}</span>
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45]" style={{ fontVariationSettings: "'wdth' 100" }}>
            premium residential apartment project in Whitefield, Bangalore,
          </span>
          <span className="leading-[1.45]">{` developed by `}</span>
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Mahindra Lifespaces,
          </span>
          <span className="leading-[1.45]">{` part of the trusted Mahindra Group. Known for quality construction, transparency, and sustainable development, Mahindra Lifespaces has delivered landmark residential communities across India.`}</span>
        </p>
        <p className="leading-[1.45] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="leading-[1.45]">{`Strategically located `}</span>
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45]" style={{ fontVariationSettings: "'wdth' 100" }}>
            near Hope Farm Junction, Whitefield
          </span>
          <span className="leading-[1.45]">{`, Mahindra Blossom offers `}</span>
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45]" style={{ fontVariationSettings: "'wdth' 100" }}>{`2 BHK, 3 BHK, and 4 BHK luxury apartments `}</span>
          <span className="leading-[1.45]">{`crafted for modern families, professionals, and long-term investors. The project blends `}</span>
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45]" style={{ fontVariationSettings: "'wdth' 100" }}>{`urban convenience with green living, `}</span>
          <span className="leading-[1.45]">creating a calm, secure, and future-ready residential environment.</span>
        </p>
        <p className="leading-[1.45] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="leading-[1.45]">With excellent connectivity to</span>
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45]" style={{ fontVariationSettings: "'wdth' 100" }}>{` ITPL, major tech parks, schools, hospitals, shopping hubs, and fully operational metro station `}</span>
          <span className="leading-[1.45]">{`, Mahindra Blossom ensures everyday comfort while offering strong potential for `}</span>
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45]" style={{ fontVariationSettings: "'wdth' 100" }}>
            property appreciation and rental demand
          </span>
          <span className="leading-[1.45]">.</span>
        </p>
        <p className="leading-[1.45] mb-0">&nbsp;</p>
        <p className="font-['Instrument_Sans:SemiBold_Italic',sans-serif] font-semibold italic">
          <span className="leading-[1.45]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Mahindra Blossom is not just a home
          </span>
          <span className="leading-[1.45]" style={{ fontVariationSettings: "'wdth' 100" }}>{` — it’s a lifestyle upgrade backed by the reliability of a trusted developer.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[549px] left-[840px] top-0 w-[400px] z-[1]">
      <div className="-translate-y-1/2 absolute flex h-[529.993px] items-center justify-center left-[-65px] top-[calc(50%-24.5px)] w-[461.63px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1479" } as React.CSSProperties}>
        <div className="flex-none rotate-[-7.83deg]">
          <div className="h-[480px] relative rounded-[24px] w-[400px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle63} />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute h-[480px] left-0 pointer-events-none rounded-[24px] top-[calc(50%+0.5px)] w-[400px]">
        <div className="absolute inset-0 overflow-hidden rounded-[24px]">
          <img alt="" className="absolute h-full left-[-187.47%] max-w-none top-[-0.05%] w-[303.16%]" src={imgRectangle62} />
        </div>
        <div aria-hidden="true" className="absolute border-4 border-[#fffcfd] border-solid inset-0 rounded-[24px]" />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex gap-[40px] isolate items-center relative shrink-0 w-full" data-name="about">
      <Frame12 />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[12px] items-center relative shrink-0 text-[#4b4d4c] w-full">
      <p className="font-['Playfair_Display:Medium',sans-serif] leading-[0] relative shrink-0 text-[56px]">
        <span className="leading-[1.2]">{`Features & `}</span>
        <span className="leading-[1.2] text-[#ed3237]">Highlights</span>
      </p>
      <p className="font-['Instrument_Sans:Medium_Italic',sans-serif] italic leading-[1.45] min-w-full relative shrink-0 text-[18px] text-center tracking-[2.88px] uppercase w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Why Buy a Home at Mahindra Blossom
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-center tracking-[0.72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PRIME AND WELL CONNECTED LOCATION
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Located at Hope Farm Junction, Whitefield, Mahindra Blossom places you minutes away from ITPL, tech parks, top schools, hospitals, malls, and the fully operational metro — ensuring effortless daily travel and high future value.
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-center tracking-[0.72px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>{`Homes Designed for Space, Light & Comfort`}</p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Choose from 2, 3 & 4 BHK premium apartments with smart, vastu compliant layouts, abundant natural light, and excellent ventilation — crafted for modern families, work-from-home needs, and everyday comfort.`}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-center tracking-[0.72px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wake Up to Green, Calm Living
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Surrounded by landscaped open spaces and greenery, Mahindra Blossom offers 4 acres of landscaped garden with bougainvillea canopies, aromatic and native plantations and butterfly park `}</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-center tracking-[0.72px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resort-Style Amenities at Your Doorstep
      </p>
      <p className="font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Offering 97,000 sq. ft. of amenities and clubhouse spaces, including Bougainvillea canopies, half-Olympic size swimming pool, 25+ seater business center, cricket nets, 2 running tracks, 2 indoor badminton courts and much more.
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-center tracking-[0.72px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        SUSTAINABLE LIVING
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pre-certified IGBC Gold green homes with Net Zero Waste practices and energy-efficient design for lower consumption and sustainable living
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-center tracking-[0.72px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        75+ Years of Mahindra Trust
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Developed by Mahindra Lifespaces, part of the Mahindra Group, this project offers peace of mind through quality construction, transparency, & a proven track record of timely delivery.`}</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame18 />
      <Frame20 />
      <Frame22 />
      <Frame24 />
      <Frame26 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[800px]">
      <Frame15 />
      <div className="aspect-[1571/102] relative shrink-0 w-full" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Frame5 />
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-end relative shrink-0 w-full" data-name="features">
      <div className="h-[728px] relative rounded-[24px] shrink-0 w-[400px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle63} />
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function MpovementSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="mpovement section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#fffcfd] inset-0" />
        <div className="absolute inset-0 opacity-8 overflow-hidden">
          <img alt="" className="absolute h-[115.05%] left-[-65.51%] max-w-none top-[0.02%] w-[230.99%]" src={imgMpovementSection} />
        </div>
        <div className="absolute inset-0 opacity-8 overflow-hidden">
          <img alt="" className="absolute h-[115.05%] left-[-65.51%] max-w-none top-[0.02%] w-[230.99%]" src={imgMpovementSection} />
        </div>
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[100px] items-start p-[100px] relative w-full">
          <About />
          <Features />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[12px] items-center relative shrink-0 text-[#fafafa] w-full">
      <p className="font-['Playfair_Display:Medium',sans-serif] leading-[0] relative shrink-0 text-[56px]">
        <span className="leading-[1.2]">{`Unlock the Door to `}</span>
        <span className="leading-[1.2]">Affordable Luxury</span>
      </p>
      <p className="font-['Instrument_Sans:Medium_Italic',sans-serif] italic leading-[1.45] min-w-full relative shrink-0 text-[18px] text-center tracking-[2.88px] uppercase w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Explore apartment options and pricing details tailored to your needs
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-[#4b4d4c] text-center w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] min-w-full relative shrink-0 text-[24px] tracking-[1.92px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2 BHK
      </p>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] min-w-full relative shrink-0 text-[18px] tracking-[1.44px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1200-1350 sq.ft.
      </p>
      <p className="font-['Instrument_Sans:Regular','Noto_Sans:Bold',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] tracking-[1.6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:Medium','Noto_Sans:Bold',sans-serif] font-medium leading-[1.45] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
        <span className="font-['Instrument_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[24px] tracking-[1.92px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`₹1.88cr `}</span>
        <span className="font-['Instrument_Sans:Italic','Noto_Sans:Bold',sans-serif] italic leading-[1.45] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Onwards
        </span>
      </p>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="min-h-[48px] min-w-[48px] relative rounded-[999px] shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4b4d4c] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Get Quote
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b4d4c] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Root1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
      <Wrapper1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="button">
      <Root1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="button">
      <Button3 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(250,250,250,0.5)] inset-[-0.39px_-0.33px_0.39px_0]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[292.327px] items-center justify-center left-[calc(50%-0.99px)] top-[calc(50%+17.14px)] w-[349.076px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "363" } as React.CSSProperties}>
        <div className="flex-none rotate-[-13.23deg]">
          <div className="h-[228.634px] relative w-[304.846px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] left-[201.33px] text-[#4b4d4c] text-[24px] text-center top-[39px] tracking-[1.92px] w-[322.667px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2 BHK
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-8 rounded-[24px] size-full" src={imgFrame24} />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center p-[40px] relative w-full">
          <Frame32 />
          <Button2 />
          <Frame137 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-[#4b4d4c] text-center w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] min-w-full relative shrink-0 text-[24px] tracking-[1.92px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3 BHK
      </p>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] min-w-full relative shrink-0 text-[18px] tracking-[1.44px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1800-1850 sq.ft.
      </p>
      <p className="font-['Instrument_Sans:Regular','Noto_Sans:Bold',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] tracking-[1.6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:Medium','Noto_Sans:Bold',sans-serif] font-medium leading-[1.45] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
        <span className="font-['Instrument_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[24px] tracking-[1.92px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`₹2.18cr `}</span>
        <span className="font-['Instrument_Sans:Italic','Noto_Sans:Bold',sans-serif] italic leading-[1.45] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Onwards
        </span>
      </p>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="min-h-[48px] min-w-[48px] relative rounded-[999px] shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4b4d4c] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Get Quote
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b4d4c] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Root2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
      <Wrapper2 />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="button">
      <Root2 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="button">
      <Button5 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-8 rounded-[24px] size-full" src={imgFrame24} />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center p-[40px] relative w-full">
          <Frame34 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-[#4b4d4c] text-center w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] min-w-full relative shrink-0 text-[24px] tracking-[1.92px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4 BHK
      </p>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] min-w-full relative shrink-0 text-[18px] tracking-[1.44px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2200-2350 sq.ft.
      </p>
      <p className="font-['Instrument_Sans:Regular','Noto_Sans:Bold',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] tracking-[1.6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:Medium','Noto_Sans:Bold',sans-serif] font-medium leading-[1.45] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
        <span className="font-['Instrument_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[24px] tracking-[1.92px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`₹2.88cr `}</span>
        <span className="font-['Instrument_Sans:Italic','Noto_Sans:Bold',sans-serif] italic leading-[1.45] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Onwards
        </span>
      </p>
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="min-h-[48px] min-w-[48px] relative rounded-[999px] shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4b4d4c] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Get Quote
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b4d4c] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Root3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
      <Wrapper3 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="button">
      <Root3 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="button">
      <Button7 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-8 rounded-[24px] size-full" src={imgFrame24} />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center p-[40px] relative w-full">
          <Frame36 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame33 />
      <Frame35 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame29 />
      <div className="aspect-[1571/102] relative shrink-0 w-full" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Frame30 />
    </div>
  );
}

function Prices() {
  return (
    <div className="bg-[#ed3237] relative shrink-0 w-full" data-name="prices">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[100px] relative w-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[12px] items-center relative shrink-0 w-full">
      <p className="font-['Playfair_Display:Medium',sans-serif] leading-[0] relative shrink-0 text-[#ed3237] text-[56px]">
        <span className="leading-[1.2]">{`Amenities `}</span>
        <span className="leading-[1.2] text-[#4b4d4c]">for Every Age, Every Mood</span>
      </p>
      <p className="font-['Instrument_Sans:Medium_Italic',sans-serif] italic leading-[1.45] min-w-full relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[2.88px] uppercase w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Premium amenities that transform your home into a private retreat.
      </p>
    </div>
  );
}

function Images() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="images">
      <div className="absolute inset-0 rounded-[24px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle64} />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-0 to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aromatic Garden
      </p>
    </div>
  );
}

function Hover() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px overflow-clip relative rounded-[24px] self-stretch" data-name="hover">
      <Images />
      <Frame41 />
    </div>
  );
}

function Images1() {
  return (
    <div className="h-[280px] relative shrink-0 w-[397.333px]" data-name="images">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImages} />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-0 to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Spacious Kitchen
      </p>
    </div>
  );
}

function Hover1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px overflow-clip relative rounded-[24px]" data-name="hover">
      <Images1 />
      <Frame44 />
    </div>
  );
}

function Images2() {
  return (
    <div className="h-[280px] relative shrink-0 w-full" data-name="images">
      <div className="absolute inset-0 rounded-[24px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle67} />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-0 to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Party Lawn
      </p>
    </div>
  );
}

function Hover2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[540px]" data-name="hover">
      <Images2 />
      <Frame45 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[24px] h-[280px] items-center relative shrink-0 w-full">
      <Hover1 />
      <Hover2 />
    </div>
  );
}

function Images3() {
  return (
    <div className="h-[280px] relative shrink-0 w-full" data-name="images">
      <div className="absolute inset-0 rounded-[24px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle70} />
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-0 to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Multipurpose Court
      </p>
    </div>
  );
}

function Hover3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[540px]" data-name="hover">
      <Images3 />
      <Frame47 />
    </div>
  );
}

function Images4() {
  return (
    <div className="h-[280px] relative shrink-0 w-[397.333px]" data-name="images">
      <div className="absolute inset-0 rounded-[24px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle65} />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-0 to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modern Bedroom
      </p>
    </div>
  );
}

function Hover4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px overflow-clip relative rounded-[24px]" data-name="hover">
      <Images4 />
      <Frame48 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[24px] h-[280px] items-center relative shrink-0 w-full">
      <Hover3 />
      <Hover4 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[827px]">
      <Frame43 />
      <Frame46 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Hover />
      <Frame42 />
    </div>
  );
}

function Images5() {
  return (
    <div className="h-[280px] overflow-clip relative shrink-0 w-[397.333px]" data-name="images">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[338.063px] left-[calc(50%-0.17px)] top-1/2 w-[601px]" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-[0.33px] to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gym
      </p>
    </div>
  );
}

function Hover5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]" data-name="hover">
      <Images5 />
      <Frame50 />
    </div>
  );
}

function Images6() {
  return (
    <div className="h-[280px] relative shrink-0 w-[397.333px]" data-name="images">
      <div className="absolute inset-0 rounded-[24px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle76} />
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-[0.33px] to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cricket Nets
      </p>
    </div>
  );
}

function Hover6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]" data-name="hover">
      <Images6 />
      <Frame51 />
    </div>
  );
}

function Images7() {
  return (
    <div className="h-[280px] relative shrink-0 w-[397.333px]" data-name="images">
      <div className="absolute inset-0 rounded-[24px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle71} />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-[0.33px] to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        1/2 Olympic size pool
      </p>
    </div>
  );
}

function Hover7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]" data-name="hover">
      <Images7 />
      <Frame52 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[24px] h-[280px] items-center relative shrink-0 w-full">
      <Hover5 />
      <Hover6 />
      <Hover7 />
    </div>
  );
}

function Images8() {
  return (
    <div className="h-[280px] relative shrink-0 w-[397.333px]" data-name="images">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImages1} />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-0 to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Landscaped Gardens
      </p>
    </div>
  );
}

function Hover8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px overflow-clip relative rounded-[24px]" data-name="hover">
      <Images8 />
      <Frame54 />
    </div>
  );
}

function Images9() {
  return (
    <div className="h-[280px] relative shrink-0 w-[397.333px]" data-name="images">
      <div className="absolute inset-0 rounded-[24px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle73} />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-0 to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ventilated Flats
      </p>
    </div>
  );
}

function Hover9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px overflow-clip relative rounded-[24px]" data-name="hover">
      <Images9 />
      <Frame55 />
    </div>
  );
}

function Images10() {
  return (
    <div className="h-[280px] relative shrink-0 w-[397.333px]" data-name="images">
      <div className="absolute inset-0 rounded-[24px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle63} />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-0 to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Large Balcony
      </p>
    </div>
  );
}

function Hover10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px overflow-clip relative rounded-[24px]" data-name="hover">
      <Images10 />
      <Frame56 />
    </div>
  );
}

function Images11() {
  return (
    <div className="h-[280px] relative shrink-0 w-[397.333px]" data-name="images">
      <div className="absolute inset-0 rounded-[24px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle74} />
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.1px] content-stretch flex from-[rgba(0,0,0,0)] h-[82px] items-end justify-center left-0 px-[24px] py-[12px] right-0 to-black">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#fffcfd] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jogging Track
      </p>
    </div>
  );
}

function Hover11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px overflow-clip relative rounded-[24px]" data-name="hover">
      <Images11 />
      <Frame57 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[24px] h-[280px] items-center relative shrink-0 w-full">
      <Hover8 />
      <Hover9 />
      <Hover10 />
      <Hover11 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame40 />
      <Frame49 />
      <Frame53 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame38 />
      <div className="aspect-[1571/102] relative shrink-0 w-full" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Frame39 />
    </div>
  );
}

function Amenties() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip p-[100px] relative shrink-0 w-[1440px]" data-name="amenties">
      <Frame37 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[12px] items-center relative shrink-0 text-[#fafafa] w-full">
      <p className="font-['Playfair_Display:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[56px]">Thoughtfully Designed Floor Plans</p>
      <p className="font-['Instrument_Sans:Medium_Italic',sans-serif] italic leading-[1.45] min-w-full relative shrink-0 text-[18px] text-center tracking-[2.88px] uppercase w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Smart layouts that maximize space, light, and everyday comfort.
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.33px)] px-[24px] py-[12px] rounded-[100px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.16)] top-[-24.41px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-white inset-0 rounded-[100px]" />
        <div className="absolute inset-0 opacity-8 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute h-[396.61%] left-[-0.09%] max-w-none top-[-148.07%] w-full" src={imgFrame24} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MASTER PLAN
      </p>
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="min-h-[48px] min-w-[48px] relative rounded-[999px] shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4b4d4c] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View Plan
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b4d4c] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Root4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
      <Wrapper4 />
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="button">
      <Root4 />
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="button">
      <Button9 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="flex-[1_0_0] h-[320px] min-h-px min-w-[360px] relative rounded-[24px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-8 rounded-[24px] size-full" src={imgFrame24} />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame31} />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center min-w-[inherit] p-[40px] relative size-full">
          <div className="absolute backdrop-blur-[12px] bg-[rgba(255,252,253,0.5)] inset-[-0.41px_0.33px_0.41px_0] rounded-[24px]" />
          <Frame62 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.33px)] px-[24px] py-[12px] rounded-[100px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.16)] top-[-24.41px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-white inset-0 rounded-[100px]" />
        <div className="absolute inset-0 opacity-8 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute h-[396.61%] left-[-0.09%] max-w-none top-[-148.07%] w-full" src={imgFrame24} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2 BHK
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="flex-[1_0_0] h-[320px] min-h-px min-w-[360px] relative rounded-[24px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-8 rounded-[24px] size-full" src={imgFrame24} />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame32} />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center min-w-[inherit] p-[40px] relative size-full">
          <div className="absolute backdrop-blur-[12px] bg-[rgba(255,252,253,0.5)] inset-[-0.41px_0.33px_0.41px_0] rounded-[24px]" />
          <Frame64 />
          <div className="flex h-[292.327px] items-center justify-center relative shrink-0 w-[349.076px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "363" } as React.CSSProperties}>
            <div className="flex-none rotate-[-13.23deg]">
              <div className="h-[228.634px] relative w-[304.846px]" data-name="image 17">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.33px)] px-[24px] py-[12px] rounded-[100px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.16)] top-[-24.41px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-white inset-0 rounded-[100px]" />
        <div className="absolute inset-0 opacity-8 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute h-[396.61%] left-[-0.09%] max-w-none top-[-148.07%] w-full" src={imgFrame24} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2 BHK (Large)
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="flex-[1_0_0] h-[320px] min-h-px min-w-[360px] relative rounded-[24px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-8 rounded-[24px] size-full" src={imgFrame24} />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame32} />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center min-w-[inherit] p-[40px] relative size-full">
          <div className="absolute backdrop-blur-[12px] bg-[rgba(255,252,253,0.5)] inset-[-0.41px_0.33px_0.41px_0] rounded-[24px]" />
          <Frame66 />
          <div className="flex h-[292.327px] items-center justify-center relative shrink-0 w-[349.076px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "363" } as React.CSSProperties}>
            <div className="flex-none rotate-[-13.23deg]">
              <div className="h-[228.634px] relative w-[304.846px]" data-name="image 17">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.33px)] px-[24px] py-[12px] rounded-[100px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.16)] top-[-24.41px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-white inset-0 rounded-[100px]" />
        <div className="absolute inset-0 opacity-8 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute h-[396.61%] left-[-0.09%] max-w-none top-[-148.07%] w-full" src={imgFrame24} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3 BHK
      </p>
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="min-h-[48px] min-w-[48px] relative rounded-[999px] shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4b4d4c] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View Plan
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b4d4c] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Root5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
      <Wrapper5 />
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="button">
      <Root5 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="button">
      <Button11 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="flex-[1_0_0] h-[320px] min-h-px min-w-[360px] relative rounded-[24px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-8 rounded-[24px] size-full" src={imgFrame24} />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame32} />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center min-w-[inherit] p-[40px] relative size-full">
          <div className="absolute backdrop-blur-[12px] bg-[rgba(255,252,253,0.5)] inset-[-0.41px_0.33px_0.41px_0] rounded-[24px]" />
          <Frame68 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.33px)] px-[24px] py-[12px] rounded-[100px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.16)] top-[-24.41px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-white inset-0 rounded-[100px]" />
        <div className="absolute inset-0 opacity-8 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute h-[396.61%] left-[-0.09%] max-w-none top-[-148.07%] w-full" src={imgFrame24} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.5 BHK
      </p>
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="min-h-[48px] min-w-[48px] relative rounded-[999px] shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4b4d4c] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View Plan
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b4d4c] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Root6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
      <Wrapper6 />
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="button">
      <Root6 />
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="button">
      <Button13 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="flex-[1_0_0] h-[320px] min-h-px min-w-[360px] relative rounded-[24px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-8 rounded-[24px] size-full" src={imgFrame24} />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame32} />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center min-w-[inherit] p-[40px] relative size-full">
          <div className="absolute backdrop-blur-[12px] bg-[rgba(255,252,253,0.5)] inset-[-0.41px_0.33px_0.41px_0] rounded-[24px]" />
          <Frame70 />
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.33px)] px-[24px] py-[12px] rounded-[100px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.16)] top-[-24.41px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-white inset-0 rounded-[100px]" />
        <div className="absolute inset-0 opacity-8 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute h-[396.61%] left-[-0.09%] max-w-none top-[-148.07%] w-full" src={imgFrame24} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[1.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4 BHK
      </p>
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="min-h-[48px] min-w-[48px] relative rounded-[999px] shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4b4d4c] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View Plan
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b4d4c] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Root7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
      <Wrapper7 />
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="button">
      <Root7 />
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="button">
      <Button15 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="flex-[1_0_0] h-[320px] min-h-px min-w-[360px] relative rounded-[24px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-8 rounded-[24px] size-full" src={imgFrame24} />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame32} />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center min-w-[inherit] p-[40px] relative size-full">
          <div className="absolute backdrop-blur-[12px] bg-[rgba(255,252,253,0.5)] inset-[-0.41px_0.33px_0.41px_0] rounded-[24px]" />
          <Frame72 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-start flex flex-wrap gap-[48px_24px] items-start pt-[24px] relative shrink-0 w-full">
      <Frame61 />
      <Frame63 />
      <Frame65 />
      <Frame67 />
      <Frame69 />
      <Frame71 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame59 />
      <div className="aspect-[1571/102] relative shrink-0 w-full" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Frame60 />
    </div>
  );
}

function Plan() {
  return (
    <div className="bg-[#ed3237] relative shrink-0 w-full" data-name="plan">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[100px] relative w-full">
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[12px] items-center relative shrink-0 text-[#4b4d4c] w-full">
      <p className="font-['Playfair_Display:Medium',sans-serif] leading-[0] relative shrink-0 text-[56px]">
        <span className="leading-[1.2]">{`A `}</span>
        <span className="leading-[1.2] text-[#ed3237]">Glimpse</span>
        <span className="leading-[1.2]">{` of Life at Mahindra Blossom`}</span>
      </p>
      <p className="font-['Instrument_Sans:Medium_Italic',sans-serif] italic leading-[1.45] min-w-full relative shrink-0 text-[18px] text-center tracking-[2.88px] uppercase w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        View images of homes, amenities, and the surrounding environment.
      </p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-[397px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle67} />
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle68} />
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-[398px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle70} />
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle68} />
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-[397px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle67} />
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle68} />
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-[398px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle70} />
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle68} />
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[24px] h-[280px] items-center relative shrink-0 w-full">
      <Frame76 />
      <Frame77 />
      <Frame78 />
      <Frame79 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[292px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle74} />
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[292px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle65} />
        </div>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[292px]">
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle64} />
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[292px]">
      <div className="h-[280px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImages1} />
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[292px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle73} />
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[292px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle63} />
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[292px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle74} />
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[292px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle65} />
        </div>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[292px]">
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle64} />
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[24px] h-[280px] items-center justify-end relative shrink-0 w-full">
      <Frame85 />
      <Frame86 />
      <Frame87 />
      <Frame88 />
      <Frame89 />
      <Frame90 />
      <Frame91 />
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImages} />
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle76} />
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle71} />
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle71} />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle72} />
        </div>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImages} />
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle76} />
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle71} />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[397.333px]">
      <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle71} />
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle72} />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[24px] h-[280px] items-center relative shrink-0 w-full">
      <Frame95 />
      <Frame96 />
      <Frame97 />
      <Frame98 />
      <Frame99 />
      <Frame100 />
      <Frame101 />
      <Frame102 />
    </div>
  );
}

function Images12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[1440px]" data-name="images">
      <Frame75 />
      <Frame84 />
      <Frame94 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame74 />
      <div className="aspect-[1571/102] relative shrink-0 w-full" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Images12 />
    </div>
  );
}

function Galary() {
  return (
    <div className="bg-[#fffcfd] relative shrink-0 w-full" data-name="galary">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[100px] px-[100px] relative w-full">
          <Frame73 />
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[12px] items-center relative shrink-0 text-[#4b4d4c] w-full">
      <p className="font-['Playfair_Display:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[56px]">Smart Specifications</p>
      <p className="font-['Instrument_Sans:Medium_Italic',sans-serif] italic leading-[1.45] min-w-full relative shrink-0 text-[18px] text-center tracking-[2.88px] uppercase w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Where Quality Meets Functionality
      </p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        uPVC windows. Balcony with SS and glass railing.
      </p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Main door, Interior and Toilet doors - Engineered wooden door frame and flush door shutter. `}</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Balcony and utility - uPVC door.
      </p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Smart door locks.
      </p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame105 />
      <Frame106 />
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[24px] px-[24px] relative w-full">
        <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[0.72px] uppercase w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Doors, Windows & Railings`}</p>
        <Frame134 />
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="h-[280px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle63} />
          </div>
        </div>
        <Frame104 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(22,22,22,0.12)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[1px_3px_24px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Living, Dining, Bedrooms, Kitchen - Emulsion Paint for walls and oil bound distemper for ceiling.
      </p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Exterior paint for external finish and enamel paint for MS grills and railings..
      </p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame110 />
      <Frame111 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[24px] px-[24px] relative w-full">
        <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[0.72px] uppercase w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Walls
        </p>
        <Frame138 />
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[280px] relative rounded-[24px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgRectangle68} />
          </div>
        </div>
        <Frame109 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(22,22,22,0.12)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[1px_3px_24px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chromium Plated Fittings of reputed make.
      </p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame113 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[24px] px-[24px] relative w-full">
        <div className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[0.72px] uppercase w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">{`CP & Sanitary `}</p>
          <p>fittings</p>
        </div>
        <Frame140 />
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[280px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle75} />
          </div>
        </div>
        <Frame112 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(22,22,22,0.12)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[1px_3px_24px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Large format Vitrified tiles in living & dining room, bedrooms and kitchen.`}</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Anti-skid ceramic tiles in bathrooms and utility.
      </p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Balcony and utility - uPVC door.
      </p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Smart door locks.
      </p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame115 />
      <Frame116 />
      <Frame117 />
      <Frame118 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[24px] px-[24px] relative w-full">
        <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[0.72px] uppercase w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Floor Finishes
        </p>
        <Frame142 />
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[280px] relative shrink-0 w-[397.333px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImages} />
          </div>
        </div>
        <Frame114 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(22,22,22,0.12)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[1px_3px_24px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame133 />
      <Frame136 />
      <Frame139 />
      <Frame141 />
    </div>
  );
}

function Specifications() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="specifications">
      <Frame103 />
      <div className="aspect-[1571/102] relative shrink-0 w-full" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Frame135 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[12px] items-center relative shrink-0 w-full">
      <p className="font-['Playfair_Display:Medium',sans-serif] leading-[0] relative shrink-0 text-[#ed3237] text-[56px]">
        <span className="leading-[1.2] text-[#4b4d4c]">A Perfect</span>
        <span className="leading-[1.2]">{` Location`}</span>
      </p>
      <p className="font-['Instrument_Sans:Medium_Italic',sans-serif] italic leading-[1.45] min-w-full relative shrink-0 text-[#4b4d4c] text-[18px] text-center tracking-[2.88px] uppercase w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Everything You Need, Just Minutes Away
      </p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Abutting Hopefarm Channasandra Metro Station
      </p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Key terminals within 1.3km radius –  Whitefield railway station and Hopefarm bus stop`}</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#4b4d4c] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Major IT parks within 2.5km radius – ITPL, new Google office
      </p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.11%] left-[-844.44%] max-w-none top-0 w-[1796.3%]" src={imgImage4} />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.45] min-h-px min-w-px relative text-[#4b4d4c] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Social infrastructure within 3km – Schools, colleges, hospitals, etc.
      </p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame122 />
      <Frame123 />
      <Frame124 />
      <Frame125 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[620px] z-[2]">
      <Frame120 />
      <div className="aspect-[1571/102] relative shrink-0 w-full" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Frame121 />
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[40px] isolate items-center relative shrink-0 w-full" data-name="location">
      <Frame119 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px] z-[1]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle864} />
        </div>
      </div>
    </div>
  );
}

function Component2ndLastSection() {
  return (
    <div className="bg-[#fffcfd] relative shrink-0 w-full" data-name="2nd last section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-start p-[100px] relative w-full">
          <Specifications />
          <Location />
        </div>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 content-stretch flex from-[rgba(0,0,0,0)] items-end justify-center left-1/2 pb-[24px] pt-[40px] px-[24px] to-black w-[1000px]">
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fafafa] text-[36px]">Take The Virtual Tour</p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col h-[500px] items-center justify-center overflow-clip p-[60px] relative rounded-[40px] shrink-0 w-[1000px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
        <div className="absolute bg-[#fffcfd] inset-0 rounded-[40px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgRectangle72} />
      </div>
      <Frame126 />
      <div className="h-[75px] relative shrink-0 w-[71px]">
        <div className="absolute inset-[-18.78%_-24.16%_-16.65%_-11.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.1539 101.571">
            <path d={svgPaths.p2af06d00} fill="var(--fill-0, white)" id="Vector 22" stroke="var(--stroke-0, white)" strokeWidth="8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Medium',sans-serif] gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[32px]">PROJECT RERA No: PRM/KA/RERA/1251/446/PR/171225/008348</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[32px]">AGENT RERA No.: PRM/KA/RERA/1251/446/AG/240723/004988</p>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame130 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="links">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.75)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`DISCLAIMER `}</p>
      </div>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="links">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.75)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">PRIVACY POLICY</p>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Links />
      <p className="font-['Barlow:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">|</p>
      <Links1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Barlow:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[20px]">©2025. Mahindra Blossom . ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame127 />
      <Container1 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame131 />
      <Container />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex flex-col gap-[60px] items-center overflow-clip pb-[80px] px-[120px] relative shrink-0 w-[1440px]" data-name="footer">
      <div className="absolute bg-[#ed3237] bottom-[-0.5px] h-[542px] left-0 right-0" />
      <Frame129 />
      <Frame128 />
    </div>
  );
}

export default function Site() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="site">
      <Hero />
      <MpovementSection />
      <Prices />
      <Amenties />
      <Plan />
      <Galary />
      <Component2ndLastSection />
      <Footer />
    </div>
  );
}