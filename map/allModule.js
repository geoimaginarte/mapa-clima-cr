<!--
var bovmap = false;
function TwoFrames(URL1, PF1, URL2, PF2)
{
  PF1.location.href=URL1;
  PF2.location.href=URL2;
}
function jumpmenu(target,selObj,restore){ //v3.0
  eval(target+".location='"+selObj.options[selObj.selectedIndex].value+ "?" + selObj.options[selObj.selectedIndex].innerHTML +"|"+"'");
  if (restore) selObj.selectedIndex=0;
}

function mark() {  strQuery = (window.location.search).substring(1, (window.location.search).indexOf("|"));  while(strQuery.indexOf("%20")!=-1) {     strQuery = strQuery.replace("%20", " ");     strQuery = strQuery.replace("%20", " ");  }  if(browIE && strQuery!='') {      if(strQuery.indexOf("'")!=-1) {          strQuery = strQuery.substring(0,strQuery.indexOf("'"));      }      var count = 0;      var atthref = "";      var atturl = "";      for(var i = 0; i < document.getElementsByTagName("area").length; i++) {          if(document.getElementsByTagName("area")[i].title==strQuery){
              if (count == 0 && parent.T.showClickInfo == true && document.getElementsByTagName("area")[i].target == "A") {                  window.open(document.getElementsByTagName("area")[i].href,'A');              }
              if(count<3) {                  coords = document.getElementsByTagName("area")[i].coords;                  a4Mark(document.getElementsByTagName("area")[i].shape, coords, false);                  setprintinfo(document.getElementsByTagName("area")[i]);              }              count++;              atthref = document.getElementsByTagName("area")[i].href;          }      }      if(atthref != "") {         atturl = atthref.substring(atthref.indexOf("'")+1,atthref.lastIndexOf("'"));         if(atturl.length != 0) {             PopUpNewWindow(atturl);         }      }  }  attr = strQuery + "|";}

function openPrintPage() {
    oldURL = window.location.href;
    oldURL=oldURL.substring(oldURL.lastIndexOf("/")+1);
    if(oldURL.lastIndexOf("?") != -1) {
        oldURL=oldURL.substring(0, oldURL.lastIndexOf("?"));
    }
    oldURL=oldURL.substring(0, oldURL.lastIndexOf("."));
    oldURL=oldURL.substring(0, oldURL.lastIndexOf("m"))+oldURL.substring(oldURL.lastIndexOf("m")+1);
    newURL="print.html?" + oldURL +".jpg";
    if(browIE | browNS) {
        f1=window.open(newURL, 'print','menubar=no, locationbar=no, resizable=no, scrollbars=yes, height='+(screen.availHeight-100)+', width=700');
    } else {
        f1=window.open(newURL, 'print');
        f1.location.reload();
    }
    f1.moveTo(screen.width/2-350, 0);
    f1.focus();
}
//-->
