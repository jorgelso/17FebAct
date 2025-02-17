import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center text-center w-full h-full min-h-screen">
        <div className="p-10">
          <h3 className="text-5xl">Texto</h3>
          <h2 className="text-2xl pb-5">Subtexto</h2>
          <button className="bg-red-500 rounded-lg p-2 hover:bg-red-400">Boton</button>
        </div>
      </div>

    </>
  );
}
