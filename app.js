var num1 = prompt("Enter num1 ")
var num2 = prompt("Enter num2 ")
var a = parseInt(num1)
var b = parseInt(num2)
var z = prompt("Enter a operator ")
if(z == '+')
{
    document.write("Addition of ",a," and ",b," is ",a+b)
}
else if(z == '-')
{
    document.write("Subtraction of ",a," and ",b," is ",a-b)
}
else if(z == '*')
{
    document.write("Multiplication of ",a," and ",b," is ",a*b)
}
else if(z == '/')
{
    document.write("Division of ",a," and ",b," is ",a/b)
}
else{
    alert("Wrong Input!")
}