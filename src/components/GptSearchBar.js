function GptSearchBar() {
  return (
    <div className="pt-[10%] flex- justify-center">
      <form className="bg-black align-middle grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
