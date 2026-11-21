const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("enter the age",function(a)
{    
let age=Number(a)

    if(age>=18)
    {
        console.log("You Can Vote")
    }
      else
      {
        console.log("You Can't Vote")
      }
      rl.close()
 } 
)
