import React from "react";
import svgPaths from "./svg-djpicf11jo";
// Replace Figma asset imports with regular image imports
import imgColorWheel from "../assets/color-wheel.png";
import imgColorPicker from "../assets/color-picker.png";

function Group3() {
  return (
    <div className="relative shrink-0 size-7">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
        aria-hidden="true"
        role="img"
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

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <Group3 />
      <Frame1 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.2344px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Generate Forms</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#0051ff] relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative">
          <Container />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[21px] py-0 relative">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[13.2344px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Changelog</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[8.75px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[21px] py-0 relative">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[13.125px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Feature requests</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[8.75px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[21px] py-0 relative">
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[13.2344px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Feedback</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[8.75px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[21px] py-0 relative">
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[12.9062px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">How it works</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[8.75px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <ButtonMargin />
      <ButtonMargin1 />
      <ButtonMargin2 />
      <ButtonMargin3 />
      <Button5 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
        aria-hidden="true"
        role="img"
      >
        <g id="SVG">
          <path
            d="M7 1.16667V8.75"
            id="Vector"
            stroke="var(--stroke-0, #4A5565)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p1319cf00}
            id="Vector_2"
            stroke="var(--stroke-0, #4A5565)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p537fbc0}
            id="Vector_3"
            stroke="var(--stroke-0, #4A5565)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[13.6719px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[8.75px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start px-[10.5px] py-[5.25px] relative">
          <Svg />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="mr-[-0.01px] relative shrink-0" data-name="Button:margin">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[10.5px] py-0 relative">
          <Button6 />
        </div>
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
            d="M7 8.75V1.75"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p34aacb00}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p27169580}
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.4531px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Export JSON</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="bg-[#0051ff] mr-[-0.01px] relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center px-4 py-2 relative">
          <Svg1 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-[0.01px] py-0 relative shrink-0"
      data-name="Container"
    >
      <ButtonMargin4 />
      <Button7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-[1400px]">
      <Button />
      <Container5 />
      <Container8 />
    </div>
  );
}

function Nav() {
  return (
    <div
      className="bg-[#ffffff] h-[54px] order-2 shrink-0 sticky top-0 w-full"
      data-name="Nav"
    >
      <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-center justify-center pb-px pt-0 px-0 relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[25px] justify-center relative shrink-0 text-[#101828] text-[28px] w-[560px]">
        <p className="block leading-[24.5px]">Generate Forms</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#4a5565] text-[11.8922px] w-[390px]">
        <p className="block leading-[21px]">
          Choose from pre-defined color templates and customize them to create
          your perfect color scheme.
        </p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-7 py-3.5 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#310404] text-[15.375px] text-center text-nowrap">
            <p className="block leading-[17.5px] whitespace-pre">
              Form Templates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="basis-0 bg-[#0051ff] grow min-h-px min-w-px relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-7 py-3.5 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.375px] text-center text-nowrap">
            <p className="block leading-[17.5px] whitespace-pre">
              Color Settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#ffffff] h-[66px] relative rounded-lg shrink-0">
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[66px] items-center justify-center p-[16px] relative">
          <Button8 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div 
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      role="radio"
      aria-checked="false"
    >
      <div
        className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-[9999px] size-5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <div
        className="[grid-area:1_/_1] bg-[#ffffff] ml-[5.714px] mt-[5.714px] rounded-[9999px] size-[8.571px]"
        data-name="Background+Border"
      />
    </div>
  );
}

function Options() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Options"
      role="radiogroup"
      aria-label="Color template options"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-5 relative w-full">
          <Group7 />
          <div
            className="bg-center bg-cover bg-no-repeat shrink-0 size-9"
            data-name="Color wheel"
            style={{ backgroundImage: `url('${imgColorWheel}')` }}
          />
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">
              Pre-Define Color
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div 
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      role="radio"
      aria-checked="true"
    >
      <div
        className="[grid-area:1_/_1] bg-[#0051ff] ml-0 mt-0 relative rounded-[9999px] size-5"
        data-name="Background+Border"
      >
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <div
        className="[grid-area:1_/_1] bg-[#ffffff] ml-[5.714px] mt-[5.714px] rounded-[9999px] size-[8.571px]"
        data-name="Background+Border"
      />
    </div>
  );
}

function Options1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Options"
      role="radiogroup"
      aria-label="Custom color options"
    >
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-5 relative w-full">
          <Group8 />
          <div
            className="bg-center bg-cover bg-no-repeat shrink-0 size-9"
            data-name="Color picker"
            style={{ backgroundImage: `url('${imgColorPicker}')` }}
          />
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Custom Color</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-center px-4 py-0 relative w-full">
          <Options />
          <Options1 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between leading-[0] p-0 relative shrink-0 text-center text-nowrap w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center not-italic relative shrink-0 text-[#101828] text-[18px]">
        <p className="block leading-[24.5px] text-nowrap whitespace-pre">
          Pre-Define Color
        </p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-blue-600">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Reset to Template
        </p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-gray-900 text-left w-full">
        <p className="block leading-[16px]">Form Container</p>
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
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[11px] pt-2.5 px-4 relative w-full">
          <Heading4 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Form Background color
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-slate-50 relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
      role="button"
      aria-label="Form Background color picker"
      tabIndex="0"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input />
      <Svg2 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
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
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Form Background border color
        </p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="bg-slate-200 relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input1 />
      <Svg3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <HorizontalBorder />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundHorizontalBorder />
      <Container14 />
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-gray-900 text-left w-full">
        <p className="block leading-[16px]">Form Field</p>
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
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[11px] pt-2.5 px-4 relative w-full">
          <Heading5 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Border color</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div
      className="bg-slate-300 relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input2 />
      <Svg4 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Background Color</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input3 />
      <Svg5 />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
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
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Field Label Text Color
        </p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div
      className="bg-slate-800 relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input4 />
      <Svg6 />
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Placeholder Text Color
        </p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div
      className="bg-slate-500 relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input5 />
      <Svg7 />
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
          <Container22 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Input Text Color</p>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div
      className="bg-slate-900 relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input6 />
      <Svg8 />
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
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
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Help Text Color</p>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div
      className="bg-slate-600 relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input7 />
      <Svg9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <HorizontalBorder1 />
          <HorizontalBorder2 />
          <HorizontalBorder3 />
          <HorizontalBorder4 />
          <HorizontalBorder5 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <BackgroundHorizontalBorder1 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-gray-900 text-left w-full">
        <p className="block leading-[16px]">Buttons</p>
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
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[11px] pt-2.5 px-4 relative w-full">
          <Heading6 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Button BG</p>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div
      className="bg-blue-500 relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input8 />
      <Svg10 />
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
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
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Button border</p>
      </div>
    </div>
  );
}

function Input9() {
  return (
    <div
      className="bg-blue-600 relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
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
            stroke="var(--stroke-0, #9CA3AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input9 />
      <Svg11 />
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Button Text Color</p>
      </div>
    </div>
  );
}

function Input10() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[9999px] shrink-0 size-5"
      data-name="Input"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="size-5" />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Svg12() {
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
            stroke="var(--stroke-0, #9CA3AF)"
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Input10 />
      <Svg12 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pb-[13px] pl-0 pr-0 pt-3 relative w-full"
        >
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <HorizontalBorder7 />
          <HorizontalBorder8 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <BackgroundHorizontalBorder2 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="max-h-[1000px] relative rounded-lg shrink-0 w-full"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start max-h-inherit overflow-auto p-0 relative w-full">
        <Container15 />
        <HorizontalBorder6 />
        <HorizontalBorder9 />
      </div>
      <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame12 />
      <Frame14 />
      <Container38 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[46px] items-center justify-start p-0 relative shrink-0 w-[560px]">
      <Frame2 />
      <Frame13 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-16 items-center justify-start ml-[69px] mt-12 p-0 relative w-[561px]">
      <Frame10 />
      <Frame6 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[1203px] ml-0 mt-0 relative w-[700px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 700 1203"
        >
          <path
            d={svgPaths.p617b200}
            fill="var(--fill-0, white)"
            id="Rectangle 11"
            stroke="var(--stroke-0, #E5E7EB)"
          />
        </svg>
      </div>
      <Frame7 />
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.2817px] text-left text-slate-800 w-full">
        <p className="block leading-[25.1282px]">First Name *</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-[1.436px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.2817px] text-[rgba(15,23,42,0.5)] text-left w-full">
            <p className="block leading-[normal]">Enter your first name...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input11() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[9.69231px] shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[15.077px] pt-[12.923px] px-[16.513px] relative w-full">
          <Container39 />
        </div>
      </div>
      <div className="absolute border-[1.4359px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[9.69231px]" />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.1346px] text-left text-slate-600 w-full">
        <p className="block leading-[20.1026px]">
          Please enter your first name
        </p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label />
      <Input11 />
      <Container40 />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5577px] text-left text-slate-800 w-full">
        <p className="block leading-[25.1282px]">Last Name *</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-[1.436px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5577px] text-[rgba(15,23,42,0.5)] text-left w-full">
            <p className="block leading-[normal]">Enter your last name...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input12() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[9.69231px] shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[15.077px] pt-[12.923px] px-[16.513px] relative w-full">
          <Container42 />
        </div>
      </div>
      <div className="absolute border-[1.4359px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[9.69231px]" />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.1346px] text-left text-slate-600 w-full">
        <p className="block leading-[20.1026px]">Please enter your last name</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label1 />
      <Input12 />
      <Container43 />
    </div>
  );
}

