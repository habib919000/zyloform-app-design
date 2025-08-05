import svgPaths from "./svg-bajv1biswv";

function Heading1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[20.3438px] text-left w-full">
        <p className="block leading-[28px]">Color Palette Settings</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[12.9062px] text-left w-full">
        <p className="block leading-[21px]">
          Choose from pre-defined color templates and customize them to create
          your perfect color scheme.
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading1 />
      <Container />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.125px] text-left w-full">
        <p className="block leading-[21px]">Color Templates</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="bg-gray-50 relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[15px] pt-3.5 px-3.5 relative w-full">
          <Heading2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.4531px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Ocean Breeze</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 11"
      >
        <g id="SVG">
          <path
            d={svgPaths.p24759e00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.875"
          />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#2b7fff] box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-[3.35544e+07px] shrink-0 size-[17.5px]"
      data-name="Background"
    >
      <Svg />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container2 />
      <Background />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-blue-800 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-blue-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-blue-300 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-blue-100 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-blue-50 relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.4531px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Forest Green</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-green-900 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-green-600 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-green-400 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-green-200 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.0156px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Mountain Mist</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-gray-700 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-gray-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-gray-400 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-gray-200 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.2344px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Desert Sand</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-yellow-700 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-amber-600 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-amber-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-amber-100 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.2344px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Autumn Leaves</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-amber-800 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-red-600 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-orange-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-orange-200 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.3438px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Spring Blossom</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-pink-700 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-pink-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-pink-300 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-pink-100 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.2344px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Rainbow Spectrum</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-red-600 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-amber-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-emerald-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-blue-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.5625px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Galaxy Purple</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-purple-900 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-violet-600 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-purple-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-purple-200 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.3438px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Sunshine Yellow</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-yellow-700 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-yellow-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-yellow-300 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-amber-50 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container27 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[13.0156px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Lavender Mist</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-purple-800 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-purple-500 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-violet-300 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <div
        className="bg-purple-100 relative rounded-[3.35544e+07px] shrink-0 size-3.5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-[15px] relative w-full">
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="max-h-[1000px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="max-h-inherit overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start max-h-inherit p-[14px] relative w-full">
          <Button />
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
          <Button6 />
          <Button7 />
          <Button8 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Background+Border"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-px relative w-full">
          <BackgroundHorizontalBorder />
          <Container32 />
        </div>
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 relative shrink-0 w-[280px]"
      data-name="Container"
    >
      <BackgroundBorder />
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[21px] not-italic relative shrink-0 text-[#101828] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[13.2344px]">Customize:</p>
        <p className="block text-[#9fa2aa] text-[12px]">Ocean Breeze</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[11.3391px] text-center text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Reset to Template
        </p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[15px] pt-3.5 px-3.5 relative w-full">
          <Heading4 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[11.5312px] text-left w-full">
        <p className="block leading-[17.5px]">Form Container</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div
      className="bg-gray-50 relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[11.5px] pt-[9.5px] px-3.5 relative w-full">
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.5312px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Form Background color
        </p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-slate-50 relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg1 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[11.5px] pt-[10.5px] px-3.5 relative w-full">
          <Label />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.3391px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Form Background border color
        </p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-slate-200 relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-3.5 py-[10.5px] relative w-full">
          <Label1 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <HorizontalBorder1 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundHorizontalBorder1 />
      <Container37 />
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[11.7234px] text-left w-full">
        <p className="block leading-[17.5px]">Form Field</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div
      className="bg-gray-50 relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[11.5px] pt-[9.5px] px-3.5 relative w-full">
          <Heading5 />
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.3391px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">Border color</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-slate-300 relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg3 />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[11.5px] pt-[10.5px] px-3.5 relative w-full">
          <Label2 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.5312px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Background Color
        </p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-[#ffffff] relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg4 />
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[11.5px] pt-[10.5px] px-3.5 relative w-full">
          <Label3 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.5312px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Field Label Text Color
        </p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-slate-800 relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg5 />
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[11.5px] pt-[10.5px] px-3.5 relative w-full">
          <Label4 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.3391px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Placeholder Text Color
        </p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-slate-500 relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg6 />
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[11.5px] pt-[10.5px] px-3.5 relative w-full">
          <Label5 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.3391px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Input Text Color
        </p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-slate-900 relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg7 />
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[11.5px] pt-[10.5px] px-3.5 relative w-full">
          <Label6 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.3391px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">Help Text Color</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-slate-600 relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg8 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-3.5 py-[10.5px] relative w-full">
          <Label7 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <HorizontalBorder2 />
      <HorizontalBorder3 />
      <HorizontalBorder4 />
      <HorizontalBorder5 />
      <HorizontalBorder6 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundHorizontalBorder2 />
      <Container46 />
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[11.3391px] text-left w-full">
        <p className="block leading-[17.5px]">Buttons</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder3() {
  return (
    <div
      className="bg-gray-50 relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[11.5px] pt-[9.5px] px-3.5 relative w-full">
          <Heading6 />
        </div>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.7234px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">Button BG</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-blue-500 relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg9 />
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[11.5px] pt-[10.5px] px-3.5 relative w-full">
          <Label8 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.3391px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">Button border</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-blue-600 relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg10 />
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[11.5px] pt-[10.5px] px-3.5 relative w-full">
          <Label9 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.3391px] text-left text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Button Text Color
        </p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #717182)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="bg-[#ffffff] relative rounded-[3.35544e+07px] shrink-0 size-[21px]"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      </div>
      <Svg11 />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-3.5 py-[10.5px] relative w-full">
          <Label10 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <HorizontalBorder7 />
      <HorizontalBorder8 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundHorizontalBorder3 />
      <Container52 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Background+Border"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-px relative w-full">
          <HorizontalBorder />
          <Container38 />
          <Container47 />
          <Container53 />
        </div>
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
    </div>
  );
}

function Container54() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 relative shrink-0 w-[336px]"
      data-name="Container"
    >
      <BackgroundBorder1 />
    </div>
  );
}

function Frame1000005552() {
  return (
    <div className="box-border content-stretch flex flex-row gap-7 items-center justify-start p-0 relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <Container33 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container54 />
      </div>
    </div>
  );
}

function Group53751() {
  return (
    <div className="[grid-area:1_/_1] h-[930px] ml-[111px] mt-0 relative w-[448px]">
      <div className="absolute bottom-0 left-[-0.112%] right-[-0.112%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 450 930"
        >
          <g id="Group 53751">
            <path
              d="M1 0V930"
              id="Vector 350"
              stroke="var(--stroke-0, #D8D8DD)"
            />
            <path
              d="M449 0V930"
              id="Vector 351"
              stroke="var(--stroke-0, #D8D8DD)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[-1px]"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.9156px] text-left text-nowrap text-slate-800">
        <p className="block leading-[17.5px] whitespace-pre">First Name</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-px relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5312px] text-[rgba(15,23,42,0.4)] text-left w-full">
            <p className="block leading-[normal]">Enter your first name...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 right-0 rounded-[6.75px] top-[24.5px]"
      data-name="Input"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[10.5px] pt-[9px] px-[11.5px] relative w-full">
          <Container55 />
        </div>
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container56() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[61.5px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.84375px] text-left text-nowrap text-slate-600">
        <p className="block leading-[14px] whitespace-pre">
          Please enter your first name
        </p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[75.5px] relative shrink-0 w-full" data-name="Container">
      <Label11 />
      <Input />
      <Container56 />
    </div>
  );
}

