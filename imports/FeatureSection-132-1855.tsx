import svgPaths from "./svg-60hf1l5dlo";
import imgColorWheel from "figma:asset/36c56bd854b8f69f211dd8ee49c36448cac6ce1a.png";
import imgColorPicker from "figma:asset/ee9d56913d68b0e8b0bd715adaf1cd0cb46fb655.png";

function Heading2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#003720] text-[43.6875px] text-left tracking-[-0.72px] w-full">
        <p className="block leading-[48px]">50+ professional templates</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#83928c] text-[17.9688px] text-left w-full">
        <p className="block leading-[28px]">
          Browse our curated gallery of 50+ smart form templates. Ready to use
          for marketing, hiring, onboarding, lead generation, and more.
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start p-0 relative shrink-0 w-[504px]"
      data-name="Container"
    >
      <Heading2 />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 grow h-[457.321px] min-h-px min-w-px shrink-0"
      data-name="Container"
    />
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip px-0 py-[0.885px] relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[12.3906px] text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">
          All Templates
        </p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div
      className="bg-[#efefef] relative rounded-[5.31027px] shrink-0 w-full"
      data-name="Options"
    >
      <div className="absolute border-[0.885044px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[5.31027px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[14.1607px] relative w-full">
          <Container3 />
          <div
            className="h-[4.425px] relative shrink-0 w-[8.85px]"
            data-name="Vector"
          >
            <div className="absolute bottom-[-11.667%] left-[-5.833%] right-[-5.833%] top-[-11.667%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 11 6"
              >
                <path
                  d={svgPaths.p3e7ae700}
                  id="Vector"
                  stroke="var(--stroke-0, #9CA3AF)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.03255"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12.3906px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[17.7009px] whitespace-pre">
          Basic Contact Form
        </p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="relative shrink-0 size-[14.161px]" data-name="Background">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Background">
          <rect
            fill="var(--fill-0, #3B82F6)"
            height="14.1607"
            rx="7.08036"
            width="14.1607"
          />
          <path
            d={svgPaths.p29c6c800}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.65946"
          />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[14.161px] items-start justify-start pl-[7.08px] pr-0 py-0 relative shrink-0 w-[21.241px]"
      data-name="Margin"
    >
      <Background />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading4 />
      <Margin />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-600 text-left w-full">
        <p className="block leading-[14.1607px]">
          A simple contact form with essential fields
        </p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.08px] items-start justify-start p-0 relative shrink-0 w-full">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="capitalize flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">contact</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">4 fields</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container6 />
      <Container7 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-blue-50 box-border content-stretch flex flex-col h-[102.665px] items-start justify-between p-[14.1607px] relative rounded-[7.08036px] shrink-0 w-[199px]"
      data-name="Button"
    >
      <div className="absolute border-[0.885044px] border-blue-500 border-solid inset-0 pointer-events-none rounded-[7.08036px]" />
      <Frame15 />
      <Container8 />
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12.3906px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[17.7009px] whitespace-pre">
          Advanced Contact Form
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading5 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-600 text-left w-full">
        <p className="block leading-[14.1607px]">
          Comprehensive contact form with additional fields
        </p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.08px] items-start justify-start p-0 relative shrink-0 w-full">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="capitalize flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">contact</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">7 fields</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container11 />
      <Container12 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[102.665px] items-start justify-between p-[14.1607px] relative rounded-[7.08036px] shrink-0 w-[199px]"
      data-name="Button"
    >
      <div className="absolute border-[0.885044px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[7.08036px]" />
      <Frame16 />
      <Container13 />
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12.3906px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[17.7009px] whitespace-pre">
          User Registration
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading6 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-600 text-left w-full">
        <p className="block leading-[14.1607px]">
          Basic user registration form
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.08px] items-start justify-start p-0 relative shrink-0 w-full">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="capitalize flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">registration</p>
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
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">6 fields</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container16 />
      <Container17 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[102.665px] items-start justify-between p-[14.1607px] relative rounded-[7.08036px] shrink-0 w-[199px]"
      data-name="Button"
    >
      <div className="absolute border-[0.885044px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[7.08036px]" />
      <Frame17 />
      <Container18 />
    </div>
  );
}

