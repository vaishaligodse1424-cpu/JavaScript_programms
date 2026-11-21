function Greatest(no1,no2,no3,no4)
{
    let Numbers=Math.max(no1,no2,no3,no4)

    return Numbers;
}
function main()
{
    let a=10
    let b=20
    let c=30
    let d=40

    let iRet=Greatest(a,b,c,d)
    console.log("Greates number:",iRet)
}
main()