function Label12() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[-1px]"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.7234px] text-left text-nowrap text-slate-800">
        <p className="block leading-[17.5px] whitespace-pre">Last Name</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-px relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5312px] text-[rgba(15,23,42,0.4)] text-left w-full">
            <p className="block leading-[normal]">Enter your last name...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 right-0 rounded-[6.75px] top-[24.5px]"
      data-name="Input"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[10.5px] pt-[9px] px-[11.5px] relative w-full">
          <Container58 />
        </div>
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container59() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[61.5px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.84375px] text-left text-nowrap text-slate-600">
        <p className="block leading-[14px] whitespace-pre">
          Please enter your last name
        </p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[75.5px] relative shrink-0 w-full" data-name="Container">
      <Label12 />
      <Input1 />
      <Container59 />
    </div>
  );
}

function Label13() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[-1px]"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.7234px] text-left text-nowrap text-slate-800">
        <p className="block leading-[17.5px] whitespace-pre">Email Address</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-px relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5312px] text-[rgba(15,23,42,0.4)] text-left w-full">
            <p className="block leading-[normal]">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 right-0 rounded-[6.75px] top-[24.5px]"
      data-name="Input"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[10.5px] pt-[9px] px-[11.5px] relative w-full">
          <Container61 />
        </div>
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container62() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[61.5px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.67969px] text-left text-nowrap text-slate-600">
        <p className="block leading-[14px] whitespace-pre">{`We'll use this to send you updates`}</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[75.5px] relative shrink-0 w-full" data-name="Container">
      <Label13 />
      <Input2 />
      <Container62 />
    </div>
  );
}

