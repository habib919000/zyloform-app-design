import imgMeetLogoLogo from "figma:asset/0667fd72715c5f2215cbaaba5091162772dec88d.png";
import imgSlackLogoLogo from "figma:asset/17bc496915b60e8cf29fcf26366b274207b92f66.png";
import imgTeamsLogoLogo from "figma:asset/2f8d826541e15843091dda75d52dc137cd8c1a79.png";
import imgWebexLogoLogo from "figma:asset/654b45653d11e6df7ee4ba6010c01b5f61c8a16b.png";
import imgZoomLogoLogo from "figma:asset/a6738b23f45a736eff372b540df2f857c7d44ba5.png";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start leading-[0] max-w-[672px] not-italic p-0 relative shrink-0 text-center w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#003720] text-[43.5px] tracking-[-0.72px] w-full">
        <p className="block leading-[48px]">Integrations</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#83928c] text-[21.9375px] w-full">
        <p className="block leading-[32px]">
          Zyloform is super extensible and powerful in terms of integrations
        </p>
      </div>
    </div>
  );
}

function MeetLogoLogo() {
  return (
    <div
      className="[background-size:100%_100%] bg-no-repeat bg-top-left shrink-0 size-28"
      data-name="meet-logo logo"
      style={{ backgroundImage: `url('${imgMeetLogoLogo}')` }}
    />
  );
}

function SlackLogoLogo() {
  return (
    <div
      className="[background-size:100%_100%] bg-no-repeat bg-top-left shrink-0 size-28"
      data-name="slack-logo logo"
      style={{ backgroundImage: `url('${imgSlackLogoLogo}')` }}
    />
  );
}

function TeamsLogoLogo() {
  return (
    <div
      className="[background-size:100%_100%] bg-no-repeat bg-top-left shrink-0 size-28"
      data-name="teams-logo logo"
      style={{ backgroundImage: `url('${imgTeamsLogoLogo}')` }}
    />
  );
}

function WebexLogoLogo() {
  return (
    <div
      className="[background-size:100%_100%] bg-no-repeat bg-top-left max-w-28 shrink-0 size-28"
      data-name="webex-logo logo"
      style={{ backgroundImage: `url('${imgWebexLogoLogo}')` }}
    />
  );
}

function Component4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Component 4"
    >
      <WebexLogoLogo />
    </div>
  );
}

function ZoomLogoLogo() {
  return (
    <div
      className="[background-size:100%_100%] bg-no-repeat bg-top-left shrink-0 size-28"
      data-name="zoom-logo logo"
      style={{ backgroundImage: `url('${imgZoomLogoLogo}')` }}
    />
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
      <MeetLogoLogo />
      <SlackLogoLogo />
      <TeamsLogoLogo />
      <Component4 />
      <ZoomLogoLogo />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-start left-[624.5px] p-0 top-[113px] w-[672px]">
      <Container />
      <Frame36 />
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <div
      className="bg-[#ffffff] relative size-full"
      data-name="Integrations Section"
    >
      <Frame37 />
    </div>
  );
}