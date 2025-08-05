import svgPaths from "./svg-getfqwk6a3";
import imgImage3 from "figma:asset/e96407f95d60718e91b5b52eb20506b3b5088a6d.png";
import imgImage4 from "figma:asset/79bb91bdfef9ba61047659d42a4e9a8ca8e8a99e.png";
import imgImage2 from "figma:asset/834b329832f6cef839e226f1989e740ce3c9c6d8.png";
import imgImage5 from "figma:asset/b582a198b96aaee2492afa3db3f323bf58bbecd4.png";

function Heading2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#003720] text-[42.5625px] text-center tracking-[-0.72px] w-full">
        <p className="block leading-[48px]">How it works</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#83928c] text-[22.125px] text-center w-full">
        <p className="block leading-[32px]">
          From template selection to instant export — build, customize, preview,
          and deploy forms effortlessly.
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading2 />
      <Container />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-20 items-center justify-start px-52 py-0 relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function WpufIconsOutlineRectangleGroup() {
  return (
    <div
      className="relative shrink-0 size-12"
      data-name="WPUF icons-outline/rectangle-group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="WPUF icons-outline/rectangle-group">
          <g id="Vector">
            <path
              d={svgPaths.p34c7e580}
              stroke="var(--stroke-0, #0F172A)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p328f2080}
              stroke="var(--stroke-0, #0F172A)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.pb829b80}
              stroke="var(--stroke-0, #0F172A)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-[419px]">
      <WpufIconsOutlineRectangleGroup />
      <div
        className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0e0f0c] text-[22.125px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[32px]">Choose a Template</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#83928c] text-[18px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[28px]">
          Start by selecting one of our pre-designed color templates that
          matches your style preferences.
        </p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#ffffff] h-[206px] ml-0 mt-0 relative rounded-tl-[8px] rounded-tr-[8px] w-[419px]">
        <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      </div>
      <div
        className="[background-size:106.17%_112.8%] [grid-area:1_/_1] bg-[95.98%_47.84%] bg-no-repeat h-[181px] ml-[113px] mt-[25px] w-[193px]"
        data-name="image 3"
        style={{ backgroundImage: `url('${imgImage3}')` }}
      />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#ffffff] from-[41.787%] gap-[54px] items-start justify-start pb-0 pt-[54px] px-[54px] relative rounded-xl shrink-0 to-[#edfbff]">
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame4 />
      <Group1 />
    </div>
  );
}

function WpufIconsOutlineSwatch() {
  return (
    <div
      className="relative shrink-0 size-12"
      data-name="WPUF icons-outline/swatch"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="WPUF icons-outline/swatch">
          <path
            d={svgPaths.p37a99e00}
            id="Vector"
            stroke="var(--stroke-0, #0F172A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
      <WpufIconsOutlineSwatch />
      <div
        className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0e0f0c] text-[22.125px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[32px]">Customize Colors</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#83928c] text-[18px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[28px]">
          Fine-tune individual colors for form containers, fields, buttons, and
          text elements.
        </p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#ffffff] h-[206px] ml-0 mt-0 relative rounded-tl-[8px] rounded-tr-[8px] w-[419px]">
        <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      </div>
      <div
        className="[background-size:102.06%_106%] [grid-area:1_/_1] bg-[100%_98.42%] bg-no-repeat h-[172px] ml-16 mt-[31.5px] w-[291px]"
        data-name="image 4"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#ffffff] from-[41.787%] gap-[54px] items-start justify-start pb-0 pt-[54px] px-[54px] relative rounded-xl shrink-0 to-[#edfbff]">
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame5 />
      <Group2 />
    </div>
  );
}

function WpufIconsOutlineEye() {
  return (
    <div
      className="relative shrink-0 size-10"
      data-name="WPUF icons-outline/eye"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="WPUF icons-outline/eye">
          <g id="Vector">
            <path
              d={svgPaths.p3e93b080}
              stroke="var(--stroke-0, #0F172A)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p12611570}
              stroke="var(--stroke-0, #0F172A)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-[419px]">
      <WpufIconsOutlineEye />
      <div
        className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0e0f0c] text-[22.125px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[32px]">Preview Live</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#83928c] text-[18px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[28px]">
          See your changes instantly in a real form preview with all your
          customizations applied.
        </p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#ffffff] h-[206px] ml-0 mt-0 relative rounded-tl-[8px] rounded-tr-[8px] w-[419px]">
        <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      </div>
      <div
        className="[background-size:111.38%_254.92%] [grid-area:1_/_1] bg-[60.78%_5.86%] bg-no-repeat h-[163px] ml-16 mt-[43px] rounded-tl-[13px] rounded-tr-[13px] w-[291px]"
        data-name="image 2"
        style={{ backgroundImage: `url('${imgImage2}')` }}
      />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#ffffff] from-[41.787%] gap-[54px] items-start justify-start pb-0 pt-[54px] px-[54px] relative rounded-xl shrink-0 to-[#edfbff]">
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame6 />
      <Group3 />
    </div>
  );
}

function WpufIconsOutlineSwatch1() {
  return (
    <div
      className="relative shrink-0 size-12"
      data-name="WPUF icons-outline/swatch"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="WPUF icons-outline/swatch">
          <path
            d={svgPaths.p37a99e00}
            id="Vector"
            stroke="var(--stroke-0, #0F172A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-[419px]">
      <WpufIconsOutlineSwatch1 />
      <div
        className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0e0f0c] text-[22.125px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[32px]">{`Export & Use`}</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#83928c] text-[18px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[28px]">
          Export your design as JSON or HTML to implement in your projects
          immediately.
        </p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#ffffff] h-[206px] ml-0 mt-0 relative rounded-tl-[8px] rounded-tr-[8px] w-[419px]">
        <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      </div>
      <div
        className="[background-size:207.64%_164.15%] [grid-area:1_/_1] bg-[8.74%_42.65%] bg-no-repeat h-[53px] ml-[53px] mt-[45px] w-[313px]"
        data-name="image 5"
        style={{ backgroundImage: `url('${imgImage5}')` }}
      />
      <div
        className="[background-size:221.32%_152.63%] [grid-area:1_/_1] bg-[96.1%_41.67%] bg-no-repeat h-[57px] ml-[81px] mt-[119px] w-[258px]"
        data-name="image 6"
        style={{ backgroundImage: `url('${imgImage5}')` }}
      />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#ffffff] from-[41.787%] gap-[54px] items-start justify-start pb-0 pt-[54px] px-[54px] relative rounded-xl shrink-0 to-[#edfbff]">
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame7 />
      <Group4 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="[flex-flow:wrap] box-border content-center flex gap-[30px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame41 />
      <Frame42 />
      <Frame43 />
      <Frame44 />
    </div>
  );
}

export default function Frame45() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[60px] items-center justify-start p-0 relative size-full">
      <Margin />
      <Frame46 />
    </div>
  );
}