import svgPaths from "./svg-9ao65ej5rh";
import {
  imgGroup,
  imgGroup1,
  imgGroup2,
  imgGroup3,
  imgGroup4,
  imgGroup5,
  imgGroup6,
  imgGroup7,
  imgGroup8,
} from "./svg-k5i4r";

function Group1() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_luminance] [mask-repeat:no-repeat,_no-repeat] absolute bottom-[34.645%] left-[9.375%] mask-position-[0px,_0px_-2.37988px,_-2.37988px] mask-size-[155.6px_29.6px,_155.6px_29.6px] right-[9.416%] top-[37.063%]"
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

function Component1() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup />
    </div>
  );
}

function PosthogSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="posthog.svg fill"
    >
      <Component1 />
    </div>
  );
}

function PosthogSvg() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-start left-0 max-w-[1440px] opacity-80 overflow-clip p-0 top-0 w-48"
      data-name="posthog.svg"
    >
      <PosthogSvgFill />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute bottom-[31.666%] left-[8.958%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[157.2px_35.2002px] right-[9.274%] top-[31.667%]"
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

function Component2() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup1 />
    </div>
  );
}

function IntercomSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="intercom.svg fill"
    >
      <Component2 />
    </div>
  );
}

function IntercomSvg() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-start left-52 max-w-[1440px] opacity-80 overflow-clip p-0 top-0 w-48"
      data-name="intercom.svg"
    >
      <IntercomSvgFill />
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute bottom-[32.083%] left-[9.583%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[152px_34.4004px] right-[11.25%] top-[32.083%]"
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

function Component3() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup2 />
    </div>
  );
}

function VercelSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="vercel.svg fill"
    >
      <Component3 />
    </div>
  );
}

function VercelSvg() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-start left-[416px] max-w-[1440px] opacity-80 overflow-clip p-0 top-0 w-48"
      data-name="vercel.svg"
    >
      <VercelSvgFill />
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

function Component4() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup3 />
    </div>
  );
}

function RampSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="ramp.svg fill"
    >
      <Component4 />
    </div>
  );
}

function RampSvg() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-start left-[624px] max-w-[1440px] opacity-80 overflow-clip p-0 top-0 w-48"
      data-name="ramp.svg"
    >
      <RampSvgFill />
    </div>
  );
}

