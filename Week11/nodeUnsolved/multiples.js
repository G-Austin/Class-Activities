var sum = 0;
var inputNum = parseInt(process.argv[2]);

for (var i = 0; i < inputNum; i += 6)
{
    if (i % 6 === 0)
    {
       sum += i;
    }
}
console.log(sum);