//let myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toLocaleDateString())
//console.log(typeof myDate)


//let myCreatedDate = new Date(2025,0,26)
// console.log(myCreatedDate.toString())
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()) // 0 based ----- jan = 0 , Dec = 11
// console.log(newDate.getDay()) // 0 based -----sunday = 0

newDate.toLocaleString('default', {
    weekday:"long"
})

