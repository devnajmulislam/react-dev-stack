import { Suspense } from "react";
import Banner from "./components/Banner";
import ExpTechnologies from "./components/ExpTechnologies";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  // Technologies data promise
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
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <ExpTechnologies technologiesPromise={technologiesPromise()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
