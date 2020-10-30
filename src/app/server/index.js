import express from "express"
import settings from "../../modules/settings.js"
import fs from "fs";
import path from "path";
import util from "util";


const app = express();

app.get('/hello/:name', (req, res) => res.send('Hello '+req.params.name+'!'));

app.listen(settings.port);




var dir = './adat';
var szam = '1'; // amit novelek


// csinalok egy kinyvtarat
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log('Könyvtár készen!');
    
    
    // letrehozok egy adatfilet es beleteszem a szamot
    fs.writeFile('./adat/adat_file.txt', szam, function (err) {
		if (err) return console.log(err);
		console.log('első szám > adatfile.txt');
	});
    
}








app.get("/olvasas", (req, res) => {
// 	fs.readFile("./adat/adat_file.txt", (err, data) => {
// 		if (err) throw err;
// 		res.send(data);
// 		console.log(data);
// 	});
	
	try {
		const data1 = fs.readFileSync('./adat/adat_file.txt', 'utf8')
		console.log('olvasom:' + data1)
		res.send(data1);
		
		// megvan az ertek, szamma konvertalom
		szam = parseInt(data1, 10);
		szam += 1; // novelem eggyel
		console.log('megnovelve:' + szam)
		var data2 = toString(szam);
		
		// visszairom a fileba (felulirom a tartalmat)
		fs.writeFile('./adat/adat_file.txt', szam.toString(), function (err) {
		if (err) return console.log(err);
			console.log('változtatott szám > adatfile.txt');
		});
		
	} catch (err) {
		console.error(err)
	}

});








// legyen egy könyvtár
// Make directories relative to the current script.
//mkDirByPathSync('../../data', {isRelativeToScript: true});
// Make directories with an absolute path.
// mkDirByPathSync('/path/to/dir',(err, data) => {
//     if (err) throw err;
//     res.send(data);
//     console.log(data);
//   }););
