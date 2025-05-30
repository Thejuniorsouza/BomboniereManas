import "./App.css";
import "./assets/Fonts/Fonts.css";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductCards from "./components/ProductCards/ProductCards";

function App() {
    return (
        <div className="App">
            <HeroSection></HeroSection>
            <ProductCards></ProductCards>
        </div>
    );
}

export default App;
