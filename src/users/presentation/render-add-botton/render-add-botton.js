import { showModal } from "../render-modal/render-modal"
import "./add-botton.css"

export const renderAddButton = (element) => {
    const fabButton = document.createElement('button')
    fabButton.innerText = '+'
    fabButton.classList.add('fab-button')
    element.append(fabButton)

    fabButton.addEventListener('click', () =>{
        showModal()

    })
}