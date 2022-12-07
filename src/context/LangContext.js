import { createContext, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
    const [isEng, setIsEng] = useState(false)

    return <LangContext.Provider value={{
        isEng, setIsEng
    }}>
        {children}
    </LangContext.Provider>;


}
export default LangContext;