let num = +prompt("Sonni kiriting")
while (isNaN(num) || num==0 || num=="" || num==null) {
    num = +prompt("Xato! Iltimos, son kiriting")
}

let degree = +prompt("Sonning darajasini kiriting")
while (isNaN(degree) || degree==0 || degree=="" || degree==null) {
    degree = +prompt("Xato! Iltimos, son kiriting")
}

let countDegree = 1
for (let i = 0; i < degree; i++) {
   countDegree *=num
    
}
alert(`${num} ning ${degree}-darajasi ${countDegree} ga teng`)