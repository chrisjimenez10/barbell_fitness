//Custom Components
import Header from "./components/Header";
import Hero from "./components/Hero";
//Design Components
import ButtonGradient from "./components/design/ButtonGradient";

const App = () => {
  return (
    <>

      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
      </div>
     
      <ButtonGradient />
    </>
  )
}

export default App
