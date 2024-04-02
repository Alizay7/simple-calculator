import inquirer from "inquirer";

//asking questions from users through inquirer

let answers = await inquirer.prompt([
    {message:"Enter First Number",types:"number",name:"firstNumber"},
    {mwssage:"Enter Second Number",type:"number",name:"secondNumber"},
    {
        message:"select one operator to perform operations",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);
//conditional statements If-Else

if(answers.operator ==="Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator ==="Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator ==="Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else (
    console.log("Invalid Input")
)