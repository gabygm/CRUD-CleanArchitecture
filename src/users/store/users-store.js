import { loadUsersByPage } from "../user-cases/load-user-per-page"

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage+1)
    if(users.length === 0) return
    console.log(state.currentPage)
    state.currentPage +=1
    console.log(state.currentPage)
    state.users = users
}

const loadPreviousPage = async() => {
    throw new Error('No implemented')
}

const onUserChanged = async() => {
    throw new Error('No implemented')
}

const reloadPage = async() => {
    throw new Error('No implemented')
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged, 
    reloadPage,
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}