import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ColorAndModeChanger from "./components/ColorAndModeChanger/ColorAndModeChanger";
import NavBar from "./components/NavBar/NavBar";
import { useTheme } from "./hooks/useTheme";
import Create from "./pages/Create";
import Home from "./pages/Home";
import RecipiePaga from "./pages/RecipiePaga";
import Search from "./pages/Search";

function App() {
    const { mode } = useTheme();
    return (
        <div className={"App " + (mode === "dark" ? "dark" : "light")}>
            <BrowserRouter>
                <NavBar />
                <ColorAndModeChanger />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipe/:id" element={<RecipiePaga />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
