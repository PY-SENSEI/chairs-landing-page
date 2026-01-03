const BigImage = ({ src }) => {
  return (
    <div 
    style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover", 
    }}
    className="w-ful h-[450px] lg:h-[580px] overflow-clip
    saturate-120 bg-zinc-300 center-item text-zinc-600">
        {
            !src && <span className="text-lg">
                Main New Arrival Image
            </span>
        }
    </div>
  )
}

export default BigImage