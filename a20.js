const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("enter first number:",function(a)
{
    let iCount=0
    let i=1
    let num=Number(a)
    for(i=0;i<=num;i++)
    {
        if(num%i==0)
            {
                iCount++
            }

    }


    if(iCount==2)
{
    console.log("The number is prime")
}
else
{
    console.log("the number is not prime")
}
rl.close()
})

//7(1,7)icount=2
//icount==2 T=prime F: not prime

    

    
