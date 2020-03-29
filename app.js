document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnprint').addEventListener('click', print);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnsupp').addEventListener('click', supp);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btndataback').addEventListener('click', databack);
});

document.addEventListener('click', function() {
    for (var i = 1; i < document.getElementById("myTable").rows.length; i++) {
        var x = document.getElementById("myTable").rows[i].cells[0].getElementsByTagName('input')[0].value;
        var y = document.getElementById("myTable").rows[i].cells[1].getElementsByTagName('input')[0].value;
        localStorage.setItem(y, x);
    }
});
/* document.addEventListener('click', function() {
	
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].addEventListener("click", function(e) {
      
		
    });
}
}); */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnmyfunction').addEventListener('click', myFunction);
});

function save(cle) {

    for (var i = 1; i < document.getElementById("myTable").rows.length; i++) {
        var x = document.getElementById("myTable").rows[i].cells[0].getElementsByTagName('input')[0].value;
        var y = document.getElementById("myTable").rows[i].cells[1].getElementsByTagName('input')[0].value;
        if (cle == i) {
            localStorage.setItem(cle, x);
        }
    }
};
function print() {
    var printme = document.getElementById("page");
    var wme = open("", "", "width=900,height=700");
    wme.document.write(printme.outerHTML);
    wme.print();
    wme.close();
};
function databack() {
    var x = document.getElementById("myTable").rows.length;
    if (x == 1) {
        for (var i = 0; i < localStorage.length; i++) {
            var x = document.getElementById("myTable").rows.length;
            var table = document.getElementById("myTable");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cle = localStorage.key(i).toString();
            var obs = localStorage[localStorage.key(i)];
            cell1.innerHTML = "<input classe ='" + obs + "'  dir='rtl' style= 'width:500px;'id=" + "obs" + cle + " Value='" + obs + "'></input>";
            cell2.innerHTML = "<input style= 'width:20px;' id=" + cle + " Value=" + cle + " readonly  ;></input>";
            /* cell3.innerHTML = "<button id='del'  onclick='del("+cle+")'style= height:20px; width:30px;>sup</button>"; */
            cell4.innerHTML = "<button id='save' onclick='save(" + cle + ")' id='btn" + cle + " 'style='height:20px; width:50px;'> Add</button>";
        };
    }
};
function change(cle, obs) {
    localStorage.setItem(cle, obs);
};
function myFunction() {
    var x = document.getElementById("myTable").rows.length;
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "<input dir='rtl' style= 'width:500px;'id=" + "obs" + x + " value=''></input>";
    cell2.innerHTML = "<input dir='rtl' style= 'width:20px;' id=" + "key" + x + " value=" + x + " readonly ;></input>";
    /* cell3.innerHTML ="<button id='del' onclick='del("+x+")' style= height:20px; width:30px;>Supp</button>"; */
    cell4.innerHTML = "<button id='save' onclick='save(" + x + ")' id='btn" + x + " 'style='height:20px; width:50px;'> Add </button>"
};
//////////////////////////////////////
function del(i) {
    localStorage.removeItem(i);
    document.getElementById("myTable").innerHTML = "<tr><td>Observations</td><td>order</td></tr> ";
    databack()
};
/////////////////////////////////////
function supp() {
    var c = confirm("Are you sure you want to Delete all data?");
    if (c == true) {
        localStorage.clear();
        document.getElementById("myTable").innerHTML = "  <tr><td>Observations</td><td>order</td></tr> ";
    };
};
