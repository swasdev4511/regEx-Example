var pattern = /_[0-9]+\.pdf$/;
var dataSet = [
    "abc_01.pdf",
    "pqr_02.pdf",
    "xyz.pdf",
    "JKL",
    "ASDF_12345.pdf",
    "brouscher_02.pdf_003_12_.pdf",
];
var matchedDataSet = [];
var list = document.getElementById("datasetList");
var fragList = document.createDocumentFragment();
for (var i = 0; i < dataSet.length; ++i) {
    var li = document.createElement("li");
    li.textContent = dataSet[i];
    fragList.appendChild(li);
}
list.appendChild(fragList);
var btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", testPattern);
function testPattern() {
    matchedDataSet = dataSet.filter(function (item) { return pattern.test(item); });
    if (matchedDataSet.length > 0) {
        createMachList();
    }
}
function createMachList() {
    var list = document.getElementById("matchlist");
    list.innerHTML = "";
    var fragList = document.createDocumentFragment();
    for (var i = 0; i < matchedDataSet.length; ++i) {
        var li = document.createElement("li");
        li.textContent = matchedDataSet[i];
        fragList.appendChild(li);
    }
    list.appendChild(fragList);
}
