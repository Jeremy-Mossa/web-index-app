const d = new Date()
const hour = d.getHours()

console.log(hour)

if (5 < hour & hour < 12) {
    console.log('good morning')
} else if (13 < hour & hour < 17) {
    console.log('good afternoon')
} else if (18 < hour & hour < 24) {
    console.log('good evening')
}
