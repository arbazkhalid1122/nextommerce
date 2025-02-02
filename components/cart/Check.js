import Link from "next/link";
import { useGlobalContext } from "../../Contexts/globalContext/context";

export default function Check({ total: subtotal, cartToggler }) {
  const {translate : t, lang} = useGlobalContext();
  return (
    <div className={`my-3 text-sm  font-mono capitalize `} style={{direction:`${lang==="fa"?"rtl":"ltr"}`}}>
      <div className="min-w-full min-h-[1px] bg-primarycont my-2 -mx-10"></div>
      <div className="flex flex-row justify-between">
        <div>{('subtotal')}</div>
        <div>$ {subtotal}</div>
      </div>
      <div className="my-1 flex flex-row justify-between">
        <div>{('Tax')}</div>
        <div>{("tax_cal")}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>{("Shipping")}</div>
        <div>{("FREE")}</div>
      </div>
      <div className="min-w-full min-h-[1px] bg-hover my-2"></div>
      <div className="flex flex-row justify-between text-base">
        <div>{("Total")}</div>
        <div>${subtotal}</div>
      </div>
      <div className="w-full mt-4 py-5 text-lg bg-primarycont text-primarycont text-center">
        <button onClick={cartToggler}>
          Close
        {/* <Link href="/checkout">{("proceed_checkout")}</Link> */}
        </button>
      </div>
    </div>
  );
}
