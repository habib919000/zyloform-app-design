import imgImage8 from "figma:asset/b2ff391b11d25e257a2f2269385a88107042d7f9.png";
import imgImage9 from "figma:asset/17950558824362d9554bdfe4de75db7d1ed086d6.png";
import imgImage10 from "figma:asset/cf0e86d62c0e29d59fc3057e9e6a3cbbcc015355.png";

export default function Frame30() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[30px] items-start justify-center p-0 relative size-full">
      <div
        className="bg-[70.27%_53.73%] bg-no-repeat bg-size-[116.52%_111.73%] h-[545px] rounded-[14px] shrink-0 w-[448px]"
        data-name="image 8"
        style={{ backgroundImage: `url('${imgImage8}')` }}
      />
      <div
        className="bg-[50%_39.24%] bg-no-repeat bg-size-[117.9%_115.61%] h-[506px] rounded-[14px] shrink-0 w-[447px]"
        data-name="image 9"
        style={{ backgroundImage: `url('${imgImage9}')` }}
      />
      <div
        className="bg-[52.63%_41.18%] bg-no-repeat bg-size-[117%_115.6%] h-[545px] rounded-[14px] shrink-0 w-[447px]"
        data-name="image 10"
        style={{ backgroundImage: `url('${imgImage10}')` }}
      />
    </div>
  );
}