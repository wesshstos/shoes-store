import { FaCartPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function Card({ image, title, price }) {
  return (
    <>
      <div className="flex flex-col w-[250px] bg-zinc-200 p-6 shadow-lg shadow-zinc-800 rounded-xl">
        <img src={image} alt="Foto do Jordan" className="h-52 w-52 object-contain hover:scale-105 hover:-rotate-6 duration-300" />
        <p className="font-bold uppercase text-left my-2 overflow-hidden">{title}</p>
        <select name="size" className="border-0 outline-none mb-2 p-1 italic rounded duration-300" id="sizeValue">
          <option value="" disabled selected>-- selecione o tamanho</option>
          <option value="36">36</option>
          <option value="38">38</option>
          <option value="40">40</option>
          <option value="42">42</option>
          <option value="44">44</option>
          <option value="46">46</option>
        </select>
        <div className="flex items-center justify-between mt-2">
          <p className="font-bold">R$ {price}</p>
          <button className="bg-emerald-500 py-1 gap-x-2 px-2 rounded text-zinc-50 font-medium hover:bg-emerald-600 duration-300 flex justify-between items-center">Comprar <FaCartPlus /></button>
        </div>
      </div>
    </>
  );
}
