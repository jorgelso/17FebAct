import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center w-full h-full min-h-screen pt-16">
        <h2 className="text-xl">Productos</h2>
        <div className="p-10">
          <div>
            <div className="flex text-center justify-center items-center">
              <img
                src="https://picsum.photos/seed/1739815449780/200/200"
                alt="img1"
              />
              <p className="p-3">
                velit mollit ut ad duis consectetur esse labore officia dolore
                fugiat nostrud cupidatat cillum ut
              </p>
            </div>
            <div className="flex text-center justify-center items-center">
              <p className="p-3">
                consequat incididunt aute et cupidatat ut est ea laborum eiusmod
                nostrud irure consectetur ut ex eiusmod sit reprehenderit duis
              </p>

              <img
                src="https://picsum.photos/seed/1739815475883/200/200"
                alt="img1"
              />
            </div>
            <div className="flex text-center justify-center items-center">
              <img
                src="https://picsum.photos/seed/1739815501644/200/200"
                alt="img1"
              />
              <p className="p-3">
                quis anim irure quis culpa amet sit minim adipisicing laboris
                veniam non do sint
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
