let clock = document.getElementById('clock')
console.log(clock)
function digitalClock(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    time = `${hours}-${minutes}-${seconds}`
    clock.innerHTML = time
}

setInterval(()=>{
    digitalClock()
},1000)

//---------------------------------------------------------------------------------------