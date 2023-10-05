var time=26

if(time>0 && time<=3){

    console.log("It is a mid-night")
}else if(time>3 && time<12){

    console.log("Good Morning to all")
}else if(time>=12 && time<18){

    console.log("Good Afternoon to all")
}else if(time>=18 && time<20){

    console.log("Good Evening to all")
}else if(time>=20 && time<=24){

    console.log('Good Night to all')
}else{
    console.log(`wrong input enter`)
}
