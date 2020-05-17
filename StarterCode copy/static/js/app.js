// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!

//create original data
tableData.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");

    Object.entries(UFO).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

//create filtered data  action
var button = d3.select("#button");

button.on("click", function() {


    var inputElement = d3.select("#datetime");


    var inputValue = inputElement.property("value");
    var list = d3.select("tbody");
    list.html("");
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);
    filteredData.forEach(function(UFO) {
        console.log(UFO);
        var list1 = list.append("tr");
        list1.html("");
        Object.entries(UFO).forEach(function([key, value]) {
            console.log(key, value);
            var cell1 = list1.append("td");
            cell1.text(value);
        });
    });
    d3.select("h1>span").text(inputValue);
});


//create all data  action
var button1 = d3.select("#button1");

button1.on("click", function() {
    tableData.forEach(function(UFO) {
        console.log(UFO);
        var row = tbody.append("tr");

        Object.entries(UFO).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
    d3.select("h1>span").text("");
});