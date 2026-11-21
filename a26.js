const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("Enter the alphabet",function(a)
{
    let ch=a

    if(ch>='a'&&ch<='z')
    {
        console.log("The Uppercase aplhabet:",ch.toUpperCase())
    }
    rl.close()
}
)