import { createContext, useContext, useState } from "react";

const FlagContext = createContext();
export const useFlagContext = () => useContext(FlagContext);

export const FlagContextProvider = ({ children }) => {

    const [visible, setVisible] = useState(true);
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('task')) ||[])
    const [title, setTitle] = useState('')
    
    const ContextData = { visible, setVisible, todoList, setTodoList, title, setTitle }
    

    return <FlagContext.Provider value={ContextData}>
        {children}
    </FlagContext.Provider>
}