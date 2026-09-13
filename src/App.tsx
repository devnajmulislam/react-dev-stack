import { Suspense } from "react";
import Banner from "./components/Banner";
import ExpTechnologies from "./components/ExpTechnologies";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  // Technologies data
  const technologiesPromise = async () => {
    const res = await fetch("/technologies.json");
    const data = await res.json();
    return data;
  };

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
          </div>
        }
      >
        <ExpTechnologies technologiesPromise={technologiesPromise()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
