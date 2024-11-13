<!-- 
//	Copyright by alta4 Geoinformatik AG
//	
//	Frauenstraße 8+9
//	54290 Trier
//	fon : +49(0)651.96626-0
//	fax: + 49(0)651.96626-26
//	info@alta4.de
//	www.alta4.de
var browNS4 = false;
var browNS6 = false;
var browNS7 = false;
var browIE4 = false;
var browIE5 = false;
var browIE6 = false;

var browOP = false;
var browIE = false;
var browNS = false;

if (navigator.userAgent.indexOf('Opera')>0) { 
	if (navigator.userAgent.indexOf('Opera 7')>0) {
		browIE6 = true;
		browIE = true;
	} else {
		browOP = true;	
	}
} else {
	if (navigator.appName == "Microsoft Internet Explorer") {
		if (navigator.userAgent.indexOf('MSIE 4')>0) {
  			browIE4 = true;
		}
		if (navigator.userAgent.indexOf('MSIE 5')>0) {
  			browIE5 = true;
  			browIE = true;
  		}

		if (navigator.userAgent.indexOf('MSIE 6')>0) {
  			browIE6 = true;
  			browIE = true;
		}
	}
	if (navigator.appName == "Netscape") {
		if (navigator.userAgent.indexOf('Netscape6')>0) {
  			browNS6 = true;	
  			browNS = true;	
		}
		else if (navigator.userAgent.indexOf('Netscape/7')>0) {
			browNS7 = true;
			browNS = true;
		}
		else {
			browNS4 = true;
			browNS = true;
		}
	}
}

window.name = "MapFrameIM"

// **************************************************************************	
// ******** HTML ImageMapper Config file.
// ******** 
// ******** Modify the values of variables in order to change the
// ******** color of highlighted shapes. 
// **************************************************************************

FILL_COLOR_RED 		= 255;	// integer value from 0 to 255
FILL_COLOR_GREEN 	= 255;	// integer value from 0 to 255
FILL_COLOR_BLUE 	= 0;	// integer value from 0 to 255

BORDER_COLOR_RED 	= 0;	// integer value from 0 to 255
BORDER_COLOR_GREEN 	= 0;	// integer value from 0 to 255
BORDER_COLOR_BLUE 	= 0;	// integer value from 0 to 255

TRANSPARENCY_LEVEL	= 0.6;  // real value from 0 to 1

BORDER_WIDTH		= 1;   // integer value from 0 to 10

//-->
