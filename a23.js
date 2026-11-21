let a=10


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

    for(i=1;i<=10;i++)
    {
        let table=Number(i)*Number(num)

        console.log("the table is:",table)
    }
   rl.close() 
        
  })