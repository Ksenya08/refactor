function scale_of_notation()
{
var n=document.forma1.number_1.value;
var r=1;

var mas=[100];
for(i=0;i<10;i++)
{
if(n>0)
{
r=(n-n%2)/2;
mas[i]=n-r*2;
n=r;
}
}
mas.reverse();
var re=mas.join();

document.forma1.res.value=(mas.join(""));



}