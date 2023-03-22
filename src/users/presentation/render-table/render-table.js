import './table.css'
import usersStore from '../../store/users-store'

let table;

const createTable = () => {
    const table = document.createElement('table')
    const tableHeaders = document.createElement("thead")
    tableHeaders.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <thActive</th>
            <th>Actions</th>
        </tr>
    `
    const tableBody = document.createElement('tbody')
    table.append(tableHeaders, tableBody)
    return table
}

export const renderTable = async(element) =>{
    const users = await usersStore.getUser()
    if(!table) {
        table = createTable()
        element.append(table)
    }

    let tableHTML = '';
    users.forEach( user => {
        console.log(user);
        tableHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>${user.id}</td>
            </tr> 
        `
    })
    table.querySelector('tbody').innerHTML = tableHTML


}