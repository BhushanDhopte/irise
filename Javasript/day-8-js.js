// const A=[7,8,5,4,5,1,3,9,7,8]
// A.forEach((Element) => console.log(Element))

// console.log("total")
// const value=0;
// const count=A.reduce((accumlator,currentValue) => accumlator+currentValue,value)
// console.log(count);

// A.sort();
// console.log(A.join(" "));

// A.sort((a,b) => b-a)
// console.log(A.join(" "))

var myteam = ["rohit","ishan","virat","surya","rahul"]

localStorage.setItem("Indian team",JSON.stringify(myteam));
var data=JSON.parse(localStorage.getItem("Indian team"));
console.log(data)
