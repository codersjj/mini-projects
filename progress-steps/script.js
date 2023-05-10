const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress')
const prevBtn = document.querySelector('.btn.prev')
const nextBtn = document.querySelector('.btn.next')

let currentActive = 1

prevBtn.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--
  }

  update()
})

nextBtn.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++
  }

  update()
})

function update() {
  circles.forEach((item, index) => {
    if (index < currentActive) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })

  progress.style.width = `${(currentActive - 1) / (circles.length - 1) * 100}%`

  nextBtn.disabled = false
  if (currentActive === 1) {
    prevBtn.disabled = true
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}