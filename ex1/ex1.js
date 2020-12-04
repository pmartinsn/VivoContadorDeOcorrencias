//Teste para novos Desenvolvedores- Vivo
//Autor: Pamela Martins Nunes
//Ex 01.

function checkArray(mn, an){
let len = an.length; //Len para criar Array de resposta
let index = 0;
let y = 0;
let j = 0;
let answer = new Array(len);
answer.fill(0);//Completa com zeros todas as casas.
	while (y < an.length){//itera o segundo array por completo.
		while (index < mn.length){//itera o primeiro array por completo para cada eletendo do segundo.
			if (an[y] === mn[index]){// Ao comparar avalia se os elementos são iguais, caso sejam soma ao contadot j;
				j++;
			}
			index++;
		}
		answer[y] = j;
		j = 0;
		y++;
		index = 0;
	}
	console.log("A resposta é:" + answer);
	return(answer);
}

var mn = [1, 5, 3, 4, 5, 33, 8, 4, 9, 7, 8, 3, 4];
var an = [1, 5, 8, 33, 2, 15, 0];

checkArray(mn, an);
var mn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var an = [1, 5, 8, 33];

checkArray(mn, an);
var mn = [0, 5, 5, 4, 5, 33, 8, 4, 9, 7, 8, 3, 4];
var an = [0];
checkArray(mn, an);
var mn = [0, 5, 5, 4, 5, 33, 8, 4, 9, 7, 8, 3, 4];
var an = [3, 3, 3];
checkArray(mn, an);

