import { themeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
    const context = useContext(themeContext);

    if (context === undefined) {
        throw new Error(
            "Theme context used outside of its context provider. Theme context should be only used inside of the components that is wrapped inside of the themeContextProvider",
        );
    }

    return context;
};
