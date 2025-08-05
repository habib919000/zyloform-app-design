import svgPaths from "./svg-30bahk46pt";

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p21740380}
            fill="var(--fill-0, #059669)"
            fillRule="evenodd"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318387() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Ocean Breeze</p>
      </div>
      <CheckCircle />
    </div>
  );
}

function Frame1000005530() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1.5 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-indigo-700 order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#e3e9ff] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput />
    </div>
  );
}

function ButtonGroupButton() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005531() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile />
      <ButtonGroupButton />
    </div>
  );
}

function Frame1000005532() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005530 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005531 />
    </div>
  );
}

function Frame427318410() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-emerald-600 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318387 />
          <Frame1000005532 />
        </div>
      </div>
    </div>
  );
}

function CheckCircleEmpty() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle_Empty">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle_Empty">
          <path
            d={svgPaths.p14fdc580}
            id="Icon"
            stroke="var(--stroke-0, #9CA3AF)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318388() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Forest Green</p>
      </div>
      <CheckCircleEmpty />
    </div>
  );
}

function Frame1000005533() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-[#932841] order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#fbd745] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput1 />
    </div>
  );
}

function ButtonGroupButton1() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005534() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile1 />
      <ButtonGroupButton1 />
    </div>
  );
}

function Frame1000005535() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005533 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005534 />
    </div>
  );
}

function Frame427318413() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318388 />
          <Frame1000005535 />
        </div>
      </div>
    </div>
  );
}

function Frame1000005537() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame427318410 />
      <Frame427318413 />
    </div>
  );
}

function CheckCircleEmpty1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle_Empty">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle_Empty">
          <path
            d={svgPaths.p14fdc580}
            id="Icon"
            stroke="var(--stroke-0, #9CA3AF)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318389() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Mountain Mist</p>
      </div>
      <CheckCircleEmpty1 />
    </div>
  );
}

function Frame1000005536() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-[#932841] order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#fbd745] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput2 />
    </div>
  );
}

function ButtonGroupButton2() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005542() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile2 />
      <ButtonGroupButton2 />
    </div>
  );
}

function Frame1000005543() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005536 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005542 />
    </div>
  );
}

function Frame427318416() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318389 />
          <Frame1000005543 />
        </div>
      </div>
    </div>
  );
}

function CheckCircleEmpty2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle_Empty">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle_Empty">
          <path
            d={svgPaths.p14fdc580}
            id="Icon"
            stroke="var(--stroke-0, #9CA3AF)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318390() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Desert Sand</p>
      </div>
      <CheckCircleEmpty2 />
    </div>
  );
}

function Frame1000005544() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-[#932841] order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#fbd745] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput3() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput3 />
    </div>
  );
}

function ButtonGroupButton3() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005545() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile3 />
      <ButtonGroupButton3 />
    </div>
  );
}

function Frame1000005546() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005544 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005545 />
    </div>
  );
}

function Frame427318414() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318390 />
          <Frame1000005546 />
        </div>
      </div>
    </div>
  );
}

function Frame1000005538() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame427318416 />
      <Frame427318414 />
    </div>
  );
}

function CheckCircleEmpty3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle_Empty">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle_Empty">
          <path
            d={svgPaths.p14fdc580}
            id="Icon"
            stroke="var(--stroke-0, #9CA3AF)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318391() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Autumn Leaves</p>
      </div>
      <CheckCircleEmpty3 />
    </div>
  );
}

function Frame1000005547() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-[#932841] order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#fbd745] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput4() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput4 />
    </div>
  );
}

function ButtonGroupButton4() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005548() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile4 />
      <ButtonGroupButton4 />
    </div>
  );
}

function Frame1000005549() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005547 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005548 />
    </div>
  );
}

function Frame427318417() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318391 />
          <Frame1000005549 />
        </div>
      </div>
    </div>
  );
}

function CheckCircleEmpty4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle_Empty">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle_Empty">
          <path
            d={svgPaths.p14fdc580}
            id="Icon"
            stroke="var(--stroke-0, #9CA3AF)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318392() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Spring Blossom</p>
      </div>
      <CheckCircleEmpty4 />
    </div>
  );
}

function Frame1000005550() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-[#932841] order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#fbd745] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput5() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput5 />
    </div>
  );
}

function ButtonGroupButton5() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005551() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile5 />
      <ButtonGroupButton5 />
    </div>
  );
}

function Frame1000005552() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005550 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005551 />
    </div>
  );
}

function Frame427318418() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318392 />
          <Frame1000005552 />
        </div>
      </div>
    </div>
  );
}

function Frame1000005539() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame427318417 />
      <Frame427318418 />
    </div>
  );
}

