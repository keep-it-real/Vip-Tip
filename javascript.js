//sprawiamy by koncowa informacja o wysokosci napiwku byla niewidoczna po uruchomieniu strony
document.getElementById("tip").style.display = "none";
//funkcja obliczajaca napiwek
function calculateTip()
{
	var bill = document.getElementById("amount").value;
	var service = document.getElementById("quality").value;
	var numberOfPeople = document.getElementById("people").value;
	//jezeli uzytkownik zostawi puste pole kwoty
	if (bill === "")
	{
		alert("Wpisz wartość rachunku.");
		return;
	}
	////jezeli uzytkownik zostawi puste pole zadowolenia z obsługi
	if (service == 0)
	{
		alert("Wpisz zadowolenie z obsługi.");
		return;
	}
	//jezeli uzytkownik w pole przeznaczone na cyfry wpisze cos, co cyfra nie jest
	if(isNaN(bill))
	{
		alert("Przyjmuję tylko złotówki :)");
		return;
	}
	/*jezeli uzytkownik zostawi puste pole liczby osob lub wpisze cyfre mniejsza lub rowna 1
	*a także jeśli w pole liczby osób wpisze coś, co nie jest cyfrą
	*/
	if (numberOfPeople === "" || numberOfPeople <= 1)
	{
		numberOfPeople = 1;
		document.getElementById("person").style.display = "none";
	}
		else if(isNaN(numberOfPeople))
		{
			alert("Wpisz ilość osób.");
			return;
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