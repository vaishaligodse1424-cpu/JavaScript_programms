
const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("enter the Alphabet:",function(a)
{
    let ch=a

    if(ch>='A'&&ch<='Z')
    {
        console.log("LOwercase alphabet:",ch.toLowerCase())
    }
    
       rl.close()
        
  })