function Label2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5577px] text-left text-slate-800 w-full">
        <p className="block leading-[25.1282px]">Email Address *</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-[1.436px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5577px] text-[rgba(15,23,42,0.5)] text-left w-full">
            <p className="block leading-[normal]">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input13() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[9.69231px] shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[15.077px] pt-[12.923px] px-[16.513px] relative w-full">
          <Container45 />
        </div>
      </div>
      <div className="absolute border-[1.4359px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[9.69231px]" />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.899px] text-left text-slate-600 w-full">
        <p className="block leading-[20.1026px]">{`We'll use this to send you updates`}</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label2 />
      <Input13 />
      <Container46 />
    </div>
  );
}

function Label3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5577px] text-left text-slate-800 w-full">
        <p className="block leading-[25.1282px]">Message</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5577px] text-[rgba(15,23,42,0.5)] text-left w-full">
        <p className="block leading-[25.1282px]">Type your message here...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[9.69231px] shrink-0 w-full"
      data-name="Textarea"
    >
      <div className="flex flex-row justify-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[61.744px] pt-[10.051px] px-[16.513px] relative w-full">
          <Container48 />
        </div>
      </div>
      <div className="absolute border-[1.4359px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[9.69231px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start pb-[11.487px] pt-0 px-0 relative w-full">
          <Label3 />
          <Textarea />
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div
      className="bg-blue-500 relative rounded-[9.69231px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pb-[12.205px] pl-[70.273px] pr-[70.287px] pt-[10.051px] relative">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16.8337px] text-center text-nowrap">
            <p className="block leading-[25.1282px] whitespace-pre">
              Submit Form
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[9.69231px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border-[#d1d5dc] border-[1.4359px] border-solid inset-0 pointer-events-none rounded-[9.69231px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[94.611px] py-[11.487px] relative">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16.8337px] text-center text-nowrap">
            <p className="block leading-[25.1282px] whitespace-pre">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[15.077px] items-start justify-start pb-0 pt-[11.487px] px-0 relative w-full">
          <Button10 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[18.667px] items-start justify-start p-0 relative shrink-0 w-[499.692px]"
      data-name="Container"
    >
      <Container41 />
      <Container44 />
      <Container47 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Form() {
  return (
    <div
      className="[grid-area:1_/_1] bg-slate-50 ml-[70px] mt-[155px] relative rounded-[8.75px] w-[560px]"
      data-name="Form"
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[30.154px] pt-[28.718px] px-[30.154px] relative w-[560px]">
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div
      className="bg-[#0051ff] relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Export JSON</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div
      className="bg-[#0051ff] relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Export HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div
      className="bg-gray-100 relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Export CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div
      className="bg-gray-100 relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Copy Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-12 items-center justify-start ml-[0.5px] mt-[1059px] p-0 relative w-[699px]">
      <div className="h-0 relative shrink-0 w-[699px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 699 2"
          >
            <path
              d="M0 1H699"
              id="Vector 3"
              stroke="var(--stroke-0, #E5E7EB)"
            />
          </svg>
        </div>
      </div>
      <Container52 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[1203px] ml-0 mt-0 relative w-[700px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 700 1203"
        >
          <path
            d={svgPaths.p335ef400}
            fill="var(--fill-0, white)"
            id="Rectangle 12"
            stroke="var(--stroke-0, #E5E7EB)"
          />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] ml-[350px] mt-[60.5px] not-italic relative text-[#101828] text-[28px] text-center translate-x-[-50%] translate-y-[-50%] w-[560px]">
        <p className="block leading-[24.5px]">Live Preview</p>
      </div>
      <Form />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start leading-[0] p-0 relative shrink-0">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="relative rounded-[10px] shrink-0 w-[1400px]"
      data-name="Container"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-7 items-center justify-start px-7 py-0 relative w-[1400px]">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div
      className="min-h-[1200px] order-1 relative shrink-0 w-full"
      data-name="Main"
      style={{
        backgroundImage:
          "linear-gradient(144.629deg, rgb(249, 250, 251) 0%, rgb(239, 246, 255) 100%)",
      }}
    >
      <div className="flex flex-col items-center min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start min-h-inherit px-0 py-20 relative w-full">
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute bg-gray-50 box-border content-stretch flex flex-col-reverse items-start justify-start left-0 min-h-[1200px] p-0 right-0 top-0"
      data-name="Background"
    >
      <Nav />
      <Main />
    </div>
  );
}

export default function GenerateFormsColorSettingsCustomColor() {
  return (
    <div
      className="bg-[#f2f7fe] relative size-full"
      data-name="Generate Forms_Color Settings_Custom Color"
    >
      <Background />
    </div>
  );
}