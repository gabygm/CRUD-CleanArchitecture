import { renderButtons } from './src/users/presentation/render-botons/render-buttons'
import { UserApp } from './src/users/user-cases/users-app'

document.querySelector("#app").innerHTML =
`<div class="card">
</div>
<span class="buttons"></div>`
 const element = document.querySelector('.card')
 UserApp(element)


