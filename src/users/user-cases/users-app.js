import { renderTable } from "../presentation/render-table/render-table"
import usersStore from "../store/users-store"
export const UserApp = async(element) =>{
    await usersStore.loadNextPage()
    renderTable(element)
}