function Heading7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12.3906px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[17.7009px] whitespace-pre">
          Customer Feedback Survey
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading7 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-600 text-left w-full">
        <p className="block leading-[14.1607px]">
          Collect customer feedback and ratings
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.08px] items-start justify-start p-0 relative shrink-0 w-full">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="capitalize flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">survey</p>
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
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">6 fields</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container21 />
      <Container22 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[102.665px] items-start justify-between p-[14.1607px] relative rounded-[7.08036px] shrink-0 w-[199px]"
      data-name="Button"
    >
      <div className="absolute border-[0.885044px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[7.08036px]" />
      <Frame18 />
      <Container23 />
    </div>
  );
}

function Heading8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12.3906px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[17.7009px] whitespace-pre">
          Lead Generation Form
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading8 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-600 text-left w-full">
        <p className="block leading-[14.1607px]">
          Capture potential customer information
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.08px] items-start justify-start p-0 relative shrink-0 w-full">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="capitalize flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">lead</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">8 fields</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container26 />
      <Container27 />
    </div>
  );
}

function Button4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[102.665px] items-start justify-between p-[14.1607px] relative rounded-[7.08036px] shrink-0 w-[199px]"
      data-name="Button"
    >
      <div className="absolute border-[0.885044px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[7.08036px]" />
      <Frame20 />
      <Container28 />
    </div>
  );
}

function Heading9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12.3906px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[17.7009px] whitespace-pre">
          Appointment Booking
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading9 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-600 text-left w-full">
        <p className="block leading-[14.1607px]">
          Schedule appointments with date and time selection
        </p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.08px] items-start justify-start p-0 relative shrink-0 w-full">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="capitalize flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">booking</p>
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
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">7 fields</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container31 />
      <Container32 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[102.665px] items-start justify-between p-[14.1607px] relative rounded-[7.08036px] shrink-0 w-[199px]"
      data-name="Button"
    >
      <div className="absolute border-[0.885044px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[7.08036px]" />
      <Frame19 />
      <Container33 />
    </div>
  );
}

function Heading10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12.3906px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[17.7009px] whitespace-pre">
          Support Ticket Form
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading10 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-600 text-left w-full">
        <p className="block leading-[14.1607px]">
          Submit technical support requests
        </p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.08px] items-start justify-start p-0 relative shrink-0 w-full">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="capitalize flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">support</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10.6205px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[14.1607px] whitespace-pre">8 fields</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container36 />
      <Container37 />
    </div>
  );
}

function Button6() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[102.665px] items-start justify-between p-[14.1607px] relative rounded-[7.08036px] shrink-0 w-[242.502px]"
      data-name="Button"
    >
      <div className="absolute border-[0.885044px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[7.08036px]" />
      <Frame21 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-[10.62px] items-start justify-start max-h-[814.241px] overflow-auto p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[14.161px] items-center justify-start p-0 relative w-[409.135px]"
      data-name="Container"
    >
      <Options />
      <Container39 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="backdrop-blur backdrop-filter bg-[#ffffff] h-[438px] relative rounded-lg w-[502px]"
      data-name="Background"
    >
      <div className="box-border content-stretch flex flex-col h-[438px] items-center justify-start overflow-clip p-[48px] relative w-[502px]">
        <div className="flex h-[502.982px] items-center justify-center relative shrink-0 w-[411.765px]">
          <div className="flex-none rotate-[359.697deg]">
            <Container40 />
          </div>
        </div>
      </div>
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Section() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-center max-w-[1152px] px-8 py-[71.41px] relative shrink-0 w-[1152px]"
      data-name="Section"
    >
      <div className="flex flex-row items-center self-stretch">
        <Container1 />
      </div>
      <Container2 />
      <div className="flex h-[455.253px] items-center justify-center relative shrink-0 w-[516.98px]">
        <div className="flex-none rotate-[2deg]">
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div
      className="basis-0 grow h-[457.321px] min-h-px min-w-px shrink-0"
      data-name="Container"
    />
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] bg-[#0051ff] ml-0 mt-0 relative rounded-[8204.7px] size-[16.411px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="[grid-area:1_/_1] bg-[#ffffff] ml-[4.689px] mt-[4.689px] rounded-[8204.7px] size-[7.033px]"
        data-name="Background+Border"
      />
    </div>
  );
}

