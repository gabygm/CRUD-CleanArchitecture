import { renderButtons } from './src/users/presentation/render-botons/render-buttons'
import { UserApp } from './src/users/user-cases/users-app'
import './style.css'

document.querySelector("#app").innerHTML =
`<div class="card">
</div>
<span class="buttons"></div>`
 const element = document.querySelector('.card')
 const buttons = document.querySelector('.buttons')
 UserApp(element)
 renderButtons(buttons)

