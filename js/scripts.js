var a = prompt('Wartość zmiennej a dla równania (a*a)+(2*a*b)-(b*b)'),
	b = prompt('Wartość zmiennej b dla równania (a*a)+(2*a*b)-(b*b)'),
	value = (a*a)+(2*a*b)-(b*b);
console.log('Podstawiamy do poniższego równania zmienne ' + 'a = '+ a + ' i ' + 'b = ' + b)
console.log('Wynik równania ' + 'value = (a*a)+(2*a*b)-(b*b) ' + '= ' + value);
if (value>0) {
	console.log('Wynik dodatni')
} else if (value<0) {
	console.log('Wynik ujemny')
} else {
	console.log('Wynik równy zero')
}