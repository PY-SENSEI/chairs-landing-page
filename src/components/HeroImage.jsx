const HeroImage = ({ src }) => {
  return (
    <div className="lg:absolute overflow-clip right-0 lg:w-160 mt-10 lg:mt-0">
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="aspect-video saturate-120 lg:h-[250px] w-full bg-zinc-200
      flex items-center justify-center text-zinc-500"
      >
        {/* Image placehoder */}
        {src ? "" : <span className="text-lg">Hero image placeholder</span>}
      </div>
    </div>
  );
};

export default HeroImage;
