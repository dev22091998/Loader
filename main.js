// setTimeout(function(){
//     alert('qalesan')
// }, 1000)

// setInterval(function(){
//     alert('qalesan')
// }, 1000)

window.addEventListener('DOMContentLoaded', function(){
    const loader = document.querySelector('.loader')

    setTimeout(function(){
        loader.style.opacity = '0'
        setTimeout(function() {
            loader.style.display = 'none'
        }, 500)
    }, 2000)
})