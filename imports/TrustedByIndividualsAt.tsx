import svgPaths from "./svg-vh4alvo3y8";
import {
  imgGroup,
  imgGroup1,
  imgGroup2,
  imgGroup3,
  imgGroup4,
  imgGroup5,
} from "./svg-yy2dd";

function Group1() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_luminance] [mask-repeat:no-repeat,_no-repeat] absolute bottom-[34.645%] left-[9.375%] mask-position-[0px,_0px_-2.38007px,_-2.38007px] mask-size-[155.6px_29.6px,_155.6px_29.6px] right-[9.416%] top-[37.063%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 156 28"
      >
        <g id="Group">
          <path
            d={svgPaths.p16636900}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p21e22300}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p150e0400}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p161b7c00}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1eb0ac80}
            fill="var(--fill-0, black)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p429e9f0}
            fill="var(--fill-0, black)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div
      className="absolute bottom-[34.583%] contents left-[9.375%] right-[9.583%] top-[34.583%]"
      data-name="Mask group"
    >
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute bottom-[34.583%] contents left-[9.375%] right-[9.583%] top-[34.583%]"
      data-name="Group"
    >
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute bottom-[34.583%] contents left-[9.375%] right-[9.583%] top-[34.583%]"
      data-name="Clip path group"
    >
      <Group2 />
    </div>
  );
}

function Component2() {
  return (
    <div
      className="absolute h-24 overflow-clip translate-x-[-50%] translate-y-[-50%] w-48"
      data-name="Component 2"
      style={{ top: "calc(50% + 28px)", left: "calc(50% - 416px)" }}
    >
      <ClipPathGroup />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute bottom-[31.666%] left-[8.958%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_6.10352e-05px] mask-size-[157.2px_35.2px] right-[9.274%] top-[31.667%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 157 36"
      >
        <g id="Group">
          <path d={svgPaths.p9ee0100} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p21349100}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p10c59170}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3c334d80}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p2edbb80}
            fill="var(--fill-0, black)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p3ee81100}
            fill="var(--fill-0, black)"
            id="Vector_6"
          />
          <path
            d={svgPaths.pd1ff200}
            fill="var(--fill-0, black)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p29595780}
            fill="var(--fill-0, black)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p1c399c18}
            fill="var(--fill-0, black)"
            id="Vector_9"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="absolute bottom-[31.666%] contents left-[8.958%] right-[9.167%] top-[31.667%]"
      data-name="Clip path group"
    >
      <Group3 />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="absolute h-24 overflow-clip translate-x-[-50%] translate-y-[-50%] w-48"
      data-name="Component 3"
      style={{ top: "calc(50% + 28px)", left: "calc(50% - 208px)" }}
    >
      <ClipPathGroup1 />
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute bottom-[32.083%] left-[9.583%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[152px_34.4px] right-[11.25%] top-[32.083%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup3}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 152 35"
      >
        <g id="Group">
          <path
            d={svgPaths.p20221400}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div
      className="absolute bottom-[32.083%] contents left-[9.583%] right-[11.25%] top-[32.083%]"
      data-name="Clip path group"
    >
      <Group4 />
    </div>
  );
}

function Component4() {
  return (
    <div
      className="absolute h-24 left-1/2 overflow-clip translate-x-[-50%] translate-y-[-50%] w-48"
      data-name="Component 4"
      style={{ top: "calc(50% + 28px)" }}
    >
      <ClipPathGroup2 />
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute bottom-[32.083%] left-[18.542%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[127.2px_34px] right-[15.208%] top-[32.5%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup4}')` }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 128 34"
        >
          <g id="Group">
            <path
              d={svgPaths.p1febdf00}
              fill="var(--fill-0, black)"
              id="Vector"
            />
            <path
              d={svgPaths.p254ad500}
              fill="var(--fill-0, black)"
              id="Vector_2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div
      className="absolute bottom-[32.083%] contents left-[18.542%] right-[15.208%] top-[32.5%]"
      data-name="Clip path group"
    >
      <Group5 />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="absolute h-24 overflow-clip translate-x-[-50%] translate-y-[-50%] w-48"
      data-name="Component 5"
      style={{ top: "calc(50% + 28px)", left: "calc(50% + 208px)" }}
    >
      <ClipPathGroup3 />
    </div>
  );
}

function Group6() {
  return (
    <div
      className="absolute bottom-[32.964%] left-[15.904%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.00488281px_0px] mask-size-[130.938px_32.7344px] right-[15.905%] top-[32.951%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup5}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 131 33"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p26052d00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div
      className="absolute bottom-[32.951%] contents left-[15.902%] right-[15.902%] top-[32.951%]"
      data-name="Clip path group"
    >
      <Group6 />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="absolute h-24 overflow-clip translate-x-[-50%] translate-y-[-50%] w-48"
      data-name="Component 1"
      style={{ top: "calc(50% + 28px)", left: "calc(50% + 416px)" }}
    >
      <ClipPathGroup4 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[448px] top-[220px]">
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component1 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[417px] top-[220px]">


    </div>
  );
}

export default function TrustedByIndividualsAt() {
  return null;
}