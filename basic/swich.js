const prompt = require("prompt-sync")();

const name = prompt("Enter month: ");


switch(name)
{


    case "1":
        console.log("NOT  SAM NU<BER ");
        break;
    case "2":
            console.log("THIS IS  SAM  numebr ");
            break;

    case "3":

    console.log("this is   the not match ")
    break;



default:
        console.log("default case match");
        break;
}

