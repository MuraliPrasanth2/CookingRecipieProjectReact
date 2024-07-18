import { createContext, useCallback, useReducer } from "react";

export const themeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload };

        case "CHANGE_MODE":
            return { ...state, mode: action.payload };
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, {
        color: "#50228c",
        mode: "light",
    });

    const changeColor = useCallback((color) => {
        dispatch({ type: "CHANGE_COLOR", payload: color });
    }, []);

    const changeMode = useCallback((mode) => {
        dispatch({ type: "CHANGE_MODE", payload: mode });
    }, []);

    return (
        <themeContext.Provider
            value={{
                ...state,
                changeColor,
                changeMode,
            }}
        >
            {children}
        </themeContext.Provider>
    );
};
