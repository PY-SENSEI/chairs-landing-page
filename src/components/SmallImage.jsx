const SmallImage = ({ src }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[450px] saturate-120 lg:-[280px]
    bg-zinc-300 items-center text-zinc-600"
    >
     {!src  && "Small Image"}
    </div>
  );
};

export default SmallImage;
