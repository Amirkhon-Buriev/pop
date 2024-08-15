let son = +prompt("1-son kiriting")
let son2 = +prompt("2-son kiriting")
let amal = prompt(`bajarish kerak bolgan amali talang
1) +qoshish
2) -airesh
3) *kopaetirish
4) /bolish
`);





if (amal == 1){
    alert(`${son} + ${son2} = ${son + son2}`)
}else if (amal == 2) {
    alert(`${son} - ${son2} = ${ son - son2}`)
}else if (amal == 3) {
    alert(`${son} * ${son2} = ${ son * son2}`)
}else if (amal == 4) {
    alert(`${son} / ${son2} = ${ son / son2}`)
}