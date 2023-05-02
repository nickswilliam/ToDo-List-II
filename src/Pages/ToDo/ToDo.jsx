import { useState, useEffect } from "react"
import { ButtonTransparent, ButtonUI } from "../../Components/ButtonUI/ButtonUIStyles"
import { InputContainer, InputUI } from "../../Components/InputUI/InputStyles"
import { LiItems, ULContainer } from "../../Components/TaskList/TaskListStyles";
import { FaTrash } from 'react-icons/fa'
import DeleteAllItems from "../../Components/DeleteAllItems/DeleteAllItems";
import { ErrorContainer, MainTitle, ToDoContainer } from "./ToDoStyles";
import { useDispatch, useSelector } from "react-redux";
import { addItems, visibility, deleteItem, setError } from '../../redux/todoSlice/todoSlice'

const ToDo = () => {
    const { todoList, errorMsg, visible } = useSelector(state => ({
        todoList: state.todo.todoList,
        visible: state.todo.visible,
        errorMsg: state.todo.errorMsg
    }))

    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleInput = e => {
        setText(e.target.value)
    }

    const agregarLista = (e) => {
        e.preventDefault();

        if (!text) {
            dispatch(setError('Debe ingresar una tarea'))
            setTimeout(() => { dispatch(setError('')) }, 2000)
            return;
        }

        if (todoList.some(todo => todo.task.toUpperCase() === text.toUpperCase())) {
            dispatch(setError('La tarea ingresada ya existe. Intente nuevamente'))
            setTimeout(() => { dispatch(setError('')) }, 2500)
            setText('')
            return
        };

        dispatch(addItems({ task: text }))
        setText('')
    }

    
    const deleteList = (e) => {
        e.preventDefault();
        if (!todoList.length) return;

        dispatch(visibility(false))
        return;
    }

    const handleDelete = e => {
        if (!e.target.classList.contains('trashIcon')) return;

        const id = parseInt(e.target.dataset.id);
        dispatch(deleteItem({ id: id }))
    }

    useEffect(() => {
        document.title = `${!todoList.length ? '' : `(${todoList.length})`} ToDo - List`
    }, [document.title = `${!todoList.length ? '' : `(${todoList.length})`} ToDo - List`])

    return (
        <ToDoContainer>
            <MainTitle>ToDo LIST</MainTitle>
            <InputContainer onSubmit={agregarLista} title="Ingresar una Tarea">
                <InputUI
                    type="text"
                    onChange={handleInput}
                    value={text}
                    autoComplete="off"
                    placeholder="Ingrese una tarea"
                />
                <ButtonUI type="submit" title="Añadir tareas">Agregar</ButtonUI>
                <ButtonUI
                    type='button'
                    color="true"
                    onClick={deleteList}
                    disabled={!todoList.length ? true : false}
                    title={!todoList.length ? 'Deshabilitado' : 'Eliminar todas las tareas'}
                >Eliminar Lista</ButtonUI>

            </InputContainer>

            <ErrorContainer>
                {errorMsg &&
                    <p style={{
                        color: 'rgb(252, 40, 100)',
                        fontSize: '24px',
                        textAlign: 'center',
                        fontWeight: '800',
                        textShadow: '4px 4px 10px rgba(13, 14, 15, 0.3)'
                    }}>{errorMsg}
                    </p>
                }
            </ErrorContainer>

            <ULContainer onClick={handleDelete}>
                {todoList.map(task => (
                    <LiItems key={task.id} >
                        {task.task}
                        <ButtonTransparent
                            className="trashIcon"
                            data-id={task.id}
                            title="Eliminar tarea"
                        >
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

