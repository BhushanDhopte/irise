var sub1= [45,41,31,29,48,42,36,22,19,49]
var sub2= [31,29,28,42,19,42,35,40,42,38]


function result(){

    var countpass=0,countfail=0;

    for(var i=0;i<sub1.length;i++){

        if(sub1[i]+sub2[i]>60){
            countpass++;

            console.log(`Roll No ${i} is Pass`)
        }else{
             countfail++;
            console.log(`Roll No ${i} is Fail`)
        }
    }
    console.log(`No of student pass = ${countpass}`)
    console.log(`No of student fail = ${countfail}`)
}

result();

var Number=[21,34,74,85,45,63,41,52,46,75,78,96]
var target;

for(var i=0;i<Number.length;i++){

    for(var j=i+1;j<Number.length;j++){

        target=Number[i]+Number[j];

        if(target%2==0){

            console.log(`the sum of ${Number[i]} and ${Number[j]} is even`)
        }else{
            console.log(`the sum of ${Number[i]} and ${Number[j]} is old`)
        }
    }
}