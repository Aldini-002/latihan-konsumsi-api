const Navbar = () => {
  return (
    <header className="flex justify-between h-[55px] items-center mb-5">
      <div className="font-bold text-lg tracking-[0.5rem] ">002ANIME</div>
      <ul className="flex">
        <li className="px-4 border-l-2 font-light text-sm hover:font-bold">
          Home
        </li>
        <li className="px-4 border-l-2 font-light text-sm hover:font-bold">
          Anime
        </li>
        <li className="px-4 border-l-2 font-light text-sm hover:font-bold">
          On Going
        </li>
        <li className="px-4 border-x-2 font-light text-sm hover:font-bold">
          Genre List
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
