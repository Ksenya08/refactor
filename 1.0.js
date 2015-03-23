document.forma1.reset();


function translation (conversion){
	document.forma1.res.value=(conversion.toString(2));
	document.forma1.res1.value=(conversion.toString(8));
	document.forma1.res3.value=(conversion.toString(10));
	document.forma1.res2.value=(conversion.toString(16));	
}

function scale_of_notation()
{
var conversion =parseInt(document.forma1.number_1.value,document.getElementById("mySelect").value);
var regex=/[A-zА-я]/;
var notation = document.getElementById("mySelect").value;
var checking_regular= regex.test(document.forma1.number_1.value);
	if(checking_regular==false && notation==10)
		translation(conversion);
	else
	{
		var regex=/[A-zА-я2-9]/;
		if(checking_regular==false && notation==2)
			translation(conversion);
		else
		{
			var regex=/[A-zА-я8-9]/;
			if(checking_regular==false && notation==8 )
			translation(conversion);
			else
			{
				var regex=/[G-zА-я]/;
				if(checking_regular==false && notation==16 )
					translation(conversion);
				else
				alert("неправильно введены данные");
			}
		}
	}
}

