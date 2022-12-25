class Customer {
  constructor(id, customerNumber) {
    this.id = id; //this burda customerı ifade eder.
    this.customerNumber = customerNumber;
  }
}

// let instance = new Class( , )
let customer = new Customer(1, "12345"); //let customer is new Customer
//*Prototyping
customer.name = "Maho Ahmad";
console.log(customer.name);

Customer.ozel = "Cok ozel";
console.log(Customer.ozel);

console.log(customer.id);
console.log(customer.customerNumber);

class Individual extends Customer {
  constructor(firstName, id, customerNumber) {
    super(id, customerNumber);
    this.firstName = firstName;
  }
}

class CorporateCustomer extends Customer {
  constructor(companyName, id, customerNumber) {
    super(id, customerNumber);
    this.companyName = companyName;
  }
}

//*Map
let products = [
  { id: 1, name: "Acer", unitPrice: 15000 },
  { id: 2, name: "Asus", unitPrice: 16000 },
  { id: 3, name: "Hp", unitPrice: 13000 },
  { id: 4, name: "Dell", unitPrice: 12000 },
  { id: 5, name: "Casper", unitPrice: 17000 },
];

console.log("<ul>");
products.map((product) => console.log(`<li>${product.name}</li>`));
console.log("</ul>");

//Birden fazla şey yazdıracaksak başına süslü parantez { } açıyoruz.
products.map((product) => {
  console.log(product);
  console.log(`<li>${product.name}</li>`);
});

//*Filter
//!Eğer unitPrice 12000'den büyükse, büyük elemanların olduğu yeni bir array oluşturuyor.
let filteredProduct = products.filter((product) => product.unitPrice > 12000);
console.log(filteredProduct);

//*Reduce
let cartTotal = products.reduce((acc, product) => acc + product.unitPrice, 0);
console.log(cartTotal);
