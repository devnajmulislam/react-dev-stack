import { Suspense, use } from "react";
import Banner from "./components/Banner";
import ExpTechnologies from "./components/ExpTechnologies";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {

     const technologiesPromise = async() =>{
    const res = await fetch('/technologies.json');
    const data = await res.json();
    return data;
  }

  // const technologies = use(technologiesPromise());
  // console.log(technologies)


  return <>
  <Navbar/>
  <Banner/>
  <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
    <ExpTechnologies technologiesPromise={technologiesPromise()}/>
  </Suspense>
  <Footer/>
  </>;
}

export default App;
