import Hyperspeed from "./components/Hyperspeed/Hyperspeed";
import Title from "./components/Title";
function App() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950"></div>
          <div>
            <Hyperspeed></Hyperspeed>
            <Title
              text="Quantum Internet Simulator for Secured Network"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl pt-10 "
            ></Title>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