function Options1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-[6.56442px] shrink-0"
      data-name="Options"
    >
      <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[6.56442px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[13.129px] items-center justify-start px-[13.129px] py-[16.411px] relative w-full">
          <Group6 />
          <div
            className="bg-center bg-cover bg-no-repeat shrink-0 size-[29.54px]"
            data-name="Color wheel"
            style={{ backgroundImage: `url('${imgColorWheel}')` }}
          />
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[11.4877px] text-left text-nowrap">
            <p className="block leading-[13.1288px] whitespace-pre">
              Pre-Define Color
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-[8204.7px] size-[16.411px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="[grid-area:1_/_1] bg-[#ffffff] ml-[4.689px] mt-[4.689px] rounded-[8204.7px] size-[7.033px]"
        data-name="Background+Border"
      />
    </div>
  );
}

function Options2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-[6.56442px] shrink-0"
      data-name="Options"
    >
      <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[6.56442px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[13.129px] items-center justify-start px-[13.129px] py-[16.411px] relative w-full">
          <Group7 />
          <div
            className="bg-center bg-cover bg-no-repeat shrink-0 size-[29.54px]"
            data-name="Color picker"
            style={{ backgroundImage: `url('${imgColorPicker}')` }}
          />
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[11.4877px] text-left text-nowrap">
            <p className="block leading-[13.1288px] whitespace-pre">
              Custom Color
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[13.129px] items-start justify-center p-0 relative shrink-0 w-full">
      <Options1 />
      <Options2 />
    </div>
  );
}

function Container42() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[11.4877px] text-center text-gray-900 text-nowrap">
        <p className="block leading-[16.411px] whitespace-pre">Ocean Breeze</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="relative shrink-0 size-[13.129px]" data-name="Background">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Background">
          <rect
            fill="var(--fill-0, #0051FF)"
            height="13.1288"
            rx="6.56442"
            width="13.1288"
          />
          <path
            d={svgPaths.p31a2b940}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.53853"
          />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container42 />
      <Background2 />
    </div>
  );
}

function Container44() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.282px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-blue-800 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-blue-500 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-blue-300 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-blue-100 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="bg-blue-50 relative rounded-[6.56442px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border-[#0051ff] border-[0.820552px] border-solid inset-0 pointer-events-none rounded-[6.56442px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9.847px] items-start justify-start p-[13.9494px] relative w-full">
          <Container43 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[11.4877px] text-center text-gray-900 text-nowrap">
        <p className="block leading-[16.411px] whitespace-pre">Forest Green</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.282px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-green-900 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-green-600 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-green-400 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-green-200 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[6.56442px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[6.56442px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9.847px] items-start justify-start p-[13.9494px] relative w-full">
          <Container46 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[11.4877px] text-center text-gray-900 text-nowrap">
        <p className="block leading-[16.411px] whitespace-pre">Mountain Mist</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.282px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-gray-700 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-gray-500 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-gray-400 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-gray-200 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[6.56442px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[6.56442px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9.847px] items-start justify-start p-[13.9494px] relative w-full">
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[11.4877px] text-center text-gray-900 text-nowrap">
        <p className="block leading-[16.411px] whitespace-pre">Desert Sand</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.282px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-yellow-700 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-amber-600 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-amber-500 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
      <div
        className="bg-amber-100 relative rounded-[8204.7px] shrink-0 size-[11.488px]"
        data-name="Background+Border"
      >
        <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8204.7px]" />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[6.56442px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border-[0.820552px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[6.56442px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9.847px] items-start justify-start p-[13.9494px] relative w-full">
          <Container52 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[9.847px] items-start justify-start max-h-[820.552px] overflow-auto p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[19.693px] items-start justify-start p-0 relative w-[421.377px]">
      <Frame12 />
      <Container54 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="backdrop-blur backdrop-filter bg-[#ffffff] h-[438px] relative rounded-lg w-[502px]"
      data-name="Background"
    >
      <div className="box-border content-stretch flex flex-col h-[438px] items-center justify-start overflow-clip p-[48px] relative w-[502px]">
        <div className="flex h-[374.335px] items-center justify-center relative shrink-0 w-[421.672px]">
          <div className="flex-none rotate-[0.046deg]">
            <Frame13 />
          </div>
        </div>
      </div>
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[48px] not-italic relative shrink-0 text-[#003720] text-[43.6875px] text-left tracking-[-0.72px] w-full">
        <p className="block mb-0">{`Custom colors `}</p>
        <p className="block">full control over form aesthetics</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#83928c] text-[17.9688px] text-left w-full">
        <p className="block leading-[28px]">
          Style your forms to match your brand. Customize fonts, colors, and
          layout with our intuitive builder.
        </p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start p-0 relative shrink-0 w-[504px]"
      data-name="Container"
    >
      <Heading3 />
      <Container55 />
    </div>
  );
}

