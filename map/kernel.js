<!-- 
//	Copyright by alta4 Geoinformatik AG
//	
//	Frauenstraße 8+9
//	54290 Trier
//	fon : +49(0)651.96626-0
//	fax: + 49(0)651.96626-26
//	info@alta4.de
//	www.alta4.de
//
//	Original solution developed by Konrad Matuszewski
var attr = "";
var xs3;
var loginfo;
var xa1pos;
var ya1pos = false;

function PolyHandler()
{
	var shp=navigator.userAgent.toLowerCase();
	var fx4 = parseInt(navigator.appVersion);
	var rect = parseFloat(navigator.appVersion);
	var DrawIt = ( (shp.indexOf("windows 3.1")!=-1) || (shp.indexOf("win16")!=-1) || (shp.indexOf("windows 16-bit")!=-1) );
	
	if (DrawIt) { xa1pos = false; return false; }

	var MoveIt   = ( (shp.indexOf("win")!=-1) || (shp.indexOf("16bit")!=-1) );

	if ( !MoveIt ) { xa1pos = false; return false; }

	var EraseIt     = ((shp.indexOf("msie") != -1) && (shp.indexOf("opera") == -1));
	var EraseIt3    = (EraseIt && (fx4 < 4));

	if ( EraseIt3 ) { xa1pos = false; return false; }
	if ( !EraseIt ) { xa1pos = false; return false; }

	xa1pos = true;

}

function a4_2()
{
	if ( !xa1pos ) return false;

	document.write('<DIV STYLE="POSITION: RELATIVE">');

	return true;
}


function a4_3()
{
	if ( !xa1pos ) return false;

	document.write('<OBJECT ID="line" CLASSID="clsid:369303C2-D7AC-11d0-89D5-00A0C90833E6" STYLE="position:absolute; top:0px; left:0px; width:0px; height:0px; visibility: hidden"><PARAM NAME="HighQuality" VALUE="0"><PARAM NAME="MouseEventsEnabled" VALUE="1"></OBJECT></DIV>');
}

function a4_1()
{
	if ( !xa1pos ) return false;

	if ( !line.Library ) 
	{ 
		xa1pos = false;
		return false;
	}
	else 
	{
		xa1pos = true;
		document.all['line'].style.visibility="visible";
	}
	var f10;
	
	for (i=0; i<document.images.length; i++) if ( document.images(i).useMap ) { f10=document.images(i); }
	
	document.all['line'].style.width=f10.width;
	document.all['line'].style.height=f10.height;
	xs3=line.Library;
	loginfo=line.DrawSurface;
	ya1pos = true;

	return true;
}


function a4(htmlparam)
{
	attr = htmlparam.title +"|";
	a4Mark(htmlparam.shape, htmlparam.coords, true);
}
function Painter(HTMLpointer)
{
	fill = HTMLpointer.split(",");
	
	i=0;
	c=0;
	
	outputD = new Array;
	outputE = new Array;

	while ( fill[i] )
	{
		outputD[c] = parseInt(fill[i]);
		outputE[c] = parseInt(fill[i+1]);
		i=i+2;
		c=c+1;
	}
	text4 = c - 1;
	rgbFill=document.all['line'].style.posWidth;
	rgbOutline=document.all['line'].style.posHeight;
	c = 0;
	
	while ( c <= text4)
	{
		outputD[c]=outputD[c] - (rgbFill/2)
		outputE[c]=outputE[c] - (rgbOutline/2)
		c=c+1;
	}
	shapecol = new Array;
	i=0;
	c=0;

	while ( c <= text4)
	{
		shapecol[i] = Math.round( outputD[c] );
		shapecol[i+1] = Math.round( outputE[c] );
		i=i+2;
		c=c+1;
	}
	return shapecol;
}
function clean() {
	attr = "";
	line.clear();
}
function a4Mark(art, coords, clear)
{
	if ( !ya1pos ) return false;
	if ( !xa1pos ) return false;
	
	if(clear) {
		line.Clear();
	}

	loginfo.fillcolor( xs3.ColorRgb255 (FILL_COLOR_RED, FILL_COLOR_GREEN, FILL_COLOR_BLUE) );
	loginfo.BorderColor( xs3.ColorRgb255 (BORDER_COLOR_RED, BORDER_COLOR_GREEN, BORDER_COLOR_BLUE) );
	loginfo.Opacity(TRANSPARENCY_LEVEL);
	loginfo.BorderWidth(BORDER_WIDTH);

	if (art == "POLY" | art == "poly")
	{
		outlinecolor = Painter(coords)
		loginfo.Polygon(outlinecolor);
		line.DrawSurface=loginfo;
	}
	if (art == "CIRCLE" | art == "circle")
	{
		fill = coords.split(",");
		yr2 = parseInt( fill[0] );
		xz1 = parseInt( fill[1] );
		rgbFill=document.all['line'].style.posWidth;
		rgbOutline=document.all['line'].style.posHeight;
		yr2 = yr2 - ( rgbFill/2 )
		xz1 = xz1 - ( rgbOutline/2 )
		rect2 = parseInt( fill[2] );	
		yr2_LeftBottom = yr2 - rect2
		xz1_LeftBottom = xz1 - rect2
		loginfo.Oval( yr2_LeftBottom, xz1_LeftBottom, 2*rect2, 2*rect2 );
		line.DrawSurface=loginfo;
	}
}
PolyHandler();


//-->