function Group7() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_luminance] [mask-repeat:no-repeat,_no-repeat] absolute bottom-[35.834%] left-[6.458%] mask-position-[0px,_0px] mask-size-[167.2px_27.6px,_33.9707px_27.6px] right-[75.849%] top-[35.417%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup5}'), url('${imgGroup6}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 34 28"
      >
        <g id="Group">
          <path
            d={svgPaths.p3c85e880}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p1661a100}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p11806500}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pf56ed00}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p189aad00}
            fill="var(--fill-0, black)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div
      className="absolute bottom-[35.833%] contents left-[6.458%] right-[75.849%] top-[35.417%]"
      data-name="Mask group"
    >
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div
      className="absolute bottom-[35.833%] contents left-[6.458%] right-[6.429%] top-[35.417%]"
      data-name="Group"
    >
      <div
        className="absolute bottom-[43.24%] left-[31.645%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-48.3594px_-7.16602px] mask-size-[167.2px_27.6px] right-[65.886%] top-[42.881%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 14"
        >
          <path
            d={svgPaths.p1f783500}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.24%] left-[34.467%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-53.7764px_-10.6367px] mask-size-[167.2px_27.6px] right-[60.478%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            d={svgPaths.p1e687400}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[42.948%] left-[40.11%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-64.6104px_-7.22168px] mask-size-[167.2px_27.6px] right-[55.07%] top-[42.939%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 14"
        >
          <path
            d={svgPaths.p2a155ef0}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[45.488%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-74.9375px_-10.6367px] mask-size-[167.2px_27.6px] right-[50.338%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 11"
        >
          <path
            d={svgPaths.p27f7bb00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.24%] left-[50.102%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-83.7969px_-10.917px] mask-size-[167.2px_27.6px] right-[45.136%] top-[46.788%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path d={svgPaths.pb0e3200} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.24%] left-[56.686%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-96.4375px_-7.16602px] mask-size-[167.2px_27.6px] right-[36.76%] top-[42.881%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 13 14"
        >
          <path
            d={svgPaths.p21054600}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[63.005%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-108.568px_-10.6367px] mask-size-[167.2px_27.6px] right-[32.822%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 11"
        >
          <path d={svgPaths.pe42ed00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.24%] left-[67.649%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-117.486px_-10.6367px] mask-size-[167.2px_27.6px] right-[27.296%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path d={svgPaths.p7a86600} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[73.027%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-127.812px_-8.45312px] mask-size-[167.2px_27.6px] right-[24.063%] top-[44.222%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 13"
        >
          <path
            d={svgPaths.p3159ed70}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[76.318%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-134.131px_-10.8604px] mask-size-[167.2px_27.6px] right-[18.685%] top-[46.73%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            d={svgPaths.p2a4ed580}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.298%] left-[81.668%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-144.401px_-10.5811px] mask-size-[167.2px_27.6px] right-[15.364%] top-[46.439%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 10"
        >
          <path
            d={svgPaths.p1ea29000}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[85.136%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-151.061px_-10.6367px] mask-size-[167.2px_27.6px] right-[10.691%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 11"
        >
          <path
            d={svgPaths.p2178ce00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.065%] left-[90.073%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-160.541px_-10.6367px] mask-size-[167.2px_27.6px] right-[6.429%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 11"
        >
          <path
            d={svgPaths.p3b5cba70}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <MaskGroup1 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div
      className="absolute bottom-[35.833%] contents left-[6.458%] right-[6.458%] top-[35.417%]"
      data-name="Clip path group"
    >
      <Group8 />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup4 />
    </div>
  );
}

function IndexSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="index.svg fill"
    >
      <Component5 />
    </div>
  );
}

function IndexSvg() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-24 items-start justify-start left-[832px] max-w-[1440px] opacity-80 overflow-clip p-0 top-0 w-48"
      data-name="index.svg"
    >
      <IndexSvgFill />
    </div>
  );
}

function Group10() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_luminance] [mask-repeat:no-repeat,_no-repeat] absolute bottom-[34.645%] left-[9.375%] mask-position-[0px,_0px_-2.37988px,_-2.37988px] mask-size-[155.6px_29.6px,_155.6px_29.6px] right-[9.416%] top-[37.063%]"
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

function MaskGroup2() {
  return (
    <div
      className="absolute bottom-[34.583%] contents left-[9.375%] right-[9.583%] top-[34.583%]"
      data-name="Mask group"
    >
      <Group10 />
    </div>
  );
}

function Group11() {
  return (
    <div
      className="absolute bottom-[34.583%] contents left-[9.375%] right-[9.583%] top-[34.583%]"
      data-name="Group"
    >
      <MaskGroup2 />
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div
      className="absolute bottom-[34.583%] contents left-[9.375%] right-[9.583%] top-[34.583%]"
      data-name="Clip path group"
    >
      <Group11 />
    </div>
  );
}

function Component6() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup5 />
    </div>
  );
}

function PosthogSvgFill1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="posthog.svg fill"
    >
      <Component6 />
    </div>
  );
}

function PosthogSvg1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start max-w-[1440px] opacity-80 overflow-clip p-0 relative shrink-0 w-48"
      data-name="posthog.svg"
    >
      <PosthogSvgFill1 />
    </div>
  );
}

function Group12() {
  return (
    <div
      className="absolute bottom-[31.666%] left-[8.958%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[157.2px_35.2002px] right-[9.274%] top-[31.667%]"
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

function ClipPathGroup6() {
  return (
    <div
      className="absolute bottom-[31.666%] contents left-[8.958%] right-[9.167%] top-[31.667%]"
      data-name="Clip path group"
    >
      <Group12 />
    </div>
  );
}

function Component7() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup6 />
    </div>
  );
}

function IntercomSvgFill1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="intercom.svg fill"
    >
      <Component7 />
    </div>
  );
}

function IntercomSvg1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start max-w-[1440px] opacity-80 overflow-clip p-0 relative shrink-0 w-48"
      data-name="intercom.svg"
    >
      <IntercomSvgFill1 />
    </div>
  );
}

