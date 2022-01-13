// JavaScript Document
function start ()
{
	var token = [4,8,10,12,14,22,23,24,26,27,28,36,38,40,42,46];
	var cell = "";
	for (var i = 0; i < token.length; i++)
	{
		cell = 'cell-'+token[i];
		document.getElementById(cell).style.backgroundColor = 'blue';
	}
	var td = document.querySelectorAll("table#target tr td");
	for (var i = 0; i < td.length; i++)
		td[i].style.color = 'blue';
}
start();