function CheckCircleEmpty5() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle_Empty">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle_Empty">
          <path
            d={svgPaths.p14fdc580}
            id="Icon"
            stroke="var(--stroke-0, #9CA3AF)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318393() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Rainbow Spectrum</p>
      </div>
      <CheckCircleEmpty5 />
    </div>
  );
}

function Frame1000005553() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-[#932841] order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#fbd745] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput6() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput6 />
    </div>
  );
}

function ButtonGroupButton6() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005554() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile6 />
      <ButtonGroupButton6 />
    </div>
  );
}

function Frame1000005555() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005553 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005554 />
    </div>
  );
}

function Frame427318419() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318393 />
          <Frame1000005555 />
        </div>
      </div>
    </div>
  );
}

function CheckCircleEmpty6() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle_Empty">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle_Empty">
          <path
            d={svgPaths.p14fdc580}
            id="Icon"
            stroke="var(--stroke-0, #9CA3AF)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318394() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Galaxy Purple</p>
      </div>
      <CheckCircleEmpty6 />
    </div>
  );
}

function Frame1000005556() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-[#932841] order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#fbd745] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput7() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput7 />
    </div>
  );
}

function ButtonGroupButton7() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005557() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile7 />
      <ButtonGroupButton7 />
    </div>
  );
}

function Frame1000005558() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005556 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005557 />
    </div>
  );
}

function Frame427318420() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318394 />
          <Frame1000005558 />
        </div>
      </div>
    </div>
  );
}

function Frame1000005540() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame427318419 />
      <Frame427318420 />
    </div>
  );
}

function CheckCircleEmpty7() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle_Empty">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle_Empty">
          <path
            d={svgPaths.p14fdc580}
            id="Icon"
            stroke="var(--stroke-0, #9CA3AF)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318395() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Sunshine Yellow</p>
      </div>
      <CheckCircleEmpty7 />
    </div>
  );
}

function Frame1000005559() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-[#932841] order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#fbd745] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput8() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput8 />
    </div>
  );
}

function ButtonGroupButton8() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005560() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile8 />
      <ButtonGroupButton8 />
    </div>
  );
}

function Frame1000005561() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005559 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005560 />
    </div>
  );
}

function Frame427318421() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318395 />
          <Frame1000005561 />
        </div>
      </div>
    </div>
  );
}

function CheckCircleEmpty8() {
  return (
    <div className="relative shrink-0 size-6" data-name="Check circle_Empty">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Check circle_Empty">
          <path
            d={svgPaths.p14fdc580}
            id="Icon"
            stroke="var(--stroke-0, #9CA3AF)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame427318396() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Lavender Mist</p>
      </div>
      <CheckCircleEmpty8 />
    </div>
  );
}

function Frame1000005562() {
  return (
    <div className="box-border content-stretch flex flex-row-reverse gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-[#932841] order-4 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-slate-300 order-3 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-[#fbd745] order-2 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
      <div
        className="bg-gray-500 order-1 rounded-[44px] shrink-0 size-5"
        data-name="Rectangle"
      />
    </div>
  );
}

function FormFieldsTextInput9() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[3.66655px] shrink-0 w-full"
      data-name="Form Fields/Text input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[7.944px] py-[5.5px] w-full" />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function InputWithLabelMobile9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.111px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input with label/Mobile"
    >
      <FormFieldsTextInput9 />
    </div>
  );
}

function ButtonGroupButton9() {
  return (
    <div
      className="bg-indigo-700 relative rounded-[3.66655px] shadow-[0px_0.611092px_1.22218px_0px_rgba(0,0,0,0.05)] shrink-0"
      data-name="Button Group/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.333px] items-center justify-center px-[14.666px] py-[5.5px] relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[9.77747px] text-left text-nowrap">
            <p className="block leading-[14.6662px] whitespace-pre">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005563() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <InputWithLabelMobile9 />
      <ButtonGroupButton9 />
    </div>
  );
}

function Frame1000005564() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1000005562 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute bottom-[-11.539%] left-[-2.5px] right-[-2.5px] top-[-3.846%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 30"
          >
            <g filter="url(#filter0_d_1_1686)" id="Vector 349">
              <path d="M3 1V27" stroke="var(--stroke-0, #CBD5E1)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="30"
                id="filter0_d_1_1686"
                width="5"
                x="0.5"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_1686"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1686"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1000005563 />
    </div>
  );
}

function Frame427318422() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-5 relative w-full">
          <Frame427318396 />
          <Frame1000005564 />
        </div>
      </div>
    </div>
  );
}

function Frame1000005541() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame427318421 />
      <Frame427318422 />
    </div>
  );
}

function Frame427318409() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame1000005537 />
      <Frame1000005538 />
      <Frame1000005539 />
      <Frame1000005540 />
      <Frame1000005541 />
    </div>
  );
}

export default function Frame427318415() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative size-full">
      <Frame427318409 />
    </div>
  );
}