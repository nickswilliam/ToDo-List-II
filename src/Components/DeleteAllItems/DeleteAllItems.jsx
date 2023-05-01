import { useDispatch } from "react-redux";
import { ButtonTransparent, ButtonUI } from "../ButtonUI/ButtonUIStyles"
import { ContainerButtons, DivBlur, WindowToDelete } from "./DeleteAllItemsStyles"
import { AiOutlineClose } from 'react-icons/ai'
import { deleteItems, visibility } from "../../redux/todoSlice/todoSlice";


const DeleteAllItems = ({ show }) => {
    const dispatch = useDispatch();

    const clickOutBox = e => {
        if (!e.target.classList.contains('windowDelete')) {
            dispatch(visibility(true))
        }
        return;
    }

    const closeWindow = () => {
        dispatch(visibility(true))
    }

    const deleteAllItems = () => {
        dispatch(visibility(true))
        dispatch(deleteItems())
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