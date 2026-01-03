import Header from "./components/Header";
import Hero from "./components/Hero";
import Trending from "./components/Trending";

const App = () => {
  return (
    <div className="min-h-screen overflow-clip">
      {/* Header */}
      <Header />
        <hr className="text-zinc-300 -mt-2" />
      <main>
        <Hero />
        <hr className="text-zinc-300" />
          <Trending />
      </main>
      
      {/* footer */}
    </div>
  );
};

export default App;
