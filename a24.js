
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

    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
           console.log("The factots are:",i)
        }
    }
    rl.close()
        
  })