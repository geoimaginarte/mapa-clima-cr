<!--
var coords = ""; 
var shapeart = "";
//var str = '';   
var atthref = "";
var att = "";
var legend = true;
var a_geo_mpoint = new Array(2);
a_geo_mpoint[0] = 0;
a_geo_mpoint[1] = 0;

function setatt(wert) {		
	att = wert;			
}

function getatt() {
	return att;	
}

function setprintinfo(wert) {
	coords = wert.coords;
	shapeart = wert.shape; 	
	if(wert.href.indexOf("'") == -1) {
		atthref = wert.href;
	} else {
		var strTmp;
		strTmp = wert.href.substring(wert.href.indexOf("'")+1, wert.href.length);
		strTmp = strTmp.substring(0, strTmp.indexOf("'"));		
		atthref = strTmp;		
	}	
	setgeompoint();
}

function setgeompoint() {			
	
	if( (shapeart == "RECT" || shapeart == "rect") && coords != "") {		
		var werte = coords.split(",");
		a_geo_mpoint[0] = (parseInt(xmax) - parseInt(xmin)) / 2 + parseInt(xmin);
		a_geo_mpoint[1] = (parseInt(ymax) - parseInt(ymin)) / 2 + parseInt(ymin);
	} 
	
	if ( (shapeart == "POLY" || shapeart == "poly")  && coords != "") {		
		var werte = coords.split(",");
		var len = werte.length;
		var xmin = 0;
		var xmax = 0;
		var ymin = 0;
		var ymax = 0;
		var tmpx;
		var tmpy;
		var test = 0;
		for(var i = 0; i <= len; i+=2) {
			test++;
			tmpx = werte[i];
			tmpy = werte[i+1];
			if(i == 0) {
				xmin = tmpx;
				ymin = tmpy;
				xmax = tmpx;
				ymax = tmpy;
			} else {				
				if(parseInt(tmpx) < parseInt(xmin)) xmin = tmpx;
				if(parseInt(tmpy) < parseInt(ymin)) ymin = tmpy;
				if(parseInt(tmpy) > parseInt(ymax)) ymax = tmpy;
				if(parseInt(tmpx) > parseInt(xmax)) xmax = tmpx;
			}
		}
		/*
		alert(xmin);
		alert(xmax);
		alert(ymin);
		alert(ymax);		
		*/
		a_geo_mpoint[0] = (parseInt(xmax) - parseInt(xmin)) / 2 + parseInt(xmin);
		a_geo_mpoint[1] = (parseInt(ymax) - parseInt(ymin)) / 2 + parseInt(ymin);	
		/*
		alert(a_geo_mpoint[0]);
		alert(a_geo_mpoint[1]);
		*/
	}
	return;				
}

function geta_geo_mpoint() {
	return a_geo_mpoint;
}

function getatthref() {
	return atthref;
}

function getcoords() {
	return coords;
}

function getshapeart() {
	return shapeart;
}

function resetprintinfo() {
	coords = "";
	shapeart = ""; 
	//str = '';  
	atthref = ""; 
}

function getlegend() {
	return legend;
}



//-->