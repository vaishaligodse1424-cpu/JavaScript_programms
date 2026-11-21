const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("enter first number:",function(a)
{

    rl.question("enter second number:",function(b)
    {
        let substraciton=Number(a)-Number(b)

        console.log("Sustraction is:",substraciton)

        rl.close()
   })
})