const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("enter the number:",function(a)
{
    let i=1
    let num=Number(a)
    
        if(num%2==0)
        {
            console.log("the number is even")
        }
        else
        {
            console.log("the number is not even")
        }
        rl.close()
  })