
import { useFlagContext } from "../../Context/DataContext"
import { ButtonTransparent, ButtonUI } from "../ButtonUI/ButtonUIStyles"
import { ContainerButtons, DivBlur, WindowToDelete } from "./DeleteAllItemsStyles"
import { AiOutlineClose } from 'react-icons/ai'


const DeleteAllItems = ({ show }) => {
    const { setVisible, todoList, setTodoList } = useFlagContext();

    const saveToLocalStorage = todoList => {
        localStorage.setItem('task', JSON.stringify(todoList))
    }

    const clickOutBox = e => {
        if (!e.target.classList.contains('windowDelete')) {
            setVisible(true)
        }
        return;
    }

    const closeWindow = () => {
        setVisible(true)
    }

    const deleteAllItems = () => {
        setVisible(true)
        setTodoList([])
        saveToLocalStorage(todoList)
    }

    return (
            <DivBlur show={show} onClick={clickOutBox}>
                <WindowToDelete className="windowDelete">
                    <ButtonTransparent style={{ alignSelf: 'flex-end', cursor: "pointer" }}
                        onClick={closeWindow}
                        title="Cerrar Ventana"
                    >
                        <AiOutlineClose size='24px' />
                    </ButtonTransparent>
                    <h2 style={{ fontWeight: 400 }}>¿Desea eliminar todos los Elementos?</h2>

                    <ContainerButtons>
                        <ButtonUI
                            color="true"
                            onClick={deleteAllItems}
                            title="Confirmar eliminación"
                        >Si, Eliminar

                        </ButtonUI>
                        <ButtonUI 
                            dif="true"
                            onClick={closeWindow}
                            title="Cancelar Eliminación"
                        >Cancelar
                        </ButtonUI>
                    </ContainerButtons>
                </WindowToDelete>
            </DivBlur>
    )
}
export default DeleteAllItems