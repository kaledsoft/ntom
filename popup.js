//Code Dev By : KHALED BOUCHAREB Version 1.1 Le: 17/03/2020
//////// Copyright (c) KHALED BOUCHAREB 
/// LOAD DATA INSIDE THE FRAME 
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
    chrome.tabs.create({ url: newURL });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn1').addEventListener('click', main);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn2').addEventListener('click', cls);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn3').addEventListener('click', validpri);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn4').addEventListener('click', validmoy);
});
document.addEventListener('DOMContentLoaded', function() {
	 document.getElementById('btn5').addEventListener('click', autoon);
});
document.addEventListener('DOMContentLoaded', function() {
	 document.getElementById('btn6').addEventListener('click', autooff);
});

function autooff() {
			localStorage["validation"]  = "off";
};
function autoon(){
	localStorage["validation"]  = "on";
};
	
function main() {
    var apMark = document.getElementById('apMark').value; 
    localStorage["START"] = "var tbl = document.getElementById('displayTable'); for ( var i = 2 ; i <= tbl.rows.length; i++) {";
    var m11 = document.getElementById('m11').value;
    var m12 = document.getElementById('m12').value;
    var m13 = document.getElementById('m13').value;
    localStorage["m11"] = m11;
    localStorage["m12"] = m12;
    localStorage["m13"] = m13;
	localStorage["apMark"] = apMark
    /////// 
    var m21 = document.getElementById('m21').value;
    var m22 = document.getElementById('m22').value;
    var m23 = document.getElementById('m23').value;
    localStorage["m21"] = m21;
    localStorage["m22"] = m22;
    localStorage["m23"] = m23;
    ///////
    var m31 = document.getElementById('m31').value;
    var m32 = document.getElementById('m32').value;
    var m33 = document.getElementById('m33').value;
    localStorage["m31"] = m31;
    localStorage["m32"] = m32;
    localStorage["m33"] = m33;
    //////////////////
    var m41 = document.getElementById('m41').value;
    var m42 = document.getElementById('m42').value;
    var m43 = document.getElementById('m43').value;
    localStorage["m41"] = m41;
    localStorage["m42"] = m42;
    localStorage["m43"] = m43;
    //////////
    var m51 = document.getElementById('m51').value;
    var m52 = document.getElementById('m52').value;
    var m53 = document.getElementById('m53').value;
    localStorage["m51"] = m51;
    localStorage["m52"] = m52;
    localStorage["m53"] = m53;
    ////////
    var m61 = document.getElementById('m61').value;
    var m62 = document.getElementById('m62').value;
    var m63 = document.getElementById('m63').value;
    localStorage["m61"] = m61;
    localStorage["m62"] = m62;
    localStorage["m63"] = m63;
    //////////
    var m71 = document.getElementById('m71').value;
    var m72 = document.getElementById('m72').value;
    var m73 = document.getElementById('m73').value;
    localStorage["m71"] = m71;
    localStorage["m72"] = m72;
    localStorage["m73"] = m73;
    ////////////////
    var m81 = document.getElementById('m81').value;
    var m82 = document.getElementById('m82').value;
    var m83 = document.getElementById('m83').value;
    localStorage["m81"] = m81;
    localStorage["m82"] = m82;
    localStorage["m83"] = m83;
    ///////////
    var m91 = document.getElementById('m91').value;
    var m92 = document.getElementById('m92').value;
    var m93 = document.getElementById('m93').value;
    localStorage["m91"] = m91;
    localStorage["m92"] = m92;
    localStorage["m93"] = m93;
    var m101 = document.getElementById('m101').value;
    var m102 = document.getElementById('m102').value;
    var m103 = document.getElementById('m103').value;
    localStorage["m101"] = m101;
    localStorage["m102"] = m102;
    localStorage["m103"] = m103;
    alert("Okey .. All data was Saved Inside Chrome.. Thanks By KH@LED");
    if (m11 == '') { localStorage["m11"] = -1 };
    if (m12 == '') { localStorage["m12"] = -1 };
    if (m21 == '') { localStorage["m21"] = -1 };
    if (m22 == '') { localStorage["m22"] = -1 };
    if (m31 == '') { localStorage["m31"] = -1 };
    if (m32 == '') { localStorage["m32"] = -1 };
    if (m41 == '') { localStorage["m41"] = -1 };
    if (m42 == '') { localStorage["m42"] = -1 };
    if (m51 == '') { localStorage["m51"] = -1 };
    if (m52 == '') { localStorage["m52"] = -1 };
    if (m61 == '') { localStorage["m61"] = -1 };
    if (m62 == '') { localStorage["m62"] = -1 };
    if (m71 == '') { localStorage["m71"] = -1 };
    if (m72 == '') { localStorage["m72"] = -1 };
    if (m81 == '') { localStorage["m81"] = -1 };
    if (m82 == '') { localStorage["m82"] = -1 };
    if (m91 == '') { localStorage["m91"] = -1 };
    if (m92 == '') { localStorage["m92"] = -1 };
    if (m101 == '') { localStorage["m101"] = -1 };
    if (m102 == '') { localStorage["m102"] = -1 };
	if (apMark=='') {localStorage["apMark"]= -1};
}

