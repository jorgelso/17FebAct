export default function Navbar() {
  return (
    <>
      <header className="p y-16 px-[12%] fixed top-0 left-0 w-full bg-black/50 flex justify-between items-center z-50">
        <nav className="p-3">
          <a href="#" className="ml-16 text-red-600">Logo</a>
          <a href="#" className="ml-16">Home</a>
          <a href="#" className="ml-16">Pag1</a>
          <a href="#" className="ml-16">Pag2</a>
        </nav>
      </header>
    </>
  );
}