function Group13() {
  return (
    <div
      className="absolute bottom-[32.083%] left-[9.583%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[152px_34.4004px] right-[11.25%] top-[32.083%]"
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

function ClipPathGroup7() {
  return (
    <div
      className="absolute bottom-[32.083%] contents left-[9.583%] right-[11.25%] top-[32.083%]"
      data-name="Clip path group"
    >
      <Group13 />
    </div>
  );
}

function Component8() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup7 />
    </div>
  );
}

function VercelSvgFill1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="vercel.svg fill"
    >
      <Component8 />
    </div>
  );
}

function VercelSvg1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start max-w-[1440px] opacity-80 overflow-clip p-0 relative shrink-0 w-48"
      data-name="vercel.svg"
    >
      <VercelSvgFill1 />
    </div>
  );
}

function Group14() {
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

function ClipPathGroup8() {
  return (
    <div
      className="absolute bottom-[32.083%] contents left-[18.542%] right-[15.208%] top-[32.5%]"
      data-name="Clip path group"
    >
      <Group14 />
    </div>
  );
}

function Component9() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup8 />
    </div>
  );
}

function RampSvgFill1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="ramp.svg fill"
    >
      <Component9 />
    </div>
  );
}

function RampSvg1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start max-w-[1440px] opacity-80 overflow-clip p-0 relative shrink-0 w-48"
      data-name="ramp.svg"
    >
      <RampSvgFill1 />
    </div>
  );
}

function Group16() {
  return (
    <div
      className="absolute bottom-[20.809%] left-[29.128%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.0878906px_-0.015625px] mask-size-[79.749px_55.707px] right-[29.314%] top-[21.002%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup7}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 56"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.pc07700}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div
      className="absolute bottom-[20.986%] contents left-[29.174%] right-[29.29%] top-[20.986%]"
      data-name="Mask group"
    >
      <Group16 />
    </div>
  );
}

function Component10() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <MaskGroup3 />
      <div
        className="absolute bottom-[47.784%] left-[35.172%] right-[33.525%] top-[44.37%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 61 8"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p139daa40}
            fill="var(--fill-0, #FFFFFE)"
            fillRule="evenodd"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[44.517%] left-[42.395%] right-[46.018%] top-[41.3%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 23 14"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p26426880}
            fill="var(--fill-0, #FFFFFE)"
            fillRule="evenodd"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function SalesforceSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="salesforce.svg fill"
    >
      <Component10 />
    </div>
  );
}

function SalesforceSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start max-w-[1440px] opacity-80 overflow-clip p-0 relative shrink-0 w-48"
      data-name="salesforce.svg"
    >
      <SalesforceSvgFill />
    </div>
  );
}

function Group17() {
  return (
    <div
      className="absolute bottom-[32.964%] left-[15.904%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.00488281px_0px] mask-size-[130.938px_32.7344px] right-[15.905%] top-[32.951%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup8}')` }}
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

function ClipPathGroup9() {
  return (
    <div
      className="absolute bottom-[32.951%] contents left-[15.902%] right-[15.902%] top-[32.951%]"
      data-name="Clip path group"
    >
      <Group17 />
    </div>
  );
}

function Component11() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup9 />
    </div>
  );
}

function LinearSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="linear.svg fill"
    >
      <Component11 />
    </div>
  );
}

function LinearSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start max-w-[1440px] opacity-80 overflow-clip p-0 relative shrink-0 w-48"
      data-name="linear.svg"
    >
      <LinearSvgFill />
    </div>
  );
}

function Group19() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_luminance] [mask-repeat:no-repeat,_no-repeat] absolute bottom-[35.834%] left-[6.458%] mask-position-[0px,_0px] mask-size-[167.2px_27.6px,_33.9707px_27.6px] right-[75.849%] top-[35.417%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup5}'), url('${imgGroup6}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 34 28"
      >
        <g id="Group">
          <path
            d={svgPaths.p3c85e880}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p1661a100}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p11806500}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pf56ed00}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p189aad00}
            fill="var(--fill-0, black)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div
      className="absolute bottom-[35.833%] contents left-[6.458%] right-[75.849%] top-[35.417%]"
      data-name="Mask group"
    >
      <Group19 />
    </div>
  );
}

