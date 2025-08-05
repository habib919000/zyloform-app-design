import svgPaths from "./svg-2cx8cccqrv";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start leading-[0] max-w-[672px] not-italic p-0 relative shrink-0 text-center w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#003720] text-[44.25px] tracking-[-0.72px] w-full">
        <p className="block leading-[48px]">Make your first form in minutes</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#83928c] text-[22.125px] tracking-[0.1616px] w-full">
        <p className="block leading-[32px]">
          Design sleek, customized forms with advanced styling in minutes. No
          development required
        </p>
      </div>
    </div>
  );
}

function Component1() {
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
            d={svgPaths.p34369900}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
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
      <Component1 />
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
          <Container1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0.5px_1px_0px_inset_rgba(255,255,255,0.5)]" />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component3 />
    </div>
  );
}

function Component4() {
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

function Component2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px px-6 py-3.5 relative rounded-[8.75px] shrink-0 border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
      data-name="Component 2"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[18.2812px] text-left text-nowrap">
        <p className="block leading-[28px] whitespace-pre">Try Demo</p>
      </div>
      <Component4 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component2 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[30px] items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container2 />
      <Container3 />
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-7">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Group 3">
          <rect
            fill="var(--fill-0, #0051FF)"
            height="28"
            id="Rectangle 10"
            rx="8.23538"
            width="28"
          />
          <path d={svgPaths.p1612d640} fill="var(--fill-0, white)" id="Z" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col font-['Krona_One:Regular',_sans-serif] justify-center relative shrink-0 text-[#101828] text-[16.8164px]">
        <p className="block leading-[24.5px] text-nowrap whitespace-pre">
          Zylo
        </p>
      </div>
      <div className="flex flex-col font-['Love_Ya_Like_A_Sister:Regular',_sans-serif] justify-center relative shrink-0 text-[#0051ff] text-[22.82px]">
        <p className="block leading-[24.5px] text-nowrap whitespace-pre">
          form
        </p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0"
      data-name="Logo"
    >
      <Group3 />
      <Frame1 />
    </div>
  );
}

function Component5() {
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
            d={svgPaths.p13ac8bc0}
            fill="var(--fill-0, #454745)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Component8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
      data-name="Component 8"
    >
      <Component5 />
    </div>
  );
}

function Component6() {
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
            d={svgPaths.p19669100}
            fill="var(--fill-0, #454745)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
      data-name="Component 8"
    >
      <Component6 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component8 />
      <Component9 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Logo />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[0px] text-left tracking-[0.1616px] w-[346px]">
        <p className="adjustLetterSpacing block leading-[24px] text-[15.5px]">
          Professional form builder with advanced customization capabilities.
          Create beautiful, functional forms in minutes.
        </p>
      </div>
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[51px] items-start justify-start p-0 relative self-stretch shrink-0 w-[538px]"
      data-name="Container"
    >
      <Frame22 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-2 grow h-full items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-[#454745] text-[15.5px] text-left text-nowrap tracking-[0.1616px]"
      data-name="Container"
    >
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre hover:text-gray-900 transition-colors cursor-pointer">
          Generate Forms
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre hover:text-gray-900 transition-colors cursor-pointer">
          Changelog
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre hover:text-gray-900 transition-colors cursor-pointer">
          Feature requests
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre hover:text-gray-900 transition-colors cursor-pointer">
          Feedback
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre hover:text-gray-900 transition-colors cursor-pointer">
          How it works
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-2 grow h-full items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-[#454745] text-left text-nowrap tracking-[0.1616px]"
      data-name="Container"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[14.625px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre hover:text-gray-900 transition-colors cursor-pointer">
          Help Center
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14.375px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre hover:text-gray-900 transition-colors cursor-pointer">
          Contact us
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="adjustLetterSpacing block leading-[24px] text-[#000000] text-[14.625px] text-nowrap tracking-[0.1616px] whitespace-pre">
          Feedback
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14.375px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre hover:text-gray-900 transition-colors cursor-pointer">
          Changelog
        </p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0">
      <Container7 />
      <Container8 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-center max-w-[1280px] pb-0 pt-[49px] px-0 relative shrink-0 w-[1088px]"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[#e3e3e3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Frame23 />
    </div>
  );
}

function Section() {
  return (
    <div
      className="relative box-border content-stretch flex flex-col gap-12 items-center justify-center max-w-[1152px] pb-0 pt-20 px-8 w-full mx-auto"
      data-name="Section"
    >
      <Container />
      <Container4 />
      <HorizontalBorder />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a6c6a] text-[14.125px] text-left text-nowrap tracking-[0.1616px]">
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          © 2024 Zyloform. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-neutral-50 relative w-full min-h-[500px] py-8" data-name="Footer">
      <Section />
    </div>
  );
}