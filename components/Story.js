const Story = ({ username, img }) => {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5] border-red-500 border-2 cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={img}
        alt="avatar"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
