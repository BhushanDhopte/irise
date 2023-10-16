var Names = [ "rohit","virat","rahul","vaibhav"]
console.log(Names.sort())
console.log()

var numbers =[89,78,74,85,69,14,52,46,23,]
numbers.sort()
console.log(numbers.join(" "))
console.log()

numbers.sort((a,b)=>b-a)
console.log(numbers.join(" "))
console.log()

// localStorage.setItem("India",JSON.stringify(Names));
// var Data=JSON.parse(localStorage.getItem("India"));
// console.log(data, "data from ls")