function Section1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-center max-w-[1152px] px-8 py-[71.41px] relative shrink-0 w-[1152px]"
      data-name="Section"
    >
      <Container41 />
      <div className="flex h-[455.253px] items-center justify-center relative shrink-0 w-[516.98px]">
        <div className="flex-none rotate-[2deg]">
          <Background3 />
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container56 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[48px] not-italic relative shrink-0 text-[#003720] text-[43.6875px] text-left tracking-[-0.72px] w-full">
        <p className="block mb-0">Live preview</p>
        <p className="block">design with instant feedback</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#83928c] text-[17.9688px] text-left w-full">
        <p className="block leading-[28px]">
          Every change you make updates instantly. No guessing. See exactly how
          your form will appear to users.
        </p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start p-0 relative shrink-0 w-[504px]"
      data-name="Container"
    >
      <Heading11 />
      <Container57 />
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.2644px] text-left text-slate-800 w-full">
        <p className="block leading-[18.9281px]">First Name *</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip px-0 py-[1.082px] relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.2644px] text-[rgba(15,23,42,0.5)] text-left w-full">
        <p className="block leading-[normal]">Enter your first name...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[7.30084px] shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[11.357px] pt-[9.734px] px-[12.438px] relative w-full">
          <Container59 />
        </div>
      </div>
      <div className="absolute border-[1.08161px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[7.30084px]" />
    </div>
  );
}

function Container60() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.6471px] text-left text-slate-600 w-full">
        <p className="block leading-[15.1425px]">
          Please enter your first name
        </p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.786px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label />
      <Input />
      <Container60 />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.4723px] text-left text-slate-800 w-full">
        <p className="block leading-[18.9281px]">Last Name *</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip px-0 py-[1.082px] relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.4723px] text-[rgba(15,23,42,0.5)] text-left w-full">
        <p className="block leading-[normal]">Enter your last name...</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[7.30084px] shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[11.357px] pt-[9.734px] px-[12.438px] relative w-full">
          <Container62 />
        </div>
      </div>
      <div className="absolute border-[1.08161px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[7.30084px]" />
    </div>
  );
}

function Container63() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.6471px] text-left text-slate-600 w-full">
        <p className="block leading-[15.1425px]">Please enter your last name</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.786px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label1 />
      <Input1 />
      <Container63 />
    </div>
  );
}

function Label2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.4723px] text-left text-slate-800 w-full">
        <p className="block leading-[18.9281px]">Email Address *</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip px-0 py-[1.082px] relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.4723px] text-[rgba(15,23,42,0.5)] text-left w-full">
        <p className="block leading-[normal]">user@example.com</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[7.30084px] shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[11.357px] pt-[9.734px] px-[12.438px] relative w-full">
          <Container65 />
        </div>
      </div>
      <div className="absolute border-[1.08161px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[7.30084px]" />
    </div>
  );
}

function Container66() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.4696px] text-left text-slate-600 w-full">
        <p className="block leading-[15.1425px]">{`We'll use this to send you updates`}</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.786px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label2 />
      <Input2 />
      <Container66 />
    </div>
  );
}

function Label3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.4723px] text-left text-slate-800 w-full">
        <p className="block leading-[18.9281px]">Message</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.4723px] text-[rgba(15,23,42,0.5)] text-left w-full">
        <p className="block leading-[18.9281px]">Type your message here...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[7.30084px] shrink-0 w-full"
      data-name="Textarea"
    >
      <div className="flex flex-row justify-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[46.509px] pt-[7.571px] px-[12.438px] relative w-full">
          <Container68 />
        </div>
      </div>
      <div className="absolute border-[1.08161px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[7.30084px]" />
    </div>
  );
}

function Container69() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.786px] items-start justify-start pb-[8.653px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label3 />
      <Textarea />
    </div>
  );
}

