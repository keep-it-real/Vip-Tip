//sprawiamy by koncowa informacja o wysokosci napiwku byla niewidoczna po uruchomieniu strony
document.getElementById("tip").style.display = "none";

//funkcja obliczajaca napiwek
function calculateTip()
{
	var bill = document.getElementById("amount").value;
	var service = document.getElementById("quality").value;
	var numberOfPeople = document.getElementById("people").value;
	
	//jezeli uzytkownik zostawi puste pola kwoty i jakosci obslugi
	if (bill === "" || service == 0)
	{
		alert("Wpisz wartość rachunku oraz zadowolenie z obsługi.");
		return;
	}
	
	//jezeli uzytkownik w pole przeznaczone na cyfry wpisze cos, co cyfra nie jest
	if(isNaN(bill))
	{
		alert("Przyjmuję tylko złotówki :)");
		return;
	}
	
	//jezeli uzytkownik zostawi puste pole liczby osob lub wpisze cyfre mniejsza lub rowna 1
	if (numberOfPeople === "" || numberOfPeople <= 1)
	{
		numberOfPeople = 1;
		document.getElementById("person").style.display = "none";
	}
		else
		{
			document.getElementById("person").style.display = "block";
		}	
		
	//wyliczenie napiwku
	var totalTip = (bill * service) / numberOfPeople;
	totalTip = Math.round(totalTip * 100) / 100;
	
	//zaokraglenie kwoty do 2 miejsc po przecinku
	totalTip = totalTip.toFixed(2);
	document.getElementById("tip").style.display = "block";
	document.getElementById("sum").innerHTML = totalTip;
}

//po kliknieciu w 'Oblicz' powyzsza funkcja zostaje wywolana
document.getElementById("calculate").onclick = function()
{
	calculateTip();
};