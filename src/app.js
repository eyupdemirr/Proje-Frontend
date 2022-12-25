//typescript
//var, let, const

/*
let sayi1 = 10;
sayi1 = "Kemal Kamil";
let student = { id: 1, name: "İsmail" };
console.log(student);

function save(puan = 10, ogrenci) {
  console.log(ogrenci.name + " : " + puan);
}
save(undefined, student);

let students = ["Mıhammed Khali", "Bera Kalaycı", "Emre Burhan", "Erhan Güllü"];
//console.log(students);

let students2 = [
  student,
  { id: 2, name: "Emre" },
  "Ankara",
  { city: "İstanbul" },
];
console.log(students2);
*/
//*Rest Parameter (Geriye Kalan Parametreler)
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products);
};

//console.log(typeof showProducts);
showProducts(10, "Elma", "Armut", "Karpuz");

//*Spread
let points = [1, 2, 3, 4, 54, 15, 78, 65, 312];
console.log(...points);
console.log(Math.max(...points));
console.log("ABC", "D", ..."EFG", "H");

//*Destructuring
let populations = [10000, 20000, 30000, [40000, 50000]];
let [small, medium, high, [veryhigh, ultrahigh]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryhigh);
console.log(ultrahigh);

//! Fonsksiyon parametrelerine eklenen diziler Destructuring olarak algılanır.
function someFunc([small1, small2], number) {
  console.log(small1);
  console.log(small2);
}
someFunc(populations);

let category = { id: 1, name: "İçecek" };
console.log(category.id); //Category'nin id alanı
console.log(category["name"]); //Category'nin name alanı

//! Aşağıdaki kullanımda {} bir obje değildir. Destructing olduğunu belirten kullanımdır.
let { id, name } = category;
console.log(id);
console.log(name);
