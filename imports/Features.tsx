import imgTemplates from "figma:asset/4e43d86038d151f3f0290755dbaacabac4d0bf86.png";
import imgCustomColors from "figma:asset/0e97c5e36fd22b6e132a9eb2a0b4f389dd84755f.png";
import imgLivePreview from "figma:asset/cf224e2c6371ad9b681a2f73982b0b698f69da7a.png";
import imgContainer2 from "figma:asset/4dd127fdb7fb64918c2ae0b92dfc6de44fcf8555.png";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[504px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#003720] text-[43.6875px] tracking-[-0.72px] w-full">
        <p className="block leading-[48px]">50+ professional templates</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#83928c] text-[17.9688px] w-full">
        <p className="block leading-[28px]">
          Browse our curated gallery of 50+ smart form templates. Ready to use
          for marketing, hiring, onboarding, lead generation, and more.
        </p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-center max-w-[1152px] px-8 py-[71.41px] relative shrink-0 w-[1152px]"
      data-name="Section"
    >
      <Container />
      <div
        className="bg-center bg-cover bg-no-repeat h-[482px] shrink-0 w-[543px]"
        data-name="templates"
        style={{ backgroundImage: `url('${imgTemplates}')` }}
      />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[504px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[48px] relative shrink-0 text-[#003720] text-[43.6875px] tracking-[-0.72px] w-full">
        <p className="block mb-0">{`Custom colors `}</p>
        <p className="block">full control over form aesthetics</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#83928c] text-[17.9688px] w-full">
        <p className="block leading-[28px]">
          Style your forms to match your brand. Customize fonts, colors, and
          layout with our intuitive builder.
        </p>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-center max-w-[1152px] px-8 py-[71.41px] relative shrink-0 w-[1152px]"
      data-name="Section"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[482px] shrink-0 w-[543px]"
        data-name="Custom colors"
        style={{ backgroundImage: `url('${imgCustomColors}')` }}
      />
      <div className="flex flex-row items-center self-stretch">
        <Container1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[504px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[48px] relative shrink-0 text-[#003720] text-[43.6875px] tracking-[-0.72px] w-full">
        <p className="block mb-0">Live preview</p>
        <p className="block">design with instant feedback</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#83928c] text-[17.9688px] w-full">
        <p className="block leading-[28px]">
          Every change you make updates instantly. No guessing. See exactly how
          your form will appear to users.
        </p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-center max-w-[1152px] px-8 py-[71.41px] relative shrink-0 w-[1152px]"
      data-name="Section"
    >
      <Container2 />
      <div
        className="bg-center bg-cover bg-no-repeat h-[618px] shrink-0 w-[549px]"
        data-name="Live preview"
        style={{ backgroundImage: `url('${imgLivePreview}')` }}
      />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[504px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#003720] text-[43.6875px] tracking-[-0.72px] w-full">
        <p className="block leading-[48px]">{`Export & Deploy Anywhere`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#83928c] text-[17.9688px] w-full">
        <p className="block leading-[28px]">
          Export code, share a link, or embed your form on any platform. Your
          form, your rules.
        </p>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-center max-w-[1152px] px-8 py-[71.41px] relative shrink-0 w-[1152px]"
      data-name="Section"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[428px] shrink-0 w-[541px]"
        data-name="Container-2"
        style={{ backgroundImage: `url('${imgContainer2}')` }}
      />
      <Container3 />
    </div>
  );
}

export default function Features() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Features"
    >
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}