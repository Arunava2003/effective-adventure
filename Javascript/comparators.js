var name1 = prompt("Enter name partner 1");
var name2 = prompt("Enter name partner 2");
var rndNo = Math.random();
rndNo = Math.floor(rndNo * 100) + 1;
var percentage = (rndNo / 100) * 100;

function cap1Letter(name) {
    var nameCut1 = name.slice(0, 1);
    var nameCut2 = name.slice(1, name.length);
    var edit = nameCut1.toUpperCase() + nameCut2.toLowerCase();
    return edit;
}

if (percentage > 70) 
{
    alert(cap1Letter(name1) + " and " + cap1Letter(name2) + " love percentage : " + percentage + "% Soulmates are real then!!!!");
}
if (percentage > 30 && percentage <= 70)
{
    alert(cap1Letter(name1) + " and " + cap1Letter(name2) + " love percentage : " + percentage + "%");
}
if (percentage <= 30){
    alert(cap1Letter(name1) + " and " + cap1Letter(name2) + " love percentage : " + percentage + "%. You are like oil and water");
}
