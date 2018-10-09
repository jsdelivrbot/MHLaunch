/**
* Clean up names from url strings
*/
function cleanName(strName) {
	 
	strName = strName.replace(/_/g,"-");/* comment changed underscore to hyphen*/
	//strName = strName.replace(/-/g," ");/* comment out for hyphen delimeter to stay*/
	strName = strName.replace(/\.php/g,"");
	strName = strName.replace(/\.do/g,"");
	strName = strName.replace(/\.jsp/g,"");
	strName = strName.replace(/\.aspx/g,"");
	strName = strName.replace(/\.html/g,"");
	strName = strName.replace(/\.htm/g,"");
	strName = strName.replace(/\.cgi/g,"");
	
	if (strName.indexOf("?") > -1) {
		 
		aryNoParam = strName.split("?");
		strName = aryNoParam[0];
		 
	}
	if (strName.indexOf("#") > -1) {
		 
		aryNoHash = strName.split("#");
		strName = aryNoHash[0];
		 
	}
	 
	return strName;
}


/**
* sets the sections object
*/

function setSections() {
  var urlBits = [];
  var bitRef = 0;
  var secString = "";
  var pStr="";
  var breaktest = "";
  var sections = {};
  //Check subdomain structure for meaningful patterns to determine the section
  pUrl = window.document.location.href.toString();
  
  pUrl = pUrl.split("?")[0];
  pUrl = pUrl.split("#")[0];
  pUrl = pUrl.split("html")[0]; //HEAT - Remove trailing html 10.1.18
  pUrl = pUrl.split("/");
  pUrl = pUrl.filter(function(e){ return e === 0 || e }); //HEAT - Remove Empty Values in String Array 10.9.18
  
  for (i=0; i<pUrl.length; i++) {
    pUrl[i] = pUrl[i].toLowerCase();
  }
  
  for (var i=0; i<pUrl.length; i++) {
    pUrlDot = pUrl[i].split(".");
    for (var p=0; p<pUrlDot.length; p++) {
      //check to see if we have found the TLD
      if (pUrlDot[p].indexOf("com") > -1 || pUrlDot[p].indexOf("165") > -1 || pUrlDot[p].indexOf("undefined") > -1) {
        breaktest = "break";
        bitRef=i;
        break;
      }
    }
    if (breaktest == "break") {
      break;
    }
  }
  pUrlLen = pUrl.length;
  //Determine where in the array we should start looking at the URL structure
  
  /*
  if(jQuery.inArray("webapp",pUrl) > -1) {
    bitRef=bitRef+1; 
  }
  
  if(jQuery.inArray("",pUrl) > -1) {
    bitRef=bitRef+1; 
  }
  
  if(jQuery.inArray("cgi-bin",pUrl) > -1) {
    bitRef=bitRef+1; 
  }
  
  if(jQuery.inArray("hcp",pUrl) > -1) {
    bitRef=bitRef+1; 
    naf.set("server","hcp");
  }
  */
  
  
    if (document.location.host === "www.themiamiheatstore.com" || /shopifypreview.com/.test(window.location.href) === true) {
      sections.basename = 'heatstore';
    } else if (document.location.host === "www.aaarena.com") {
      sections.basename = 'aaarena';
    } else if (/heat/.test(window.location.href) === true) {
      sections.basename = 'nbaheat';
    } else {
      sections.basename = 'default';  
    } 
 
    
  
  //Determine the subSection
  if (pUrlLen > (bitRef +1) && pUrl[bitRef +1].length > 0) {
    sections.section = cleanName(pUrl[bitRef +1]);
  }
  if (pUrlLen > (bitRef +2) && pUrl[bitRef +2].length > 0) {
    sections.subSection = cleanName(pUrl[bitRef +2]);
  }
  if (pUrlLen > (bitRef +3) && pUrl[bitRef +3].length > 0) {
    sections.subSubSection = cleanName(pUrl[bitRef +3]);
  }
  if (pUrlLen > (bitRef +4) && pUrl[bitRef +4].length > 0) {
    sections.subSubSubSection = cleanName(pUrl[bitRef +4]);
  }

 
  var lastItem = pUrl[pUrl.length - 1];
  
  if (typeof(lastItem) !== 'undefined') {
  	sections.lastItem = cleanName(lastItem);
  }
  
  
  return sections;
  
}

return setSections();

