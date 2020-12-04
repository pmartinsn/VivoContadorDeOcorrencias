var express = require("express");
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var mn = [ 0 , 5 , 5 , 9 , 7 , 3 , 7 , 2 , 5];
var an = [2, 5 , 6];

app.use(express.json());

app.get('/api/respostas', (req, res) => {
mn;
an;
let len = an.length; 
let index = 0;
let y = 0;
let j = 0;
var answer = new Array(len);
answer.fill(0);
	while (y < an.length){
		while (index < mn.length){
			if (an[y] === mn[index]){
				j++;
			}
			index++;
		}
		answer[y] = j;
		j = 0;
		y++;
		index = 0;
	}
	res.json({answer});
})

app.listen(3000, () => {
 console.log("Server running on port 3000");
});