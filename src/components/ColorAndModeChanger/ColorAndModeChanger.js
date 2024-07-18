import "./ColorAndModeChanger.css";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const ColorAndModeChanger = () => {
    const { changeMode, changeColor, mode } = useTheme();
    const [colors] = useState(["pink", "green", "blue"]);

    return (
        <div className="mode-color-changer-container">
            <div className="modes">
                <div
                    className="mode"
                    onClick={() => {
                        changeMode(mode === "light" ? "dark" : "light");
                    }}
                    style={{ backgroundColor: mode === "light" ? "black" : "white" }}
                ></div>
            </div>
            <div className="colors">
                {colors.map((color) => (
                    <div
                        className="color"
                        key={color}
                        onClick={() => {
                            changeColor(color);
                        }}
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ColorAndModeChanger;
