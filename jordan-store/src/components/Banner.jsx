// eslint-disable-next-line react/prop-types
export default function Banner({ tittle, subtittle }) {
  return (
    <>
      <div className="relative bg-home bg-zinc-800 w-full h-[320px] bg-cover bg-center flex justify-center items-center flex-col mb-10">
        <div className="bg-zinc-800/55 flex justify-center items-center flex-col px-4 py-2 h-full w-full rounded">
          <h1 className="text-4xl uppercase font-bold text-zinc-100 my-2 ">
            {tittle}
          </h1>
          <p className="text-zinc-100 italic capitalize font-light ">
            {subtittle}
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center mb-10">
        <h2 className="text-2xl font-bold ">Destaques</h2>
        <p className="text-lg mt-2 italic ">Frete gratis para todo o Brasil e brinde exclusivos</p>
      </div>
    </>
  );
}
