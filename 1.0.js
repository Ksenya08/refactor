document.forma1.reset();

function scale_of_notation()
{
var n=parseInt(document.forma1.number_1.value,document.getElementById("mySelect").value);
var regex=/[A-zА-я]/;

if(regex.test(document.forma1.number_1.value)==false && document.getElementById("mySelect").value==10)
{
document.forma1.res.value=(n.toString(2));
document.forma1.res1.value=(n.toString(8));
document.forma1.res3.value=(n.toString(10));
document.forma1.res2.value=(n.toString(16));
}
else
{

 var regex=/[A-zА-я2-9]/;
 if(regex.test(document.forma1.number_1.value)==false && document.getElementById("mySelect").value==2)
 {
 document.forma1.res.value=(n.toString(2));
 document.forma1.res1.value=(n.toString(8));
 document.forma1.res3.value=(n.toString(10));
 document.forma1.res2.value=(n.toString(16));
 }
 else
 {
 
  var regex=/[A-zА-я8-9]/;

  if(regex.test(document.forma1.number_1.value)==false && document.getElementById("mySelect").value==8 )
  {
  document.forma1.res.value=(n.toString(2));
  document.forma1.res1.value=(n.toString(8));
  document.forma1.res3.value=(n.toString(10));
  document.forma1.res2.value=(n.toString(16));
  }
  else
  {
      var regex=/[G-zА-я]/;
      if(document.getElementById("mySelect").value==16 && regex.test(document.forma1.number_1.value)==false )
      {
      document.forma1.res.value=(n.toString(2));
      document.forma1.res1.value=(n.toString(8));
      document.forma1.res3.value=(n.toString(10));
      document.forma1.res2.value=(n.toString(16));
      }
      else
      {
      alert("неправильно введены данные");
      }
      

  }
 }
}



//	var n=parseInt(document.forma1.number_1.value,document.getElementById("mySelect").value);

}