function Button11() {
  return (
    <div
      className="bg-blue-500 box-border content-stretch flex flex-col items-center justify-center pb-[9.194px] pl-[52.934px] pr-[52.945px] pt-[7.571px] relative rounded-[7.30084px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.6801px] text-center text-nowrap">
        <p className="block leading-[18.9281px] whitespace-pre">Submit Form</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center px-[71.267px] py-[8.653px] relative rounded-[7.30084px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border-[#d1d5dc] border-[1.08161px] border-solid inset-0 pointer-events-none rounded-[7.30084px]" />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[12.6801px] text-center text-nowrap">
        <p className="block leading-[18.9281px] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[11.357px] items-start justify-start pb-0 pt-[8.653px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container71() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[14.061px] items-start justify-start p-0 relative shrink-0 w-[376.399px]"
      data-name="Container"
    >
      <Container61 />
      <Container64 />
      <Container67 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Form() {
  return (
    <div
      className="bg-slate-50 box-border content-stretch flex flex-col items-center justify-start pb-[22.714px] pt-[21.632px] px-[22.714px] relative rounded-[6.59104px] w-[421.826px]"
      data-name="Form"
    >
      <div className="absolute border-[0.753261px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[6.59104px]" />
      <Container71 />
    </div>
  );
}

function Background4() {
  return (
    <div
      className="backdrop-blur backdrop-filter bg-[#ffffff] h-[580.358px] relative rounded-lg w-[502px]"
      data-name="Background"
    >
      <div className="box-border content-stretch flex flex-col h-[580.358px] items-center justify-start overflow-clip p-[48px] relative w-[502px]">
        <div className="flex h-[490.033px] items-center justify-center relative shrink-0 w-[423.86px]">
          <div className="flex-none rotate-[359.759deg]">
            <Form />
          </div>
        </div>
      </div>
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Section2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-center max-w-[1152px] px-8 py-[71.41px] relative shrink-0 w-[1152px]"
      data-name="Section"
    >
      <div className="flex flex-row items-center self-stretch">
        <Container58 />
      </div>
      <div className="flex h-[597.51px] items-center justify-center relative shrink-0 w-[521.948px]">
        <div className="flex-none rotate-[2deg]">
          <Background4 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div
      className="basis-0 grow h-[369px] min-h-px min-w-px shrink-0"
      data-name="Container"
    />
  );
}

function Button13() {
  return (
    <div
      className="bg-[#0051ff] box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Export JSON</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div
      className="bg-[#0051ff] box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Export HTML</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div
      className="bg-gray-100 box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Export CSS</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div
      className="bg-gray-100 box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Copy Code</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-3 items-center justify-center p-0 relative w-[290px]"
      data-name="Container"
    >
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Background5() {
  return (
    <div
      className="backdrop-blur backdrop-filter bg-[#ffffff] h-[343.838px] relative rounded-lg w-[502px]"
      data-name="Background"
    >
      <div className="box-border content-stretch flex flex-col h-[343.838px] items-center justify-center overflow-clip p-[48px] relative w-[502px]">
        <div className="flex h-[110.363px] items-center justify-center relative shrink-0 w-[290.872px]">
          <div className="flex-none rotate-[359.532deg]">
            <Container73 />
          </div>
        </div>
      </div>
      <div className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#003720] text-[43.6875px] text-left tracking-[-0.72px] w-full">
        <p className="block leading-[48px]">{`Export & Deploy Anywhere`}</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#83928c] text-[17.9688px] text-left w-full">
        <p className="block leading-[28px]">
          Export code, share a link, or embed your form on any platform. Your
          form, your rules.
        </p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start p-0 relative shrink-0 w-[504px]"
      data-name="Container"
    >
      <Heading12 />
      <Container74 />
    </div>
  );
}

function Section3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-center max-w-[1152px] px-8 py-[71.41px] relative shrink-0 w-[1152px]"
      data-name="Section"
    >
      <Container72 />
      <div className="flex h-[361.138px] items-center justify-center relative shrink-0 w-[513.694px]">
        <div className="flex-none rotate-[2deg]">
          <Background5 />
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container75 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-[384.5px] p-0 top-0"
      data-name="Container"
    >
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default function FeatureSection() {
  return (
    <div
      className="bg-[#ffffff] relative size-full"
      data-name="Feature Section"
    >
      <Container76 />
    </div>
  );
}