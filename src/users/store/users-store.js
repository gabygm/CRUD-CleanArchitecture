const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    throw new Error('No implemented')
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
    getUser: () => [state.users],
    getCurrentPage: () => state.currentPage
}