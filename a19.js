const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("Enter first number:",function(a)
{
    rl.question("Enter second number:",function(b)
    {
        let Divide=Number(a)/Number(b)

        console.log("Divison is",Divide)

        rl.close()
    }
)
}

)