var htmlBuilder = "";


teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

htmlBuilder = '<h2>National League</h2>';


// for (var i=0; i<teams.length; i++){
//   htmlBuilder += teams[i] + " wins: " + wins[i] + " Losses: " + losses[i] + "</br>";
//   console.log(htmlBuilder);
// }

// var tableBuilder = "<table> <tr> <th> Teams </th> <th> Wins </th> <th> Losses </th> </tr> </table>";


var tempHighWin = 0;
var winIndex = 0;
var n = 0;
while (n<teams.length) {
if (wins[n] > tempHighWin) {
  tempHighWin = wins[n];
  winIndex = n;
  console.log(winIndex);
} n++;
}


//table
var tableString = "<table>"
titles = ["Team", "Wins", "Looses"];
body = document.getElementsByTagName('body')[0],
div = document.createElement('div');

tableString += '<tr>'+ '<td>' + '<strong>' + 'Teams' + '</strong>' + '</td>'
+ '<td>' + '<strong>' + 'Wins' + '</strong>' +'</td>'+ '<td>'+ '<strong>'+ 'Losses' + '</strong>' + '</td>';

for (var i=0; i<teams.length; i++) {
if(i!=winIndex){
tableString += '<tr>' + '<td>' + teams[i] + '</td>'
+ '<td>' + wins[i] + '</td>'
+ '<td>' + losses[i] + '</td>';
} else {
tableString += '<tr>'+ '<td>' + '<strong>' + teams[i] + '</strong>' + '</td>'
+ '<td>' + '<strong>' + wins[i] + '</strong>' +'</td>'+ '<td>'+ '<strong>'+ losses[i] + '</strong>' + '</td>';
}}
tableString += "</table>";
div.innerHTML = tableString;
body.appendChild(div);
//
//var body = document.getElementsByTagName('body')[0];
// var tbl = document.createElement('table');
// tbl.style.width = '30%';
// tbl.setAttribute('border', '1');
// var tbdy = document.createElement('tbody');
// titles = ["Team", "Wins", "Looses"];
// var winIndex = 0;
// var tempHighWin = 0;
// function tableCreate() {
//   var header=  document.createElement('thead')
//      var headingRow = document.createElement('tr')
//
//      var headingCell1 = document.createElement('td')
//      var headingText1 = document.createTextNode('Teams')
//      headingCell1.appendChild(headingText1)
//      headingRow.appendChild(headingCell1)
//
//      var headingCell2 = document.createElement('td')
//      var headingText2 = document.createTextNode('Wins')
//      headingCell2.appendChild(headingText2)
//      headingRow.appendChild(headingCell2)
//
//      var headingCell3 = document.createElement('td')
//      var headingText3 = document.createTextNode('Losses')
//      headingCell3.appendChild(headingText3)
//      headingRow.appendChild(headingCell3)
//
//      header.appendChild(headingRow)
//      tbl.appendChild(header)
//      //var header = "<th>Header</th>";
//
//   for (var i=0; i<teams.length; i++) {
//     var tr = document.createElement('tr');
//     if (i == winIndex) {
//       var winCell1 = document.createElement('td')
//       var strong = document.createElement('strong')
//       var winText1 = document.createTextNode(teams[i])
//       winCell1.appendChild(winText1)
//       strong.appendChild(winCell1)
//       tr.appendChild(strong)
//
//       var winCell2 = document.createElement('td')
//       var strong = document.createElement('strong')
//       var winText2 = document.createTextNode(wins[i])
//       winCell2.appendChild(winText2)
//       winCell2.appendChild(winText2)
//       strong.appendChild(winCell2)
//       tr.appendChild(strong)
//
//       var winCell3 = document.createElement('td')
//       var strong = document.createElement('strong')
//       var winText3 = document.createTextNode(losses[i])
//       winCell3.appendChild(winText3)
//       winCell3.appendChild(winText3)
//       strong.appendChild(winCell3)
//       tr.appendChild(strong)} else{
//
//     for (var j=0; j<3; j++) {
//
//         if(j==0){
//         var td = document.createElement('td');
//         const cellText = document.createTextNode(teams[i]);
//         td.appendChild(cellText);
//         tr.appendChild(td);
//
//     } else if(j==1) {
//       var td = document.createElement('td');
//       const cellText = document.createTextNode(wins[i]);
//       td.appendChild(cellText);
//       tr.appendChild(td);
//     }else {
//       var td = document.createElement('td');
//       const cellText = document.createTextNode(losses[i]);
//       td.appendChild(cellText);
//       tr.appendChild(td);
//     }
//   }}
//     tbdy.appendChild(tr);
//   }
//   tbl.appendChild(tbdy);
//   body.appendChild(tbl)
// }
// tableCreate();




// var win = "";
// var tempHighWin = 0;
//
// var i = 0;
// while (i<teams.length) {
// if (wins[i] > tempHighWin) {
//   tempHighWin = wins[i];
//   win = teams[i];
// }
// console.log(i);
//   i++;
// }
//
// console.log("best team is " + win);
//       if(i==0){
      //   var td = document.createElement('td');
      //   const cellText = document.createTextNode(titles[i]);
      //   td.appendChild(cellText);
      //   tr.appendChild(td);
      // }
      //   else
      //          var element = document.getElementById(i);
          //        element.style.fontWeight = "bold";
