const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("enter first number:",function(a){

rl.question("enter the second number:",function(b)
{

a=Number(a)
b=Number(b)

if(a>b)
{
    console.log("greatest number is",a)
}
else if(b>a)
{
    console.log("greatest number is:",b)
}
else
{
    console.log("both are equal")
}
rl.close()
})
})