const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const closed = document.getElementById('close')

if (bar) {
  bar.addEventListener('click', () => {
  // console.log("bar")
  nav.classList.add('active')
  })
}

if (closed) {
  closed.addEventListener( 'click', () => { 
  // console.log("close")
  nav.classList.remove('active')
  })
}