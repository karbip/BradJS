const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Tech", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Tech", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array of objects with company name and category only
const companyNameandCategory = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyNameandCategory);

// Create and array of objects with name and length of operational in years
const operationalCompanies = companies.map((company) => {
  return {
    name: company.name,
    operationalYears: company.end - company.start,
  };
});
console.log(operationalCompanies);
