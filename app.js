

// Task 0

document.write("<h2>Pattern : 00</h2>");

var n = 6;

for (let i = 0; i <= n; i++) 
{
    for (let j = 0; j < i; j++) 
    {
        document.write("&nbsp;" + j);
    }
    document.write("<br>");
}


// Task 1

document.write("<h2>Pattern : 01</h2>");

var n = 6;

for (let i = n; i > 0; i--) 
{
    for (let j = 0; j < i; j++) 
    {
        document.write("&nbsp;" + i);
    }
    document.write("<br>");
}


// Task 2

document.write("<h2>Pattern : 02</h2>");

var n = 6;

for (let i = 0; i <= n; i++) 
{
    for (let j = 0; j < i; j++) 
    {
        document.write("&nbsp;" + i);
    }
    document.write("<br>");
}


// Task 3

document.write("<h2>Pattern : 03</h2>");

var n = 5;

for (let i = n; i > 0; i--) 
{
    for (let j = 1; j < i; j++) 
    {
        document.write("&nbsp; &nbsp;");
    }
    for(let k = 1 ; k <= (n + 1) - i ; k++)
    {
        document.write("&nbsp;" + k)
    }
    document.write("<br>");
}



// Task 4

document.write("<h2>Pattern : 04</h2>");

var n = 6;
var alpha = 65;

for (let i = 0; i <= n; i++) 
{
    for (let j = 0; j < i; j++) 
    {
        document.write("&nbsp;" + String.fromCharCode(alpha));
        alpha++
    }
    alpha = 65
    document.write("<br>");
}


// Task 5

document.write("<h2>Pattern : 05</h2>");

var n = 6;

for (let i = 0; i <= n; i++) 
{
    for (let j = n + 1; j > i; j--) 
    {
        document.write("&nbsp; &nbsp;");
    }
    for(let k = 1 ; k <= i ; k++)
    {
        document.write("&nbsp;*");       
    }
    for(let m = 1 ; m < i ; m++)
    {
        document.write("&nbsp;*");      
    }
    document.write("<br>");
}


// Task 6

document.write("<h2>Pattern : 06</h2>");

var n = 6;

for (let i = 0; i <= n; i++)
{
    for (let j = 1 ; j <= i; j++) 
    {
        document.write("&nbsp; &nbsp;");
    }
    for(let k = n - i  ; k >= 1 ; k--)
    {
        document.write("&nbsp;*");       
    }
    for(let m = n - i ; m > 1 ; m--)
    {
        document.write("&nbsp;*");      
    }
    document.write("<br>");
}

// Task 7

document.write("<h2>Pattern : 07</h2>");

var n = 6;

for (let i = 0; i <= n; i++) 
{
    for (let j = n + 1; j > i; j--) 
    {
        document.write("&nbsp; &nbsp;");
    }
    for(let k = 1 ; k <= i ; k++)
    {
        document.write("&nbsp;" + i);      
    }
    for(let m = 1 ; m < i ; m++)
    {
        document.write("&nbsp;" + i);     
    }
    document.write("<br>");
}


// Task 8

document.write("<h2>Pattern : 08</h2>");

var n = 6;
var alpha = 65;

for (let i = 0; i <= n; i++)
{
    for(let k = 0 ; k < i ; k++)
    {
        document.write("&nbsp; ");
    }
    for (let j = n - i ; j >= 1; j--) 
    {
        document.write("&nbsp;" + String.fromCharCode(alpha++));
    }
    document.write("<br>");
    alpha = 65
}


// Task 9

document.write("<h2>Pattern : 09</h2>");

var n = 6;

for (let i = 0; i <= n; i++)
{
    if(i % 2 != 0)
    {
        for(var j = 1 ; j <= i ; j++)
        {
            document.write("&nbsp;" + j)
        }
        document.write("<br>");
        
    }
}


