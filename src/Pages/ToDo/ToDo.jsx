import { useState } from "react"
import { ButtonTransparent, ButtonUI } from "../../Components/ButtonUI/ButtonUIStyles"
import { InputContainer, InputUI } from "../../Components/InputUI/InputStyles"
import { LiItems, ULContainer } from "../../Components/TaskList/TaskListStyles";
import { FaTrash } from 'react-icons/fa'
import DeleteAllItems from "../../Components/DeleteAllItems/DeleteAllItems";
import { useFlagContext } from "../../Context/DataContext";
import { MainTitle, ToDoContainer } from "./ToDoStyles";
import { useEffect } from "react";


const ToDo = () => {
    
    const [text, setText] = useState('');
    const { visible, setVisible, todoList, setTodoList, setTitle, title} = useFlagContext();
    useEffect(()=>{
        document.title = title
    }, [title])

    setTitle('ToDo List')

    const saveToLocalStorage = todoList => {
        localStorage.setItem('task', JSON.stringify(todoList))
    }

    saveToLocalStorage(todoList)

    const handleInput = e => {
        setText(e.target.value)
    }

    const agregarLista = (e) => {
        e.preventDefault();

        if (text === '') {
            return;
        }

        const todoListTemp = {
            id: Date.now(),
            task: text,
        }

        const taskList = [...todoList, todoListTemp]
        setTodoList(taskList);
        saveToLocalStorage(todoList)


        setText('')
    }


    const deleteList = (e) => {
        e.preventDefault();
        if (!todoList.length) return;

        setVisible(!visible)
        return;
    }

    const deleteItem = e => {
        if (!e.target.classList.contains('trashIcon')) return;


        const elementId = e.target.dataset.idef;
        const taskFilter = todoList.filter(task => task.id != elementId)

        setTodoList(taskFilter)
        saveToLocalStorage(todoList)
    }

    return (
        <ToDoContainer>
            <MainTitle>ToDo List</MainTitle>
            <InputContainer onSubmit={agregarLista}>
                <InputUI
                    type="text"
                    onChange={handleInput}
                    value={text}
                    autoComplete="off"
                    placeholder="Ingrese una tarea"
                />
                <ButtonUI type="submit">Agregar</ButtonUI>
                <ButtonUI
                    type='button'
                    color="true"
                    onClick={deleteList}
                    disabled={!todoList.length ? true : false}
                >Eliminar Lista</ButtonUI>

            </InputContainer>

            <ULContainer onClick={deleteItem}>
                {todoList.map(task => (
                    <LiItems key={task.id} >
                        {task.task}
                        <ButtonTransparent className="trashIcon" data-idef={task.id}>
                            <FaTrash
                                style={{ color: 'rgba(235, 0, 70, 1)', padding: '2px', fontSize: '28px', pointerEvents: 'none' }}
                            />
                        </ButtonTransparent>


                    </LiItems>
                ))}

            </ULContainer>
            <DeleteAllItems show={visible} />
        </ToDoContainer>
    )
}
export default ToDo

