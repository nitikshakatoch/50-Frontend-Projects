const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const word = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > word.length){
        currentActive = word.length
    }
    update()
      
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
    update()
})

function update() {
    word.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (word.length -1) * 100 + '%'

if(currentActive === 1) {
    prev.disabled = true
} else if(currentActive === word.length) {
    next.disabled = true
} else {
    prev.disabled = false
    next.disabled = false
}
}