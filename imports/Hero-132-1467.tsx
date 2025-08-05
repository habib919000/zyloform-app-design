import svgPaths from "./svg-7qn2lep9vm";

function Component1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 1">
          <path
            clipRule="evenodd"
            d={svgPaths.p2b3e3780}
            fill="var(--fill-0, #6A6C6A)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-[13px] py-[7px] relative rounded-[8.75px] shrink-0"
      data-name="Component 2"
    >
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#003720] text-[14.625px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          ✨ Upcoming: AI form builder
        </p>
      </div>
      <Component1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[72px] relative shrink-0 text-[#003720] text-[67.6406px] tracking-[-1.44px] w-full">
        <p className="block mb-0">Make any form</p>
        <p className="block">quiz or survey in minutes</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#83928c] text-[22.125px] w-full">
        <p className="block leading-[32px]">
          Zylform helps you go from idea to live form fast. Build professional,
          customizable forms with real-time preview and full control over
          styling.
        </p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-0 relative shrink-0 w-full">
      <Component2 />
      <Frame31 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-5" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path
            clipRule="evenodd"
            d={svgPaths.p2c59f580}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18.2812px] text-center text-nowrap tracking-[0.1616px]">
        <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
          Get Started
        </p>
      </div>
      <Component4 />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="bg-blue-600 h-14 relative rounded-[8.75px] shrink-0 w-full hover:bg-blue-700 transition-colors cursor-pointer"
      data-name="Component 3"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-14 items-center justify-center pl-5 pr-6 py-0 relative w-full">
          <Container />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0.5px_1px_0px_inset_rgba(255,255,255,0.5)]" />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component3 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 1">
          <path
            clipRule="evenodd"
            d={svgPaths.p23ba2900}
            fill="var(--fill-0, #454745)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px px-6 py-3.5 relative rounded-[8.75px] shrink-0"
      data-name="Component 2"
    >
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[18.2812px] text-left text-nowrap">
        <p className="block leading-[28px] whitespace-pre">Try Demo</p>
      </div>
      <Component5 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component6 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[30px] items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-center left-1/2 px-6 py-0 top-[153px] translate-x-[-50%] w-[902px]"
      data-name="Container"
    >
      <Frame32 />
      <Container3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] backdrop-blur backdrop-filter bg-[#ffffff] h-[562px] ml-0 mt-0 relative rounded-lg w-[424px]">
        <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] ml-[108px] mt-[281px] not-italic relative text-[#000000] text-[0px] text-left text-nowrap tracking-[0.1616px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[24px] text-[15.5px] whitespace-pre">
          Live Preview • Ocean Breeze
        </p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] backdrop-blur backdrop-filter bg-[#ffffff] h-[562px] ml-0 mt-0 relative rounded-lg w-[424px]">
        <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] ml-[108px] mt-[281px] not-italic relative text-[#000000] text-[0px] text-left text-nowrap tracking-[0.1616px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[24px] text-[15.5px] whitespace-pre">
          Live Preview • Forest Green
        </p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[30px] items-start justify-start leading-[0] left-[294.5px] p-0 top-[670px]">
      <Group7 />
      {[...Array(2).keys()].map((_, i) => (
        <Group8 key={i} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Hero">
      <div
        className="absolute bottom-32 left-px right-[-1px] top-0"
        data-name="Gradient"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1920 1104\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(143.91 0 0 121.78 1017.6 861.12)\\\'><stop stop-color=\\\'rgba(0,204,255,0.3)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,204,255,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1920 1104\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(192.79 0 0 142.08 1363.2 1004.6)\\\'><stop stop-color=\\\'rgba(0,204,255,0.3)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,204,255,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1920 1104\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(187.36 0 0 142.08 595.2 1004.6)\\\'><stop stop-color=\\\'rgba(255,128,0,0.17)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,128,0,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>')",
        }}
      />
      <Container4 />
      <Frame30 />
    </div>
  );
}