const readline=require("readline")

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
rl.question("Enter the alphabet:",function(a)
{
    let ch=a

    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')
    {
        console.log("The  aplhabet is vowel")
    }
    else{
        console.log("The Alphabet is not vowel")
    }
    rl.close()
}
)