function Label14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5312px] text-left text-slate-800 w-full">
        <p className="block leading-[17.5px]">Message</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5312px] text-[rgba(15,23,42,0.4)] text-left w-full">
        <p className="block leading-[17.5px]">Type your message here...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[6.75px] shrink-0 w-full"
      data-name="Textarea"
    >
      <div className="flex flex-row justify-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[43px] pt-[7px] px-[11.5px] relative w-full">
          <Container64 />
        </div>
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start pb-2 pt-0 px-0 relative w-full">
          <Label14 />
          <Textarea />
        </div>
      </div>
    </div>
  );
}

function Frame1000005551() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-3.5 items-start justify-start left-0 p-0 top-0 w-[404px]">
      <Container57 />
      <Container60 />
      <Container63 />
      <Container65 />
    </div>
  );
}

function Button11() {
  return (
    <div
      className="bg-blue-500 relative rounded-[6.75px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-blue-600 border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[15px] py-2 relative">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[11.7234px] text-center text-nowrap">
            <p className="block leading-[17.5px] whitespace-pre">Submit Form</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[6.75px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[15px] py-2 relative">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[11.7234px] text-center text-nowrap">
            <p className="block leading-[17.5px] whitespace-pre">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div
      className="absolute left-0 top-[374px] w-[404px]"
      data-name="Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[10.5px] items-start justify-start pb-0 pt-[7px] px-0 relative w-[404px]">
          <Button11 />
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[415px] relative shrink-0 w-full" data-name="Container">
      <Frame1000005551 />
      <Container66 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Background+Border"
    >
      <div className="absolute border border-slate-200 border-solid inset-[-0.5px] pointer-events-none rounded-[9.25px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[22px] relative w-full">
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Frame1000005554() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[34px] items-start justify-start p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[20.3438px] text-center w-full">
        <p className="block leading-[28px]">Live Preview</p>
      </div>
      <BackgroundBorder2 />
    </div>
  );
}

function Button13() {
  return (
    <div
      className="bg-[#000000] relative rounded-[6.75px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-blue-600 border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-8 py-4 relative">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
            <p className="block leading-[17.5px] whitespace-pre">Export JSON</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div
      className="bg-[#000000] relative rounded-[6.75px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-blue-600 border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-8 py-4 relative">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
            <p className="block leading-[17.5px] whitespace-pre">Export HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005555() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0">
      <Button13 />
      <Button14 />
    </div>
  );
}

function Frame1000005553() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[100px] items-center justify-start ml-[111px] mt-[65px] p-0 relative w-[448px]">
      <Frame1000005554 />
      <Frame1000005555 />
    </div>
  );
}

function Group53752() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] bg-[#f1f0f4] h-[930px] ml-0 mt-0 relative rounded-[8.75px] w-[670px]"
        data-name="image 60"
      >
        <div className="absolute border border-[#d8d8dd] border-solid inset-[-0.5px] pointer-events-none rounded-[9.25px]" />
      </div>
      <Group53751 />
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[127px] relative w-[670px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 670 2"
          >
            <path
              d="M0 1H670"
              id="Vector 352"
              stroke="var(--stroke-0, #D8D8DD)"
            />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[586px] relative w-[670px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 670 2"
          >
            <path
              d="M0 1H670"
              id="Vector 352"
              stroke="var(--stroke-0, #D8D8DD)"
            />
          </svg>
        </div>
      </div>
      <Frame1000005553 />
    </div>
  );
}

function Container68() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-7 items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Frame1000005552 />
      <Group53752 />
    </div>
  );
}

export default function Container69() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-7 items-start justify-start p-[28px] relative size-full">
          <Container1 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}