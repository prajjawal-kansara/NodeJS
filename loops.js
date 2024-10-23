// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i += 1;
}

//for loop
for (let i = 0; i < 5; i++) {
    console.log(i)
}

//break (we come out to the nearest loop)
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; true; j++) {
        str += "*";
        if (j == i) {
            break;
        }
    }
    console.log(str);
}

// continue (this takes us back to the nearest loop)
for (let i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        continue;                 //when if statements get true it goes back to the loop
    }
    console.log(i);
}

// switch
function caseInSwitch1(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "alpha";
            break;

        case "b":
            answer = "delta";
            break;

        case "c":
            answer = "beta";
            break;

        case "d":
            answer = "gamma";
            break;

        default:                         //its like a else func.
            answer = "invalid"

    }
    return answer;
}
console.log(caseInSwitch1(2));      //invalid value

/***********************************************************************/

let val = "10";                     //this is string
switch(val){
    case 10:
        console.log("yes");
        break;
    default:
        console.log("no");
        break;
}