function cls() {
    localStorage.clear();
    alert("delete all records in db");

};
document.addEventListener('DOMContentLoaded', function() {
    /////////// //////////// Restor All Data RAS FUNCTION 
	if (typeof localStorage["apMark"]!= 'undefined') { document.getElementById('apMark').value = localStorage["apMark"]}; 
	
    if (typeof localStorage["m11"] != 'undefined') { document.getElementById('m11').value = localStorage["m11"] };
    if (typeof localStorage["m12"] != 'undefined') { document.getElementById('m12').value = localStorage["m12"] };
    if (typeof localStorage["m13"] != 'undefined') { document.getElementById('m13').value = localStorage["m13"] };
    /////////// ////////////
    if (typeof localStorage["m21"] != 'undefined') { document.getElementById('m21').value = localStorage["m21"] };
    if (typeof localStorage["m22"] != 'undefined') { document.getElementById('m22').value = localStorage["m22"] };
    if (typeof localStorage["m23"] != 'undefined') { document.getElementById('m23').value = localStorage["m23"] };
    /////////// ////////////
    if (typeof localStorage["m31"] != 'undefined') { document.getElementById('m31').value = localStorage["m31"] };
    if (typeof localStorage["m32"] != 'undefined') { document.getElementById('m32').value = localStorage["m32"] };
    if (typeof localStorage["m33"] != 'undefined') { document.getElementById('m33').value = localStorage["m33"] };
    /////////// ////////////
    if (typeof localStorage["m41"] != 'undefined') { document.getElementById('m41').value = localStorage["m41"] };
    if (typeof localStorage["m42"] != 'undefined') { document.getElementById('m42').value = localStorage["m42"] };
    if (typeof localStorage["m43"] != 'undefined') { document.getElementById('m43').value = localStorage["m43"] };
    /////////// ////////////
    if (typeof localStorage["m51"] != 'undefined') { document.getElementById('m51').value = localStorage["m51"] };
    if (typeof localStorage["m52"] != 'undefined') { document.getElementById('m52').value = localStorage["m52"] };
    if (typeof localStorage["m53"] != 'undefined') { document.getElementById('m53').value = localStorage["m53"] };
    /////////// ////////////
    if (typeof localStorage["m61"] != 'undefined') { document.getElementById('m61').value = localStorage["m61"] };
    if (typeof localStorage["m62"] != 'undefined') { document.getElementById('m62').value = localStorage["m62"] };
    if (typeof localStorage["m63"] != 'undefined') { document.getElementById('m63').value = localStorage["m63"] };
    /////////// ////////////
    if (typeof localStorage["m71"] != 'undefined') { document.getElementById('m71').value = localStorage["m71"] };
    if (typeof localStorage["m72"] != 'undefined') { document.getElementById('m72').value = localStorage["m72"] };
    if (typeof localStorage["m73"] != 'undefined') { document.getElementById('m73').value = localStorage["m73"] };
    /////////// ////////////
    if (typeof localStorage["m81"] != 'undefined') { document.getElementById('m81').value = localStorage["m81"] };
    if (typeof localStorage["m82"] != 'undefined') { document.getElementById('m82').value = localStorage["m82"] };
    if (typeof localStorage["m83"] != 'undefined') { document.getElementById('m83').value = localStorage["m83"] };
    /////////// ////////////
    if (typeof localStorage["m91"] != 'undefined') { document.getElementById('m91').value = localStorage["m91"] };
    if (typeof localStorage["m92"] != 'undefined') { document.getElementById('m92').value = localStorage["m92"] };
    if (typeof localStorage["m93"] != 'undefined') { document.getElementById('m93').value = localStorage["m93"] };
    /////////// ////////////
    if (typeof localStorage["m101"] != 'undefined') { document.getElementById('m101').value = localStorage["m101"] };
    if (typeof localStorage["m102"] != 'undefined') { document.getElementById('m102').value = localStorage["m102"] };
    if (typeof localStorage["m103"] != 'undefined') { document.getElementById('m103').value = localStorage["m103"] };
    ///////
    if (localStorage["niveau"] == 'moy') {
        validmoy();
    };
    ///////
    if (localStorage["niveau"] == "pri") {
        validpri();
    };
});

function validpri() {
    localStorage["niveau"] = "pri";
    /////
    document.getElementById("m21").style.display = "none";
    document.getElementById("m22").style.display = "none";
    ////    
    document.getElementById("m41").style.display = "none";
    document.getElementById("m42").style.display = "none";
    ////
    document.getElementById("m61").style.display = "none";
    document.getElementById("m62").style.display = "none";
    ////
    document.getElementById("m81").style.display = "none";
    document.getElementById("m82").style.display = "none";
    ////
    document.getElementById("m101").style.display = "none";
    document.getElementById("m102").style.display = "none";

};

function validmoy() {
    localStorage["niveau"] = "moy";
    /////
    document.getElementById("m21").style.display = "block";
    document.getElementById("m22").style.display = "block";
    ////    
    document.getElementById("m41").style.display = "block";
    document.getElementById("m42").style.display = "block";
    ////
    document.getElementById("m61").style.display = "block";
    document.getElementById("m62").style.display = "block";
    ////
    document.getElementById("m81").style.display = "block";
    document.getElementById("m82").style.display = "block";
    ////
    document.getElementById("m101").style.display = "block";
    document.getElementById("m102").style.display = "block";
}