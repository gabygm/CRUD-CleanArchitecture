import { renderAddButton } from "../presentation/render-add-botton/render-add-botton"
import { renderButtons } from "../presentation/render-botons/render-buttons"
import { renderModal } from "../presentation/render-modal/render-modal"
import { renderTable } from "../presentation/render-table/render-table"
import usersStore from "../store/users-store"
export const UserApp = async(element) =>{
    await usersStore.loadNextPage()
    renderTable(element)
    renderButtons(element)
    renderAddButton(element)
    renderModal(element)
    
    
}