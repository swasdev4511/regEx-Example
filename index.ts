const pattern: RegExp = /_[0-9]+\.pdf$/;

let dataSet = [
  "abc_01.pdf",
  "pqr_02.pdf",
  "xyz.pdf",
  "JKL",
  "ASDF_12345.pdf",
  "brouscher_02.pdf_003_12_.pdf",
];

let matchedDataSet: string[] = [];

let list = document.getElementById("datasetList") as HTMLElement;
var fragList = document.createDocumentFragment();
for (let i = 0; i < dataSet.length; ++i) {
  var li = document.createElement("li");
  li.textContent = dataSet[i];
  fragList.appendChild(li);
}
list.appendChild(fragList);

const btn = document.getElementById("btn");

btn?.addEventListener("click", testPattern);

function testPattern() {
  matchedDataSet = dataSet.filter((item) => pattern.test(item));
  if (matchedDataSet.length > 0) {
    createMachList();
  }
}

function createMachList() {
  let list = document.getElementById("matchlist") as HTMLElement;
  list.innerHTML = "";
  let fragList = document.createDocumentFragment();
  for (let i = 0; i < matchedDataSet.length; ++i) {
    var li = document.createElement("li");
    li.textContent = matchedDataSet[i];
    fragList.appendChild(li);
  }
  list.appendChild(fragList);
}
