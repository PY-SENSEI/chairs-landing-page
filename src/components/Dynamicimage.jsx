import Spinner from "./Spinner";

const Dynamicimage = ({ src }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="lg:w-2/3 mt-10 lg:mt-0 saturate-130 overflow-clip
        transition-all duration-700 ease-in-out"
      >
        <div className={`w-full h-[450px] lg:h-[700px] flex items-center justify-center
        text-zinc-500 ${!src && "bg-zinc-500"}`}>
             

             {!src && (<span className="text-lg">
                Shop By Room Image
                Placeholder
             </span>)}
        </div>
      </div>

           {/* Spinner */}
           <Spinner />
    </>
  );
};

export default Dynamicimage;
