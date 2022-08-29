/// Function construction
function Invoices(name, position, id) {
  this.name = name;
  this.position = position;
  this.id = id;
  this.report = false; // isReport?

  Invoices.static = function () {
    return "I do not have access to instance";
  };
}

Invoices.prototype.getInfo = function () {
  return `Hello ${this.name}, your position ${this.position}. Id : ${this.id}`;
};
Invoices.prototype.getName = function () {
  return `Hello ${this.name}`;
};

const user = new Invoices('Yurii', 'user', 100)
console.log(user);

function AccountantInvoice(name, position, id, report) {
  Invoices.call(this, name, position, id)
  this.report = report;
}
AccountantInvoice.prototype = Object.create(Invoices.prototype);
AccountantInvoice.prototype.constructor = AccountantInvoice;
AccountantInvoice.prototype.getReport = function () {
  return this.report ? `Hello ${this.name} you can get a report` : `Hello ${this.name} you can't get a report`
}

const accountant1 = new AccountantInvoice('Sergeevna', 'accountant', 4, true)
const accountant2 = new AccountantInvoice('Petrovna', 'accountant', 5, true)
const accountant3 = new AccountantInvoice('Valentinovna', 'accountant', 6, false)
console.log(accountant1);
console.log(accountant1.getInfo());
console.log(accountant1.getReport());
console.log(accountant3.getReport());

function CEOInvoice (name, position, id) {
  Invoices.call(this, name, position, id)
}


/// Class
console.log("///////////////////////////////////////////////////");
class ClassInvoices {
  constructor(name, invoices = "unknown", amount = "unknown") {
    this.name = name;
    this.invoices = invoices;
    this.amount = amount;
  }
  getInfo() {
    return `Hello ${this.name}, your invoice balance #${this.invoices} : ${this.amount}$ `;
  }
  static staticMethod() {
    return "I do not have access to instance";
  }
}
// console.log("ClassInvoices static method:", ClassInvoices.staticMethod());

const classUser = new ClassInvoices("Yurii", 422, 10000);
// console.log("classUser :", classUser);
// console.log("classUser :", classUser.getInfo());

const classAccountantInvoice = new ClassInvoices("Semenovna", 2);
classAccountantInvoice.position = "Accountant";
classAccountantInvoice.getInfo = function () {
  return `Hello ${this.name}, your position :${this.position} `;
};
// console.log("classAccountantInvoice :", classAccountantInvoice);
// console.log("classAccountantInvoice :", classAccountantInvoice.getInfo());

const classSeo = new ClassInvoices("Michalich", 1);
classSeo.someProperty = "some property";
classSeo.print = function () {
  return this.someProperty;
};
// console.log("classSeo :", classSeo);
// console.log("classSeo :", classSeo.getInfo());
// console.log("classSeo :", classSeo.print());

class ClassOwner extends ClassInvoices {
  constructor(company) {
    super("Petrovich"); // ???
    this.company = company;
  }
}

const classOwner = new ClassOwner("RBC");
classOwner.subordinates = [{
    name: "Yurii",
    position: "user",
  },
  {
    name: "Semenovna",
    position: "Accountant",
  },
  {
    name: "Michalich",
    position: "seo",
  },
];
classOwner.print = function () {
  return this.subordinates;
};
// console.log("classOwner :", classOwner);
// console.log("classOwner :", classOwner.subordinates);