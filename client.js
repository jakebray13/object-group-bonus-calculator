var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

function bonusCalculator(employeeObject) {
  if (employeeObject.reviewRating <= 2) {
    employeeObject.bonusPercentage = 0;
  }
  else if (employeeObject.reviewRating <= 3) {
    employeeObject.bonusPercentage = 0.04;
  }
  else if (employeeObject.reviewRating <= 4) {
    employeeObject.bonusPercentage = 0.06;
  }
  else if (employeeObject.reviewRating <= 5) {
    employeeObject.bonusPercentage = 0.1;
  }
  if (employeeObject.employeeNumber.length == 4) {
    employeeObject.bonusPercentage += 0.05;
  }
  if (employeeObject.annualSalary > 65000) {
    employeeObject.bonusPercentage -= 0.01;
  }
  if (employeeObject.totalBonus > 13) {
    employeeObject.totalBonus = 13;
  }
  if (employeeObject.totalBonus <= 0) {
    employeeObject.totalBonus = 0;
  }

  employeeObject.totalBonus = Math.round(employeeObject.annualSalary * employeeObject.bonusPercentage);
  employeeObject.totalCompensation = Math.round(employeeObject.annualSalary) + employeeObject.totalBonus;
}

for (var i = 0; i < employees.length; i++) {
  bonusCalculator(employees[i]);
}

console.log(employees);
