let imgList = document.querySelectorAll('img')

// 方法一
function lazyLoad() {
  imgList.forEach(img => {
    if (img.getBoundingClientRect().top < window.innerHeight) {
      const dataSrc = img.getAttribute('data-src')
      img.setAttribute('src', dataSrc)
    }
  })
}
// 可以加个节流
window.addEventListener('scroll', lazyLoad)


// 方法二
const observer = new IntersectionObserver(callback)

function callback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target
      const dataSrc = img.getAttribute('data-src')
      img.setAttribute('src', dataSrc)
      observer.unobserve(img)
    }
  })
}
imgList.forEach(img => {
  observer.observe(img)
})
