const Search = () => {
  return (
    <div className="w-full mb-5">
      <input
        type="text"
        className="w-10/12 py-2 pl-5 bg-[#D9D9D9] text-slate-600 rounded-l-md"
        placeholder="title..."
      />
      <button className="w-2/12 bg-teal-700 py-2 hover:bg-teal-900 rounded-r-md visited:outline-none visited:ring-0">
        Search
      </button>
    </div>
  );
};

export default Search;
