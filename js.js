/// Function construction
function Invoices(name, invoices = "unknown", amount = "unknown") {
  this.name = name;
  this.invoices = invoices;
  this.amount = amount;

  Invoices.prototype.getInfo = function () {
    return `Hello ${this.name}, your invoice balance #${this.invoices} : ${this.amount}$ `;
  };
  Invoices.prototype.getName = function () {
    return `Hello ${this.name}`;
  };
  Invoices.static = function () {
    return "I do not have access to instance";
  };
}

const user = new Invoices("Yurii", 422, 10000);
console.log("user :", user);
console.log("user :", user.getInfo());

const accountantInvoice = new Invoices("Semenovna", 2);
accountantInvoice.position = "Accountant";
accountantInvoice.getInfo = function () {
  return `Hello ${this.name}, your position ${this.position} `;
};
console.log("accountantInvoice :", accountantInvoice);
console.log("accountantInvoice :", accountantInvoice.getInfo());

const seo = new Invoices("Michalich", 1);
seo.someProperty = "some property";
seo.print = function () {
  return this.someProperty;
};
console.log("seo :", seo);
console.log("seo :", seo.getInfo());
console.log("seo :", seo.print());

function Owner(name, company) {
  this.__proto__ = new Invoices();
  Invoices.call(this, name);
  this.company = company;
}

const owner = new Owner("Petrovich", "RBC");
console.log("owner: check method of basic prototype ", owner.getName());

owner.subordinates = [
  {
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
owner.print = function () {
  return this.subordinates;
};
console.log("owner :", owner);
console.log("owner :", owner.subordinates);

console.log("Static method :", Invoices.static());

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
console.log("ClassInvoices static method:", ClassInvoices.staticMethod());

const classUser = new ClassInvoices("Yurii", 422, 10000);
console.log("classUser :", classUser);
console.log("classUser :", classUser.getInfo());

const classAccountantInvoice = new ClassInvoices("Semenovna", 2);
classAccountantInvoice.position = "Accountant";
classAccountantInvoice.getInfo = function () {
  return `Hello ${this.name}, your position :${this.position} `;
};
console.log("classAccountantInvoice :", classAccountantInvoice);
console.log("classAccountantInvoice :", classAccountantInvoice.getInfo());

const classSeo = new ClassInvoices("Michalich", 1);
classSeo.someProperty = "some property";
classSeo.print = function () {
  return this.someProperty;
};
console.log("classSeo :", classSeo);
console.log("classSeo :", classSeo.getInfo());
console.log("classSeo :", classSeo.print());

class ClassOwner extends ClassInvoices {
  constructor(company) {
    super("Petrovich"); // ???
    this.company = company;
  }
}

const classOwner = new ClassOwner("RBC");
classOwner.subordinates = [
  {
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
console.log("classOwner :", classOwner);
console.log("classOwner :", classOwner.subordinates);
