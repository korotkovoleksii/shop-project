import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Shop from "../Shop/Shop";
import { ContextProvider } from "../../context";
function App() {
    return (
        <div className="App">
            <Header />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </div>
    );
}

export default App;
