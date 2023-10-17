function SaveData(){
   var mycollege={TotalStudent:100,TotalBranch:10}
   localStorage.setItem("mydata",JSON.stringify(mycollege))
   alert("Data save succesfully")
   return
}

function GetData(){
  const A= JSON.parse(localStorage.getItem("mydata"))
  console.log(A,"-data from local storage")
  alert(`{A.TotalStudent}-no od students`)
  return
}

function DeleteData(){
 localStorage.removeItem("mydata");
 alert("data deleted succesfully")
}