function Group20() {
  return (
    <div
      className="absolute bottom-[35.833%] contents left-[6.458%] right-[6.429%] top-[35.417%]"
      data-name="Group"
    >
      <div
        className="absolute bottom-[43.24%] left-[31.645%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-48.3594px_-7.16602px] mask-size-[167.2px_27.6px] right-[65.886%] top-[42.881%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 14"
        >
          <path
            d={svgPaths.p1f783500}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.24%] left-[34.467%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-53.7764px_-10.6367px] mask-size-[167.2px_27.6px] right-[60.478%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            d={svgPaths.p1e687400}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[42.948%] left-[40.11%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-64.6104px_-7.22168px] mask-size-[167.2px_27.6px] right-[55.07%] top-[42.939%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 14"
        >
          <path
            d={svgPaths.p2a155ef0}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[45.488%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-74.9375px_-10.6367px] mask-size-[167.2px_27.6px] right-[50.338%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 11"
        >
          <path
            d={svgPaths.p27f7bb00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.24%] left-[50.102%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-83.7969px_-10.917px] mask-size-[167.2px_27.6px] right-[45.136%] top-[46.788%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path d={svgPaths.pb0e3200} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.24%] left-[56.686%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-96.4375px_-7.16602px] mask-size-[167.2px_27.6px] right-[36.76%] top-[42.881%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 13 14"
        >
          <path
            d={svgPaths.p21054600}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[63.005%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-108.568px_-10.6367px] mask-size-[167.2px_27.6px] right-[32.822%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 11"
        >
          <path d={svgPaths.pe42ed00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.24%] left-[67.649%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-117.486px_-10.6367px] mask-size-[167.2px_27.6px] right-[27.296%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path d={svgPaths.p7a86600} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[73.027%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-127.812px_-8.45312px] mask-size-[167.2px_27.6px] right-[24.063%] top-[44.222%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 13"
        >
          <path
            d={svgPaths.p3159ed70}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[76.318%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-134.131px_-10.8604px] mask-size-[167.2px_27.6px] right-[18.685%] top-[46.73%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            d={svgPaths.p2a4ed580}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.298%] left-[81.668%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-144.401px_-10.5811px] mask-size-[167.2px_27.6px] right-[15.364%] top-[46.439%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 10"
        >
          <path
            d={svgPaths.p1ea29000}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.007%] left-[85.136%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-151.061px_-10.6367px] mask-size-[167.2px_27.6px] right-[10.691%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 11"
        >
          <path
            d={svgPaths.p2178ce00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[43.065%] left-[90.073%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-160.541px_-10.6367px] mask-size-[167.2px_27.6px] right-[6.429%] top-[46.497%]"
        data-name="Vector"
        style={{ maskImage: `url('${imgGroup5}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 11"
        >
          <path
            d={svgPaths.p3b5cba70}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <MaskGroup4 />
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div
      className="absolute bottom-[35.833%] contents left-[6.458%] right-[6.458%] top-[35.417%]"
      data-name="Clip path group"
    >
      <Group20 />
    </div>
  );
}

function Component12() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-48"
      data-name="Component 1"
    >
      <ClipPathGroup10 />
    </div>
  );
}

function IndexSvgFill1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-24 items-center justify-center overflow-clip p-0 relative shrink-0 w-48"
      data-name="index.svg fill"
    >
      <Component12 />
    </div>
  );
}

function IndexSvg1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start max-w-[1440px] opacity-80 overflow-clip p-0 relative shrink-0 w-48"
      data-name="index.svg"
    >
      <IndexSvgFill1 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-row gap-4 items-start justify-start left-[1440px] p-0 top-0"
      data-name="Container"
    >
      <PosthogSvg1 />
      <IntercomSvg1 />
      <VercelSvg1 />
      <RampSvg1 />
      <SalesforceSvg />
      <LinearSvg />
      <IndexSvg1 />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="h-24 overflow-clip relative shrink-0 w-[1088px]"
      data-name="Container"
    >
      <PosthogSvg />
      <IntercomSvg />
      <VercelSvg />
      <RampSvg />
      <IndexSvg />
      <Container />
    </div>
  );
}

export default function TrustedByIndividualsAt() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-0 relative size-full"
      data-name="Trusted by individuals at"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14.625px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Trusted by individuals at
        </p>
      </div>
      <Container1 />
    </div>
  );
}