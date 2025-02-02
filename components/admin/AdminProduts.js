import { useEffect, useState } from "react";
import { XIcon, CheckIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import AcceptModal from "./AcceptModal";

const elm = (
  <div className={`min-w-[115px] bg-secondary text-primary rounded-full flex flex-row justify-between -mb-3 pb-0.5`}>
    <p className="pl-2">size</p>
    <p className="pr-2">amount</p>
  </div>
);

const fakeProduct = {
  name: "Sample Product",
  price: 100,
  store: [
    {
      color: "Red",
      imgUrls: ["https://via.placeholder.com/150"],
      sizeAmnt: [
        { size: "S", amount: 10 },
        { size: "M", amount: 5 },
      ],
    },
  ],
  description: "This is a sample product description.",
  sale: true,
  newArival: false,
  available: true,
  _id: "1",
};

export default function AdminProduts() {
  const { name, price, store, description, sale, newArival, available } = fakeProduct;
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  //for a smart responsive
  const [innerW, setInnerW] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  const updateWidth = () => {
    setInnerW(window.innerWidth);
  };

  return (
    <div className="border-[1px] border-hovercont relative rounded-3xl my-6 mx-8 py-9 px-10 bg-third text-secondary">
      <AcceptModal showModal={showModal} setShowModal={setShowModal} />
      <div className="absolute right-10 flex flex-row">
        <TrashIcon width="20px" className="mr-4 cursor-pointer" onClick={() => setShowModal(true)} />
        <PencilAltIcon width="20px" className="cursor-pointer" onClick={() => router.push(`/vender/product/edit/${fakeProduct._id}`)} />
      </div>
      <p className="text-lg mb-4 w-max pb-1">
        <strong>name:</strong> {name.replace(/_/g, " ")}
      </p>
      <p>
        <strong>price: </strong> <span className="w-max bg-secondary bg-opacity-20 rounded-lg px-2 pb-0.5">{price}$</span>
      </p>
      {store.map((miniStore, i) => {
        const { color, imgUrls, sizeAmnt } = miniStore;
        return (
          <div key={i} className="border-t-[1px] mt-10 mb-14 pt-10">
            <p>
              <strong>color: {' '}</strong>
              <span className="w-max bg-secondary bg-opacity-20 rounded-lg px-2 pb-0.5">
                {color}
              </span>
            </p>

            {/* when window resize a column with amount and size title will add or remove */}
            {typeof window !== 'undefined' ?
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 justify-items-center max-w-[550px] mt-4 mb-6">
                {window.innerWidth >= 768 && sizeAmnt.length > 2 ? elm : ""}
                {window.innerWidth >= 768 ? elm : elm}
                {window.innerWidth >= 648 && sizeAmnt.length > 1 ? elm : ""}
              </div> : ''}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 justify-items-center max-w-[550px] my-8">
              {sizeAmnt.map((val, i) => {
                return (
                  <div
                    key={i}
                    className={`min-w-[110px] rounded-full flex flex-row justify-between bg-secondary bg-opacity-20 pl-4 pr-6 pb-0.5`}
                  >
                    <div>
                      <p>{val.size}</p>
                    </div>
                    <div>
                      <p>{val.amount}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 justify-items-center max-w-[550px]">
              {imgUrls.map((url, index) => (
                <img key={index} src={url} width="150px" />
              ))}
            </div>
          </div>
        );
      })}
      <h4 className="text-xl my-2">description:</h4>
      <p className="mb-6">{description}</p>
      <div className="flex flex-row my-3">
        {sale ? <CheckIcon width="20px" /> : <XIcon width="20px" />}
        <p className={`${sale ? "" : "line-through"}`}> on sale</p>
      </div>
      <div className="flex flex-row my-3">
        {newArival ? <CheckIcon width="20px" /> : <XIcon width="20px" />}
        <p className={`${newArival ? "" : "line-through"}`}> New Arival</p>
      </div>
      <div className="flex flex-row my-3">
        {available ? <CheckIcon width="20px" /> : <XIcon width="20px" />}
        <p className={`${available ? "" : "line-through"}`}> is available</p>
      </div>
    </div>
  );
}
