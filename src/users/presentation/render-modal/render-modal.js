import modalHtml from './render-modal.html?raw'
import "./modal.css"
let modal, form


export const showModal = () => {
    modal?.classList.remove('hide-modal')
}

export const hideModal = () => {
    modal?.classList.add('hide-modal')
}
export const renderModal = ( element ) => {
    if(modal) return
    modal = document.createElement('div')
    modal.innerHTML = modalHtml
    modal.className = 'modal-container hide-modal'
    
    modal.addEventListener('click', (event) =>{
        if(event.target.className === 'modal-container') {
            hideModal()
        }
    })

    form=modal.querySelector('form')

    form.addEventListener('submit', (event)=>{
        event.preventDefault()
    })
    

    element.append(modal)

}