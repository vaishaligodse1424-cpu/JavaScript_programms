const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("Enter the number:",function(a)
{
    let num=Number(a)

    if(num%2!=0)
    {
        console.log("Number is Odd")
    }
    else
    {
        console.log("number is not odd")
    }
    rl.close()
}
)
