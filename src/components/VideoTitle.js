function VideoTitle({ title, overview }) {
  return (
    <div className="px-12 absolute pt-[20%] text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/2 text-lg">{overview}</p>
      <div>
        <button className="bg-gray-500  p-4 mx-4 px-10 text-xl bg-opacity-50 rounded-lg">
          Play
        </button>
        <button className="bg-gray-500  p-4 px-10 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
