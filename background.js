   //////// Copyright (c) KHALED BOUCHAREB 
   var item1 = {
       "id": "1",
       "title": "تعويض الارقام بملاحطات الاساتذة  ",
       "contexts": ["all"],
      
   };
   var item2 = {
       "id": "2",
       "title": "فكرةو تطوير:خالد بوشارب كل الحقوق محفوظة ",
       "contexts": ["all"],
	   
   };
   chrome.contextMenus.create(item1);
   chrome.contextMenus.create(item2);
   
   chrome.contextMenus.onClicked.addListener(function DZD(data){
if(data.menuItemId == "2"){alert("التطيبق فكرة و برمجة الاستاذ : خالد بوشارب 23/03/2020 بالتوفيق");};

if(data.menuItemId == "1"){
GETCODE =
  "var tbl = document.getElementById('displayTable');"+
  " if(tbl.rows[1].cells.length == 8){"+
  "for( var k = 2; k <=tbl.rows.length; k++) {"+ 
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(0)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(0)]+"'"+"};"+
 /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(1)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(1)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(2)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(2)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(3)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(3)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(4)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(4)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(5)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(5)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(6)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(6)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(7)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(7)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(8)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(8)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(9)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(9)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(10)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(10)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(11)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(11)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(12)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(12)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(13)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(13)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(14)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(14)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(15)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(15)]+"'"+"};"+ /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(16)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(16)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(17)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(17)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(18)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(18)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(19)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(19)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(20)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(20)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(21)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(21)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(22)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(22)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(23)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(23)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(24)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(24)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(25)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(25)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(26)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(26)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(27)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(27)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(28)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(28)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(29)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(29)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(30)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(30)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(31)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(31)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(32)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(32)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(33)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(33)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(34)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(34)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(35)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(35)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(36)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(36)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(37)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(37)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(38)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(38)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(39)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(39)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(40)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(40)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(41)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(41)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(42)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(42)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(43)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(43)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(44)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(44)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(45)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(45)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(46)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(46)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(47)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(47)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(48)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(48)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(49)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(49)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(50)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(50)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(51)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(51)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(52)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(52)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(53)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(53)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(54)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(54)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(55)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(5)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(56)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(56)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(57)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(57)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(58)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(58)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(59)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(59)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(60)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(60)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(61)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(61)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(62)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(62)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(63)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(63)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(64)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(64)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(65)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(65)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(66)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(66)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(67)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(67)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(68)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(68)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(69)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(69)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(70)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(70)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(71)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(71)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(72)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(72)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(73)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(73)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(74)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(74)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(75)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(75)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(76)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(76)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(77)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(77)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(78)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(78)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(79)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(79)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(80)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(80)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(81)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(81)]+"'"+"};"+
  /////////////////////////////////////////////////////////////////
 "if (tbl.rows[k].cells[7].innerText=="+localStorage.key(82)+"){tbl.rows[k].cells[7].innerText="
 +"'"+localStorage[localStorage.key(82)]+"'"+"};"+
"};};";
     alert(GETCODE);
  chrome.tabs.executeScript(null, { code: GETCODE });
  }
   })