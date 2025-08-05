import svgPaths from "./svg-ornortyfx9";

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

function Zylo() {
  return (
    <div
      className="[grid-area:1_/_1] h-[17.958px] ml-0 mt-0 relative w-[45.974px]"
      data-name="Zylo"
    >
      <div className="absolute bottom-0 left-0 right-0 top-[-0.001%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 18"
        >
          <g id="Zylo">
            <path
              d={svgPaths.pe62c200}
              fill="var(--fill-0, #101828)"
              id="Vector"
            />
            <path
              d={svgPaths.p205c59f0}
              fill="var(--fill-0, #101828)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p1dd49a40}
              fill="var(--fill-0, #101828)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p10d0b00}
              fill="var(--fill-0, #101828)"
              id="Vector_4"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div
      className="[grid-area:1_/_1] h-[15.889px] ml-[47.879px] mt-[0.49px] relative w-[48.203px]"
      data-name="form"
    >
      <div className="absolute bottom-[-0.001%] left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 49 16"
        >
          <g id="form">
            <path
              d={svgPaths.p2f3c2600}
              fill="var(--fill-0, #0051FF)"
              id="Vector"
            />
            <path
              d={svgPaths.p36922400}
              fill="var(--fill-0, #0051FF)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p28b14700}
              fill="var(--fill-0, #0051FF)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p303c9d00}
              fill="var(--fill-0, #0051FF)"
              id="Vector_4"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Zylo />
      <Form />
    </div>
  );
}

export default function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative size-full"
      data-name="Button"
    >
      <Group3 />
      <Group8 />
    </div>
  );
}