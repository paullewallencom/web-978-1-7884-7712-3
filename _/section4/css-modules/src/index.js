import style from './styles/myStyle.scss'

console.log(style)

const text = document.createElement("p");
text.textContent = 'Here is some text'
text.setAttribute('class', style['really-big'])
document.getElementById('root').appendChild(text)
