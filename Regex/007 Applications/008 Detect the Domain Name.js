//* You will be provided with a chunk of HTML markup. Your task is to identify the unique domain names from the links or Urls which are present in the markup fragment.

// For example, if the link http://www.hackerrank.com/contest is present in the markup, you should detect the domain: hackerrank.com. In case there are second level or higher level domains present in the markup, all of them need to be treated as unique. For instance if the links http://www.xyz.com/news, https://abc.xyz.com/jobs, http://abcd.xyz.com/jobs2 are present in the markup then [xyz.com, abc.xyz.com, abcd.xyz.com] should all be identified as unique domains present in the markup. Prefixes like "www." and "ww2.", if present, should be scrubbed out from the domain name.



//* Input Format

// An Integer N. This is equal to the number of lines in the HTML Fragment which follows. A chunk of HTML Markup with embedded links, the length of which is N lines.



//* Output Format

// One line, containing the list of detected domains, separated by semi-colons, in lexicographical order. Do not leave any leading or trailing spaces either at the ends of the line, or before and after the individual domain names.



//* Sample Input

////?  10
////? <div class="reflist" style="list-style-type: decimal;">
////? <ol class="references">
////? <li id="cite_note-1"><span class="mw-cite-backlink"><b>^ ["Train (noun)"](http://www.askoxford.com/concise_oed/train?view=uk). <i>(definition – Compact OED)</i>. Oxford University Press<span class="reference-accessdate">. Retrieved 2008-03-18</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Train+%28noun%29&rft.genre=article&rft_id=http%3A%2F%2Fwww.askoxford.com%2Fconcise_oed%2Ftrain%3Fview%3Duk&rft.jtitle=%28definition+%E2%80%93+Compact+OED%29&rft.pub=Oxford+University+Press&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>
////? <li id="cite_note-2"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Atchison, Topeka and Santa Fe Railway (1948). <i>Rules: Operating Department</i>. p. 7.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.aulast=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.btitle=Rules%3A+Operating+Department&rft.date=1948&rft.genre=book&rft.pages=7&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>
////? <li id="cite_note-3"><span class="mw-cite-backlink"><b>^ [Hydrogen trains](http://www.hydrogencarsnow.com/blog2/index.php/hydrogen-vehicles/i-hear-the-hydrogen-train-a-comin-its-rolling-round-the-bend/)</span></li>
////? <li id="cite_note-4"><span class="mw-cite-backlink"><b>^ [Vehicle Projects Inc. Fuel cell locomotive](http://www.bnsf.com/media/news/articles/2008/01/2008-01-09a.html)</span></li>
////? <li id="cite_note-5"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Central Japan Railway (2006). <i>Central Japan Railway Data Book 2006</i>. p. 16.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Central+Japan+Railway&rft.aulast=Central+Japan+Railway&rft.btitle=Central+Japan+Railway+Data+Book+2006&rft.date=2006&rft.genre=book&rft.pages=16&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>
////? <li id="cite_note-6"><span class="mw-cite-backlink"><b>^ ["Overview Of the existing Mumbai Suburban Railway"](http://web.archive.org/web/20080620033027/http://www.mrvc.indianrail.gov.in/overview.htm). _Official webpage of Mumbai Railway Vikas Corporation_. Archived from [the original](http://www.mrvc.indianrail.gov.in/overview.htm) on 2008-06-20<span class="reference-accessdate">. Retrieved 2008-12-11</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Overview+Of+the+existing+Mumbai+Suburban+Railway&rft.genre=article&rft_id=http%3A%2F%2Fwww.mrvc.indianrail.gov.in%2Foverview.htm&rft.jtitle=Official+webpage+of+Mumbai+Railway+Vikas+Corporation&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>
////? </ol>
////? </div>



//* Sample Output

////? askoxford.com;bnsf.com;hydrogencarsnow.com;mrvc.indianrail.gov.in;web.archive.org



var regexPattern = /(?:http|https):\/\/(?:(www.|ww2.))?(?<DOMAIN>[\w.-]+\.\w{1,3})/g

function processData(input) {
    inputLines = input.split('\n')
    var inputLength = +inputLines[0]
    
    var result = [];
    
    for (var i = 1; i <= inputLength; i++) {
        while (match=regexPattern.exec(inputLines[i])){
            let matches = match.groups.DOMAIN.trim();
            if(matches) result.push(matches);
        }
    }

    result = [...new Set(result.flat().sort())];
    console.log(result.join(';'));
}


processData(`10
<div class="reflist" style="list-style-type: decimal;">
<ol class="references">
<li id="cite_note-1"><span class="mw-cite-backlink"><b>^ ["Train (noun)"](http://www.askoxford.com/concise_oed/train?view=uk). <i>(definition – Compact OED)</i>. Oxford University Press<span class="reference-accessdate">. Retrieved 2008-03-18</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Train+%28noun%29&rft.genre=article&rft_id=http%3A%2F%2Fwww.askoxford.com%2Fconcise_oed%2Ftrain%3Fview%3Duk&rft.jtitle=%28definition+%E2%80%93+Compact+OED%29&rft.pub=Oxford+University+Press&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>
<li id="cite_note-2"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Atchison, Topeka and Santa Fe Railway (1948). <i>Rules: Operating Department</i>. p. 7.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.aulast=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.btitle=Rules%3A+Operating+Department&rft.date=1948&rft.genre=book&rft.pages=7&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>
<li id="cite_note-3"><span class="mw-cite-backlink"><b>^ [Hydrogen trains](http://www.hydrogencarsnow.com/blog2/index.php/hydrogen-vehicles/i-hear-the-hydrogen-train-a-comin-its-rolling-round-the-bend/)</span></li>
<li id="cite_note-4"><span class="mw-cite-backlink"><b>^ [Vehicle Projects Inc. Fuel cell locomotive](http://www.bnsf.com/media/news/articles/2008/01/2008-01-09a.html)</span></li>
<li id="cite_note-5"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Central Japan Railway (2006). <i>Central Japan Railway Data Book 2006</i>. p. 16.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Central+Japan+Railway&rft.aulast=Central+Japan+Railway&rft.btitle=Central+Japan+Railway+Data+Book+2006&rft.date=2006&rft.genre=book&rft.pages=16&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>
<li id="cite_note-6"><span class="mw-cite-backlink"><b>^ ["Overview Of the existing Mumbai Suburban Railway"](http://web.archive.org/web/20080620033027/http://www.mrvc.indianrail.gov.in/overview.htm). _Official webpage of Mumbai Railway Vikas Corporation_. Archived from [the original](http://www.mrvc.indianrail.gov.in/overview.htm) on 2008-06-20<span class="reference-accessdate">. Retrieved 2008-12-11</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Overview+Of+the+existing+Mumbai+Suburban+Railway&rft.genre=article&rft_id=http%3A%2F%2Fwww.mrvc.indianrail.gov.in%2Foverview.htm&rft.jtitle=Official+webpage+of+Mumbai+Railway+Vikas+Corporation&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>
</ol>
</div>`)
/*
    askoxford.com;bnsf.com;hydrogencarsnow.com;mrvc.indianrail.gov.in;web.archive.org
*/

console.log('\n');

processData(`1027
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="format-detection" content="telephone=no" />
<title>Rediff.com - India, Business, Stock, Sports, Cricket, Entertainment, Bollywood, Music, Video and Breaking news, Rediffmail NG, Shopping</title>
<meta name="keywords" content="India news, India breaking news, Hindi songs, new songs, listen to music, Live cricket score, sports, Stock market, share value, finance, free mail, web email free, social networking, make friends, free videos, video clip, india shopping, online shopping, news , Music, Cricket, Money, Rediffmail, MyPage, iShare, Shopping, Rediffmail NG" />
<meta name="description" content="Rediff.com - India's leading portal which covers India news, Hindi Movies, Photos, Videos, Live Cricket Score, Stock updates from BSE and NSE, Bollywood news, Online shopping, Social networking, Rediffmail NG" />
<!-- IE9-Windows7: Pinned Sites: Starts -->
<meta http-equiv="X-UA-Compatible" content="IE=9" />
<meta name="application-name"       content="Rediff.com" />
<meta name="msapplication-tooltip"  content="Rediff.com"/>
<meta name="msapplication-window"   content="width=1500;height=900" />
<meta name="msapplication-task"
content="name=Cricket;action-uri=http://www.rediff.com/cricket?pin=ie9;icon-uri=http://www.rediff.com/favicon.ico"/>
<meta name="msapplication-task"
content="name=Rediff MoneyWiz;action-uri=http://money.rediff.com?pin=ie9;icon-uri=http://www.rediff.com/favicon.ico"/>
<meta name="msapplication-task"
content="name=Rediff Deal ho jaye!;action-uri=http://dealhojaye.rediff.com?pin=ie9;icon-uri=http://www.rediff.com/favicon.ico"/>
<meta name="msapplication-task"
content="name=rediffmailNG;action-uri=https://mail.rediff.com/cgi-bin/login.cgi?pin=ie9;icon-uri=http://www.rediff.com/favicon.ico"/>
<!-- IE9-Windows7: Pinned Sites: Ends -->
<link rel="shortcut icon" type=image/x-icon href="http://www.rediff.com/favicon.ico">
<link rel="stylesheet" href="http://imworld.rediff.com/worldrediff/style_3_16/home_tile_ind_7.css" />
<script type="text/javascript">
var homepage = 1;
var glb_vid_num = 0 ;
var dealimg_number = 5;
var s_buzz_no = (Math.floor(Math.random()*3));
var pages_domain ="http://pages.rediff.com" ;
var imgpath = "http://imworld.rediff.com/worldrediff/pix";
var loggedin = "";
var totalvideos = "10";
var totalfeaturedpages = "15";
var glb_citymapped = 0; var glb_trackdeal = ""; var glb_trackshop = ""; var glb_trackshop1 = ""; var glb_trackbook = ""; var glb_altrpromo = 0; var glb_scrll_met = 0;
var glb_promo_random = (Math.floor(Math.random()*3));
var booksArr = new Array();var shopArr = new Array();var shopPromoArr = new Array();
document.domain = "rediff.com";
</script>
</head>
<body>
<div id="divPinSite"></div>
<div id="trans_div"></div>

<!-- homewrapper starts -->
<div id="homewrapper" class="homewrapper">
	<div class="popupcontainer"><div id="div_signup"></div><div id="div_confirm"></div></div>
	<div class="f12 grey1 divtopsrchlink"> <a href="http://realtime.rediff.com/news?src=rediff_home" title="India As It Happens" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/news?src=rediff_home___&cmp=rt_news&lnk=rt_news&nsrv1=inhome');return false;">Realtime News &nbsp; &nbsp;<a href="http://realtime.rediff.com/images?src=rediff_home" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/images?src=rediff_home___&cmp=rt_images&lnk=rt_images&nsrv1=inhome');return false;">Images</a>&nbsp; &nbsp; &nbsp;  <a href="http://books.rediff.com/?sc_cid=inhome_srch" onclick="trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/?sc_cid=inhome_srch___&cmp=HP&lnk=books_srchbar&nsrv1=HP');return false;">Books</a>&nbsp; &nbsp; &nbsp;  <a href="http://search.rediff.com/allsearch/index.html" onclick="trackURL('http://track.rediff.com/click?url=___http://search.rediff.com/allsearch/index.html___&cmp=rt_more&lnk=rt_more&nsrv1=inhome');return false;">More</a></div><div class="userinfo floatR"><span id="username"></span><span id="hp" style="BEHAVIOR: url(#default#homepage)"></span><span id="sethome"></span> <span>
<script type="text/javascript">
var ck=document.cookie;function getcookie(n)
{var ar=n+"=";var al=ar.length;var cl=ck.length;var i=0;while(i<cl)
{j=i+al;if(ck.substring(i,j)==ar)
{e=ck.indexOf(";",j);if(e==-1)
e=ck.length;return unescape(ck.substring(j,e));}
i=ck.indexOf(" ",i)+1;if(i==0)
break;}
return "";}
</script>

<span id="signin_info"> <a href='https://mail.rediff.com/cgi-bin/login.cgi'>Sign in</a>  &nbsp;|&nbsp; <a href='http://register.rediff.com/register/register.php?FormName=user_details'>Create a Rediffmail account</a></span>
<iframe src="about:blank" name="metric_iframe" id="metric_iframe" width="1" height="1" frameborder="0" class="hide" ></iframe>
	<script type="text/javascript">

		var querystring	= "";
		var path	= "";
		var domain	= "";
		var Rkey_data	= "";
		var Rkey	= Math.floor(Math.random() * 1000000);
		querystring	= window.location.search;
		path		= window.location.pathname;
		domain		= window.location.host;
		var tmp_ref = encodeURIComponent(document.referrer);
		if((tmp_ref == null) || (tmp_ref.length == 0)){tmp_ref = "";}


			var resolution = screen.width+'x'+screen.height;
			if (querystring == "")
			{
				Rkey_data = "?rkey="+Rkey+"&w="+resolution;
			}
			else
			{
				Rkey_data = "&rkey="+Rkey+"&w="+resolution;
			}



		if(tmp_ref != "")
		{
			Rkey_data += "&ref="+tmp_ref;
		}


		document.getElementById('metric_iframe').src ='http://metric.ind.rediff.com/'+domain+path+querystring+Rkey_data;
	</script>

<script>
  var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "6035613" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();

	function comscore_ajax(url)
	{
		_comscore.push({ c1: "2", c2: "6035613",c4:url });
		var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
		s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
		el.parentNode.insertBefore(s, el);
	}
</script>

<noscript><img src="http://b.scorecardresearch.com/p?c1=2&c2=6035613&cv=2.0&cj=1" /></noscript>

<script  type="text/javascript" >
var endyear 	= "2013";
var  cdn_domain = "http://www.rediff.com";
var  org_domain = "http://mypage.rediff.com";
var  imgpath	= "http://imworld.rediff.com/worldrediff/pix";
var  ishare_domain	= "http://ishare.rediff.com";
var OAS_sitepage = "" ;
var OAS_listpos = "" ;


var Rlo="";
var Rl = "";
Rlo	=	getcookie("Rlo");
Rlo =	unescape(Rlo).replace(/\+/g," ");
Rlo =	Rlo.replace("@rediffmail.com","");
Rlo = Rlo.replace(/[^\w\d\s\-\_]/ig,'');
Rl = getcookie("Rl");
Rl = Rl.replace(/[^\w\d\s\-\_@\.]/ig,'');
var tmp_rsc1 = "";
var tmp_rm1 = "";
tmp_rsc1 = getcookie("Rsc");
tmp_rm1 = getcookie("Rm");
if((Rlo != "" || Rl!="" ) && tmp_rsc1 != "" && tmp_rm1 != "")
{

	if(Rlo != "" )
	{
		document.getElementById('username').innerHTML	= "<a href='"+org_domain+"/profile/myprofile' class='proper' onclick=\"trackURL('http://track.rediff.com/click?url=___"+org_domain+"/profile/myprofile___&cmp=mypage&lnk=mypage&nsrv1=inhome');return false;\">"+Rlo+"</a>&nbsp; | &nbsp;" ;
	}
	else
	{
		Rl = Rl.substring(0,Rl.lastIndexOf('@'));
		document.getElementById('username').innerHTML	= "<a href='"+org_domain+"/profile/myprofile' onclick=\"trackURL('http://track.rediff.com/click?url=___"+org_domain+"/profile/myprofile___&cmp=mypage&lnk=mypage&nsrv1=inhome');return false;\">"+Rl+"</a>&nbsp; | &nbsp;" ;
	}

	if(document.getElementById('signin_info'))document.getElementById('signin_info').innerHTML = "" ;
}
else
{
	if(document.getElementById('signin_info')){document.getElementById('signin_info').innerHTML = " <a href='https://mail.rediff.com/cgi-bin/login.cgi' onclick=\"javascript:signin();document.getElementById('c_uname').focus();return false;\" title='Already a user? Sign in'>Sign in</a>  &nbsp;|&nbsp; <a href='http://register.rediff.com/register/register.php?FormName=user_details' >Create a Rediffmail account</a>";}
	if(Rlo != "" && Rl != "" )
	{
		if(document.getElementById('signin_info')){document.getElementById('signin_info').innerHTML += "&nbsp;|&nbsp;";}
	}
}
if(Rl != "")
{
	if(document.getElementById('signin_info')){document.getElementById('signin_info').innerHTML += "<a href='"+org_domain+"/signout' title='Sign out'>Sign out</a>";}
}

</script>
<style type="text/css">.popupcontainer{z-index:1000;}</style></span></div>
	<span class="clear"></span>
	<div class="floatL"><img id="redifflogo" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite homelogo" title="Rediff India" alt="Rediff.com" /></div>
	<div id="topsrchhome"><form name="srchform" id="queryTop" method="post" action="http://realtime.rediff.com/phpnews" onsubmit="return submitSearch()"><div class="srch_outer"><input type="text" autocomplete="off" id="srchword" name="srchword" class="homesrchbox" /><input type="hidden" name="src" id="snsSRC" value="web"></input><input type="submit" value="    " class="homesprite newsrchbtn" /></div></form><div id="sug" class="sug"></div><span class="sm1">&nbsp;Happening Now :</span> <a href="http://realtime.rediff.com/news/Vanzara?src=home_cue1" class="sm1" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Frealtime.rediff.com%2Fnews%2FVanzara%3Fsrc%3Dhome_cue1___&cmp=rt_bot&lnk=rt_bot&nsrv1=inhome');return false;">DG Vanzara</a>,  <a href="http://realtime.rediff.com/news/Raghuram-Rajan?src=home_cue2" class="sm1" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Frealtime.rediff.com%2Fnews%2FRaghuram-Rajan%3Fsrc%3Dhome_cue2___&cmp=rt_bot&lnk=rt_bot&nsrv1=inhome');return false;">Raghuram Rajan</a>,  <a href="http://realtime.rediff.com/news/Syria-Strike?src=home_cue3" class="sm1" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Frealtime.rediff.com%2Fnews%2FSyria-Strike%3Fsrc%3Dhome_cue3___&cmp=rt_bot&lnk=rt_bot&nsrv1=inhome');return false;">Syria Strike</a>,  <a href="http://realtime.rediff.com/news/Teachers-Day-?src=home_cue4" class="sm1" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Frealtime.rediff.com%2Fnews%2FTeachers-Day-%3Fsrc%3Dhome_cue4___&cmp=rt_bot&lnk=rt_bot&nsrv1=inhome');return false;">Teachers Day</a></div>
	<span class="clear"></span>
	<!-- new design starts -->
	<div id="new_design">
	<div class="icondiv"><a href="https://mail.rediff.com/cgi-bin/login.cgi" onclick="return validmailuser();return false;" title="Lightning fast free email" class="curhand"><div class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite mailicon" alt="Lightning fast free email" /><u>rediffmail</u></div></a><a href="http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome" title="Lightning fast business email hosting" onclick="trackURL('http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome___&cmp=host&lnk=inhome&nsrv1=host');return false;"  class="curhand"><div class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite mailproicon" alt="Lightning fast business email hosting" /><u>Company Email</u></div></a><a href="http://money.rediff.com/" title="Live commentary of the Indian stock markets, stock quotes and business news" onclick="trackURL('http://track.rediff.com/click?url=___http://money.rediff.com/___&cmp=money&lnk=money&nsrv1=inhome');return false;"><div  class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite moneyicon" alt="Live commentary of the Indian stock markets, stock quotes and business news" /><u>Money</u></div></a><div class="divicon"><a href="http://mypage.rediff.com"  title="Share your stuff to discover more of what you like" onclick="trackURL('http://track.rediff.com/click?url=___http://mypage.rediff.com___&cmp=mypage&lnk=mypage&nsrv1=inhome');return false;"  class="curhand"><div class="homesprite mypageicon floatL" ><img id="myphoto" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" width="30" height="22" title="Share your stuff to discover more of what you like" alt="social networking, make friends" class="myphoto"></div></a><a href="http://mypage.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://mypage.rediff.com___&cmp=mypage&lnk=mypage&nsrv1=inhome');return false;"  class="curhand"><div class="mypagelink">MyPage</div></a></div><a href="http://shopping.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/?sc_cid=inhome_icon___&cmp=HP&lnk=shopping_icon&nsrv1=HP');return false;" title="Online Shopping" class="curhand"><div class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite shopicon" alt="Online Shopping" /><u>Shopping</u></div></a><a href="http://books.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://books.rediff.com?sc_cid=bk_inhome_icon___&cmp=HP&lnk=books_icon&nsrv1=HP');return false;" title="Buy books online"  class="curhand"><div class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite booksicon" alt="Buy books online" /><u>Books</u></div></a><a href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare&lnk=ishare_icon&nsrv1=inhome');return false;" title="Watch videos"  class="curhand"><div class="divicon"><div class="floatL"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite videosicon" alt="Watch videos" /></div><div class="videocopy"><u>Videos</u></div></div></a><span class="clear"></span></div>
	<div><p class="t_date">Last Updated: Sep 05, 2013 IST 19:00:23</p><span class="clear"></span></div>
	<!-- maincontainer starts -->
	<div class="maincontainer">
		<div class="n_tabsul">
			<div class="telluslink floatR"><a href="http://mypage.rediff.com/feedback">Tell us what you think about this new layout!</a></div>
			<div class="n_tabsel">HOME</div>
			<a href="http://www.rediff.com/news" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_nav&lnk=news1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">NEWS</div></a>
			<a href="http://www.rediff.com/business" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=bus1_nav&lnk=bus1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">BUSINESS</div></a>
			<a href="http://www.rediff.com/movies" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=mov1_nav&lnk=mov1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">MOVIES</div></a>
			<a href="http://www.rediff.com/sports" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_nav&lnk=sports1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">SPORTS</div></a>
			<a href="http://www.rediff.com/cricket" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket___&cmp=cric1_nav&lnk=cric1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">CRICKET</div></a>
			<a href="http://www.rediff.com/getahead" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=get1_nav&lnk=get1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">GET AHEAD</div></a>
			<a href="http://www.rediff.com/appstore/rediffnews" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/appstore/rediffnews___&lnk=inhome&newservice=newsapp');return false;"><div class="napp_tab"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite smmobicon" /> NEWS ON MOBILE</div></a>
		</div>
		<span class="clear"></span>
		<span class="ht5"></span>
		<div id="leftcontainer" class="leftcontainer">
			<div id="column1" class="wd50 floatL">
				<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/05live-taliban.jpg" class="img" href="http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm"><img class="thumbimg" alt="Live! Indian author Sushmita Banerjee shot dead by militants in Afghanistan" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm">Live! Indian author Sushmita Banerjee shot dead by militants in Afghanistan</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/05watch6.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm"><img class="thumbimg" alt="Samsung launches smartwatch, Galaxy Note 3" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm">Samsung launches smartwatch, Galaxy Note 3</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/05india2.jpg" class="img" href="http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm"><img class="thumbimg" alt="Hoisting the Indian flag where no one else has" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm">Hoisting the Indian flag where no one else has</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-auto-armadillo-t-a-car-that-folds-in-half-for-easy-parking/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/04armadillo1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-auto-armadillo-t-a-car-that-folds-in-half-for-easy-parking/20130905.htm"><img class="thumbimg" alt="Armadillo-T: A car that folds in half for easy parking" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-auto-armadillo-t-a-car-that-folds-in-half-for-easy-parking/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-auto-armadillo-t-a-car-that-folds-in-half-for-easy-parking/20130905.htm">Armadillo-T: A car that folds in half for easy parking</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/sports-ministry-jitendra-singh-backs-ioc-diktat-demands-ioa-amend-constitution/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/cricket/2013/aug/02jitendrasingh.jpg" class="img" href="http://www.rediff.com/sports/report/sports-ministry-jitendra-singh-backs-ioc-diktat-demands-ioa-amend-constitution/20130905.htm"><img class="thumbimg" alt="Ministry backs IOC diktat; demands IOA amend constitution" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/sports-ministry-jitendra-singh-backs-ioc-diktat-demands-ioa-amend-constitution/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/report/sports-ministry-jitendra-singh-backs-ioc-diktat-demands-ioa-amend-constitution/20130905.htm">Ministry backs IOC diktat; demands IOA amend constitution</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-i-dont-dream-of-being-pm-have-to-serve-guj-till-2017-modi/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/05modi1.jpg" class="img" href="http://www.rediff.com/news/slide-show/slide-show-1-i-dont-dream-of-being-pm-have-to-serve-guj-till-2017-modi/20130905.htm"><img class="thumbimg" alt="I don't dream of being PM; have to serve Guj till 2017: Modi" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-i-dont-dream-of-being-pm-have-to-serve-guj-till-2017-modi/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/slide-show/slide-show-1-i-dont-dream-of-being-pm-have-to-serve-guj-till-2017-modi/20130905.htm">I don't dream of being PM; have to serve Guj till 2017: Modi</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/slide-show/slide-show-1-tokyo-dangles-dollars-in-bid-to-win-2020-olympic-games-madrid-istanbul/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/sports/2013/sep/05tokyo1.jpg" class="img" href="http://www.rediff.com/sports/slide-show/slide-show-1-tokyo-dangles-dollars-in-bid-to-win-2020-olympic-games-madrid-istanbul/20130905.htm"><img class="thumbimg" alt="Tokyo dangles dollars in bid to win 2020 Olympic Games" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/slide-show/slide-show-1-tokyo-dangles-dollars-in-bid-to-win-2020-olympic-games-madrid-istanbul/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/slide-show/slide-show-1-tokyo-dangles-dollars-in-bid-to-win-2020-olympic-games-madrid-istanbul/20130905.htm">Tokyo dangles dollars in bid to win 2020 Olympic Games</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-most-competitive-countries-in-the-world-india-ranks-60/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/04wef1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-special-most-competitive-countries-in-the-world-india-ranks-60/20130905.htm"><img class="thumbimg" alt="Most competitive countries in the world; India ranks 60" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-most-competitive-countries-in-the-world-india-ranks-60/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-special-most-competitive-countries-in-the-world-india-ranks-60/20130905.htm">Most competitive countries in the world; India ranks 60</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>
				<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-delhi-rape-defence-lawyers-blame-braveheart-her-friend-and-govt/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/05juvelile.jpg" class="img" href="http://www.rediff.com/news/slide-show/slide-show-1-delhi-rape-defence-lawyers-blame-braveheart-her-friend-and-govt/20130905.htm"><img class="thumbimg" alt="Delhi rape: Defence lawyers blame Braveheart, her friend, and govt" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-delhi-rape-defence-lawyers-blame-braveheart-her-friend-and-govt/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/slide-show/slide-show-1-delhi-rape-defence-lawyers-blame-braveheart-her-friend-and-govt/20130905.htm">Delhi rape: Defence lawyers blame Braveheart, her friend, and govt</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/report/your-favourite-televsion-actoractress-tell-us-tv/20130827.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/aug/27geet.jpg" class="img" href="http://www.rediff.com/movies/report/your-favourite-televsion-actoractress-tell-us-tv/20130827.htm"><img class="thumbimg" alt="YOUR favourite television actor/actress? TELL US!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/report/your-favourite-televsion-actoractress-tell-us-tv/20130827.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/report/your-favourite-televsion-actoractress-tell-us-tv/20130827.htm">YOUR favourite television actor/actress? TELL US!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/mexico-on-draft-f1-calendar-for-2013-no-new-jersey/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/sports/2013/sep/05f1.jpg" class="img" href="http://www.rediff.com/sports/report/mexico-on-draft-f1-calendar-for-2013-no-new-jersey/20130905.htm"><img class="thumbimg" alt="Mexico on draft F1 calendar for 2013, no New Jersey" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/mexico-on-draft-f1-calendar-for-2013-no-new-jersey/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/report/mexico-on-draft-f1-calendar-for-2013-no-new-jersey/20130905.htm">Mexico on draft F1 calendar for 2013, no New Jersey</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-specials-teachers-day-id-be-lost-without-you/20130904.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2010/aug/30teacher.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-specials-teachers-day-id-be-lost-without-you/20130904.htm"><img class="thumbimg" alt="Teacher's Day: 'I'd be lost without you'" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-specials-teachers-day-id-be-lost-without-you/20130904.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-specials-teachers-day-id-be-lost-without-you/20130904.htm">Teacher's Day: 'I'd be lost without you'</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/special/the-great-escape-indias-unsung-war-heroes/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/aug/30pow4.jpg" class="img" href="http://www.rediff.com/news/special/the-great-escape-indias-unsung-war-heroes/20130905.htm"><img class="thumbimg" alt="The Great Escape: India's unsung war heroes" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/special/the-great-escape-indias-unsung-war-heroes/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/special/the-great-escape-indias-unsung-war-heroes/20130905.htm">The Great Escape: India's unsung war heroes</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>
			</div>
			<div id="column2"  class="wd50 floatL">
				<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket___&cmp=cricket1_head&lnk=cricket1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/cricket">Cricket</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm___&cmp=HP&lnk=cricket-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/cricket/2013/sep/05west.jpg" class="img" href="http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm"><img class="thumbimg" alt="West Indies to play 2 Tests and 3 ODIs in India" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm___&cmp=HP&lnk=cricket-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm">West Indies to play 2 Tests and 3 ODIs in India</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket___&cmp=cricket1_more&lnk=cricket1_more&nsrv1=inhome');return false;" title="Go to Cricket homepage" href="http://www.rediff.com/cricket">More Cricket stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2013/sep/05taj-rangin.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm"><img class="thumbimg" alt="Taj photos: Breathtaking images of the world's greatest wonder!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm">Taj photos: Breathtaking images of the world's greatest wonder!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-sofia-vergara-kardashians-are-forbes-highest-paid-tv-actresses/20130905.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/sep/05hollywood1.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-sofia-vergara-kardashians-are-forbes-highest-paid-tv-actresses/20130905.htm"><img class="thumbimg" alt="Sofia Vergara, Kardashians are Forbes' HIGHEST PAID TV actresses" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-sofia-vergara-kardashians-are-forbes-highest-paid-tv-actresses/20130905.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-sofia-vergara-kardashians-are-forbes-highest-paid-tv-actresses/20130905.htm">Sofia Vergara, Kardashians are Forbes' HIGHEST PAID TV actresses</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-pix-a-sneak-peek-into-the-first-episode-of-kbc-2013-tv/20130905.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/sep/05amitabh-sonu-nigam-kbc1.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-pix-a-sneak-peek-into-the-first-episode-of-kbc-2013-tv/20130905.htm"><img class="thumbimg" alt="PIX: A Sneak Peek into the FIRST episode of KBC 2013!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-pix-a-sneak-peek-into-the-first-episode-of-kbc-2013-tv/20130905.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-pix-a-sneak-peek-into-the-first-episode-of-kbc-2013-tv/20130905.htm">PIX: A Sneak Peek into the FIRST episode of KBC 2013!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-glamour-red-carpet-styles-that-show-off-curves/20130905.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2013/sep/05curvyceleb1.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-glamour-red-carpet-styles-that-show-off-curves/20130905.htm"><img class="thumbimg" alt="Sunny, Kim and more: Red carpet styles that show off curves!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-glamour-red-carpet-styles-that-show-off-curves/20130905.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-glamour-red-carpet-styles-that-show-off-curves/20130905.htm">Sunny, Kim and more: Red carpet styles that show off curves!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-slowdown-salaries-of-indian-ceos-have-doubleddoubled/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/04ceos1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-special-slowdown-salaries-of-indian-ceos-have-doubleddoubled/20130905.htm"><img class="thumbimg" alt="Slowdown? Salaries of Indian CEOs have DOUBLED!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-slowdown-salaries-of-indian-ceos-have-doubleddoubled/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-special-slowdown-salaries-of-indian-ceos-have-doubleddoubled/20130905.htm">Slowdown? Salaries of Indian CEOs have DOUBLED!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-10-indian-actors-who-would-make-a-great-batman/20130905.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/sep/04desi-actor-for-batman1.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-10-indian-actors-who-would-make-a-great-batman/20130905.htm"><img class="thumbimg" alt="10 Indian Actors Who Would Make A GREAT Batman" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-10-indian-actors-who-would-make-a-great-batman/20130905.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-10-indian-actors-who-would-make-a-great-batman/20130905.htm">10 Indian Actors Who Would Make A GREAT Batman</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/rupee-slump-costs-india-its-biggest-golf-tournament-avantha-group/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/sports/2013/sep/05rupee-golf.jpg" class="img" href="http://www.rediff.com/sports/report/rupee-slump-costs-india-its-biggest-golf-tournament-avantha-group/20130905.htm"><img class="thumbimg" alt="Rupee slump costs India its biggest golf tournament" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/rupee-slump-costs-india-its-biggest-golf-tournament-avantha-group/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/report/rupee-slump-costs-india-its-biggest-golf-tournament-avantha-group/20130905.htm">Rupee slump costs India its biggest golf tournament</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>
				<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-teachers-day-special-looking-at-salman-srk-kareenas-schools/20130905.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel=" http://im.rediff.com/200-300/movies/2013/sep/05teachers-day.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-teachers-day-special-looking-at-salman-srk-kareenas-schools/20130905.htm"><img class="thumbimg" alt=" Teacher's Day Special: Looking at Salman, SRK, Kareena's schools " src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-teachers-day-special-looking-at-salman-srk-kareenas-schools/20130905.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-teachers-day-special-looking-at-salman-srk-kareenas-schools/20130905.htm"> Teacher's Day Special: Looking at Salman, SRK, Kareena's schools </a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-career-7-habits-of-highly-successful-people/20130904.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2010/jun/07leaping.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-career-7-habits-of-highly-successful-people/20130904.htm"><img class="thumbimg" alt="7 habits of highly successful people" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-career-7-habits-of-highly-successful-people/20130904.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-career-7-habits-of-highly-successful-people/20130904.htm">7 habits of highly successful people</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-space-race-china-races-ahead-india-limps/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/04isro1.jpg" class="img" href="http://www.rediff.com/news/slide-show/slide-show-1-space-race-china-races-ahead-india-limps/20130905.htm"><img class="thumbimg" alt="Space race: China races ahead, India limps" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-space-race-china-races-ahead-india-limps/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/slide-show/slide-show-1-space-race-china-races-ahead-india-limps/20130905.htm">Space race: China races ahead, India limps</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/international-olympic-committee-rejects-indian-olympic-association-compromise-formula-chargesheeted-officials/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/sports/2013/sep/05ioa.jpg" class="img" href="http://www.rediff.com/sports/report/international-olympic-committee-rejects-indian-olympic-association-compromise-formula-chargesheeted-officials/20130905.htm"><img class="thumbimg" alt="India's Olympic ban to continue after IOC rejects IOA's clause" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/international-olympic-committee-rejects-indian-olympic-association-compromise-formula-chargesheeted-officials/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/report/international-olympic-committee-rejects-indian-olympic-association-compromise-formula-chargesheeted-officials/20130905.htm">India's Olympic ban to continue after IOC rejects IOA's clause</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>			</div>
		</div>
		<div id="column3" class="midcontainer">
								<div id="videobox_0" class="colbox">
				<div class="innerbox">
				<div class="sechead"><a href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;" title="More on Videos">Videos</a> &nbsp;<a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;"><img class="homesprite playbtn vmiddle" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				<div class="newimgthumb"><a href="http://ishare.rediff.com/video/entertainment/first-look-teaser-video-of-dhoom-3/8927006"  onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/first-look-teaser-video-of-dhoom-3/8927006___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;" rel="http://datastore01.rediff.com/h116-w174/thumb/56565C686468605965636E645E7064/bvnwrchvm90cmy8l.D.0.dhoom3c.jpg" class="img" title="First Look: Teaser video of DHOOM 3"><img alt="First Look: Teaser video of DHOOM 3" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" /></a></div>				<a href="http://ishare.rediff.com/video/entertainment/first-look-teaser-video-of-dhoom-3/8927006" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/first-look-teaser-video-of-dhoom-3/8927006___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;">First Look: Teaser video of DHOOM 3</a>
				<div class="newmorediv bold"><a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;" title="More on Videos">More Videos <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
									<div class="colbox">
				<div class="innerbox"><div class="sechead"><a href="http://money.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://money.rediff.com/___&cmp=money-box&lnk=money-box-head&nsrv1=inhome');return false;">MoneyWiz Live</a></div><iframe id="moneyiframe" name="moneyiframe" width="195" height="225" src="about:blank" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe><div class="newmorediv bold"><a href="http://money.rediff.com" title="More on stock market" onclick="trackURL('http://track.rediff.com/click?url=___http://money.rediff.com/___&cmp=money-box-more&lnk=money-box-more&nsrv1=inhome');return false;">More from Money <img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite morearrow1" /></a></div></div>
			</div>
									<div id="videobox_1" class="colbox">
				<div class="innerbox">
				<div class="sechead"><a href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;" title="More on Videos">Videos</a> &nbsp;<a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;"><img class="homesprite playbtn vmiddle" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				<div class="newimgthumb"><a href="http://ishare.rediff.com/video/entertainment/alia-bhatt-upset-about-her-leaked-pics/8923876"  onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/alia-bhatt-upset-about-her-leaked-pics/8923876___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;" rel="http://datastore05.rediff.com/h116-w174/thumb/64675D595A6A64616C626D5D2F3131/wby7p2w6d7uvzdtt.D.0.Alia-Bhatt-upset-with-leaked-pics-1.jpg" class="img" title="Alia Bhatt upset about her LEAKED pics"><img alt="Alia Bhatt upset about her LEAKED pics" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" /></a></div>				<a href="http://ishare.rediff.com/video/entertainment/alia-bhatt-upset-about-her-leaked-pics/8923876" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/alia-bhatt-upset-about-her-leaked-pics/8923876___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;">Alia Bhatt upset about her LEAKED pics</a>
				<div class="newmorediv bold"><a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;" title="More on Videos">More Videos <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
						<div id="pagebox_0" class="colbox">
				<div class="innerbox">
				<div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com___&cmp=pages&lnk=pages&nsrv1=inhome');return false;" title="More on Pages" href="http://pages.rediff.com">Pages</a></div>
								<div class="newimgthumb"><a href="http://pages.rediff.com/video/197983/6452199/girl-in-xerox-machine-video" onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com/video/197983/6452199/girl-in-xerox-machine-video___&cmp=pages&lnk=pages&nsrv1=inhome');return false;" rel="http://simg03.rcdn.in/image.php?pageid=197983&amp;type=pages" class="img" title="Comedy Videos"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="Comedy Videos" />/a></div>
								<a class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com/video/197983/6452199/girl-in-xerox-machine-video___&cmp=pages&lnk=pages&nsrv1=inhome');return false;" href="http://pages.rediff.com/video/197983/6452199/girl-in-xerox-machine-video">Comedy Videos Girl Trapped in Xerox Machine </a>
				<div class="div_second"><a href="http://pages.rediff.com/shuddh-desi-romance/1944354" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com/shuddh-desi-romance/1944354___&cmp=pages&lnk=pages&nsrv1=inhome');return false;">Shuddh Desi Romance : Movie Latest News and Photos</a></div>
				<div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com___&cmp=pages&lnk=pages&nsrv1=inhome');return false;" title="More on Pages" href="http://pages.rediff.com">More Pages <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
						<div class="colbox">
				<div class="innerbox">
				<div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Fzarabol.rediff.com%2F%23%21Wish-Your-Teacher%2F8912186___&cmp=zarabol&lnk=zarabol&nsrv1=inhome');return false;" href="http://zarabol.rediff.com/Wish-Your-Teacher/8912186">#Wish Your Teacher</a></div>
				<div class="newimgthumb"><a  href="http://zarabol.rediff.com/Wish-Your-Teacher/8912186" rel="http://datastore.rediff.com/h116-w174/thumb/605E6C5C6F626C606A627572/7hicsdnfx5e98pf3.D.0.Wish-Your-Teacher.jpg" class="img" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Fzarabol.rediff.com%2F%23%21Wish-Your-Teacher%2F8912186___&cmp=zarabol&lnk=zarabol&nsrv1=inhome');return false;"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="Wish Your Teacher"  /></a></div>
				<div class="newmorediv bold"><a href="http://zarabol.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://zarabol.rediff.com___&cmp=zarabol&lnk=zarabol&nsrv1=inhome');return false;" title="More on ZaraBol">More ZaraBol stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
									<div id="videobox_2" class="colbox">
				<div class="innerbox">
				<div class="sechead"><a href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;" title="More on Videos">Videos</a> &nbsp;<a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;"><img class="homesprite playbtn vmiddle" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				<div class="newimgthumb"><a href="http://ishare.rediff.com/video/entertainment/the-many-avatars-of-anushka-sharma/8925335"  onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/the-many-avatars-of-anushka-sharma/8925335___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;" rel="http://datastore04.rediff.com/h116-w174/thumb/56565C686468605965636E645E7064/htpmihf3k7b9jepb.D.0.anuhot.jpg" class="img" title="The many avatars of Anushka Sharma"><img alt="The many avatars of Anushka Sharma" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" /></a></div>				<a href="http://ishare.rediff.com/video/entertainment/the-many-avatars-of-anushka-sharma/8925335" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/the-many-avatars-of-anushka-sharma/8925335___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;">The many avatars of Anushka Sharma</a>
				<div class="newmorediv bold"><a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;" title="More on Videos">More Videos <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
									<div class="colbox">
				<div class="innerbox">
				<div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Fzarabol.rediff.com%2F%23%21Will-Nokia-Survive-In-India%2F8914333___&cmp=zarabol1&lnk=zarabol1&nsrv1=inhome');return false;" href="http://zarabol.rediff.com/Will-Nokia-Survive-In-India/8914333">#Will Nokia Survive In India?</a></div>
				<div class="newimgthumb"><a  href="http://zarabol.rediff.com/Will-Nokia-Survive-In-India/8914333" rel="http://datastore.rediff.com/h116-w174/thumb/605E6C5C6F626C606A627572/m7cdr2udevrpysx1.D.0.Will-Nokia-Survive-In-India.jpg" class="img" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Fzarabol.rediff.com%2F%23%21Will-Nokia-Survive-In-India%2F8914333___&cmp=zarabol1&lnk=zarabol1&nsrv1=inhome');return false;"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="Will Nokia Survive In India?"  /></a></div>
				<div class="newmorediv bold"><a href="http://zarabol.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://zarabol.rediff.com___&cmp=zarabol1&lnk=zarabol1&nsrv1=inhome');return false;" title="More on ZaraBol">More ZaraBol stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
									<div id="realtimebox"  class="colbox">
			<div class="innerbox">
				<div class="sechead"><a href="http://realtime.rediff.com/topnews/india" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/topnews/india___&cmp=rt-box-head&lnk=rt-box-head&nsrv1=inhome');return false;">Realtime News</a></div>
				<div class="newimgthumb"><a href="http://realtime.rediff.com/news/india/316-Mln-New-Mobile-Subscribers-Added-291-Mln-From-Rural-India-Alone-June-Stats/c6aa4d0d5e5c1bd6" rel="http://n01.rcdn.in/thumbnail2/dab35af223515110.jpg" class="img" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/news/india/316-Mln-New-Mobile-Subscribers-Added-291-Mln-From-Rural-India-Alone-June-Stats/c6aa4d0d5e5c1bd6___&cmp=rt-box-stimg&lnk=rt-box-stimg&nsrv1=inhome');return false;"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="3.16 Mln New Mobile Subscribers Added, 2.91 Mln From Rural India Alone! [June Stats]" /></a></div>				<a href="http://realtime.rediff.com/news/india/316-Mln-New-Mobile-Subscribers-Added-291-Mln-From-Rural-India-Alone-June-Stats/c6aa4d0d5e5c1bd6" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/news/india/316-Mln-New-Mobile-Subscribers-Added-291-Mln-From-Rural-India-Alone-June-Stats/c6aa4d0d5e5c1bd6___&cmp=rt-box-sttxt&lnk=rt-box-sttxt&nsrv1=inhome');return false;">3.16 Mln New Mobile Subscribers Added, 2.91 Mln From Rural India Alone! [June Stats]</a>
				<div class="newmorediv bold"><a href="http://realtime.rediff.com/topnews/india" title="More Realtime News" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/topnews/india___&cmp=rt-box-more&lnk=rt-box-more&nsrv1=inhome');return false;">More Realtime News <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
			</div>
			</div>
						<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
						<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-food-recipe-halloumi-skewers-with-cherry-tomatoes-and-onions/20130905.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2013/sep/05recipe-halloumi-skewers-with-cherry-tomatoes-and-onions.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-food-recipe-halloumi-skewers-with-cherry-tomatoes-and-onions/20130905.htm"><img class="thumbimg" alt="Recipe: Halloumi skewers with cherry tomatoes and onions" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
						<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-food-recipe-halloumi-skewers-with-cherry-tomatoes-and-onions/20130905.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-food-recipe-halloumi-skewers-with-cherry-tomatoes-and-onions/20130905.htm">Recipe: Halloumi skewers with cherry tomatoes and onions</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
						<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-raghuram-rajan-is-a-hit-on-first-day-can-he-sustain-it/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/05raghuramrajan1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-raghuram-rajan-is-a-hit-on-first-day-can-he-sustain-it/20130905.htm"><img class="thumbimg" alt="Raghuram Rajan is a hit on first day, can he sustain it?" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
						<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-raghuram-rajan-is-a-hit-on-first-day-can-he-sustain-it/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-raghuram-rajan-is-a-hit-on-first-day-can-he-sustain-it/20130905.htm">Raghuram Rajan is a hit on first day, can he sustain it?</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
						<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-salman-shah-rukh-ranbir-bollywoods-rs-100-crore-club-men/20130904.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/sep/03male-superstars-in-100-crore-club1.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-salman-shah-rukh-ranbir-bollywoods-rs-100-crore-club-men/20130904.htm"><img class="thumbimg" alt="Salman, Shah Rukh, Ranbir: Bollywood's Rs 100 crore club men" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
						<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-salman-shah-rukh-ranbir-bollywoods-rs-100-crore-club-men/20130904.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-salman-shah-rukh-ranbir-bollywoods-rs-100-crore-club-men/20130904.htm">Salman, Shah Rukh, Ranbir: Bollywood's Rs 100 crore club men</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
						<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-images-india-among-worlds-biggest-stakeholders-in-us-economy/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/05debt1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-special-images-india-among-worlds-biggest-stakeholders-in-us-economy/20130905.htm"><img class="thumbimg" alt="IMAGES: India among world's biggest stakeholders in US economy" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
						<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-images-india-among-worlds-biggest-stakeholders-in-us-economy/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-special-images-india-among-worlds-biggest-stakeholders-in-us-economy/20130905.htm">IMAGES: India among world's biggest stakeholders in US economy</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>
		</div>
		<div id="rightcontainer" class="rightcontainer">
			<div class="adcontainer"><div id="div_advt_right"></div></div>
			<span class="clear"></span><span class="ht5"></span>
			<div id="column4"  class="wd50 floatL">
				<div id="shbox_0" class="colboxR"></div>
				<div id="bkbox_0" class="colboxR"></div>
								<div id="hostbox_0" class="colboxR">
					<div class="innerbox"><div class="sechead"><a href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome-promo___&cmp=host&lnk=inhome-promo&nsrv1=host">Rediffmail Pro</a></div><div class="newimgthumb"><a rel="http://hosting.rediff.com/rediffmailpro/pix/ad-componets/20130901122356rhome-Offer.gif" class="img" title="Rediffmail Pro" href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome-promo___&cmp=host&lnk=inhome-promo&nsrv1=host"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="Rediffmail Pro" /></a></div><a href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome-promo___&cmp=host&lnk=inhome-promo&nsrv1=host" class="black" ><p></p><span class="ht10"></span><p class="alignR"><a class="sm1 bold morelikecolor" href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome-promo___&cmp=host&lnk=inhome-promo&nsrv1=host">Check it out now &gt;</a></p></div>
				</div>
								<div id="shbox_2" class="colboxR"></div>
				<div id="spromobox_0" class="colboxR"></div>
				<div id="shbox_5" class="colboxR"></div>
				<div id="bkbox_2" class="colboxR"></div>
				<div id="shbox_6" class="colboxR"></div>
				<div id="shbox_8" class="colboxR"></div>
				<div id="shbox_10" class="colboxR"></div>
				<div id="shbox_12" class="colboxR"></div>
				<div id="shbox_14" class="colboxR"></div>
				<div id="spromobox_1" class="colboxR"></div>
			</div>
			<div id="column5" class="wd50 floatL">
				<div id="shbox_1" class="colboxR"></div>
				<div id="bkbox_1" class="colboxR"></div>
				<div id="shbox_3" class="colboxR"></div>
				<div id="shbox_4" class="colboxR"></div>
				<div id="bkbox_3" class="colboxR"></div>
				<div id="shbox_7" class="colboxR"></div>
				<div id="bkbox_4" class="colboxR"></div>
				<div id="spromobox_2" class="colboxR"></div>
				<div id="shbox_9" class="colboxR"></div>
				<div id="shbox_11" class="colboxR"></div>
				<div id="shbox_13" class="colboxR"></div>
				<div id="shbox_15" class="colboxR"></div>
			</div>
		</div>
		<span class="clear"></span><span class="ht10"></span>
		<div class="n_tabsul">
			<div class="n_tabsel">HOME</div>
			<a href="http://www.rediff.com/news" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_nav_bot&lnk=news1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">NEWS</div></a>
			<a href="http://www.rediff.com/business" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=bus1_nav_bot&lnk=bus1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">BUSINESS</div></a>
			<a href="http://www.rediff.com/movies" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=mov1_nav_bot&lnk=mov1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">MOVIES</div></a>
			<a href="http://www.rediff.com/sports" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_nav_bot&lnk=sports1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">SPORTS</div></a>
			<a href="http://www.rediff.com/cricket" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket___&cmp=cric1_nav_bot&lnk=cric1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">CRICKET</div></a>
			<a href="http://www.rediff.com/getahead" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=get1_nav_bot&lnk=get1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">GET AHEAD</div></a>
			<a href="http://www.rediff.com/moreservices.html" title="More services"  onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/moreservices.html___&cmp=moreservices&lnk=moreservices&nsrv1=inhome');return false;"><div class="n_tabnormal">MORE SERVICES</div></a>
		</div>
		<span class="clear"></span><span class="ht10"></span>
	</div><!-- maincontainer ends -->
	</div>
	<!-- new design ends -->
	<div id="div_alldata">
		<div id="ul_shop"><a id="sh_a_0" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=1&prodid=11813124">Tupperware Family Lunch Set with 1 Free Bottle</a><br /><a id="sh_a_1" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=2&prodid=11888060">Peter England Cotton Formal Shirt (Black)</a><br /><a id="sh_a_2" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=3&prodid=11866459">Mini LED Cinema Projector with Remote & Tripod Stand</a><br /><a id="sh_a_3" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=4&prodid=11895410">Multipurpose E Table with Free USB Optical Mouse</a><br /><a id="sh_a_4" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=5&prodid=11925133">Lenovo K900</a><br /><a id="sh_a_5" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=6&prodid=11897986">Lotto Traunt White Blue Shoes</a><br /><a id="sh_a_6" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=7&prodid=11844116">Kriaa Anmol Set of Anarkali & Short Kurti</a><br /><a id="sh_a_7" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=8&prodid=11746186">Lomani Deodorants (Set of 2)</a><br /><a id="sh_a_8" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=9&prodid=11927334">Seagate Expansion 1TB USB3.0 2.0 External HDD</a><br /><a id="sh_a_9" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=10&prodid=11923215">Brown Canvas Foldable Wardrobe</a><br /><a id="sh_a_10" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=11&prodid=11275529">Acme Fitness Rotating Push Up Bar</a><br /><a id="sh_a_11" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=12&prodid=11749316">Venus Electronics Digital Bathroom Weighing Scale</a><br /><a id="sh_a_12" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=13&prodid=11847661">Sukkhi Rodium Plated Necklace Set</a><br /><a id="sh_a_13" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=14&prodid=11612232">Simba Ecoiffier  Abrick Air Plane</a><br /><a id="sh_a_14" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=15&prodid=11917714">Envie Charger with 4 Rechargeable AA Batteries 2100 MAH</a><br /><a id="sh_a_15" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=16&prodid=11772338">French Republic Plain White Shirt</a><br /><a id="sh_a_16" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=17&prodid=11912319">Ambrane Power Bank P-10 Plus</a><br /><a id="sh_a_17" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=18&prodid=11487129">Intex Velvet Premium 5 In 1 Sofa Lounge Air Bed</a><br /><a id="sh_a_18" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=19&prodid=11835031">Full Face Helmet (ISI Marked)</a><br /><a id="sh_a_19" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=20&prodid=11682525">Numero Uno Men's Watch</a><br /></div>
		<div id="ul_books"><a id="bk_a_0" href="http://books.rediff.com/book?bksrno=1">The Secret Daily Teachings</a><br /><a id="bk_a_1" href="http://books.rediff.com/book?bksrno=2">Killing Us Softly</a><br /><a id="bk_a_2" href="http://books.rediff.com/book?bksrno=3">CAT Online Test Series</a><br /><a id="bk_a_3" href="http://books.rediff.com/book?bksrno=4">The Superstar Syndrome</a><br /><a id="bk_a_4" href="http://books.rediff.com/book?bksrno=5">What Works : Success in Stressful Times</a><br /><a id="bk_a_5" href="http://books.rediff.com/book?bksrno=6">Study Guide for NTSE</a><br /><a id="bk_a_6" href="http://books.rediff.com/book?bksrno=7">Idea Man</a><br /><a id="bk_a_7" href="http://books.rediff.com/book?bksrno=8">Study Guide IBPS CWE-RRB Officers</a><br /><a id="bk_a_8" href="http://books.rediff.com/book?bksrno=9">Harvey Walden's No Excuses!: Fitness Workout</a><br /><a id="bk_a_9" href="http://books.rediff.com/book?bksrno=10">Nigellissima: Instant Italian Inspiration</a><br /></div>
		<div id="ul_shpromo"><a id="sprmo_a_0" href="http://shopping.rediff.com/stores/7235?sc_cid=inhome_watch">Watch it</a><br /><a id="sprmo_a_1" href="http://shopping.rediff.com/stores/7058?sc_cid=inhome_Menslifestyle">Mens Branded Apparel</a><br /><a id="sprmo_a_2" href="http://shopping.rediff.com/categories/anarkali-suits/cat-10168/format-0?sc_cid=inhome_Anarkalisuits">Anarkali Dresses</a><br /><a id="sprmo_a_3" href="http://shopping.rediff.com/categories/electronics/cat-453?sc_cid=inhome_electronics">Electronics Sale</a><br /><a id="sprmo_a_4" href="http://shopping.rediff.com/stores/7020?sc_cid=inhome_mobile">Mobile Mania</a><br /><a id="sprmo_a_5" href="http://shopping.rediff.com/stores/7085?sc_cid=inhome_computers">Computers and IT</a><br /></div>
	</div>

	<div id="mobtip" class="bubbletip"><div class="homesprite topl"></div><div class="topmid"></div><div class="homesprite topr"></div><div class="clear"></div><div class="bubblecontent"><center>Using your mobile's internet browser<br />go to:&nbsp; <span class="f14"><b>m.rediff.com</b></span></center></div><div class="clear"></div><div class="homesprite botl"></div><div class="botmid"></div><div class="homesprite botr"></div><div class="homesprite botarr1"></div></div>
	<div id="div_mailsignin_ad" class="div_mailsignin_ad">
	<div id="div_mailsignin_inner" class="mailAdinner">
	<div id="div_rediffmail" ><span class="ht5"></span><form onsubmit="return chkLogin();" method="post" action="https://mail.rediff.com/cgi-bin/login.cgi" name="loginform" class="frmlogin"><div class="floatR"><a href="javascript:hideDiv1('trans_div');hideDiv1('div_mailsignin_ad');hideDiv1('frame_ad_hm_maillogin');" class="close" title="Close"><b>X</b></a></div><h2 class="homesprite nglogo1">&nbsp;</h2><span class="clear"></span><span class="ht10"></span><div><b>Username</b><br /><input id="login1" type="text" value="" class="uname" name="login" maxlength="30" style="width:200px;" tabindex="1" /></div><span class="clear ht10"></span>
	<div><b>Password</b>&nbsp; &nbsp; <a class="sm1" href="http://register.rediff.com/utilities/newforgot/index.php?FormName=showlogin" target="_blank">Forgot Password?</a><span class="ht2"></span><input type="password" value="" name="passwd"  style="width:200px;" tabindex="2" /></div><span class="ht5"></span><div><input type="checkbox" value="1" id="remember" name="remember" checked="checked" class="vmiddle" /><span class="f10">Be signed in (Uncheck if on shared computer)</span><span class="ht10"></span><input type="submit" title="Sign in" value="  Go  " class="vmiddle" tabindex="3" />&nbsp; &nbsp;<img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite lock vmiddle" alt="Secured login" /><span class="sm1">&nbsp; Secured login</span><input type="checkbox" name="seclogin" class="hide" checked  /><span class="ht10"></span><span class="sm1 grey2">For Rediffmail NG Mobile, SMS "MAIL" to 57333</span></div><input type="hidden" name="FormName" value="existing"/></form><span class="ht15"></span><div class="div_loginpromo"><div class="div_loginpromoL">Do not have a Rediffmail ID?<span class="clear ht2"></span><a href="http://register.rediff.com/register/register.php?FormName=user_details"><u>Create a new account</u></a></div><div class="floatL bold"><div class="tborder"></div>&nbsp;OR<div class="bborder"></div></div><div class="div_loginpromoR">Want your own professional ID?<span class="clear ht2"></span><a href="http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=lgn" onclick="trackURL('http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=lgn___&cmp=lgn&lnk=lgn&nsrv1=host');return false;" ><u>Get a Rediffmail Pro account</u></a></div><span class=clear></span></div></div>
	<iframe id="frame_ad_hm_maillogin" src="about:blank" width="320" height="310" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" class="maillogin_ad hide"></iframe>
	</div>
	</div>
	<img id="tabtrack" src="" class="hide" width="1" height="1" border="0" />
	<div id="div_mypagelogin" class="div_mypagelogin"><div id="div_mypagelogin_inner" class="mypageAdinner"><div id="div_signin"></div><iframe id="frame_ad_hm_mypagelogin" src="about:blank" width="320" height="305" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" class="maillogin_ad  hide"></iframe></div></div>
	<div id="shoptippop" class="divshoptippop"><div class="homesprite poptop"></div><div id="assurancecopy" class="popmid"></div><div class="homesprite popbottom"></div></div>
	<div class='footerhome' >&#169; 2013 <a href="http://ia.rediff.com/" title="Rediff.com US" >Rediff.com US</a> - <a id="mobicon" href="javascript:;;" onmouseover="findPosXY('mobicon','mobtip',-150,-65);" onmouseout="hideDiv1('mobtip');" >On Mobile</a> - <a href="http://investor.rediff.com/">Investors</a> - <a href="http://clients.rediff.com/rediff_advertisewithus/contact.htm">Advertise</a> - <a href="http://www.rediff.com/disclaim.htm">Disclaimer</a> - <a href="http://www.rediff.com/w3c/policy.html">Privacy</a> - <a href="http://careers.rediff.com/jobs/">Careers</a> - <a href="http://www.rediff.com/sitemap.xml"  title="Sitemap.xml">Sitemap</a> - <a href="http://mypage.rediff.com/feedback">Feedback</a> - <a href="http://www.rediff.com/terms.html">Terms of use</a></div>

<script language="JavaScript" type="text/javascript">
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3 9(a){2 b=e.f.u(\';\');2 d=a+"=";w(2 i=0;i<b.4;i++){2 c=b[i];y(c.z(0)==\' \')c=c.g(1,c.4);h(c.A(d)==0)j c.g(d.4,c.4)}j 7}3 5(n,v,x,p,d){2 a=(v==7||v==\'\')?(((k l).m())*8)+o.B(o.C()*8):D(v);e.f=n+"="+a+((x)?"; E="+x:"")+"; F=/; G=.H.I;"}3 q(a){2 b=k l();b.J(b.m()+(-1*K*r*r*8));5(a,"",b)}3 s(){2 a=9(\'6\');2 b="L, M-N-O P:t:t Q";h((a!=7)&&(a!=\'\')){q(\'6\');5(\'6\',a,b)}R{5(\'6\',a,b)}}s();',54,54,'||var|function|length|crtCk|RuW|null|1000|rdCk|||||document|cookie|substring|if||return|new|Date|getTime||Math||delCk|60|chkUVCk|59|split||for||while|charAt|indexOf|round|random|escape|expires|path|domain|rediff|com|setTime|24|Wed|31|Dec|2031|23|GMT|else'.split('|'),0,{}))


OAS_loc=getcookie('RLOC');
if (!(OAS_loc))
{
	   document.write("<table cellspacing='0' cellpadding='0' border='0'><tr><td><img src='http://loc.rediff.com/cgi-bin/loc/setup/blank.gif' border='0' hspace='0' vspace='0' alt='' /></td></tr></table>");
}

</script>


<script language="JavaScript" type="text/javascript">
function strpos( haystack, needle, offset){
var i = (haystack+'').indexOf( needle, offset );
return i===-1 ? false : i;
}

function trim(s){
s = s.replace(/^\s*/,'').replace(/\s*$/, '');
return s;
}


function signin()
{

	if (typeof(r_controller) == "undefined")
	{
		r_controller	= "";
	}
	if (typeof(r_action) == "undefined")
	{
		r_action		= "";
	}
	document.getElementById('div_signin').innerHTML='<form method="post" id="loginform1" name="loginform1" action="'+org_domain+'/login/dologin" onsubmit="return validateloginform();"><div><div class="floatR"><span title="Close" class="close" onclick="hideDiv1(\'div_mypagelogin\');hideDiv1(\'trans_div\');hideDiv1(\'frame_ad_hm_mypagelogin\');"><b>X</b></span>&nbsp;</div><b>Already a User? Sign in!</b></div><span class="clear ht10"></span><div class="fontsm">Sign-in to see what your friends are upto and make friends with people with similar interests.</div><span class="clear ht15"></span><div class="col1">Your email ID</div><div class="col2"><input type="text" name="id" id="c_uname"  class="txtbox" tabindex="1" /></div><span class="clear ht10"></span><div class="col1">Password<br /><a href="javascript:forgotpass()">(Forgot?)</a></div><div class="col2"><span class="ht5"></span><input type="password" name="num" id="c_pass"  class="txtbox" tabindex="2" /></div><span class="clear ht2"></span><div class="besign"><input type="checkbox" name="remember" id="remember" value="1" checked="checked" class=vmiddle /><span class="f10">Be signed in (Uncheck if on shared computer)</span></div><span class="clear ht10"></span><div class="col1">&nbsp;</div><div class="col2"><input type="hidden" name="r_controller" id="id_r_controller" value="'+r_controller+'" /><input type="hidden" name="r_action" id="id_r_action" value="'+r_action+'" /><input type="hidden" name="login" /><input type="hidden" name="passwd" /><input value="existing" name="FormName" type="hidden" /><input type="submit" value="Go"  id="btn_login" class="gobtn vmiddle" tabindex="3" /> <img id="waitimg1" src='+imgpath+'/blank.gif class="waitimg" /></div><span class="clear ht15"></span><div class="div_loginpromo"><div class="div_loginpromoL">New user?<span class="clear ht2"></span><a href="http://register.rediff.com/register/register.php?FormName=user_details"><u>Create a new Rediffmail account</u></a></div><div class="floatL bold"><div class="tborder"></div>&nbsp;OR<div class="bborder"></div></div><div class="div_loginpromoR">Want your own professional ID?<span class="clear ht2"></span><a href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=lgn___&cmp=lgn&lnk=lgn&nsrv1=host"><u>Get a Rediffmail Pro account</u></a></div><span class=clear></span></div></form>'
	showDiv1('trans_div');
	showDiv1('div_mypagelogin');
	document.getElementById('tabtrack').src = "http://metric.ind.rediff.com/www.rediff.com/xt/?rkey="+Math.floor(Math.random() * 1000000);
	if(document.getElementById("frame_ad_hm_mypagelogin")){document.getElementById("frame_ad_hm_mypagelogin").src = "http://imworld.rediff.com/worldrediff/pix/ind_home_mailLoginAd.html";}
}

var uname="";
function validateloginform()
{
	uname	= document.getElementById("c_uname").value;
	var pass	= document.getElementById("c_pass").value;
	var remem	= document.getElementById("remember");
	remember = "";
	if (remem.checked)
	{
		remember = "On";
	}

	if ( uname == "" )
	{
		document.getElementById("c_uname").focus();
		alert("Please enter your email ID");
		return false;
	}
	if ( pass == "" )
	{
		document.getElementById("c_pass").focus();
		alert("Please enter a password");
		return false;
	}

	if(typeof(homepage) != "undefined")
	{
		if((strpos(uname,"@") == false || strpos(uname,"@rediffmail.com") != false) )
		{

			document.getElementById("loginform1").login.value = uname;
			document.getElementById("loginform1").passwd.value = pass;
			document.getElementById("loginform1").action = "https://mail.rediff.com/cgi-bin/login.cgi";
			return true;
		}
	}
	var url		=  org_domain+"/login/dologin";
	var postdata	= "id="+uname+"&num="+pass+"&format=xml";
	if (remember == "On")
	{
		postdata += "&remember=On";
	}
	return true;
}

function forgotpass()
{
	window.open("http://login.rediff.com/cgi-bin/subs/passwd_remind.cgi?FormName=showlogin",'forgetPswdWinRediff','toolbar=no,directories=no,resize=yes,menubar=no,location=no,scrollbars=yes,width=490,height=480,maximize=null,top=70,left=80');
}

function submitSearch()
{
  var srchword = trim(document.getElementById('srchword').value) ;
  if(srchword=="")
  {
	document.getElementById('srchword').focus();
	alert("Please enter search keyword");
	return false;
  }
  srchword = srchword.replace(/\s/g,'-').replace(/\//g,' ');
  var srchlink = "http://realtime.rediff.com/news/"+escape(srchword)+"?src=rediff_home_search";
  //document.location.href = srchlink;
  document.location.href = "http://track.rediff.com/click?url=___"+srchlink+"___&cmp=rt_srch&lnk=rt_srch&nsrv1=inhome";
  return false;
}

function PasswdRemindWin()
{window.open("http://register.rediff.com/utilities/newforgot/index.php?FormName=showlogin","win1","toolbar=no,directories=no,resize=yes,menubar=no,location=no,scrollbars=yes,width=670,height=480,maximize=null,top=70,left=80");}
_d = document;

function chkLogin()
{if(_d.loginform.login.value.replace(/ /g,"")==""&&_d.loginform.passwd.value=="")
{alert("Please enter valid Username and Password");_d.loginform.login.value=""
_d.loginform.login.focus();return false;}
if(_d.loginform.login.value.replace(/ /g,"")=="")
{alert("Please enter valid Username");_d.loginform.login.value=""
_d.loginform.login.focus();return false;}
if(_d.loginform.passwd.value=="")
{alert("Please enter valid Password");_d.loginform.passwd.value=""
_d.loginform.passwd.focus();return false;}
var seclogin=_d.loginform.seclogin;if(seclogin.checked==true)
{_d.loginform.action="https://mail.rediff.com/cgi-bin/login.cgi";}
else
{_d.loginform.action="http://mail.rediff.com/cgi-bin/login.cgi";}
return true;}

</script>
</div><!-- homewrapper ends -->

<script type="text/javascript" src="http://imworld.rediff.com/worldrediff/js_2_5/ws-global_hm_1.js"></script>
<script type="text/javascript">
Suggestionr.initr('sugbox','sug','srchword',true);
window.open("http://im.rediff.com/uim/ads/ind-home-pop.htm","popunder","top=60,left=80,toolbars=no,maximize=no,resize=no,width=640,height=480,location=no,directories=no,scrollbars=no");
parent.window.focus();
window.focus();


sn = 0
shopArr[sn]=new Array("33","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/4654/9/90june2013dm._tupperware-family-lunch-set-1-best-1-executive-1-bottle-free.jpg","","2450","1640","1","11813124","tiffin-carriers","8839","Tiffin Carriers","267");
sn = 1
shopArr[sn]=new Array("0","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/4928/s/shirt_001_new_1z._peter-england-black-english-cotton-formal-shirt-rsp3142.JPG","","699","699","2","11888060","formal-shirts-for-men","8076","Formal Shirts For Men","589");
sn = 2
shopArr[sn]=new Array("25","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/15634/l/led-cinema-projector-with-remote._mini-led-cinema-projector-with-remote-and-tripod-stand-makes-60inch-screen.jpg","","7999","5999","3","11866459","projectors","9528","Projectors","10");
sn = 3
shopArr[sn]=new Array("61","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16120/e/etable._multipurpose-e-table-get-free-usb-optical-mouse.jpg","","1800","699","4","11895410","other-laptop-accessories","7657","Other Laptop Accessories","514");
sn = 4
shopArr[sn]=new Array("1","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16075/l/lenovo-k900new._lenovo-k900.jpg","","24999","24799","5","11925133","other-mobile-phones","8373","Other Mobile Phones","363");
sn = 5
shopArr[sn]=new Array("71","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/15564/a/ar2132-2._lotto-traunt-white-blue-shoes.jpg","","3499","999","6","11897986","sports-shoes","243","Sports Shoes","206");
sn = 6
shopArr[sn]=new Array("50","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/8838/k/Kr_11844116_new._kriaa-anmol-set-of-anarkali-and-short-kurti-kckt272-.jpg","","1100","549","7","11844116","kurtis","8096","Kurtis","770");
sn = 7
shopArr[sn]=new Array("57","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/11150/l/lomanideodorant._set-of-2-lomani-deodorants.jpg","","699","299","8","11746186","deodorants-for-men","8589","Deodorants For Men","381");
sn = 8
shopArr[sn]=new Array("46","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16246/s/Seagate1._seagate-expansion1tb-usb3-0-2-0-external-harddrive.jpg","","9000","4850","9","11927334","1-tb---1.5-tb","7715","1 TB - 1.5 TB","31");
sn = 9
shopArr[sn]=new Array("45","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/14714/w/wordrobf._brown-canvas-foldable-wardrobe.jpg","","3999","2199","10","11923215","living-room","715","Living Room","155");
sn = 10
shopArr[sn]=new Array("20","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/13239/r/rotatingpushupbar._acme-fitness-rotating-push-up-bar.jpg","","800","640","11","11275529","ab-shaper,-cruncher","8612","Ab Shaper, Cruncher","53");
sn = 11
shopArr[sn]=new Array("53","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/13651/1/1989_2._venus-electronics-digital-bathroom-weighing-scale-with-printed-glass-square.jpg","","899","425","12","11749316","weighing-machines","7955","Weighing Machines","190");
sn = 12
shopArr[sn]=new Array("51","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16495/s/Su_11847661._sukkhi-rodium-plated-necklace-set.jpg","","1098","535","13","11847661","necklace","8743","Necklace","1274");
sn = 13
shopArr[sn]=new Array("10","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/14627/s/Si_11612232._simba-ecoiffier-abrick-air-plane.jpg","","1999","1799","14","11612232","other-toys","1377","Other Toys","453");
sn = 14
shopArr[sn]=new Array("33","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16306/b/bat_ry_new._envie-4-in-1-aa-aaa-quick-charger-with-4-aa-rechargeable-batteries.jpg","","995","669","15","11917714","camera-batteries-amp-chargers","8034","Camera Batteries & Chargers","464");
sn = 15
shopArr[sn]=new Array("42","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16369/7/7_21IF2Y001-FS2-1-40_Fr._french-republic-plain-white-shirt-21if2y001-fs2-1-40.jpg","","599","349","16","11772338","formal-shirts-for-men","8076","Formal Shirts For Men","589");
sn = 16
shopArr[sn]=new Array("50","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16619/p/p10plus-9._ambrane-power-bank-p-10-plus-white-.jpg","","1990","990","17","11912319","power-banks","10228","Power Banks","18");
sn = 17
shopArr[sn]=new Array("63","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/936/i/intexchair._intex-velvet-premium-5in1-sofa-bed-lounge-air-bed.jpg","","7995","2995","18","11487129","bedroom","713","Bedroom","131");
sn = 18
shopArr[sn]=new Array("52","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16101/e/eshan-oyes-black-full-face-helmet-blue-graphics._stylish-and-durable-black-full-face-helmet-with-blue-graphics-isi-marked-.jpg","","765","369","19","11835031","bike-accessories-and-apparels","9928","Bike Accessories And Apparels","526");
sn = 19
shopArr[sn]=new Array("87","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16367/w/Watch000001._numero-uno-men-watches-ai-w-007.JPG","","2999","399","20","11682525","leather-watch-for-men","9640","Leather Watch For Men","100");

bn = 0
booksArr[bn]=new Array("9781471130618","","599","480","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/18/9781471130618.jpg","20","the-secret-daily-teachings","Live your life in accordance with the natural laws of the Universe","1");
bn = 1
booksArr[bn]=new Array("9780007532964","","350","280","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/64/9780007532964.jpg","20","killing-us-softly","How Alternative Medicine can actually be harmful to our health","2");
bn = 2
booksArr[bn]=new Array("9781259027239","","999","700","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/39/9781259027239.jpg","30","cat-online-test-series","Based on the latest pattern of the CAT Online examination","3");
bn = 3
booksArr[bn]=new Array("9788184004045","","399","320","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/45/9788184004045.jpg","20","the-superstar-syndrome","The ultimate success bible based on the lives of over 80 well-known people","4");
bn = 4
booksArr[bn]=new Array("9780007203789","","350","263","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/89/9780007203789.jpg","25","what-works-:-success-in-stressful-times","Examples ranging from Ikea to the slums of Mumbai","5");
bn = 5
booksArr[bn]=new Array("9789382961772","","570","456","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/72/9789382961772.jpg","20","study-guide-for-ntse","New chapters on Syllogisms, Cryptography, Data Sufficiency, Satement and Conclusion","6");
bn = 6
booksArr[bn]=new Array("9780241953716","","450","338","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/16/9780241953716.jpg","25","idea-man","A Memoir by the Co-founder of Microsoft, Paul Allen","7");
bn = 7
booksArr[bn]=new Array("9788183556491","","320","256","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/91/9788183556491.jpg","20","study-guide-ibps-cwe-rrb-officers","","8");
bn = 8
booksArr[bn]=new Array("9781594867460","","495","372","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/60/9781594867460.jpg","25","harvey-walden's-no-excuses!:-fitness-workout","Effective boot camp style methods to achieve the shapelier, fitter, healthier body","9");
bn = 9
booksArr[bn]=new Array("9780701187330","","1299","910","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/30/9780701187330.jpg","30","nigellissima:-instant-italian-inspiration","Bring the spirit of Italy into the kitchen and onto the plate","10");

shp = 0
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Be on time. Everytime.</strong><br><span style=\"color:#58019f\">Trendy Watches for Men and Women</span></div>","http://imshopping.rediff.com/shopping/homepix/rediff_hp_watch.gif");
shp = 1
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Men's Branded Apparel and Accessories</strong><br><span style=\"color:#58019f\">Jeans, Cargoes, T-shirts, Sunglasses and more!</span></div>","http://imshopping.rediff.com/shopping/homepix/rediff_home_mensLS_130513.gif");
shp = 2
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Finest collection of Anarkali Dresses</strong><br><span style=\"color:#58019f\">Shop Now!</span></div>","http://imshopping.rediff.com/shopping/homepix/rediff_home_anarkali_120813.jpg");
shp = 3
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Electronics Sale</strong><br><span style=\"color:#58019f\">LED TVs, Home Theaters and more</span></div>","http://imshopping.rediff.com/shopping/homepix/ele_banner_01_03_120813.gif");
shp = 4
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Mobile Mania</strong><br><span style=\"color:#58019f\">All the latest Smartphones. With amazing discounts!</span></div>","http://imshopping.rediff.com/shopping/homepix/mobile_store_banner_01_03_120813.gif");
shp = 5
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Computers and IT</strong><br><span style=\"color:#58019f\">Huge range of Tablets, Laptops, Pen Drives and Peripherals</span></div>","http://imshopping.rediff.com/shopping/homepix/it_computers_banner_280813.gif");

if(document.getElementById('div_alldata')){document.getElementById('div_alldata').style.display = "none";}
function trackURL(url)
{
	if(navigator.userAgent.toLowerCase().indexOf('msie') != -1)
	{
		var referLink = document.createElement('a');
		referLink.href = url;document.body.appendChild(referLink);
		referLink.click();
	}
	else
	{
		document.location.href = url;
	}
}
function findPosXY(tblid,tblid1,x,y){var curleft = 0;var curtop = 0;var obj = document.getElementById(tblid);if(obj.offsetParent){while(obj.offsetParent){curleft += obj.offsetLeft;obj = obj.offsetParent;}}else if(obj.x){curleft += obj.x;}document.getElementById(tblid1).style.left= parseInt(curleft + x) + 'px' ;var obj1 = document.getElementById(tblid);if(obj1.offsetParent){while(obj1.offsetParent){curtop += obj1.offsetTop;obj1 = obj1.offsetParent;}}else if(obj1.y){curtop += obj1.y;}document.getElementById(tblid1).style.top=parseInt(curtop + y) + 'px' ;document.getElementById(tblid1).style.display = "block";}
function showDiv1(dvnm){if(document.getElementById(dvnm)){document.getElementById(dvnm).style.display = "block";}}
function hideDiv1(dvnm){if(document.getElementById(dvnm)){document.getElementById(dvnm).style.display = "none";}}
function validmailuser()
{
	var Rl	="";
	var isvalidmailuser = true;
	Rl	= getcookie("Rl");
	var tmp_rsc = "";
	var tmp_rm = "";
	tmp_rsc = getcookie("Rsc");
	tmp_rm = getcookie("Rm");
	if(Rl.indexOf("@rediffmail") < 0 )
	{
		showDiv1('trans_div');
		showDiv1('div_mailsignin_ad');
		document.getElementById('login1').focus();
		document.getElementById('tabtrack').src = "http://metric.ind.rediff.com/www.rediff.com/nxr?rkey="+Math.floor(Math.random() * 1000000);
		if(document.getElementById("frame_ad_hm_maillogin")){document.getElementById("frame_ad_hm_maillogin").src = "http://imworld.rediff.com/worldrediff/pix/ind_home_mailLoginAd.html";}
		return false;
	}
	if (Rl == "" || tmp_rsc == "" || tmp_rm == "")
	{
		isvalidmailuser = false;
	}
	else
	{
		window.location.href = "http://track.rediff.com/click?url=___https://mail.rediff.com/cgi-bin/login.cgi___&cmp=rediffmail&lnk=rediffmail&nsrv1=inhome";
		return false;
	}
	if (!isvalidmailuser)
	{
		showDiv1('trans_div');
		showDiv1('div_mailsignin_ad');
		document.getElementById('login1').focus();
		document.getElementById('tabtrack').src = "http://metric.ind.rediff.com/www.rediff.com/nxr?rkey="+Math.floor(Math.random() * 1000000);
		if(document.getElementById("frame_ad_hm_maillogin")){document.getElementById("frame_ad_hm_maillogin").src = "http://imworld.rediff.com/worldrediff/pix/ind_home_mailLoginAd.html";}
		return false;
	}
}
if (navigator.userAgent.indexOf("MSIE")!=-1)
{
	var theText= '';
	var var_hp = document.getElementById("hp");
	var thePage='http://www.rediff.com/';
	theText += 'Set as homepage<span class="grey1">&nbsp; | &nbsp;</span>';
	if (!var_hp.isHomePage(thePage)) {document.getElementById("sethome").innerHTML="<a  href='#' onclick=\"style.behavior='url(#default#homepage)';setHomePage(thePage);window.location.href=window.location.href;return false;\">"+theText+"</a>";}
}
else if(navigator.userAgent.indexOf("Firefox")!=-1)
{
	document.getElementById("sethome").innerHTML += "<a onclick=\"alert('To set http://www.rediff.com as your home page, click and drag this link to the Home icon in your browser.'); return false;\" href='http://www.rediff.com'>Set as homepage</a> <span class='grey1'>&nbsp;|&nbsp;</span>" ;
}
if((getcookie("Rl") != "") && (getcookie("uid")!= "") )
{
if(document.getElementById('myphoto')){document.getElementById('myphoto').src = "http://simg.rcdn.in/image.php?uid="+getcookie("uid")+"&type=thumb";}
}
else
{
if(document.getElementById('myphoto')){document.getElementById('myphoto').src = imgpath+"/blank.gif";}
}


</script>


<script type="text/javascript">
var glb_boxmoved = 0;
var Imgs=[];
function ImgLoad(cls){
 var as=zxcByClassName(cls);
 for (var z0=0;z0<as.length;z0++){
  if (as[z0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0]){
   oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getAttribute('rel'));
   Imgs.push(oop);
  }
 }
 CkTop();
}
function Fade(img,src){
 this.img=img;
 this.src=src;
 this.opc=90;
 zxcOpacity(this.img,0);
}
Fade.prototype.fade=function(){
 if (this.opc==90) this.img.src=this.src;
 zxcOpacity(this.img,this.opc++);
 var oop=this;
 if (this.opc<101) setTimeout(function(){ oop.fade(); },2);
}
function CkTop(){
 for (var z0=0;z0<Imgs.length;z0++){
  if (zxcPos(Imgs[z0].img)[1]<zxcWWHS()[1]+zxcWWHS()[3]&&Imgs[z0].opc==90){
   Imgs[z0].fade();
   Imgs.splice(z0,1);
   z0--;
  }
 }
}
function zxcOpacity(obj,opc){
 if (opc<0||opc>100) return;
 obj.style.filter='alpha(opacity='+opc+')';
 obj.style.opacity=obj.style.MozOpacity=obj.style.KhtmlOpacity=opc/100-.001;
}
function zxcWWHS(){
 if (window.innerHeight) return [window.innerWidth-10,window.innerHeight-10,window.pageXOffset,window.pageYOffset];
 else if (document.documentElement.clientHeight) return [document.documentElement.clientWidth-10,document.documentElement.clientHeight-10,document.documentElement.scrollLeft,document.documentElement.scrollTop];
 return [document.body.clientWidth,document.body.clientHeight,document.body.scrollLeft,document.body.scrollTop];
}
function zxcPos(obj){
 var rtn=[0,0];
 while(obj){
  rtn[0]+=obj.offsetLeft;
  rtn[1]+=obj.offsetTop;
  obj=obj.offsetParent;
 }
 return rtn;
}
function zxcByClassName(nme,el,tag){
 if (typeof(el)=='string') el=document.getElementById(el);
 el=el||document;
 for (var tag=tag||'*',reg=new RegExp('\\b'+nme+'\\b'),els=el.getElementsByTagName(tag),ary=[],z0=0; z0<els.length;z0++){
  if(reg.test(els[z0].className)) ary.push(els[z0]);
 }
 return ary;
}

</script>



<script type="text/javascript">
var trackArr = new Array("","http://metric.ind.rediff.com/www.rediff.com/nx0?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx2?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx4?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx1?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx3?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx6?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx5?rkey=");
var OAS_sitepage = "inrediffHP.com/mainhome.htm";
var OAS_listpos = "Right";
function createShopArray()
{
	var parent_ul = document.getElementById('ul_shop');
	var ah = parent_ul.getElementsByTagName('a');
	var totalah = ah.length;
	for(var i=0; i<totalah ; i++)
	{
		var imurl = "";
		var hddata = document.getElementById('sh_a_'+i).innerHTML;
		var aurl = document.getElementById('sh_a_'+i).href;
		shopArr[i][2] = hddata;
	}
}
function createBookArray()
{
	var parent_ul = document.getElementById('ul_books');
	var ah = parent_ul.getElementsByTagName('a');
	var totalah = ah.length;
	for(var i=0; i<totalah ; i++)
	{
		var hddata = document.getElementById('bk_a_'+i).innerHTML;
		var aurl = document.getElementById('bk_a_'+i).href;
		booksArr[i][1] = hddata;
	}
}

function createPromoArray()
{
	var parent_ul = document.getElementById('ul_shpromo');
	var ah = parent_ul.getElementsByTagName('a');
	var totalah = ah.length;
	for(var i=0; i<totalah ; i++)
	{
		var hddata = document.getElementById('sprmo_a_'+i).innerHTML;
		var aurl = document.getElementById('sprmo_a_'+i).href;
		shopPromoArr[i][0] = hddata;
		shopPromoArr[i][1] = aurl;
	}
}
createShopArray();
createBookArray();
createPromoArray();

var glb_productids = "&shop=";
function createShopData()
{
	var shnum = 0;
	var totalhd = shopArr.length;
	shnum = (Math.floor(Math.random()*totalhd));
	for(var k=shnum,s=0; s<totalhd; k++,s++ )
	{
		if(k >= totalhd){k=0;}

		var data = "";
		data += "<div class=innerbox>";
		data += "<div class=sechead><a href=\"http://shopping.rediff.com/categories/"+shopArr[k][7].replace(/\'/g,'')+"/cat-"+shopArr[k][8]+"?sc_cid=inhome_cat_"+shopArr[k][8]+"\" onclick=\"trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/categories/"+shopArr[k][7].replace(/\'/g,'')+"/cat-"+shopArr[k][8]+"?sc_cid=inhome_cat_"+shopArr[k][8]+"___&cmp=HP&lnk=shopping_cat_"+shopArr[k][8]+"&nsrv1=HP');return false;\">"+shopArr[k][9].replace(/\'/g,'\'')+"</a>";
		if(shopArr[k][10] != ""){data += "<span class=grey2>&nbsp; - ("+shopArr[k][10]+")</span>";}
		data += "</div>";
		if(shopArr[k][1] != "")
		{
		data += "<div class=newimgthumb><a href=\"http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum="+shopArr[k][5]+"&prodid="+shopArr[k][6]+"\" title=\""+shopArr[k][2]+"\" class=img rel=\""+shopArr[k][1]+"\" onclick=\"trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/shopping/index.html?sc_cid=inhome_"+shopArr[k][6]+"&prodnum="+shopArr[k][5]+"&prodid="+shopArr[k][6]+"___&cmp=HP&lnk=shopping_"+shopArr[k][6]+"&nsrv1=HP');return false;\"><img src='"+imgpath+"/blank.gif' alt=\""+shopArr[k][2]+"\" class=thumbimgR /></a></div>";
		}
		data += "<a href=\"http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum="+shopArr[k][5]+"&prodid="+shopArr[k][6]+"\" class=black onclick=\"trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/shopping/index.html?sc_cid=inhome_"+shopArr[k][6]+"&prodnum="+shopArr[k][5]+"&prodid="+shopArr[k][6]+"___&cmp=HP&lnk=shopping_"+shopArr[k][6]+"&nsrv1=HP');return false;\">";
		if(shopArr[k][0] > 0){
		data += "<span class=discotext>"+shopArr[k][0]+" % OFF - </span>";
		}
		data += shopArr[k][2]+"</a>";
		data += "<p class=shprice>";
		if(shopArr[k][0] > 0)
		{
		data += "<span class=listprice>Rs. "+shopArr[k][3]+"</span> &nbsp;";
		}
		data += "Rs. "+shopArr[k][4]+"</p>";

		data += "<p class=alignR><a href=\"http://shopping.rediff.com/categories/"+shopArr[k][7].replace(/\'/g,'')+"/cat-"+shopArr[k][8]+"?sc_cid=inhome_like_"+shopArr[k][8]+"\" class='sm1 bold morelikecolor' onclick=\"trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/categories/"+shopArr[k][7].replace(/\'/g,'')+"/cat-"+shopArr[k][8]+"?sc_cid=inhome_like_"+shopArr[k][8]+"___&cmp=HP&lnk=shopping_like_"+shopArr[k][8]+"&nsrv1=HP');return false;\">More like this &gt;</a></p></div>";

		if(document.getElementById('shbox_'+s))
		{
			document.getElementById('shbox_'+s).innerHTML = data;
			glb_productids += shopArr[k][6]+","; //for metric
		}
	}
}

var glb_bookids = "&book=";
function createBookData()
{
	var b_num = 0;
	var totalhd = booksArr.length;
	b_num = (Math.floor(Math.random()*totalhd));

	for(var k=b_num,b=0; b<totalhd; k++,b++ )
	{
		if(k >= totalhd){k=0;}
		var data = "";
		data += "<div class=innerbox><div class=sechead><a href=\"http://books.rediff.com\" onclick=\"trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/?sc_cid=bk_inhome_head___&cmp=HP&lnk=books_head&nsrv1=HP');return false;\">Books</a></div>";
		if(booksArr[k][4] != "")
		{
		data += "<div class=newimgthumb><a href=\"http://books.rediff.com?bksrno="+booksArr[k][8]+"\" title=\""+booksArr[k][1]+"\" class=img rel=\""+booksArr[k][4]+"\" onclick=\"trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/?bksrno="+booksArr[k][8]+"&sc_cid=bk_inhome_"+booksArr[k][0]+"___&cmp=HP&lnk=books_"+booksArr[k][0]+"&nsrv1=HP');return false;\"><img src='"+imgpath+"/blank.gif' alt=\""+booksArr[k][1]+"\" /></a></div>";
		}
		data += "<a href=\"http://books.rediff.com?bksrno="+booksArr[k][8]+"\" class=black  onclick=\"trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/?bksrno="+booksArr[k][8]+"&sc_cid=bk_inhome_"+booksArr[k][0]+"___&cmp=HP&lnk=books_"+booksArr[k][0]+"&nsrv1=HP');return false;\">";
		if(booksArr[k][5] > 0)
		{
		data += "<span class=discotext>"+booksArr[k][5]+" % OFF - </span>";
		}
		data += booksArr[k][1] + "</a>";
		if(booksArr[k][7] != "")
		{
		data += "<p class=grey2>"+booksArr[k][7]+"</p>";
		}

		data += "<p class=shprice>";
		if(booksArr[k][5] > 0)
		{
		data += "<span class=listprice>Rs. "+booksArr[k][2]+"</span> &nbsp;";
		}
		data += "Rs. "+booksArr[k][3]+"</p><p class=alignR><a href=\"http://books.rediff.com/similarbooks/"+booksArr[k][0]+"\" class='sm1 bold morelikecolor' onclick=\"trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/similarbooks/"+booksArr[k][0]+"?sc_cid=bk_inhome_morelike___&cmp=HP&lnk=books_morelike&nsrv1=HP');return false;\">More like this &gt;</a></p></div>";
		if(document.getElementById('bkbox_'+b))
		{
		document.getElementById('bkbox_'+b).innerHTML = data;
		//glb_bookids += "&book"+b+"="+booksArr[k][0]; //for metric
		glb_bookids += booksArr[k][0]+","; //for metric
		}


	}
}

function createPromoData()
{
	var promo_num = 0;
	var totalhd = shopPromoArr.length;
	if(totalhd==0){return false;}
	promo_num = (Math.floor(Math.random()*totalhd));

	for(var k=promo_num,b=0; b<totalhd; k++,b++ )
	{
		if(k >= totalhd){k=0;}
		var data = "";
		data += "<div class=innerbox>";
		if(shopPromoArr[k][3] != "")
		{
		data += "<div class=newimgthumb><a href=\""+shopPromoArr[k][1]+"\" class=img rel=\""+shopPromoArr[k][3]+"\" onclick=\"trackURL('http://track.rediff.com/click?url=___"+shopPromoArr[k][1]+"___&cmp=HP&lnk=shopping_promo&nsrv1=HP');return false;\"><img src='"+imgpath+"/blank.gif' alt=\""+shopPromoArr[k][0]+"\" /></a></div><div><a href=\""+shopPromoArr[k][1]+"\" class=black onclick=\"trackURL('http://track.rediff.com/click?url=___"+shopPromoArr[k][1]+"___&cmp=HP&lnk=shopping_promo&nsrv1=HP');return false;\">"+shopPromoArr[k][2]+"</a></div>";
		}
		data += "<span class=ht5></span><p class=alignR><a href=\""+shopPromoArr[k][1]+"\" class='sm1 bold morelikecolor' onclick=\"trackURL('http://track.rediff.com/click?url=___"+shopPromoArr[k][1]+"___&cmp=HP&lnk=shopping_promo1&nsrv1=HP');return false;\">More like this &gt;</a></p></div>";
		if(document.getElementById('spromobox_'+b)){document.getElementById('spromobox_'+b).innerHTML = data;}
	}
}

function getNewDesign()
{
	createShopData();createBookData();createPromoData();
}

function columnAdjust()
{
	var clientHeight = parseInt(document.body.clientHeight);
	var height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	if((zxcWWHS()[3] + height) >= (clientHeight - 200)){moveBox();}
}
function moveBox()
{
	var small = "";
	var big = "";
	var diff = 0;
	var ht1 = parseInt(document.getElementById('column1').offsetHeight) ;
	var ht2 = parseInt(document.getElementById('column2').offsetHeight) ;
	var ht3 = parseInt(document.getElementById('column3').offsetHeight) ;
	if(ht1 < ht2 && ht1 < ht3){small = "column1";}else if(ht2 < ht1 && ht2 < ht3){small = "column2";}else if(ht3 < ht2 && ht3 < ht1){small = "column3";}
	if(ht1 > ht2 && ht1 > ht3){big = "column1";}else if(ht2 > ht1 && ht2 > ht3){big = "column2";}else if(ht3 > ht2 && ht3 > ht1){big = "column3";}

	if(small != "" && big != "")
	{
		var bigparent = document.getElementById(big);
		var lastchild = bigparent.lastElementChild;
		if(lastchild == "undefined" || lastchild == null){glb_boxmoved = 1; return false;}
		diff = parseInt(document.getElementById(big).offsetHeight) - parseInt(document.getElementById(small).offsetHeight);
		if(diff >= 150 && glb_boxmoved == 0 && (lastchild.offsetHeight < diff) )
		{
			document.getElementById(small).appendChild(lastchild);
			glb_boxmoved = 1;
		}
	}
}

if(navigator.userAgent.search(/iPad/i)>=0){document.getElementById("homewrapper").style.width = "990px";}
getNewDesign();
if(document.getElementById("moneyiframe")){document.getElementById("moneyiframe").src = "http://money.rediff.com/widget/markets5";}
window.onscroll= function(){CkTop();if(glb_boxmoved == 0){columnAdjust();}if(glb_scrll_met == 0){glb_scrll_met = 1;if(document.getElementById('metric_iframe')){document.getElementById('metric_iframe').src = "http://metric.ind.rediff.com/www.rediff.com/newhomescroll?rkey="+Math.floor(Math.random() * 1000000);}}}

if(document.getElementById('tabtrack')){document.getElementById('tabtrack').src = "http://metric.ind.rediff.com/www.rediff.com/impression?rkey="+Math.floor(Math.random() * 1000000)+glb_productids+glb_bookids;}
ImgLoad('img');

if(screen.width < 850 ){
if(document.getElementById('div_mailsignin_inner')){document.getElementById('div_mailsignin_inner').style.marginLeft = "-375px";}
if(document.getElementById('div_mypagelogin_inner')){document.getElementById('div_mypagelogin_inner').style.marginLeft= "-375px";}
}

function setIframeHeight(iframe){if(iframe){var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;if(iframeWin.document.body){iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;}}}

if(document.getElementById('moneyiframe')){
document.getElementById('moneyiframe').onload = function(){setIframeHeight(document.getElementById('moneyiframe'));}
}
</script>

<script type="text/javascript" src="http://im.rediff.com/uim/common/realmedia_banner_1_5.js"></script>

<div id="div_advt_right_hidden" class="hide"><script type="text/javascript">if(document.getElementById("div_advt_right")){OAS_AD('Right');}</script></div>


<script language="JavaScript">
<!--
if(document.getElementById("div_advt_right"))
{
	var hdn = document.getElementById("div_advt_right_hidden");
	var vsbl = document.getElementById("div_advt_right");
	copyInnerHtml(hdn, vsbl);
}
//-->
</script>


<!-- IE9-Windows7: Pinned Sites: Starts -->
<script>
var headlinesArray = new Array;
	j = 0
	headlinesArray[j] = new Array("Live! Indian author Sushmita...","http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm?pin=ie9");
	j = 1
	headlinesArray[j] = new Array("West Indies to play 2 Tests and...","http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm?pin=ie9");
	j = 2
	headlinesArray[j] = new Array("Samsung launches smartwatch,...","http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm?pin=ie9");
	j = 3
	headlinesArray[j] = new Array("Taj photos: Breathtaking images...","http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm?pin=ie9");
	j = 4
	headlinesArray[j] = new Array("Hoisting the Indian flag where...","http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm?pin=ie9");
</script>

<script type="text/JavaScript">
function addSite()
{
    try {
        window.external.msAddSiteMode();
    }
    catch (e) {
        alert("This feature is only available in Internet Explorer 9.");
    }
}
function AddJumpList(nameJumpList,jumpListArray) {
	window.external.msSiteModeClearJumplist();
	window.external.msSiteModeCreateJumplist(nameJumpList);
	var i;
	jumpListArray.reverse();
	for(i = 0; i<jumpListArray.length;i++){
		window.external.msSiteModeAddJumpListItem
		(''+jumpListArray[i][0]+'', ''+jumpListArray[i][1]+'', 'http://www.rediff.com/favicon.ico');
	}
	window.external.msSiteModeShowJumplist();

}
try {
	if (window.external.msIsSiteMode()) {
		AddJumpList('Headlines',headlinesArray);
	}
	else
	{
		if(sessionStorage.getItem('showPinnedBar') == 1 || sessionStorage.getItem('showPinnedBar') == null)
		{
			document.getElementById('divPinSite').innerHTML = "<div class='floatL bold f14' style='padding:7px 50px 0 0'>Experience Rediff.com as a Pinned Site</div><div class=floatL><div class=floatL><img id=pinImage class=msPinSite src='http://www.rediff.com/favicon.ico' alt='' /></div><div class=floatL>&nbsp;<span class=bold>&lt; Drag this icon to your Taskbar</span><br />&nbsp; &nbsp; Or <a href=\"javascript:void(0)\" onclick=\"addSite();\" class=bold>click here</a> to add this site to your Start menu.</div></div><div class=pinclose onclick=\"hideDiv1('divPinSite');window.sessionStorage.setItem('showPinnedBar','0');\" title='Close' >X</div>";
			document.getElementById('divPinSite').style.display = "block";
		}
	}
}
catch(ex) {}
</script>

<!-- IE9-Windows7: Pinned Sites: Ends -->
<noscript><div class="msg_noscript">Your browser does not support JavaScript or it may be disabled!</div></noscript>
</body>
</html>`)
/*
    b.scorecardresearch.com;books.rediff.com;careers.rediff.com;clients.rediff.com;datastore.rediff.com;datastore01.rediff.com;datastore04.rediff.com;datastore05.rediff.com;dealhojaye.rediff.com;hosting.rediff.com;ia.rediff.com;im.rediff.com;imshopping.rediff.com;imworld.rediff.com;investor.rediff.com;ishare.rediff.com;loc.rediff.com;login.rediff.com;mail.rediff.com;metric.ind.rediff.com;money.rediff.com;mypage.rediff.com;n01.rcdn.in;news.rediff.com;pages.rediff.com;realtime.rediff.com;rediff.com;register.rediff.com;search.rediff.com;shopping.rediff.com;simg.rcdn.in;simg03.rcdn.in;track.rediff.com;w3.org;zarabol.rediff.com
*/

console.log('\n');

processData(`1335
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd" ><html xmlns:g="http://base.google.com/ns/1.0" xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:og="http://ogp.me/ns#"><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"><title>Want to serve Gujarat till 2017: Narendra Modi - The Times of India</title><meta http-equiv="Last-Modified" content="06:33:11 PM Thursday, September 05, 2013"><meta name="description" content="&quot;People of Gujarat have given me a mandate to serve them till 2017 and I have to do this with my full strength,&quot; Narendra Modi said."><meta value="summary" name="twitter:card"><meta value="@timesofindia" name="twitter:site"><meta name="twitter:url" content="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms"><meta name="twitter:title" content="Want to serve Gujarat till 2017: Narendra Modi - The Times of India"><meta name="twitter:description" content="&quot;People of Gujarat have given me a mandate to serve them till 2017 and I have to do this with my full strength,&quot; Narendra Modi said."><meta name="twitter:image" content="http://timesofindia.indiatimes.com/photo/22333092.cms"><meta name="news_keywords" content="Narendra Modi,Gujarat chief minister"></meta><meta name="keywords" content="Narendra Modi,Gujarat chief minister"></meta>
            <link rel="canonical" href="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms" />
    <link rel="alternate" media="handheld" href="http://m.timesofindia.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms" />
<xhtml:link media="only screen and (max-width: 640px)" rel="alternate" href="http://m.timesofindia.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms" />
<script>var postActUrl='http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms';</script><meta content="117787264903013" property="fb:app_id"><meta property="og:title" content="Want to serve Gujarat till 2017: Narendra Modi - The Times of India"><meta content="The Times of India" property="og:site_name"><meta content="article" property="og:type"><meta property="og:url" content="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms"><meta property="og:image" content="http://timesofindia.indiatimes.com/photo/22333092.cms"><meta content="556964827" property="fb:admins"><meta content="IE=EmulateIE7" http-equiv="X-UA-Compatible"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta content="http://timesofindia.indiatimes.com/" name="website"><link rel="image_src" href="http://timesofindia.indiatimes.com/photo/22333092.cms"><script>var gourl=document.location.href;
                var canurl="/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms";
var otherchannelstory=0;
var canurlSCase=canurl.toLowerCase();
var gourlSCase=gourl.toLowerCase();
if(canurlSCase.indexOf('http://')!=-1 && canurlSCase.indexOf('timesofindia.indiatimes.com')==-1)otherchannelstory=1;
else if(canurlSCase.indexOf('timesofindia.indiatimes.com')==-1){canurl="http://timesofindia.indiatimes.com"+canurl;canurlSCase="http://timesofindia.indiatimes.com"+canurlSCase;}
if(gourlSCase!=canurlSCase && gourl.indexOf('?')==-1 && gourlSCase.indexOf('http://timesofindia.indiatimes.com')>=0)
{	if(otherchannelstory==0)document.location.href=canurl+"?";}

</script><link type="image/x-icon" href="http://timesofindia.indiatimes.com/icons/toifavicon.ico" rel="shortcut icon"><link rel="publisher" href="https://plus.google.com/117150671992820587865"><script type="text/javascript">var _sf_startpt=(new Date()).getTime()</script><script language="javascript">var qstr='cms-sec0=-2128936835&cms-sec1=-2128958273';
		var qmsid='22328733';
				var cmsur_type='viewed';
		function blockError(){return true;}
	    window.onerror = blockError;
	    var dtTT_startofpage = new Date();
	    var rndtno = Math.random();
	    document.write('<img border="0" width="0" height="0" style="display:none;visibility:hidden;" src="http://timeslog.indiatimes.com/timeslog.dll/topcnt?CHUR=timesofindia.indiatimes.com&randomno='+ rndtno +'" align="left"/>');
		 var myImage = new Image;
                myImage.src = 'http://cmstrendslog.indiatimes.com/cmslog.dll?cms-msid='+qmsid+'&'+qstr+'&cmsurtype='+cmsur_type+'&randomno='+ rndtno;

	 </script><noscript><img width="0" height="0" border="0" style="display:none;visibility:hidden;" src="http://timeslog.indiatimes.com/timeslog.dll/topcnt?CHUR=timesofindia.indiatimes.com&nojs=1"/><img width="0" height="0" border="0" src="http://cmstrendslog.indiatimes.com/cmslog.dll?cms-msid=22328733&cms-sec0=-2128936835&cms-sec1=-2128958273&cmsurtype=viewed"/></noscript><script type="text/javascript">
				  var _gaq = _gaq || [];
				  _gaq.push(['_setAccount', 'UA-198011-4']);
				  _gaq.push(['_setDomainName', 'none']);
				  _gaq.push(['_setAllowLinker', true]);
				   _gaq.push(['_addIgnoredOrganic', 'times of india']);
				   _gaq.push(['_addIgnoredOrganic', 'toi']);
				   _gaq.push(['_addIgnoredOrganic', 'the times of india']);
				   _gaq.push(['_addIgnoredOrganic', 'timesofindia']);
				   _gaq.push(['_addIgnoredOrganic', 'www.timesofindia.com']);
				   _gaq.push(['_addIgnoredOrganic', 'timesofindia.com']);
				   _gaq.push(['_addIgnoredOrganic', 'thetimesofindia']);
				   _gaq.push(['_addIgnoredOrganic', 'time of india']);
				   _gaq.push(['_addIgnoredOrganic', 'times of india headlines']);
				   _gaq.push(['_addIgnoredOrganic', 'timesofindia.indiatimes.com']);
				   _gaq.push(["_setCustomVar", 4, "tplname", "__articleshow", 3]);
					 _gaq.push(['_trackPageview']);
				  _gaq.push(['_trackPageLoadTime']);
				  (function() {
				    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
				  })();

		</script><script>
				  var _comscore = _comscore || [];
				  _comscore.push({ c1: "2", c2: "6036484" });
				  (function() {
				    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
				    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
				    el.parentNode.insertBefore(s, el);
				  })();

		</script><noscript><img src="http://b.scorecardresearch.com/p?c1=2&amp;c2=6036484&amp;cv=2.0&amp;cj=1"></noscript><script language="javascript">
		document.domain='indiatimes.com';

			</script><script language="javascript">var s1name='India';
                var s1id='-2128936835';
                var impp='0';</script><script language="javascript">var sphdr=;</script><script type="text/javascript">
var hdomain='indiatimes.com';
if (document.domain != hdomain)
{if ((document.domain.indexOf(hdomain)) != -1)
{document.domain = hdomain}}

			</script><script type="text/javascript" src="/articleshow_topjs_emailver.cms?minify=1" language="javascript"></script><script type="text/javascript">var a=22328733;
                var navmsid=22328733;
var addtoLayout='';
var addtoMethod=1;
var AddURL = encodeURIComponent(document.location.href);
var AddTitle = escape(document.title);
var AddOthers1="en&urlaffiliate=43016&encoding=UTF-8";
var showKon=1;
var ttrendlogmostviewed=1;
var doweshowbellyad=1;
var vidmsid='';
var sldemsid='';
var fbauthid="";
var isLoggedSso = "";
if(Get_Ckie('MSCSAuth')!=null)
{
	isLoggedSso=Get_Ckie('MSCSAuth');
}
</script><script type="text/javascript">vidmsid='22332285';</script><script type="text/javascript">sldemsid='22328824';</script><script type="text/javascript">sldemsidcnt='1';</script><script language="javascript">var serverdate='Thursday, September 05, 2013  06:33:11 PM';</script><script>var fb_Img='http://timesofindia.indiatimes.com/photo/22333092.cms';</script><!--[if IE ]>
                <style>
                .badgepoint{background:url(/photo/11537433.cms) no-repeat 1px 1px !important;padding:2px 0px 0px 5px !important;}
                </style>
				<![endif]--><!--[if IE ]>
            <style>
            .badgepoint{background:url(/photo/11537433.cms) no-repeat 1px 1px !important;padding:2px 0px 0px 5px !important;}
            </style>
            <![endif]--><link type="text/css" href="/nv_glblnavcss_v10.cms?version=5&amp;minify=1" rel="stylesheet"><link type="text/css" href="/articleshow_css.cms?version=39&amp;minify=1" rel="stylesheet"><style type="text/css">.rightboxwrap {border: 1px solid #EAEAEA;float: left;margin: 0;padding: 1px;width: 298px;}
                .commonlistwrap {background: none repeat scroll 0 0 #F7F8F3;float: left;margin: 0;padding: 0 10px 10px;width: 278px;}
                .sharetext {color: #999999;float: left;font: bold 14px 'Roboto Slab',serif;padding: 10px 4px 10px 0;text-align: left;}
                .followuscommon {background: url("/photo/20330180.cms") no-repeat scroll 0 0 transparent;float: left;height: 35px;margin: 4px 0 0;padding: 0;position: relative;width: 135px;}
                .followuscommon a {background: url("/photo/19986028.cms") repeat scroll 0 0 transparent;height: 34px;position: absolute;text-decoration: none;width: 34px;}
                .followuscommon a.twittercommon {left: 0;top: 0;}
                .followuscommon a.facebookcommon {left: 50px;top: 0;}
                .followuscommon a.googlepluscommon {left: 101px;top: 0;}</style><script type="text/javascript" src="/cdjs.cms" language="javascript"></script><script src="/videoshow_js_v6.cms?minify=1" type="text/javascript"></script><script src="/ns_companion_v8.cms?minify=1" type="text/javascript"></script><script type="text/javascript">
nsc_pw="333px";
nsc_ph="250px";
var glblfollowpos;

			</script><script type="text/javascript" src="/jquery_toi.cms?minify=1"></script><script>
			 					var filesadded=""
                               var filesdeleted="";

                </script><script>if(navigator.appName=="Microsoft Internet Explorer"){
             checkdeletejscssfile("/social_cssie.cms?minify=1", "css");
             checkloadjscssfile("/social_cssie.cms?minify=1", "css");
             checkdeletejscssfile("/social_jsie_top_v3.cms?minify=1", "js");
             checkloadjscssfile("/social_jsie_top_v3.cms?minify=1", "js");
            }else{
             checkdeletejscssfile("/social_cssffcrome.cms?minify=1", "css");
             checkloadjscssfile("/social_cssffcrome.cms?minify=1", "css");
             checkdeletejscssfile("/social_jsffcrome_top_v3.cms?minify=1", "js");
             checkloadjscssfile("/social_jsffcrome_top_v3.cms?minify=1", "js");
            }</script><script type="text/javascript">
			(function() {
				var useSSL = 'https:' == document.location.protocol;
				var src = (useSSL ? 'https:' : 'http:') +
				'//www.googletagservices.com/tag/js/gpt.js';
				document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
				'//www.googletagservices.com/tag/js/gpt.js';
				})();

        </script><script src="/double_google_ads_bly/msid--2128936835,subid-0.cms"></script><script src="/double_google_ads_call/msid--2128936835,subid-0.cms"></script><script>var subsec1id = "";
                subsec1id = -2128936835
				var curpg = 1;</script><script type="text/javascript" src="/emailverification.cms?minify=1" language="javascript"></script><style>.addguttercode{position:absolute; top:0px; right:0px; display:none;margin-top:300px;}</style><link type="text/css" rel="stylesheet" href="/cmtemailstyle.cms?minify=1"></head><body><script>showDCAdsInter(0,0);</script><div class="master_container"><div style="opacity: 0; display: none; position: absolute; top: 0px; left: 0px; z-index: 1000; background:#000" id="backgroundPopup"></div><div style="display: none;z-index:2147483647;margin-top:14px; width:100%" id="popupContact" class="blk"><center><div style="width:540px;background-color:#fff;border:4px solid #7A7A7A;border-radius:5px; -moz-border-radius:5px; " id="mainblkdiv"><table cellpadding="0" cellspacing="0" width="280" border="0"><tr><td colspan="2"><iframe ALLOWTRANSPARENCY="true" title="signupsso" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" width="540" src="" id="signupsso" name="signupsso"></iframe></td></tr></table></div></center><div style="clear:both"></div></div><div id="netspidersosh" class="wrapper_new"><div class="navlft"><div class="padlftrgt"><div><div class="tpgry"><div class="tpgrynw1" style="margin-bottom:0px;"><div class="topbrnw1"><div style="width:370px;float:left;" class="globalnav"><div style="margin: 0px 0pt 0pt 5px; float: left;"><a href="http://www.indiatimes.com/" target="_blank">Indiatimes</a><span>|</span><strong style="font-size:11px;margin:0 5px;">The Times of India</strong><span>|</span><a href="http://economictimes.indiatimes.com" target="_blank">The Economic Times</a><span>|</span></div><div id="first" style="float: left;"><div style="padding: 0px 2px 0px 7px; width: 50px; color: rgb(2, 78, 151); position:relative; cursor: pointer;" id="srchsel3">More<span style="margin-top: 1px;" id="mnuarr" class="blk_arrow_img"></span><div style=" position:absolute; top:-3px; left:0; z-index:1000;display:none;background-color:#ffffff; text-align:left; width:100px;" id="srchcmb3"><div style="height:22px;" class="moreim" id="secdiv">More<span style="margin-top: 1px;" class="blk_arrow_img rotimg2"></span></div><div style="width:740px;background-color:#ffffff;position:absolute;left:-282px;top:28px;z-index:1000;border:1px solid #ABABAB;" class="glblnav1"><div style="clear:both;height:10px;"></div><iframe title="Advertisement" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="285" width="740" id="glbldata" name="glbldata"></iframe></div></div></div></div></div><div class="toprtnw1"><div style="float:right;padding-top:3px;"><a style="margin:0px;padding:0px;" target="_blank" href="http://timesofindia.indiatimes.com/rss.cms"><span pg="TbPos8" class="rss_img_org"></span></a></div><div style="float:right;padding-top:3px;"><a target="_blank" style="text-decoration: none;margin-left:1px;" href="https://plus.google.com/117150671992820587865?prsrc=3"><img style="border: 0;" height="16" width="16" src="https://ssl.gstatic.com/images/icons/gplus-16.png"></a></div><div style="float:right;padding:0 4px"><a data-show-count="false" data-width="60px" class="twitter-follow-button" href="http://twitter.com/timesofindia">Follow</a></div><div id="fbk_t_cnt" style="float:right;padding-left:6px"></div><div style="float:right;"><div id="topbardiv"></div></div></div></div></div><div align="left"><div style="height:100px;"><div style="padding:5px 0 5px 74px;" align="left"><div style="color:#B1B1B1; font-size: 9px; display: inline; vertical-align: top;padding-right:5px;float:left;">ADVERTISEMENT</div><div style="float:left;width:728px;height:90px;"><script>showDCAdTop(0,0);</script></div></div></div></div></div><div class="tpblk"><div style="display:table;width:100%;"><div style="padding-top:8px;"><div class="fltpdg"><div class="fltleft"><div style="padding-top:7px;" id=""><a href="/"><img title="The Times of India" alt="The Times of India" src="/photo/5580817.cms" height="22" width="316" border="0" style="float:left"></a><span id="pt10"></span></div></div><div style="padding-top:5px;" class="fltleft"><span class="sname">India</span></div></div><div class="topsrh"><div class="tsh"><div class="topsrh"><div class="fltleft"><form class="frmdisp" onsubmit="return beta_valid();" acton="/search.cms" method="post" name="frmsearch1" id="frmsearch1"><INPUT name="type" value="" type="hidden"><input name="catkey" value="233446897" type="hidden"><INPUT name="search" value="3" type="hidden"><INPUT name="sitesearch" value="" type="hidden"><INPUT name="fields" value="1" type="hidden"><INPUT name="searchtype" value="2" type="hidden"><INPUT name="article" value="2" type="hidden"><INPUT name="search1" type="hidden" value="0"><input AUTOCOMPLETE="off" onkeyup="return KeyCheck(event,this,'tp');" onclick="make_blank1();" class="ashw srchtx_nw" name="query" type="text" style="width:154px" value=""></form><br><div style="clear:both;width:154px;text-align:left;font-size:11px;position:absolute;border:0px; margin:0;color:#4c4c4c;z-index:110000;float:right;" id="txtHint"></div></div><div class="fltleft"><div onmouseout="" align="left" onClick="openSelect('srchcmb1')" id="srchsel1" class="ashw1"><div style="padding:5px 22px 0 4px;font-size:9px;" id="srchsel">The Times of India</div></div><div align="left" style="display:none;visibility:hidden" id="srchcmb1"><span onClick="openSelect('0')" id="0">The Times of India</span><br><span onClick="openSelect('1')" id="1">Indiatimes</span><br><span onClick="openSelect('2')" id="2">Web (by Google)</span><br><span onClick="openSelect('3')" id="3">Video</span><br><span onClick="openSelect('4')" id="4">Photos</span><br></div></div><div class="fltleft"><div onclick="return beta_valid();" class="ashw1 srchbtn"></div></div></div><div style="clear:both"></div><div class="fltright"><a class="tptxt" href="/advancesearch.cms">Advanced Search &raquo;</a></div></div></div></div><div class="clrtop5"></div></div></div><div class="clrb"></div><div class="wdh983"><div class="tabsbg"><script>var sectionid="";sectionid="-2128936835";</script><ul class="tabs"><li><a style="background:none;" href="/">Home</a></li><li><a href="/city/cityarticlelist/-2128932452.cms">City</a></li><li class="current"><a href="/india/indiaarticlelist/-2128936835.cms">India</a></li><script>sectionid=-2128936835</script><li><a href="/world/worldarticlelist/296589292.cms">World</a></li><li><a href="/business/bizarticlelist/1898055.cms">Business</a></li><li><a href="/tech/techhome/5880659.cms">Tech</a></li><li><a href="/sports/sphome/4719148.cms">Sports</a></li><li><a href="/entertainment/articlelistls/1081479906.cms">Entertainment</a></li><li><a href="/life-style/articlelistls/2886704.cms">Life &amp; Style</a></li><li><a href="http://idiva.com/indextoi.html">Women</a></li><li><a href="http://timesofindia.hotklix.com">Hotklix</a></li><li><a href="http://timesofindia.speakingtree.in/">Spirituality</a></li><li><li><a href="/nrihome.cms">NRI</a></li></li><li><a pg="Pos43" style="font-weight:bold;padding-left:4px;padding-right:4px;" href="http://content.magicbricks.com/?fromSite=toi&amp;utm_source=toi&amp;utm_medium=referral&amp;utm_campaign=toi-mb-navbar">Real Estate

																					</a></li><li><a style="font-weight:normal;padding-left:6px;padding-right:6px;" href="http://photogallery.indiatimes.com">Photos</a></li><li><a style="font-weight:normal;padding-left:6px;padding-right:6px;" target="_blank" href=" http://www.timesnow.tv">Times Now</a></li><li><a style="font-weight:normal;padding-left:6px;padding-right:6px;" href="/videos">Videos</a></li><li><a style="font-weight:normal;padding-left:5px;padding-right:5px;" target="_blank" href="http://timesnow.live.indiatimes.com/" pg="Pos31">LIVE TV</a></li></ul></div><div style="position:relative" class="sectabsbg"><ul id="sectabs" class="sectabs"></ul></div></div><div><div class="bdcrumb">You are here: <a href="/">Home</a>&nbsp;&raquo;&nbsp;India</div><div style="height:2px" class="clrb"></div></div></div><div style="height:2px" class="clrb"></div><div id="adsdivLyr" width="1003" align="center"></div><div class="clrb"></div><div class="hide_brk" id="newsbrk"><div align="center" class="brnwsbg"><div class="flL_width136"><span class="brnwstxt">Breaking News:</span></div><div class="brnews flL_width815"><div class="pos_wid815"><div id="bnewstickerplaceholder" class="nwstxt"></div></div></div><div class="flL_width25 normtxt"><span class="hand_cr red_close_btn" onclick="hide();"></span></div></div></div><div class="clrb"></div><div style="float:left;padding-top:10px;" id="myrecostry"></div><div class="clrbth"></div><div class="clrbth"></div><div class="clearFix"><div class="flL left_bdr"><span style="position:relative;" class="arttle"><h1>Want to serve Gujarat till 2017: Narendra Modi</h1></span><span class="byline"><span class="imghov top4"><span id="auim"></span><label>The writer has posted comments on this article</label></span><span class="hide_new" id="authortext"></span>PTI <span>|</span> Sep 5, 2013, 04.02 PM IST</span><div style="width: 664px; display: none;" class="clearFix pb_mt" id="sharebarx_new"><div style="margin-left: 5px;" onclick="loyalitypoints();" class="tiwt" id="twtdiv"><a class="twitter-share-button" href="https://twitter.com/share" data-url="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms"></a></div><div style="width:65px" class="floatleft wd70"><div data-size="medium" class="g-plusone"></div></div><div style="width: 100px;" class="floatleft tt pad_r5"><a class="txt_d_none" href="javascript:void(0);"><div style="width: 113px;"><script data-counter="right" type="IN/Share" data-url="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms"></script></div><span class="tooltip"><span class="top"></span><span class="middle">Share on Linkedin</span><span class="bottom"></span></span></a></div><div class="divtab1"><span style="margin-right:0;" class="btn_bg v_top"><div class="pad_txt"><a class="font10blk" socialano="TOI" socialpg="ToiCmtcntLHS" href="#write"><span id="ctcnt"></span><span toipg="selectcommentstab"> Comments</span></a></div></span></div><div class="parlleldiv1"><div class="floatleft"><div pg="BookshareMore" id="more"><a class="font11blk" href="javascript:void(0)"><span socialano="TOI" socialpg="SharemoreLHS" id="moreimg" class="more_img">More</span></a></div><div id="moredata"><div id="moredat"><DIV style="swidth: 280px; padding:0px; margin:0px;" id="morearea"><div style="padding:10px;"><table id="popupimg" width="100%" cellspacing="0" cellpadding="0" border="0"><a class="close" style="color:#F00000;text-decoration:none;float:right;" href="javascript:void();"><div pg="asMoreClose" class="ashw clsimg"></div></a><tr><td class="goo"><a pg="asMoreGoogleBM" href="javascript:logaction('707');logonmyt('Shared',navmsid,'Google');addto(7);">Google Bookmarks</a></td><td class="new"><a pg="asMoreNewsvine" href="javascript:logaction('708');logonmyt('Shared',navmsid,'Newsvine');addto(4);">Newsvine</a></td></tr><tr><td class="liv"><a pg="asMoreLiveBM" href="javascript:logaction('709');logonmyt('Shared',navmsid,'Live');addto(13);">Live Bookmarks</a></td><td class="tec"><a pg="asMoreTechnorati" href="javascript:logaction('710');logonmyt('Shared',navmsid,'Technorati');addto(5);">Technorati</a></td></tr><tr><td class="yah"><a pg="asMoreYahooBM" href="javascript:logaction('711');logonmyt('Shared',navmsid,'Yahoo');addto(6);">Yahoo Bookmarks</a></td><td class="blo"><a pg="asMoreBlogmarks" href="javascript:logaction('712');logonmyt('Shared',navmsid,'Blogmarks');addto(15);">Blogmarks</a></td></tr><tr><td class="del"><a pg="asMoreDelicious" href="javascript:logaction('713');logonmyt('Shared',navmsid,'Del.icio.us');addto(1);">Del.icio.us</a></td><td valign="middle"><span style="margin-right:3px;" class="ac_img_btn"></span><a pg="asMoreApnaC" href="javascript:logaction('714');logonmyt('Shared',navmsid,'ApnaCircle');addto(20);">ApnaCircle</a></td></tr></table></div></DIV></div></div></div></div><div style="margin-left: 4px;" class="flLm"><div id="email" class="wd27"><div class="icon_bg tt"><a href="javascript:void();" class="point_cr"><div socialano="TOI" socialpg="MailLHS" onclick="logaction('4');logonmyt('Shared',navmsid,'Email');;" id="emailimg" class="email_img"></div><span class="tooltip"><span class="top"></span><span class="middle">Email this article</span><span class="bottom"></span></span></a></div></div><div id="emaildata" class="divhide"><div id="emaildat"><a class="close flR_clrblk" href="javascript:void();"><div pg="asMoreClose" class="ashw clsimg"></div></a><iframe title="Email" align="left" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="350" width="450" id="emailiframe" name="emailiframe"></iframe></div></div></div><div style="margin-left: 4px;" class="flLm"><div id="save" class="floatleft wd27"><div class="icon_bg tt"><a href="javascript:void();" onclick="showdivlayeroff('22328733','savedat','close');"><div socialano="TOI" socialpg="SaveLHS" id="saveimg" onclick="logaction('6');" class="save_img"></div><span class="tooltip"><span class="top"></span><span class="middle">Save this article</span><span class="bottom"></span></span></a></div></div><div id="savedata" class="divhide"><div class="flR_pad10"><div border="0" class="ashw clsimg close point_cr"></div></div><div id="savedat"><div class="height20"><div class="save_art">My Saved articles</div></div><div class="clr_mTB10"><div class="pad_left10"><img title="Login" alt="Login" border="0" src="/photo/5926469.cms" onclick="funcsignincomment()" class="point_cr"></div><div class="flL_padr"><a><img title="Register@indiatimes" alt="Register@indiatimes" border="0" onclick="funcsignupcomment()" src="/photo/5926471.cms"></a></div></div></div></div></div><div style="margin-left: 4px;" class="flLm"><div id="printarea" class="tt"><a target="_blank" href="/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms?prtpage=1"><small class="icon_bg"><small socialano="TOI" socialpg="PrintLHS" class="print_img"></small></small><span class="tooltip"><span class="top"></span><span class="middle">Print this article</span><span class="bottom"></span></span></a></div></div><div class="flL"><span class="icon_bg"><div socialano="TOI" socialpg="ReduFSLHS" align="right" onclick="ts('inc_dec',-1)" class="tt flL_cr"><small class="font_decV">A</small><a href="javascript:void(0);"><span class="tooltip"><span class="top"></span><span class="middle">Reduce font size</span><span class="bottom"></span></span></a></div></span><span class="icon_bg"><div socialano="TOI" socialpg="IncrFSLHS" onclick="ts('inc_dec',1)" class="tt flL_cr"><small class="font_incV">A</small><a href="javascript:void(0);"><span class="tooltip"><span class="top"></span><span class="middle">Increase font size</span><span class="bottom"></span></span></a></div></span></div></div><div class="main_social"><div id="commentWrapper" class="flL"><div id="sharebar"><div class="hbar_socail"><div class="cmtmn_new"><div><div class="cr_ht45" id="ctcnt1"><a href="#write"><div id="ctcnt1in" onmouseout="setshadow(this,'false')" onmouseover="setshadow(this,'true')" class="inactivetop" socialano="TOI" socialpg="ToiCmtcntboxLHS" onclick="focusbyframe();disablecrolling();"><div class="inactive_new" id="ctcnt2in"></div></div></a></div><a socialano="TOI" socialpg="ToiCmtcntboxLHS" onclick="focusbyframe();disablecrolling();" class="comment_img cmt_btn" href="#write">comments</a></div></div><div class="mar_ht70"><div data-show-faces="true" data-width="450" data-layout="box_count" data-send="false" class="fb-like" data-href="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms"></div></div><div onclick="loyalitypoints();" id="twtdiv"><a data-count="vertical" data-lang="en" class="twitter-share-button" href="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms" data-url="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms" data-counturl="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms"></a></div><div class="padRT" id="gpls"><g:plusone callback="plusClick" size="tall"/><script>
																										function plusClick(data){
																											_gaq.push(['_trackEvent','GooglePlus','GplusshareLHS']);
																											logaction('717');
																											logonmyt('Shared',navmsid,'google');
																											log('sh_fb_tw_hk',navmsid);
																										}

																			</script></div><div socialano="Linkedin" socialpg="LinkedincntboxLHS" class="mTop10"><script data-counter="top" type="IN/Share" data-url="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms"></script></div><div class="parlleldiv1 mTop10"><div pg="BookshareMore" id="more"><a id="moreimg1" class="fnt_11ba" href="javascript:void(0)"><span socialano="TOI" socialpg="SharemoreLHS" class="">Share More</span></a></div></div><div class="mTop10 height20"><div class="flLm"><div id="email" class="wd27"><div class="tt pad_new"><a href="javascript:void();" class="point_cr"><div socialano="TOI" socialpg="MailLHS" id="emailimg1" onclick="logaction('4');logonmyt('Shared',navmsid,'Email');" class="email_img"></div><span class="tooltip"><span class="top"></span><span class="middle">Email this article</span><span class="bottom"></span></span></a></div></div></div><div class="flLm"><div id="save" class="floatleft wd27"><div class="tt pad_new"><a href="javascript:void();" onclick="showdivlayeroff('22328733','savedat1','close');"><div socialano="TOI" socialpg="SaveLHS" id="saveimg1" onclick="logaction('6');" class="save_img"></div><span class="tooltip"><span class="top"></span><span class="middle">Save this article</span><span class="bottom"></span></span></a></div></div></div></div><div class="mTop10 height20"><div class="flLm"><div id="printarea" class="tt"><a target="_blank" href="/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms?prtpage=1"><small socialano="TOI" socialpg="PrintLHS" class="print_img"></small><span class="tooltip"><span class="top"></span><span class="middle">Print this article</span><span class="bottom"></span></span></a></div></div><div class="flL"><div socialano="TOI" socialpg="ReduFSLHS" align="right" onclick="ts('inc_dec',-1)" class="tt flL_cr"><small class="font_decH">A</small><a href="javascript:void(0);"><span class="tooltip"><span class="top"></span><span class="middle">Reduce font size</span><span class="bottom"></span></span></a></div><div socialano="TOI" socialpg="IncrFSLHS" onclick="ts('inc_dec',1)" class="tt flL_cr"><small class="font_incH">A</small><a href="javascript:void(0);"><span class="tooltip"><span class="top"></span><span class="middle">Increase font size</span><span class="bottom"></span></span></a></div></div></div><div class="mTop20"><object id="myMovie" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" height="17" width="60"><param name="movie" value="/photo/16850360.cms"><param name="allowFullScreen" value="true"><param name="quality" value="high"><param name="wmode" value="opaque"><param name="allowScriptAccess" value="always"><param name="allowNetworking" value="all"><param name="flashvars" value=""><embed allowfullscreen="true" quality="high" wmode="transparent" allowscriptaccess="always" allownetworking="all" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="myMovie" src="/photo/16850360.cms" style="z-index:-1" flashvars="jsparam=CopyurlLHS" height="17" width="60"></embed></object></div></div></div></div></div><div><div id="moredata1"><div id="moredat"><DIV style="swidth: 280px; padding:0px; margin:0px;" id="morearea"><div style="padding:10px;"><table id="popupimg" width="100%" cellspacing="0" cellpadding="0" border="0"><a class="close" style="color:#F00000;text-decoration:none;float:right;" href="javascript:void();"><div pg="asMoreClose" class="ashw clsimg"></div></a><tr><td class="goo"><a pg="asMoreGoogleBM" href="javascript:logaction('707');logonmyt('Shared',navmsid,'Google');addto(7);">Google Bookmarks</a></td><td class="new"><a pg="asMoreNewsvine" href="javascript:logaction('708');logonmyt('Shared',navmsid,'Newsvine');addto(4);">Newsvine</a></td></tr><tr><td class="liv"><a pg="asMoreLiveBM" href="javascript:logaction('709');logonmyt('Shared',navmsid,'Live');addto(13);">Live Bookmarks</a></td><td class="tec"><a pg="asMoreTechnorati" href="javascript:logaction('710');logonmyt('Shared',navmsid,'Technorati');addto(5);">Technorati</a></td></tr><tr><td class="yah"><a pg="asMoreYahooBM" href="javascript:logaction('711');logonmyt('Shared',navmsid,'Yahoo');addto(6);">Yahoo Bookmarks</a></td><td class="blo"><a pg="asMoreBlogmarks" href="javascript:logaction('712');logonmyt('Shared',navmsid,'Blogmarks');addto(15);">Blogmarks</a></td></tr><tr><td class="del"><a pg="asMoreDelicious" href="javascript:logaction('713');logonmyt('Shared',navmsid,'Del.icio.us');addto(1);">Del.icio.us</a></td><td valign="middle"><span style="margin-right:3px;" class="ac_img_btn"></span><a pg="asMoreApnaC" href="javascript:logaction('714');logonmyt('Shared',navmsid,'ApnaCircle');addto(20);">ApnaCircle</a></td></tr></table></div></DIV></div></div><div id="emaildata1" class="divhide"><div id="emaildat"><a class="close flR_clrblk" href="javascript:void();"><div pg="asMoreClose" class="ashw clsimg"></div></a><iframe title="Email" align="left" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="350" width="450" id="emailiframe1" name="emailiframe"></iframe></div></div><div id="savedata1" class="divhide"><div class="flR_pad10"><div border="0" class="ashw clsimg close point_cr"></div></div><div id="savedat1"><div class="height20"><div class="save_art">My Saved articles</div></div><div class="clr_mTB10"><div class="pad_left10"><img title="Login" alt="Login" border="0" src="/photo/5926469.cms" class="close point_cr" onclick="funcsignincomment()"></div><div class="flL_padr"><a><img title="Register@indiatimes" alt="Register@indiatimes" border="0" src="/photo/5926471.cms" class="close" onclick="funcsignupcomment()"></a></div></div></div></div></div><div><script>var facebookktitle='Want to serve Gujarat till 2017: Narendra Modi';
                                                    facebookktitle=facebookktitle+" - The Times of India";
                                                    var facebooksyn='"People of Gujarat have given me a mandate to serve them till 2017 and I have to do this with my full strength," Narendra Modi said.';</script></div><span style="float:left;" name="advenueINTEXT" id="advenueINTEXT"><!-- google_ad_section_start --><div class="storydiv cm_filter stry_div" id="storydiv"><div style="border-top: 1px solid #929292;margin: 4px 0 0px 0px; padding: 4px 0px 0px 0px;float:left;" class="clearfix"><iframe name="adhomepage" id="adhomepage" ALLOWTRANSPARENCY="true" title="Advertisement" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="82" width="660" src="http://timesofindia.indiatimes.com/configspace/ads/TOI_ArticleShow_TOP_revised.html"></iframe></div><div style="padding:0; border-top:none;margin:0 0 7px 0;" class="read_more">READ MORE
																		<span style="margin-left:5px;" class="blk_ar_rt"></span><a style="margin-left:0" pg="asReadm1" href="http://timesofindia.indiatimes.com/topic/Narendra-Modi" target="">Narendra Modi</a><span style="padding:0 5px;">|</span><a style="margin-left:0" pg="asReadm2" href="http://timesofindia.indiatimes.com/topic/Gujarat-chief-minister" target="">Gujarat chief minister</a><span style="padding:0 5px;"></span></div><div style="min-width:155px" id="LeftData"><div id="videodivparent" class="videobrdr"><div class="clearfix" id="videodiv1"></div><div class="padL5 clearfix"><div id="relatedvideoonarticle"><div class="fnt_11ba clearFix" id="fnt11ba"><div><div class="botvideo mTop15"><div id="lbano" onclick="l1('right');" class="ltarrow_box1"><span class="lt_arrow"></span></div><div class="video_list"><p class="more_v">
																									RELATED VIDEOS</p><div id="rel_vd_top" class="rel_vd_top"><div class="rel_vd_box" id="rleatedvideoslide"><ul><li class="mRigth16"><a target="_parent" href="javascript:putvv(22332285,1,'videos/news/No-PM-ambition-Narendra-Modi-wants-to-serve-Gujarat-till-2017');"><img border="0" src="/thumb/22332285.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="javascript:putvv(22332285,1,'videos/news/No-PM-ambition-Narendra-Modi-wants-to-serve-Gujarat-till-2017');">No PM ambition? Narendra Modi ...</a></span></li><li><a target="_parent" href="javascript:putvv(22317601,1,'videos/news/Vanzaras-letter-Cong-calls-Gujarat-bandh-to-press-for-Modis-resignation');"><img border="0" src="/thumb/22317601.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="javascript:putvv(22317601,1,'videos/news/Vanzaras-letter-Cong-calls-Gujarat-bandh-to-press-for-Modis-resignation');">Vanzara's letter: Cong calls G...</a></span></li><li><a target="_parent" href="javascript:putvv(22246137,1,'videos/news/RSS-leader-meets-Advani-to-clear-way-for-Modi');"><img border="0" src="/thumb/22246137.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="javascript:putvv(22246137,1,'videos/news/RSS-leader-meets-Advani-to-clear-way-for-Modi');">RSS leader meets Advani to cle...</a></span></li><li><a target="_parent" href="javascript:putvv(22164748,1,'videos/news/Modi-indirectly-slams-Asaram-asks-saints-to-keep-good-conduct');"><img border="0" src="/thumb/22164748.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="javascript:putvv(22164748,1,'videos/news/Modi-indirectly-slams-Asaram-asks-saints-to-keep-good-conduct');">Modi indirectly slams Asaram, ...</a></span></li><li><a target="_parent" href="javascript:putvv(22114457,1,'videos/news/SIT-disregarded-destruction-of-evidence-by-Modi-govt-Zakia');"><img border="0" src="/thumb/22114457.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="javascript:putvv(22114457,1,'videos/news/SIT-disregarded-destruction-of-evidence-by-Modi-govt-Zakia');">SIT disregarded destruction of...</a></span></li><li><a target="_parent" href="javascript:putvv(22063285,1,'videos/news/Corruption-has-destroyed-dignity-of-PMO-Narendra-Modi');"><img border="0" src="/thumb/22063285.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="javascript:putvv(22063285,1,'videos/news/Corruption-has-destroyed-dignity-of-PMO-Narendra-Modi');">Corruption has destroyed digni...</a></span></li></ul></div></div></div><div id="rbano" onclick="l1('left');" class="rtarrow_box1"><span class="rt_arrow"></span></div></div></div></div></div></div></div><div id="slidshdiv"></div><div id="sshow"><div class="ad_box"><div id="bellyad"><div class="mainimg1"><a href="javascript:void();" onclick="showf2(0);putvv(vidmsid,1,'videos/news/No-PM-ambition-Narendra-Modi-wants-to-serve-Gujarat-till-2017');"><img pg="asStoryVid" class="" vspace="0" marginheight="0" marginwidth="0" width="300" border="0" src="http://timesofindia.indiatimes.com/thumb/msid-22332285,width-300,resizemode-4/No-PM-ambition-Narendra-Modi-wants-to-serve-Gujarat-till-2017.jpg" alt="No PM ambition? Narendra Modi wants to serve Gujarat till 2017" title="No PM ambition? Narendra Modi wants to serve Gujarat till 2017" ag=""><div pg="asStoryVid" class="bigvidplay"></div></a><div class="zoomimg1 wd300"><div class="photo11">No PM ambition? Narendra Modi wants to serve Gujarat till 2017</div></div></div></div></div></div><div class="new_class2" id="ftredcmt"></div></div><div id="relartstory" class="relart"><h2>RELATED</h2><div style="sheight:220px;padding-bottom:10px;" id="tab-container"><div id="video_rel"><div class="relatedcov relatedcovin clearFix"><ul class="relstr_list"><li><a style="font-weight:bold;" pg="asRelVid1" href="/videos/news/No-PM-ambition-Narendra-Modi-wants-to-serve-Gujarat-till-2017/videoshow/22332285.cms">No PM ambition? Narendra Modi wants to serve Gujarat till 2017<span class="red_arrow"></span></a></li><li><a style="" pg="asRelVid2" href="/videos/news/Vanzaras-letter-Cong-calls-Gujarat-bandh-to-press-for-Modis-resignation/videoshow/22317601.cms">Vanzara's letter: Cong calls Gujarat bandh to press for Modi's resignation<span class="red_arrow"></span></a></li><li><a style="" pg="asRelVid3" href="/videos/news/RSS-leader-meets-Advani-to-clear-way-for-Modi/videoshow/22246137.cms">RSS leader meets Advani to clear way for Modi<span class="red_arrow"></span></a></li><li><a style="" pg="asRelVid4" href="/videos/news/Modi-indirectly-slams-Asaram-asks-saints-to-keep-good-conduct/videoshow/22164748.cms">Modi indirectly slams Asaram, asks saints to keep good conduct<span class="red_arrow"></span></a></li><li><a style="" pg="asRelVid5" href="/videos/news/SIT-disregarded-destruction-of-evidence-by-Modi-govt-Zakia/videoshow/22114457.cms">SIT disregarded destruction of evidence by Modi govt: Zakia<span class="red_arrow"></span></a></li></ul></div></div><div class="relatedcov clearFix" style="float:left;swidth:218px;"><div class="relatedcovin"><ul class="relstr_list" id="marketnews"><li><a pg="asRelArt1" href="/india/Gujarat-riots-blot-on-Modis-career-Manohar-Parrikar/articleshow/22340534.cms">Gujarat riots blot on Modi's career: Goa CM</a></li></ul></div></div></div></div><div class="clearFix" id="inc_dec"><div id="artext1" class="Normal showpage1"><div class="Normal">GANDHINAGAR: Playing down his prime ministerial aspirations,  <a href="http://timesofindia.indiatimes.com/topic/Gujarat-chief-minister">Gujarat chief minister</a>  <a href="http://timesofindia.indiatimes.com/topic/Narendra-Modi">Narendra Modi</a> on Thursday said he never dreams of holding the top post as he is bound to respect the mandate given to him by the people of his state till 2017.<br> <br> "Those who dream of becoming something end up destroying themselves. One should not dream of becoming something, but one should dream of doing something," Modi said when a student asked him whether he will come and interact with them in 2014 after 'he will become the Prime Minister'.<br> <br> "I never see such dreams (of becoming PM), nor am I going to see such dreams. People of Gujarat have given me a mandate to serve them till 2017 and I have to do this with my full strength," Modi said.<br> <br> The  <a href="http://timesofindia.indiatimes.com/topic/Bharatiya-Janata-Party">BJP</a> strongman, who is in the race for the party's PM candidate, was replying to questions asked by students who had gathered at a function for felicitating best teachers of the state on the occasion of Teacher's Day.<br> <br> Modi shared the dais with state governor Kamla Beniwal at the function for the first time after fresh confrontation between them. Beniwal has returned the controversial Gujarat Lokayukta Bill for reconsideration to the government with stinging remarks.<br> <br> Modi's comments come at a time when opposition Congress is gunning for his resignation and has given a call for Gujarat bandh on Friday after the explosive resignation letter of suspended IPS officer D G Vanzara and emergence of a sting operation CD involving two BJP MPs allegedly trying to derail the investigation in the Tusli Prajapati encounter case.<br> <br> Asked what prompted him to moot the idea of making 'statue of unity' of Sardar Patel in the state, Modi said every country in the world had aspired to build something monumental which assures its name in the world and India has nothing to boast of anything like that since independence.<br> <br> "And the work done by Sardar Patel of unifying the country is considered one of the greatest in the world. If we want to keep our nation intact, mantra of unity is important and that gave me the idea to build a statue of unity of Sardar Patel," Modi said.<br> <br> At the function, Ina Solanki from Vadodara asked Modi how many times he gets angry in a day and what he does when he gets angry.<br> <br> "I am a human being and I have all vices which any human being has. However, I don't get angry but many times I feel pain. Particularly it is very painful for me when people older then me touch my feet," he replied.<br> <br> Modi had informal interactions with school children who posed questions to him on the subjects like how kids can convey their birthday wishes to him, from whom he learnt yoga and in his opinion which were the three most important development works he did in the state of Gujarat.<br> <br> Earlier in his address to the gathering, which comprised mostly teachers, he announced that from the next year his government will also felicitate best teachers down from the pranth level to district and state levels.<br> <br> Taking an indirect dig at the central government, he said, "State government is also intending to increase the amount of awards to these teachers as at present rupee has lost its value. Our rupee has been admitted in ICU (intensive care unit), so we have to increase the amount so that teachers do not feel disheartened."<br> <br> He also appealed to the teachers of the state to focus more on imparting quality education in the state.<br> <br> "Now age of teaching has ended, now its the age of learning. Today for students there is only one guru, Google-guru. Teachers have to compete with this new age guru and unless they focus on imparting quality education no student will value teachers," he said.<br> <br> While congratulating recipients of the best teachers' awards, Beniwal emphasised on the value of good teachers and their duty to give back to society.  </div></div><span id="storyendpath"></span><div style="margin-right:10px" class="flL"><div style="width:100px;float:left;"><a pg="asPOCpcomm" style="cursor:pointer;margin-top:5px;" class="post_cmt" onclick="focusbyframe();disablecrolling();show_new('postCmtIn1');fillformdetail(1)" href="#write"></a></div></div><div class="clrbth"></div><div class="clrbth"></div></div><div style="display:none;margin-top:10px;" id="relartstoryano" class="relart"></div><style>.AR_1 .ob-text-content{height:50px!important}</style><div data-ob-template="timesofindia" data-widget-id="AR_1" class="OUTBRAIN clearfix"></div><script src="http://widgets.outbrain.com/outbrain.js" type="text/javascript"></script><div style="border-top: 1px solid black;" class="mTop10_c clearfix"><iframe src="http://timesofindia.indiatimes.com/configspace/ads/TOI_Articleshow_Bottom.html" width="660" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" align="center" title="Advertisement" allowtransparency="true" name="adhomebottom"></iframe></div><div id="height_cal"><div class="fnt_11ba clearFix" id="fnt11ba"><div><div class="botvideo mTop15"><div id="lb" onclick="l('right');" class="ltarrow_boxoff"><span class="lt_arrow"></span></div><div class="video_list"><p class="more_v"><span class="white_arrow"></span>ALSO ON TOI</p><div style="position:relative;overflow:hidden;swidth:638px;background-color:#353535;height:125px;padding-top:5px"><div style="position:relative;left:0px;top:0px;width:2400px" id="recvidslider"><ul><li class="mRigth16"><a target="_parent" href="/videos/news/Airhostess-suicide-case-Delhi-court-grants-Gopal-Kanda-bail/videoshow/22336978.cms"><img height="75" width="100" border="0" src="/thumb/22336978.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Airhostess-suicide-case-Delhi-court-grants-Gopal-Kanda-bail/videoshow/22336978.cms">Airhostess suicide case: Delhi...</a></span></li><li><a target="_parent" href="/videos/news/I-would-have-done-better-than-Modi-post-Godhra-Goa-CM/videoshow/22336340.cms"><img height="75" width="100" border="0" src="/thumb/22336340.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/I-would-have-done-better-than-Modi-post-Godhra-Goa-CM/videoshow/22336340.cms">I would have done better than ...</a></span></li><li><a target="_parent" href="/videos/news/Salmans-hit-and-run-case-adjourned-till-Aug-24/videoshow/22334383.cms"><img height="75" width="100" border="0" src="/thumb/22334383.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Salmans-hit-and-run-case-adjourned-till-Aug-24/videoshow/22334383.cms">Salman's hit-and-run case adjo...</a></span></li><li><a target="_parent" href="/videos/news/BSF-jawan-kills-2-seniors-injures-one-in-Assam/videoshow/22333514.cms"><img height="75" width="100" border="0" src="/thumb/22333514.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/BSF-jawan-kills-2-seniors-injures-one-in-Assam/videoshow/22333514.cms">BSF jawan kills 2 seniors, inj...</a></span></li><li><a target="_parent" href="/videos/news/No-PM-ambition-Narendra-Modi-wants-to-serve-Gujarat-till-2017/videoshow/22332285.cms"><img height="75" width="100" border="0" src="/thumb/22332285.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/No-PM-ambition-Narendra-Modi-wants-to-serve-Gujarat-till-2017/videoshow/22332285.cms">No PM ambition? Narendra Modi ...</a></span></li><li><a target="_parent" href="/videos/news/Five-mentally-challenged-girls-sexually-abused-in-Jammu/videoshow/22328825.cms"><img height="75" width="100" border="0" src="/thumb/22328825.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Five-mentally-challenged-girls-sexually-abused-in-Jammu/videoshow/22328825.cms">Five mentally challenged girls...</a></span></li><li><a target="_parent" href="/videos/news/Sexual-assault-case-MP-hostel-warden-also-involved-with-Asaram/videoshow/22328344.cms"><img height="75" width="100" border="0" src="/thumb/22328344.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Sexual-assault-case-MP-hostel-warden-also-involved-with-Asaram/videoshow/22328344.cms">Sexual assault case: 'MP hoste...</a></span></li><li><a target="_parent" href="/videos/news/Fishermen-killing-case-India-talks-tough-to-Italy/videoshow/22327983.cms"><img height="75" width="100" border="0" src="/thumb/22327983.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Fishermen-killing-case-India-talks-tough-to-Italy/videoshow/22327983.cms">Fishermen killing case: India ...</a></span></li><li><a target="_parent" href="/videos/news/Japanese-PM-worried-about-radioactive-leak-from-Fukushima/videoshow/22324192.cms"><img height="75" width="100" border="0" src="/thumb/22324192.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Japanese-PM-worried-about-radioactive-leak-from-Fukushima/videoshow/22324192.cms">Japanese PM worried about radi...</a></span></li><li><a target="_parent" href="/videos/news/Caught-on-tape-Gunbattle-at-14000-ft/videoshow/22322894.cms"><img height="75" width="100" border="0" src="/thumb/22322894.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Caught-on-tape-Gunbattle-at-14000-ft/videoshow/22322894.cms">Caught on tape: Gunbattle at 1...</a></span></li><li><a target="_parent" href="/videos/news/Substandard-midday-meal-HC-issues-notice-to-Centre-over-PIL/videoshow/22317958.cms"><img height="75" width="100" border="0" src="/thumb/22317958.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Substandard-midday-meal-HC-issues-notice-to-Centre-over-PIL/videoshow/22317958.cms">Substandard midday meal: HC is...</a></span></li><li><a target="_parent" href="/videos/news/Vanzaras-letter-Cong-calls-Gujarat-bandh-to-press-for-Modis-resignation/videoshow/22317601.cms"><img height="75" width="100" border="0" src="/thumb/22317601.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Vanzaras-letter-Cong-calls-Gujarat-bandh-to-press-for-Modis-resignation/videoshow/22317601.cms">Vanzara's letter: Cong calls G...</a></span></li><li><a target="_parent" href="/videos/news/Rajya-Sabha-passes-land-acquisition-bill/videoshow/22316848.cms"><img height="75" width="100" border="0" src="/thumb/22316848.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Rajya-Sabha-passes-land-acquisition-bill/videoshow/22316848.cms">Rajya Sabha passes land acquis...</a></span></li><li><a target="_parent" href="/videos/news/Sidhu-returns-to-Amritsar-says-he-was-away-to-earn-money/videoshow/22315160.cms"><img height="75" width="100" border="0" src="/thumb/22315160.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/Sidhu-returns-to-Amritsar-says-he-was-away-to-earn-money/videoshow/22315160.cms">Sidhu returns to Amritsar, say...</a></span></li><li><a target="_parent" href="/videos/news/US-Senate-panel-votes-to-authorize-use-of-force-in-Syria/videoshow/22314261.cms"><img height="75" width="100" border="0" src="/thumb/22314261.cms?width=100&amp;height=75" alt="" title=""><span class="playimg_list"></span></a><span class="video_title"><a target="_parent" href="/videos/news/US-Senate-panel-votes-to-authorize-use-of-force-in-Syria/videoshow/22314261.cms">US Senate panel votes to autho...</a></span></li></ul></div></div></div><div id="rb" onclick="l('left');" class="rtarrow_box"><span class="rt_arrow"></span></div></div></div><input id="videolistrootcount" name="videolistrootcount" type="hidden" value="15"></div></div></div><script>if(doweshowbellyad==0){document.getElementById("LeftData").style.display="none";document.getElementById("relartstory").style.display="none";}</script><!-- google_ad_section_end --><script>
                                                    (function(){
                                                        var event_names = {
                                                            "click" :   "" ,
                                                            "tweet" :  "",
                                                            "retweet" : "source_tweet_id",
                                                            "follow" : "screen_name",
                                                            "favorite" : "tweet_id"
                                                        };

                                                        for(var event_name in event_names)
                                                        {

                                                            if(event_names.hasOwnProperty(event_name)){

                                                                twttr.events.bind(event_name, function(intent_event){
                                                                    if(intent_event)
                                                                    {
                                                                        var lbl= intent_event.type;
                                                                        if(lbl=='tweet')
                                                                        {
                                                                            _gaq.push(['_trackEvent','Twitter','TWshareLHS']);
                                                                            logaction('716');
                                                                            logonmyt('Shared',navmsid,'tweet');
                                                                            log('sh_tw',navmsid);
                                                                        }
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    }());

													</script></span><a name="authorcmt" id="authorcmt"></a><div id="viewathrcmt" class="clearfix mTop10_l"></div><div id="adshowbtm"></div><div class="clearfix srch_box" id="follow_srch"><div style="padding: 12px 10px;width: 342px;" class="folow_box">Follow the Times of India - India section<div class="mTop15"><div class="flL"><iframe id="fbk" allowTransparency="true" style="display:none;border:none; overflow:hidden; width:82px; height:20px;" frameborder="0" scrolling="no"></iframe></div><div class="flL"><a target="_blank" href="https://twitter.com/toiindianews"><span class="twt_img"></span></a></div><div class="flL"><div><a style="color:#3675b0;font:bold 11px arial" href="/rssfeeds/-2128936835.cms" class="point_cr"><span class="rss_img"></span></a></div></div></div></div><div style="padding: 11px 6px;" class="srch_news">Search for News

														<form class="frmdisp flL" onsubmit="return search_topic();" action="/search.cms" method="post" name="frmsearch2" id="frmsearch2"><INPUT name="type" value="" type="hidden"><input name="catkey" value="233446897" type="hidden"><INPUT name="search" value="3" type="hidden"><INPUT name="sitesearch" value="" type="hidden"><INPUT name="fields" value="1" type="hidden"><INPUT name="searchtype" value="2" type="hidden"><INPUT name="article" value="2" type="hidden"><INPUT name="search1" type="hidden" value="0"><input AUTOCOMPLETE="off" onclick="make_blank1();" name="query1" type="text" class="search_txt" value=""></form><div class="txt_hint" id="txtHint"></div><span onclick="return search_topic();" class="hand_cr search_btn">Search</span></div></div><div class="clrbth"></div><div><a name="write" id="write"></a><div style="width:645px;font-family:arial;font-size:11px;color:#9f9f9f;"><div style="padding-right:10px;swidth:645px"><div id="newpostCmtIn"></div><div id="dupli_abus"></div><div style="margin-top:10px;display:none;float: right;font-size: 12px;font-weight: bold;" id="postid"><a onclick="show_new('postCmtIn1');fillformdetail(1)" href="javascript:void(0)">Post another comment</a></div></div><div style="margin-top:20px"><div style="margin-top:3px" id="postCmtIn1"><div id="main-div"><form class="cmtFrm" action="#" method="post" enctype="application/x-www-form-urlencoded" id="commentOnArticle" name="commentOnArticle"><table id="commentTable"><tr><td class="pcmt" colspan="2"><span style="padding:0px"><h2 style=" color: #2D2D2D;font: bold 100% 'dosis',Arial,Helvetica,sans-serif; margin-bottom: 3px; text-transform: uppercase; font-size : 14px;">Share your views - post your comment below</h2></span></td></tr><tr><td id="loginTR1" colspan="2"><div style="display:block;font:bold 12px arial;color:#333333; margin-right: 19px; margin-bottom: 5px; float : left;" id="socwidgetTxt"><span class="txt-font">We encourage you to log in and comment. Non-logged-in comments will go through a verification process for security reasons.</span><br><br></div><div style="display:block;font-weight:normal;margin-bottom:7px;line-height:35px;" class="pcmt clearfix" id="socwidget"><div style="line-height : 0px;" class="lc"><span class="lc loginPost">Log in to post this comment</span><a id="closeFB" href="javascript:saveMsgId('commentOnArticle','22328733');clickCapture('1','22328733','commentOnArticle');"><span class="fbnewlinkbt" id="fb"></span></a><a id="closeTWT" href="javascript:saveMsgId('commentOnArticle','22328733');clickCapture('2','22328733','commentOnArticle');"><span id="tw" class="twtnewlinkbt"></span></a><a id="closeSso" href="javascript:saveMsgId('commentOnArticle','22328733');clickCapture('3','22328733','commentOnArticle');"><span class="toinewlinkbt"></span></a></div></div></td></tr><tr><td colspan="2"><input name="fromname" id="pcName" type="hidden"><input name="location" id="pclocation" type="hidden"><input name="fromaddress" id="pcaddress" type="hidden"><input value="qrst" name="userid" id="pcuserid" type="hidden"><input name="msid" type="hidden" value="22328733"><input name="ArticleID" type="hidden" value="22328733"><input name="roaltdetails" value="1" type="hidden"><input id="parentid" name="parentid" value="0" type="hidden"><input id="rootid" name="rootid" value="0" type="hidden"><input name="loggedstatus" value="1" type="hidden"><textarea onblur="fillDefValue(this,'Your comment')" onfocus="makeBlank(this,'Your comment')" onkeyup="remainingChar(this,'atrcharcount')" style="width:600px; height : 100px;" name="message" class="msgtxtarea" id="message">Your comment</textarea><input id="id" name="id" type="hidden" value="22328733"></td></tr><tr><td><div style="position : relative; display: block;z-index:999;" class="ShareCharcter blk"><div class="Share rc loginshare"><label><div class="FbChk lc"><input style="margin-top:3px;" value="0" id="chkfbn" name="chkfbn" type="checkbox" class="chkWidth"></div><img class="lc" src="/photo/19035896.cms"></label><label><div class="twtChk lc"><input style="margin-top:3px;" value="0" id="chktwtn" name="chktwtn" type="checkbox" class="chkWidth"></div><img class="lc" src="/photo/19035966.cms"></label></div><div class="charColor lc">Characters Remaining: <span id="atrcharcount">3000</span></div></div><script>
																						if (readCookie("MSCSAuthDetail") != null){}
																						else{$(".loginshare").hide();}

																					</script></td></tr><tr><td class="small-font" style="width: 614px;">Refrain from posting comments that are obscene, libellous, slanderous or inflammatory, and do not indulge in personal attacks, name calling or inciting hatred against any community. <b>Help us delete comments</b> that do not follow these guidelines <b>by marking them offensive</b>. Let's work together to keep the conversation civil.</td></tr><tr><td style="padding-top : 10px;" colspan="2"><span class="blk1"><span style="width:115px;" class="PostComtBtndiv rc" onclick="submitCommentForm(this,'commentOnArticle','');">pOST cOMMENT</span></span></td></tr></table></form></div></div></div></div><div style="opacity: 0; display: none; position: absolute; top: 0px; left: 0px; z-index: 1000; background: none repeat scroll 0% 0% rgb(0, 0, 0);  width: 1505px; height: 3687px;" id="backgroundPopup2"></div><div style="color: #7F7F7F; overflow: hidden; position: absolute; display: none; z-index: 2147483646; top: 25px; width: 70%;" id="popupContact2" class="blklogin"><center><div id="popup"><div id="header-Div"><span id="popup-header" class="lc">Post your comment</span><span style="cursor:pointer; width:15px; height:21px; margin:5px;  background-image: url('http://timesofindia.indiatimes.com/photo/19127282.cms'); background-position: -138px -29px; float :right;" onclick="disablePopup2();" id="closs_btn" href="#"></span><br><br><div class="popup-heading">We encourage you to register/login and proceed.<br>However, if you choose to remain
                                                                        non-loggedin, you are required to fill up the form below and verify
                                                                        your email address before we can publish your comment.<br> That way, we
                                                                        can verify that the email address doesn't belong to someone else.</div></div><div id="body-Div"><table><tr><td id="registerTD"><div id="register-Div"><span class="spanHeader lc">Register/Login</span><br><a class="lc" href="javascript:void(0)" id="closeFB" onclick="javascript:togglePopupImgs('fbpopup');saveMsgId('commentOnArticle','22328733');clickCapture('1','22328733','commentOnArticle');"><span class="fblinkbt" id="fbpopup"></span></a><a class="lc" id="closeTWT" onclick="javascript:togglePopupImgs('twpopup');saveMsgId('commentOnArticle','22328733');clickCapture('2','22328733','commentOnArticle');"><span id="twpopup" class="twtlinkbt"></span></a><div class="lc" pg="asPYCm"><a href="javascript:togglePopupImgs('emailpopup');openEmailPopupn();saveMsgId('commentOnArticle','22328733');clickCapture('3','22328733','commentOnArticle');"><span class="Emailbtn" id="emailpopup"></span></a></div></div></td><td><form id="registerForm" action=""><div id="userDtlsDiv"><span class="spanHeader">Proceed Without Registration</span><br><table id="popup-table"><tr><td><span class="popuplabel lc">Full Name</span></td><td><span class="rc"><input name="fromname" id="fromName" type="text"></span><span class="error rc" id="nameError"></span></td></tr><tr><td><span class="popuplabel lc">Location</span></td><td><span class="rc"><input name="location" id="location" type="text"></span><span class="error rc" id="locationError"></span></td></tr><tr><td><span class="popuplabel lc">Email</span></td><td><span class="rc"><input name="fromaddress" id="email" type="text"><input id="comments" name="message" type="hidden"><input name="userid" value="qrst" type="hidden"><input name="msid" type="hidden" value="22328733"><input name="ArticleID" type="hidden" value="22328733"><input name="roaltdetails" value="1" type="hidden"><input id="parentid" name="parentid" value="0" type="hidden"><input id="rootid" name="rootid" value="0" type="hidden"><input name="loggedstatus" value="0" type="hidden"><input name="verifyuser" value="1" type="hidden"></span><span class="error rc" id="emailError"></span></td></tr><tr><td><span class="popuplabel lc">Solve</span></td><td><span class="rc"><input style="width: 180px; border-radius:1px 4px 4px 2px; " value="" id="mathuserans1" type="text" class="rc"><span style="border-radius: 4px 0px 0px 4px; border: 1px solid #D1DCE2; border-right : none; padding: 5px 11px 5px 5px; width: 51px; display: block; float: left; " id="mathq1">6 + 0 =</span><span style="display:none" id="mathans1">2</span></span><span class="error rc" id="capchaError"></span></td></tr><tr><td colspan="2"><div class="Share rc"><label><div class="FbChk lc"><input value="0" id="chkfb" name="chkfb" type="checkbox" class="chkWidth"></div><img class="lc" src="/photo/19035896.cms"></label><label><div class="twtChk lc"><input value="0" id="chktwt" name="chktwt" type="checkbox" class="chkWidth"></div><img class="lc" src="/photo/19035966.cms"></label></div></td></tr><tr><td colspan="2"><span onclick="submitNonLoggedInComment();" class="PostComtBtndiv rc" style="width: 100px; text-transform: capitalize;" id="proceedBtn">Proceed</span></td></tr></table></div></form></td></tr></table></div></div></center><div style="clear: both"></div></div><div style="opacity: 0; display: none; position: absolute; top: 0px; left: 0px; z-index: 1000; background: none repeat scroll 0% 0% rgb(0, 0, 0);  width: 1505px; height: 3687px;" id="backgroundPopup2n"></div><div style="color: #7F7F7F; overflow: hidden; position: absolute; display: none; z-index: 2147483646; top: 25px; width: 70%;" id="popupContact2n" class="blklogin"><center><div id="popup"><div id="header-Div"><span id="popup-header" class="lc">Post your comment</span><span style="cursor:pointer; width:15px; height:21px; margin:5px;  background-image: url('http://timesofindia.indiatimes.com/photo/19127282.cms'); background-position: -138px -29px; float :right;" onclick="disablePopup2n();" id="closs_btn" href="#"></span><br><br><div class="popup-heading">We encourage you to register/login and proceed.<br>However, if you choose to remain
                                                                        non-loggedin, you are required to fill up the form below and verify
                                                                        your email address before we can publish your comment.<br> That way, we
                                                                        can verify that the email address doesn't belong to someone else.</div></div><div id="body-Div"><table><tr><td id="registerTD"><div id="register-Div"><span class="spanHeader lc">Register/Login</span><br><a class="lc" href="javascript:void(0)" id="closeFB" onclick="javascript:togglePopupImgs('fbpopup');saveMsgId('commentOnComment','22328733');clickCapture('1','22328733','commentOnComment');"><span class="fblinkbt" id="fbpopup"></span></a><a class="lc" id="closeTWT" onclick="javascript:togglePopupImgs('twpopup');saveMsgId('commentOnComment','22328733');clickCapture('2','22328733','commentOnComment');"><span id="twpopup" class="twtlinkbt"></span></a><div class="lc" pg="asPYCm"><a href="javascript:togglePopupImgs('emailpopup');openEmailPopupn2();saveMsgId('commentOnComment','22328733');clickCapture('3','22328733','commentOnComment');"><span class="Emailbtn" id="emailpopup"></span></a></div></div></td><td><form id="registerForm1" action=""><div id="userDtlsDiv"><span class="spanHeader">Proceed Without Registration</span><br><table id="popup-table"><tr><td><span class="popuplabel lc">Full Name</span></td><td><span class="rc"><input name="fromname" id="fromName" type="text"></span><span class="error rc" id="nameError1"></span></td></tr><tr><td><span class="popuplabel lc">Location</span></td><td><span class="rc"><input name="location" id="location" type="text"></span><span class="error rc" id="locationError1"></span></td></tr><tr><td><span class="popuplabel lc">Email</span></td><td><span class="rc"><input name="fromaddress" id="email" type="text"><input id="comments" name="message" type="hidden"><input name="userid" value="qrst" type="hidden"><input name="msid" type="hidden" value="22328733"><input name="ArticleID" type="hidden" value="22328733"><input name="roaltdetails" value="1" type="hidden"><input id="parentid" name="parentid" value="0" type="hidden"><input id="rootid" name="rootid" value="0" type="hidden"><input name="loggedstatus" value="0" type="hidden"><input name="verifyuser" value="1" type="hidden"></span><span class="error rc" id="emailError"></span></td></tr><tr><td><span class="popuplabel lc">Solve</span></td><td><span class="rc"><input style="width: 180px; border-radius:1px 4px 4px 2px; " value="" id="mathuserans4" type="text" class="rc"><span style="border-radius: 4px 0px 0px 4px; border: 1px solid #D1DCE2; border-right : none; padding: 5px 11px 5px 5px; width: 51px; display: block; float: left; " id="mathq4">6 + 0 =</span><span style="display:none" id="mathans4">2</span></span><span class="error rc" id="capchaError3"></span></td></tr><tr><td colspan="2"><div class="Share rc"><label><div class="FbChk lc"><input value="0" id="chkfb" name="chkfb" type="checkbox" class="chkWidth"></div><img class="lc" src="/photo/19035896.cms"></label><label><div class="twtChk lc"><input value="0" id="chktwt" name="chktwt" type="checkbox" class="chkWidth"></div><img class="lc" src="/photo/19035966.cms"></label></div></td></tr><tr><td colspan="2"><span onclick="submitNonLoggedInComment1();" class="PostComtBtndiv rc" style="width: 100px; text-transform: capitalize;" id="proceedBtn">Proceed</span></td></tr></table></div></form></td></tr></table></div></div></center><div style="clear: both"></div></div><div style="opacity: 0; display: none; position: absolute; top: 0px; left: 0px; z-index: 1000; background: none repeat scroll 0% 0% rgb(0, 0, 0); height: 2941px; width: 1346px;" id="backgroundPopup1"></div><div style="color: #7F7F7F; overflow: hidden; position: absolute; display: none; z-index: 2147483647; top: 25px; width: 64%;" id="popupContactAlertDiv" class="blklogin"><center style="padding: 12px;"><table id="verificationAlert"><tr><td><span style="cursor:pointer; width:15px; height:21px; margin:5px;  background-image: url('http://timesofindia.indiatimes.com/photo/19127282.cms'); background-position: -138px -29px" onclick="disablePopup1();" id="closs_btn" href="#" class="rc"></span></td></tr><tr><td class="lc"><img alt="Right-click" src="/photo/19560838.cms" class="lc"><span id="alertHeading">Thanks!</span></td></tr><tr><td class="alertContent lc">We have sent you a verification email.<br>To verify, just follow the link in the message</td></tr><tr><td class="alertContent lc"><div style="clear:both; padding-top:10px;"></div><a style="font-size:13px;" onclick="resendVerificationEmail();" href="javascript:void(0)" id="resendVerifylink">Resend verification mail</a><span id="emailSentSpan" class="rightlink nodisplay">Email sent</span><form id="resendForm"><input name="fromname" id="resendfromname" type="hidden"><input name="fromaddress" id="resendfromaddress" type="hidden"><input name="subject" id="resendsubject" type="hidden"><input name="toaddress" id="resendtoaddress" type="hidden"><input name="message" id="resendbody" type="hidden"></form></td></tr><tr><td></td></tr></table></center></div><div class="clrbth10"></div><div id="ad38650" name="ad38650" align="center"></div><iframe ALLOWTRANSPARENCY="true" title="Advertisement" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="60" width="660" src="http://netspiderads2.indiatimes.com/ads.dll/getad?slotid=38650" id="fr38650" name="fr38650"><a target="_blank" href="http://netspiderads2.indiatimes.com/ads.dll/clickthrough?slotid=38650"><img alt="Advertisement" height="60" width="660" border="0" src="http://netspiderads2.indiatimes.com/ads.dll/photoserv?slotid=38650"></a></iframe><a name="write1" id="write1"></a><style>.spantab span{cursor:pointer;color:#336797;}
                                                        .spantab span.exclude{cursor:auto;color:#71716F;}
                                                        .spantab span.current{cursor:pointer;color:#000000;font-weight:bold;}</style><div class="spantab" style="clear:both;font-size:12px;padding-top:20px;border-bottom:1px solid #cccccc;width:630px;padding-bottom:5px;"><span style="padding-right:5px;font-weight:bold;" class="exclude">Sort by:</span><span onclick="poulatecomment('','',this)" class="current" pg="asROsortNew">Newest</span><span style="padding:0px 3px;color:#CACAC2;">|</span><span onclick="poulatecomment('ordertype','asc',this)" pg="asROsortOld">Oldest</span><span style="padding:0px 3px;color:#CACAC2;">|</span><span onclick="poulatecomment('commenttype','mostrecommended',this)" pg="asROsortRecom" id="recommendedtotcount">Recommended</span><span style="padding:0px 3px;color:#CACAC2;">|</span><span onclick="poulatecomment('commenttype','mostdiscussed',this)" pg="asROsortMostDis">Most Discussed</span><span style="padding:0px 3px;color:#CACAC2;">|</span><span onclick="poulatecomment('commenttype','agree',this)" pg="asROsortAgree">Agree</span><span style="padding:0px 3px;color:#CACAC2;">|</span><span onclick="poulatecomment('commenttype','disagree',this)" pg="asROsortDisAgree">Disagree</span><span style="padding:0px 3px;color:#CACAC2;">|</span><span onclick="poulatecomment('loggedinuser','1',this)">Logged in Comments<sup style="color:red;font-size:10px">New!</sup></span></div></div><div id="populatecomment"></div><div id="gonext"></div><div class="clrbth"></div></div><div class="flR rightpart"><div style="width:296px;" class="rightboxwrap"><div style="width:290px;padding:0 0 2px 6px" class="commonlistwrap"><div class="sharetext">Connect with us</div><div class="followuscommon"><a target="_blank" class="twittercommon" href="https://twitter.com/timesofindia"></a><a target="_blank" class="facebookcommon" href="https://www.facebook.com/TimesofIndia"></a><a target="_blank" class="googlepluscommon" href="https://plus.google.com/+timesindia/posts"></a></div><div style="clear:both;"></div></div></div><div class="clrbth10"></div><div id="ad38762" name="ad38762" align="center"></div><iframe ALLOWTRANSPARENCY="true" title="Advertisement" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="70" width="300" src="http://netspiderads2.indiatimes.com/ads.dll/getad?slotid=38762" id="fr38762" name="fr38762"><a target="_blank" href="http://netspiderads2.indiatimes.com/ads.dll/clickthrough?slotid=38762"><img alt="Advertisement" height="70" width="300" border="0" src="http://netspiderads2.indiatimes.com/ads.dll/photoserv?slotid=38762"></a></iframe><div class="clrbth"></div><div class="clrbth"></div><div class="wd300"><script>showDCAdsRight1(0,0);</script></div><div class="clearfix mTop15"><iframe ALLOWTRANSPARENCY="true" title="Advertisement" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="70" width="316" src="http://timesofindia.indiatimes.com/configspace/ads/toiright.html" id="" name=""></iframe></div><div class="clearfix mTop15"><iframe ALLOWTRANSPARENCY="true" title="Advertisement" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="130" width="300" src="http://timesofindia.indiatimes.com/shadiadcodenri.cms?section=india"></iframe></div><div class="clearfix mTop15"><div id="socialreader_content"></div></div><div class="clearfix mTop1"><div style="display:none;" id="socialreader_content_new"><style>#inc_dec p {margin:10px 0;padding:5px 0;}
            *{margin:0px;padding:0px;}
            .main_container{border-bottom:1px dotted gray;width:300px;font-size:12px;font-weight:bold;font-family:arial;}
            .head_container{background-color:#373737;color:white;}
            .head_title{float:left;}
            .count_countainer{float:right;padding:5px 5px 0px 0px;width:75px;}
            .count_countainer span{padding:0px 4px 0px 4px;}
            .count_countainer .img{float:left;cursor:pointer;}

            .containt_container{overflow:hidden;position:relative;}
            .records_per_profile{border-bottom:1px dotted gray;padding:10px 0px 10px 0px;}
            .profile_img_countainer{float:left;margin-right: 5px;}
            .frndsname{color:#333;}
            .read{color:gray;}
            .profile_img{height:40px;width:40px;margin:3px;border:0px solid transparent;}
            .clr{clear:both;}
            .read_title_countainer{}
            .containts{width:1500px;position:relative;top:0px;left:0px;}
            .block{float:left;width:295px;padding:0px 0px 0px 5px;}
            .block:nth-last-child(3){border-bottom:0px solid transparent;}
            span{padding:0px 3px 0px 0px;}
            a{color:#024D99;}
            .img_cover{border:1px solid #707070;float:left;}
            .page_desc{width:42px;text-align:center;float:left;}</style><script type="text/javascript">
try
{


    var lockeventval=1;
    var lockeventval2=1;
    var count = 0;
    var blockVersion = 'block_1';
    var Increase = 2;
    var leftCount=0;
    var rightCount = 1;
    var myobj = new Array();
    function ShowNextNew()
    {

        if(lockeventval == 1 && rightCount <= myobj.length)
        {
            lockeventval = 0;
            $("#containts").animate({"left": "-=300px"},"fast",function(){
                lockeventval = 1;
                leftCount++;
                rightCount++;
                $('#shownPage').html(rightCount);
                //$('#left_image').attr('src','/photo/12505252.cms');
                if(parseInt($('#shownPage').text()) == parseInt($('#countedPage').text()))
                {
                    //$('#right_image').attr('src','/photo/12505250.cms');
                }
                else{ //$('#right_image').attr('src','/photo/12505258.cms');
                }
            });
        }
    }
    function ShowPrevNew()
    {
        if(lockeventval2 == 1 && leftCount != 0)
        {
            lockeventval2 = 0;
            $("#containts").animate({"left": "+=300px"},"fast",function(){
                lockeventval2 = 1;
                rightCount--;
                leftCount--;
                if(rightCount >= 1)
                {
                    $('#shownPage').html(rightCount);
                    //$('#right_image').attr('src','/photo/12505258.cms');
                    //$('#left_image').attr('src','/photo/12505252.cms');
                }
                if(parseInt($('#shownPage').text()) == 1)
                {
                    //$('#left_image').attr('src','/photo/12505221.cms');
                }
            });
        }
    }
    function SetActivity()
    {
        var accessToken=Get_Ckie('Fbsecuritykey');
        try
        {
            if(accessToken != null && accessToken != '')
            {
                var url = "";
                if(navigator.appName == 'Microsoft Internet Explorer')
                {
                    url = '/me/friends?limit=350&access_token='+accessToken;
                    if(url.indexOf("fb_xd_fragment")==-1){
                        FB.api(url,{fields : 'news.reads.limit(1)'}, function(response){
                            ParseJsonData(response)
                        });
                    }
                }
                else
                {
                    url = "https://graph.facebook.com/me/friends?limit=350&fields=news.reads.limit(1)&access_token="+accessToken;
                    if(url.indexOf("fb_xd_fragment")==-1){
                        $.getJSON(url,function(data){
                            ParseJsonData(data)
                        });
                    }
                }
            }
        }
        catch(e)
        {

        }
    }
    SetActivity();
}
catch(ex)
{

}
function ParseJsonData(newData)
{
    var beforesortData=newData;
    try{
        var lengthab=beforesortData.data.length;
        for(var j=0;j < beforesortData.data.length; j++) {
            for(var i=0; i < j; i++) {
                var ijk=i+1;
                if(beforesortData.data[i]["news.reads"]!=null && beforesortData.data[i]["news.reads"]!=undefined)
                {
                    while(beforesortData.data[ijk]["news.reads"]==undefined && ijk < lengthab - 1)
                    {
                        ijk=ijk+1;
                    }
                    if(beforesortData.data[ijk]["news.reads"]!=null && beforesortData.data[ijk]["news.reads"]!=undefined)
                    {
                        if(beforesortData.data[ijk]["news.reads"].data[0].publish_time >  beforesortData.data[i]["news.reads"].data[0].publish_time)
                        {
                            var tempjson=beforesortData.data[ijk];
                            beforesortData.data[ijk]=beforesortData.data[i];
                            beforesortData.data[i]=tempjson;
                        }
                    }
                }

            }
        }
    }catch(ex){
    }

    var UserId = "";
    var userName = "";
    var articleId = "";
    var articleTitle = "";
    var articleUrl = "";
    $.each(beforesortData.data, function(i,data){
        try
        {

            if(data["news.reads"]!=undefined && data["news.reads"]!=null )
            {
                if(data["news.reads"].data[0] != undefined && data["news.reads"].data[0] != null)
                {
                    if(count <= 15)
                    {
                        UserId = data["news.reads"].data[0].from.id;
                        userName = data["news.reads"].data[0].from.name;
                        articleId = data["news.reads"].data[0].data.article.id;
                        articleTitle = data["news.reads"].data[0].data.article.title;
                        articleUrl = data["news.reads"].data[0].data.article.url;
                        if(articleTitle.indexOf('- The Times of India') != -1)
                        {
                            count++;
                            SetData(UserId,userName,articleTitle,articleUrl,count);
                        }
                    }
                    else
                    {
                    }
                }
            }
        }
        catch(exx)
        {

        }
    });
    if(count <= 3)
    {
        $('#countedPage').html('1');
        //$('#right_image').attr('src','/photo/12505250.cms');
        $('.count_countainer').css('display','none');
    }
    if(count != 0)
    {
        $('div.block > div.records_per_profile:last-child').css('border-bottom','0px solid blue');
        //$('#left_image').attr('src','/photo/12505221.cms');
        $('#socialreader_content_new').css('display','block');
    }
}
function SetData(UserId,userName,articleTitle,articleUrl,count)
{
    if(count <= 15)
    {
        var str = "";
        if(articleTitle.indexOf("- The Times of India") != -1)
        {
            articleTitle = articleTitle.replace("- The Times of India"," ");
        }
        var imageUrl = "https://graph.facebook.com/"+UserId+"/picture";
        str += '<div class="records_per_profile">';
        str += '<div class="profile_img_countainer"><div class="img_cover">';
        str += '<a><img src="'+imageUrl+'" align="left" class="profile_img"/></a>';
        str += '</div></div>';

        str += '<div class="read_title_countainer">';
        str += '<span class="frndsname">'+userName+'</span><span class="read">Read</span>';
        str += '<a pg="YFAL'+count+'" target="_blank" href="'+articleUrl+'">'+articleTitle+'</a>';
        str += '</div>';
        str += '<div class="clr"></div>'
        str += '</div>';
        if(count > 3 )
        {
            if(count%3 == 1)
            {
                var localstr = '<div id="block_'+Increase+'" class="block"></div>'
                $('.containts').append(localstr);
                blockVersion = 'block_'+Increase;
                $('#countedPage').html(Increase);
                Increase += 1;
                myobj.push(Increase);
                //$('#left_image').attr('/photo/12505258.cms');
            }
        }
        else
        {
            //$('#right_image').attr('/photo/12505250.cms');
        }
        $('#'+blockVersion).append(str);
    }
}


		</script><div class="main_container"><div class="head_container"><div class="head_title"><h2>YOUR FRIENDS' ACTIVITY</h2></div><div class="count_countainer"><span class="leftarrow" onclick="javascript:ShowPrevNew()" id="left_image"></span><div class="page_desc"><span id="shownPage">1</span>of<span id="countedPage">1</span></div><span class="rightarrow" onclick="javascript:ShowNextNew();" id="right_image"></span><div class="clr"></div></div><div class="clr"></div></div><div class="containt_container"><div class="containts" id="containts"><div class="block" id="block_1"></div></div></div></div></div></div><div id="list2Data"><html><head><META http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body><div class="rightpart"><div class="mTop20"><h2>FEATURED TODAY IN
									India</h2><ul class="news_list"><li style="background-position:-100px 11px;padding-left:0" class="clearfix"><a style="font-size:16px;font-weight:bold" pg="fBollyL1" href="/india/Farooqi-sacked-as-SP-gen-secy-for-his-remarks-about-Bhatkals-arrest/articleshow/22338117.cms">Farooqi sacked as SP gen secy for his remarks about Bhatkal's arrest</a></li><li class=""><a style="font-size:12px" pg="fBollyL1" href="/india/Judicial-bill-in-Rajya-Sabha-Govt-opposition-unite-to-attack-judiciary/articleshow/22337001.cms">Judicial bill in Rajya Sabha: Govt, opposition unite to attack judiciary</a></li><li class=""><a style="font-size:12px" pg="fBollyL1" href="/india/Indian-tanker-seized-by-Iran-allowed-to-leave-Report/articleshow/22333297.cms">Indian tanker seized by Iran allowed to leave: Report</a></li><li class=""><a style="font-size:12px" pg="fBollyL1" href="/india/Fratricide-BSF-trooper-kills-2-seniors-injures-one-in-Assam/articleshow/22330170.cms">Fratricide: BSF trooper kills 2 seniors, injures one in Assam</a></li><li class=""><a style="font-size:12px" pg="fBollyL1" href="/india/UP-FIR-lodged-against-SHO-for-trying-to-harass-woman-constable/articleshow/22330094.cms">UP: FIR lodged against SHO for trying to harass woman constable</a></li><li class=""><a style="font-size:12px" pg="fBollyL1" href="/india/Govt-to-take-a-decision-on-extending-monsoon-session-of-Parliament-Kamal-Nath/articleshow/22329761.cms">Govt to take a decision on extending monsoon session of Parliament: Kamal Nath</a></li><li class=""><a style="font-size:12px" pg="fBollyL1" href="/india/Land-bill-back-in-Lok-Sabha-for-fresh-approval/articleshow/22329044.cms">Land bill back in Lok Sabha for fresh approval</a></li><li class=""><a style="font-size:12px" pg="fBollyL1" href="/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms">Want to serve Gujarat till 2017: Narendra Modi</a></li><li class=""><a style="font-size:12px" pg="fBollyL1" href="/india/Geetika-Sharma-suicide-case-Ex-Haryana-minister-gets-interim-bail/articleshow/22327757.cms">Geetika Sharma suicide case: Ex-Haryana minister gets interim bail</a></li><li class=""><a style="font-size:12px" pg="fBollyL1" href="/india/I-feel-as-if-I-am-an-MP-in-opposition-Sidhu/articleshow/22326265.cms">I feel as if I am an MP in opposition: Sidhu</a></li></ul><div pg="fBollyM" style="float: right;" class="more"><a href="/india/indiaarticlelist/-2128936835.cms">more</a></div></div></div></body></html></div><div class="clearfix mTop15"><script>showDCAdsRight2(0,0);</script></div><div class="clearFix mTop20"><html><head><META http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body><div class="rightpart"><div class="clearFix mTop20"><h2>TOP STORIES</h2><div id="list2Data"><ul class="news_list"><li><a pg="fNewsL1" href="/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms">Narendra Modi says he wants to serve Gujarat till 2017</a></li><li><a pg="fNewsL2" href="/business/india-business/Raghuram-Rajan-effect-sends-sensex-soaring-412-points-to-three-week-high/articleshow/22335968.cms">Raghuram Rajan effect sends sensex soaring 412 points to three-week high</a></li><li><a pg="fNewsL3" href="/world/europe/G20-meet-War-overshadows-economy-as-Obama-heads-into-the-lions-den-in-Russia/articleshow/22327433.cms">G20 meet: War overshadows economy as Obama heads into lion's den in Russia </a></li><li><a pg="fNewsL4" href="/india/Geetika-Sharma-suicide-case-Ex-Haryana-minister-gets-interim-bail/articleshow/22327757.cms">Geetika Sharma suicide: Kanda gets interim bail</a></li><li style="border-bottom:none"><a pg="fNewsL5" href="/india/Fratricide-BSF-trooper-kills-2-seniors-injures-one-in-Assam/articleshow/22330170.cms">Fratricide: BSF trooper kills 2 seniors in Assam </a></li></ul><div><a pg="fNewsM" href="/headlines/4772028.cms" class="flR more">more</a></div></div></div></div></body></html></div><div class="clearFix mTop20" id="most_pop"><h2>MOST POPULAR</h2><div class="popular_box clearFix"><ul class="popular_tabs clearFix"><li onClick="switchtabcomm1('rdtab#sdtab#cdtab')" class="current" id="rdtab"><a pg="asRead" href="javascript:populatediv('/new_mostreadsec2/'+subsec1id+'.cms','mrctabData');populatediv('/new_mostreadchnl1.cms','toiReadData');">Read</a><span class="mLeft5">|</span></li><li onClick="switchtabcomm1('cdtab#rdtab#sdtab')" id="cdtab"><a pg="asComm" href="javascript:populatediv('/new_mostcommentedtab1/'+subsec1id+'.cms','mrctabData');populatediv('/new_mostcommentedtabchnl1.cms','toiReadData');">Commented</a><span class="mLeft5">|</span></li><li onClick="switchtabcomm1('sdtab#rdtab#cdtab')" class="last" id="sdtab"><a pg="asShared" href="javascript:populatediv('/new_mostsharedtab1/'+subsec1id+'.cms','mrctabData');populatediv('/new_mostsharedtabchnl1.cms','toiReadData');">Shared</a></li></ul><h3 class="bdr_top">From
															India<span class="blk_ar_rt"></span></h3><div class="flL" id="mrctabData"></div></div><h3>Across Times of India<span class="blk_ar_rt"></span></h3><div class="flL" id="toiReadData"></div></div><div class="clearfix mTop15"><style>.knowmore_new {background-color: #000000;line-height: 13px;padding: 7px;text-align: center;width: 286px;}
                                                        .knowmore_new a {color: #FFFFFF;font: bold 11px arial;text-decoration: none;}
                                                        .top_head_bar {background-color: #333333;height: 24px;padding: 9px;width: 282px;}
                                                        #timesPointHolder .timesTab {background-color:#8D8D8D;height: 38px;padding:0;}
                                                        #timestab1 a, #timestab2 a, #timestab3 a {background:none;}
                                                        .uidpoints {color: #414141;display: inline-block;float: left;font-family: arial;font-size: 10px;font-weight: bold;margin-top: 4px;padding-bottom: 2px;padding-top: 0;}
                                                        #timestab1.current a {background-color: #FFFFFF;font-size: 12px;font-weight: 700;border-right:none;}
                                                        #timestab2.current a {background-color: #FFFFFF;font-size: 12px;font-weight: 700;border-right:none;}
                                                        #timestab3.current a {background-color: #FFFFFF;font-size: 12px;font-weight: 700;border-right:none;width:110px;}
                                                        .login_link {color: #024D99;font-family: arial;font-size: 20px;text-decoration: none;}
                                                        .login_linkone {color: #024D99;font-family: arial;font-size: 16px;text-decoration: none;}
                                                        #timestab1 a {border-right: 1px solid #000000;font-size: 12px;font-weight: 700;width: 97px;}
                                                        #timestab2 a {border-right: 1px solid #000000;font-size: 12px;font-weight: 700;width: 89px;}
                                                        #timesPointHolder .timesTab ul {padding: 0 0 0 1px;}
                                                        .pro_name {background: none;color: #336797;float: left;font-family: arial;font-size: 14px;font-weight: bold;padding-bottom: 0;padding-left: 6px;padding-top: 3px;text-align: left;width: 90%;}</style><div style="clear:both;" class="timespoint_block"><div class="top_head_bar"><div style="font-family:georgia;font-size:24px;color:#ffffff;"><img onselectstart="return false" ondragstart="return false" title="TIMES POINTS" alt="TIMES POINTS" src="/photo/17767460.cms"></div></div><div id="timesPointHolder" class="timespoint_center_block1"><div class="timespoint_tab1 timesTab"><ul><li onClick="switchtabcomm1('timestab1#timestab2#timestab3',0);timespoint('timestab1#timestab2#timestab3',1);" id="timestab1"><a pg="asRead" href="javascript:void();">All</a></li><li onClick="switchtabcomm1('timestab2#timestab1#timestab3',0);timespoint('timestab2#timestab1#timestab3',2);" class="current" id="timestab2"><a href="javascript:void();">TOI</a></li><li onClick="switchtabcomm1('timestab3#timestab1#timestab2',0);timespoint('timestab3#timestab1#timestab2',3);" id="timestab3"><a pg="asComm" href="javascript:void();">My Profile</a></li></ul></div><div class="clr"></div><div class="tabdatadiv2" id="timestab11"><iframe ALLOWTRANSPARENCY="true" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="334" width="300" id="timestab1Data" name="timestab1Data" style="display:none;"></iframe><iframe ALLOWTRANSPARENCY="true" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="334" width="300" src="/tpoint_fans2.cms?type=toi" id="timestab2Data" name="timestab2Data"></iframe><div style="display:none;" id="timestab3Data" name="timestab3Data"><div id="logmsg"><div style="display:block; height:37px;clear:both;padding-bottom:10px;padding-top:10px;background-color:#DFDFDF;width:300px;"><div style="padding-left:25px;"><span class="login_linkone"><a class="login_link" href="javascript:loadPopup('4');scroll(0,0);">Sign in</a>to earn your Badges</span></div></div><div style="overflow:auto;" id="medal_div_one"><div style="height:145px;" id="usermedalnw"></div></div></div><div style="position:absolute;display:none;left:10px;z-index:99999" id="tooltip"></div><div style="width:300px;float:left" id="loggedmsg"><div id="profile_blk"><div style="padding:0px !important;float:left"><div style="display:block; height:auto;clear:both;display:inline-block;background-color:#DFDFDF;width:300px;" id="toplev"><div style="padding-left:28px;"><div style="display:inline-block;" class="col1 user_image_left"><img src="/photo/11964050.cms" id="profileimg" alt="" title="" border="0" vspace="0" height="36" width="36"></div><div class="col2"><div style="padding-right:5px;text-transform:capitalize;word-wrap:break-word;" id="fname" class="pro_name"></div><div style="clear:both;"></div><div style="width:210px;height:26px;padding-bottom:5px;"><div style="float:left;" id="badgemember"></div></div></div></div><div class="clr"></div></div><div style="overflow:auto;" id="medal_div"><div style="height:145px;" id="usermedal"><img style="padding:100px 0px 0px 100px;" border="0" src="/photo.cms?msid=9649288" hspace="5"></div><div id="loadinglayer" style="display:none;left:45%;top:80px;text-align:center;font-size:12px;font-weight:bold;position:absolute;"><img border="0" src="/photo.cms?msid=9649288" hspace="5">div></div></div></div></div></div></div><div class="clr"></div></div><div class="clr"></div><div><div class="knowmore_new"><div><a target="_blank" href="http://timesofindia.indiatimes.com/abouttimesrewards.cms">Know more about Times Points</a></div><div class="clr"></div></div></div></div><div class="clrbth10"></div><div id="ad38651" name="ad38651" align="center"></div><iframe ALLOWTRANSPARENCY="true" title="Advertisement" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="250" width="300" src="http://netspiderads2.indiatimes.com/ads.dll/getad?slotid=38651" id="fr38651" name="fr38651"><a target="_blank" href="http://netspiderads2.indiatimes.com/ads.dll/clickthrough?slotid=38651"><img alt="Advertisement" height="250" width="300" border="0" src="http://netspiderads2.indiatimes.com/ads.dll/photoserv?slotid=38651"></a></iframe></div><div id="yp_c"></div></div></div></div></div><div class="footer_slider"><div class="navlft"><iframe align="left" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="335" width="1001" id="moreinsideslider" name="moreinsideslider" src="/slider2.cms?secid=-2128936835"></iframe><div class="clrbth"></div><div class="redbdr"><div style="float:left;font-size:20px;font-weight:normal;font-family:georgia;padding:10px;">THE TIMES OF INDIA<br><span style="font-size:11px;font-family:arial;">Powered by <i>INDIATIMES</i></span></div><div style="padding:10px 10px 10px 5px;" class="abts"><div style="text-align:left;" class="aboutusnew"><ul><li><a pg="BotNavPos1" target="_blank" href="http://www.timesinternet.in">About us</a></li><li><a pg="BotNavPos2" target="_blank" href="http://advertise.indiatimes.com/">Advertise with us</a></li><li><a pg="BotNavPos3" target="_blank" href="http://www.indiatimes.com/termsandcondition">Terms of Use and Grievance Redressal Policy</a></li><li><a pg="BotNavPos4" target="_blank" href="http://www.indiatimes.com/privacypolicy">Privacy policy</a></li><li><a pg="BotNavPos5" href="http://timesofindia.indiatimes.com/feedback.cms">Feedback</a></li><li><a pg="BotNavPos6" href="http://timesofindia.indiatimes.com/rss.cms">RSS</a></li><li><a pg="BotNavPos7" href="http://timesofindia.indiatimes.com/newslettersubscription.cms">Newsletter</a></li><li><a pg="BotNavPos8" target="_blank" href="http://m.timesofindia.com/">TOI Mobile</a></li><li><a pg="BotNavPos9" target="_blank" href="http://epaper.timesofindia.com/">ePaper</a></li><li><a pg="BotNavPos11" href="/sitemap.cms">Sitemap</a></li><li><a pg="BotNavPos10" href="/archive.cms">Archives</a></li></ul></div></div></div><div class="clrb"></div><div class="otgns"><div style="padding-left:15px;">Other Times Group news sites<br><a target="_blank" href="http://www.timescrest.com">Times Crest</a><span> | </span><a target="_blank" href="http://economictimes.indiatimes.com/">The Economic Times</a><br><a target="_blank" href="http://hindi.economictimes.indiatimes.com/">&#x907;&#x915;&#x928;&#x949;&#x92e;&#x93f;&#x915; &#x91f;&#x93e;&#x907;&#x92e;&#x94d;&#x938;</a><span> | </span><a target="_blank" href="http://gujarati.economictimes.indiatimes.com/">&#xa88;&#xa95;&#xacb;&#xaa8;&#xacb;&#xaae;&#xabf;&#xa95; &#xa9f;&#xabe;&#xa88;&#xaae;&#xacd;&#xab8;</a><br><a target="_blank" href="http://www.punemirror.in/">Pune Mirror</a><span> | </span><a target="_blank" href="http://www.bangaloremirror.com/">Bangalore Mirror</a><br><a target="_blank" href="http://www.ahmedabadmirror.com/">Ahmedabad Mirror</a><span> | </span><a target="_blank" href="http://www.itsmyascent.com/">ItsMyAscent</a><br><a target="_blank" href="http://www.myeducationtimes.com/educationTimes/index.jsp">Education Times</a><span> | </span><a pg="OTGSPos11" target="_blank" href="http://brandcapital.co.in">Brand Capital</a><br><a target="_blank" href="http://www.mumbaimirror.com/">Mumbai Mirror</a><span> | </span><a target="_blank" href="http://www.timesnow.tv/">Times Now</a><br><a target="_blank" href="http://www.indiatimes.com/">Indiatimes</a><span> | </span><a target="_blank" href="http://navbharattimes.indiatimes.com/">&#x928;&#x935;&#x92d;&#x93e;&#x930;&#x924; &#x91f;&#x93e;&#x907;&#x92e;&#x94d;&#x938;</a><br><a target="_blank" href="http://maharashtratimes.indiatimes.com/">&#x92e;&#x939;&#x93e;&#x930;&#x93e;&#x937;&#x94d;&#x91f;&#x94d;&#x930; &#x91f;&#x93e;&#x907;&#x92e;&#x94d;&#x938;</a><span> | </span><a pg="OTGSPos12" target="_blank" href="http://vijaykarnataka.indiatimes.com/">&#xcb5;&#xcbf;&#xc9c;&#xcaf; &#xc95;&#xcb0;&#xccd;&#xca8;&#xcbe;&#xc9f;&#xc95;</a><br><a target="_blank" href="http://gogreenindia.co.in">Go Green</a></div><div style="padding-left:15px;">Living and entertainment<br><a target="_blank" href="http://www.timescity.com/">Timescity</a><span> | </span><a target="_blank" href="http://idiva.com/index.php?host=TOI">iDiva</a><span> | </span><a target="_blank" href="http://entertainment.timesofindia.com">Bollywood</a><span> | </span><a target="_blank" href="http://www.zoomtv.in/">Zoom</a><br><a target="_blank" href="http://healthmeup.com">Healthmeup</a><span> | </span><a target="_blank" href="http://luxpresso.com">Luxpresso</a><span> | </span><a target="_blank" href="http://technoholik.com">Technoholik</a><br><a target="_blank" href="http://guylife.com/">Guylife</a><span> | </span><a target="_blank" href="http://gaana.com/newrelease">Online Songs</a><br><br><p style="padding:0px;margin:0px;">Interest Network</p><a target="_blank" href="http://ww.itimes.com">itimes</a><span> | </span><a target="_blank" href="http://email.indiatimes.com">Email</a></div><div style="padding-left:10px;padding-right:6px;">Hot on the Web<br><a target="_blank" pg="HoWPos1" href="http://www.hotklix.com">Hotklix</a><span> | </span><a pg="HoWPos2" target="_blank" href="http://timesofindia.indiatimes.com/topic/home/world">World</a><span> | </span><a pg="HoWPos3" target="_blank" href="http://timesofindia.indiatimes.com/topic/home/politics">Politics</a><br><a pg="HoWPos4" target="_blank" href="http://timesofindia.indiatimes.com/topic/home/business">Business</a><span> | </span><a pg="HoWPos5" target="_blank" href="http://timesofindia.indiatimes.com/topic/home/sports">Sports</a><br><a pg="HoWPos6" target="_blank" href="http://timesofindia.indiatimes.com/topic/home/entertainment">Entertainment</a><br><a pg="HoWPos7" target="_blank" href="http://timesofindia.indiatimes.com/topic/home/scitech">Science &amp; Tech</a><br><a pg="HoWPos8" target="_blank" href="http://timesofindia.indiatimes.com/zigwheels.cms">New Cars</a></div><div style="padding-left:15px;padding-right:0px;width:405px;">Services<br><a pg="ServPos1" target="_blank" href="http://www.ads2book.com/">Book print ads</a><span> | </span><a pg="ServPos2" target="_blank" href="http://shopping.indiatimes.com/">Online shopping</a><span> | </span><a pg="ServPos7" target="_blank" href="http://mocolife.com/">Free SMS</a><span> | </span><a pg="ServPos9" target="_blank" href="http://www.webuild.indiatimes.com/">Website design</a><span> | </span><a pg="ServPos10" target="_blank" href="http://www.salescrm.indiatimes.com/">CRM</a><span> | </span><a pg="ServPos11" target="_blank" href="http://tenders.indiatimes.com/">Tenders</a><br><a pg="ServPos14" target="_blank" href="http://www.simplymarry.com/">Matrimonial</a><span> | </span><a pg="ServPos15" target="_blank" href="http://mobile.indiatimes.com/pmswapdev_in/pmsdata.html?target=tilweb/til/ringtoneindex.html&amp;top=1&amp;SM_PAGENUM=1&amp;s=0&amp;cn=&amp;sec=ring&amp;cat=browseall">Ringtones</a><span> | </span><a pg="ServPos16" target="_blank" href="http://www.astrospeak.com">Astrology</a><span> | </span><a pg="ServPos17" target="_blank" href="http://www.timesjobs.com/">Jobs</a><span> | </span><a target="_blank" href="http://www.techgig.com">Tech Community</a><span> | </span><a pg="ServPos18" target="_blank" href="http://www.magicbricks.com/">Property</a><span> | </span><a pg="ServPos19" target="_blank" href="http://www.zigwheels.com/">Buy car</a><br><a pg="ServPos20" href="http://www.zigwheels.com/bikes" target="_blank">Bikes in India</a><span> | </span><a target="_blank" href="http://timesdeal.com">Deals</a><span> | </span><a target="_blank" href="http://www.yolist.com">Free Classifieds</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/business/india-business/Send-Money-to-India-the-safe-convenient-inexpensive-way/articleshow/11079712.cms">Send money to India</a><span> | </span><a target="_blank" href="http://www.zigwheels.com/used-car">Used Cars</a><br><a target="_blank" href="http://timescity.com/delhi/restaurants">Restaurants in Delhi</a><span> | </span><a target="_blank" href="http://timescity.com/mumbai/movies">Movie Show Timings in Mumbai</a><span> | </span><a target="_blank" href="http://www.timesofmoney.com/remittance/jsp/home.jsp">Remit to India</a><span> | </span><a target="_blank" href="http://shopping.indiatimes.com/mobiles/">Buy Mobiles</a><br><a target="_blank" href="http://gaana.com">Listen Songs</a><span> | </span><a href="http://timesofindia.indiatimes.com">News</a><br><br><p style="padding:0px;margin:0px;">Trending Topics</p><a target="_blank" href="http://timesofindia.indiatimes.com/topic/Yahoo">Yahoo</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/topic/Gmail">Gmail</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/topic/YouTube">You Tube</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/topic/Gold-price">Gold Price</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/topic/Twitter">Twitter</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/topic/Irctc">Irctc</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/topic/Apple-iPhone-5">Apple iphone 5</a><span> | </span><a target="_blank" href="http://boxtv.com">Watch Movies</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/topic/Aadhar-Card ">Aadhar Card</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/topic/Facebook">Facebook</a><span> | </span><a target="_blank" href="http://timesofindia.indiatimes.com/topic/UID-card">UID Card</a></div></div><div class="clrbth"></div><div class="bcclftr"><div style="font-size:11px;">Copyright &#169; 2013 Bennett, Coleman &amp; Co. Ltd. All rights reserved. For reprint rights: <a target="_blank" href="http://timescontent.com/">Times Syndication Service</a></div></div></div></div></div><div class="zindex9999" id="slidebox"></div><script type="text/javascript" src="/articleshow_js_v33.cms?version=14&amp;minify=1" language="javascript"></script><script type="text/javascript" src="/new_articleshow_js.cms?version=45&amp;minify=1" language="javascript"></script><script type="text/javascript" src="/trackjs_show_v8.cms?minify=1" language="javascript"></script><script type="text/javascript" src="/beta_gohintjs_v7.cms?minify=1" language="javascript"></script><script src="/new_cmsofartjs_v74.cms?minify=1" language="javascript"></script><script src="/new_bookmarkjs_v2.cms?minify=1" type="text/javascript"></script><script type="text/javascript" src="/new_slidjs_v1.cms?minify=1" language="javascript"></script><script type="text/javascript" src="/glblnavjs_v19.cms?version=1&amp;minify=1" language="javascript"></script><script>fo=new FadeObj('backgroundPopup');</script><script>
				var verqs=window.location.search;
if (verqs.indexOf('signin=1') != -1){
				loadPopup('3');}
        </script><script>
            $(window).load(function(){
            tpbar1();
            });
        </script><script type="text/javascript">
		var isLoggedSso = Get_Ckie('MSCSAuth');
		var apifstnameonly="";
		var apifstnameonlyfl="";
		var srcptah2="";
		var loggedattributeval="";

                </script><script>
		try{
		$(window).load(function(){
		loggedmyprofile1();loadPoints();
		});
		}catch(ex){}
		try{
		$(window).load(function(){
		if(isLoggedSso!=null && isLoggedSso!=undefined)getMyScript('http://myt.indiatimes.com/mytimes/notification/count?callback=processNotifyCountJSON',myt_timers.notification,1);
		});
		}catch(e){}

                </script><script type="text/javascript" src="/jquery_tooltipjs3.cms?version=2"></script><script type="text/javascript">
					jQuery.fn.center = function(parent) {
				        parent = window;
				    this.css({
				        "position": "fixed",
				        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
				        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
				    });
					return this;
					};
					$("#emailimg").click(function(){
					$("div#emaildata").center(true);
					});
					$("#emailimg1").click(function(){
					$("div#emaildata1").center(true);
					});
					$("#saveimg").click(function(){
					$("div#savedata").center(true);
					});
					$("#saveimg1").click(function(){
					$("div#savedata1").center(true);
					});
					$("#moreimg").click(function(){
					$("div#moredata").center(true);
					});
					$("#moreimg1").click(function(){
					$("div#moredata1").center(true);
					});

					function funcsignincomment(){
					loadPopup('4');
					mysvdart();
					$('#exposeMask').show();
					$('#popupContact').css('position','fixed');
					$('#popupContact').css('width','550px');
					$('#popupContact').css('height','630px');
					$('#popupContact').css("left", ($(window).width()/2-$('#popupContact').width()/2) + "px");
					$('#popupContact').css("top", ($(window).height()/2-$('#popupContact').height()/2) + "px");
					}
					function funcsignupcomment(){
					move_box('2');
					$('#exposeMask').show();
					$('#popupContact').css('position','fixed');
					$('#popupContact').css('width','550px');
					$('#popupContact').css('height','630px');
					$('#popupContact').css("left", ($(window).width()/2-$('#popupContact').width()/2) + "px");
					$('#popupContact').css("top", ($(window).height()/2-$('#popupContact').height()/2) + "px");
					}

					</script><div><iframe ALLOWTRANSPARENCY="true" title="fbreviewpost" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="1" width="1" id="fbartpost" name="fbartpost" style="display:none"></iframe></div><script>
					function postCmsComment()
					{
						var captureClickSso=Get_Ckie('ssocheck');
						isLoggedSso = Get_Ckie('MSCSAuth');
						if(captureClickSso=="1" && isLoggedSso!="")
						{
							Delete_Ckie("ssocheck","/",".indiatimes.com");
							setTimeout("setCmtfoucsEmail();",500);
						}
					}

					</script><div><iframe ALLOWTRANSPARENCY="true" title="fbreviewpost" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="1" width="1" id="fbartpost" name="fbartpost" style="display:none"></iframe></div><script>
            function postReadAct(){
                try{
                    var fbkey=Get_Ckie('Fbsecuritykey');
                    if(fbkey!=""){
                        var frmpostSrc="http://timesofindia.indiatimes.com/fbpostaction.cms?article="+postActUrl+"&access_token="+fbkey;

                        document.getElementById('fbartpost').src=frmpostSrc;
                    }
                }
                catch(ex){
                }
            }


        if(Get_Ckie('usrsetting')!=null)
        {

            if(Get_Ckie('usrsetting')==1)
            {
                try
                {
                    setTimeout("postReadAct()",4000);
                }
                catch(ex)
                {

                }
            }
        }
						</script><script>function attachsocial() {
                        /*$('#iplfls').attr('src', "/criminiflash.cms");*/

                        window.fbAsyncInit = function () {
                        FB.init({
                        appId: '117787264903013',
                        oauth: true,
                        status: true,
                        cookie: true,
                        xfbml: true
                        });
                        setTimeout("getSessionFB()", 2000);
                        FB.Event.subscribe('edge.create', function (href, widget) {
                        _gaq.push(['_trackEvent', 'Facebook', 'FBlikeLHS']);
                        logaction('715');
                        logonmyt('Shared', navmsid, 'facebook');
                        log('sh_fb', navmsid);
                        });
                        FB.Event.subscribe('message.send', function (href, widget) {
                        log('like_fb', navmsid);
                        });

                        };

                        var fb_src_path='http://www.facebook.com/plugins/like.php?app_id=117787264903013&href=http%3A%2F%2Fwww.facebook.com%2FTimesofIndia&send=false&layout=button_count&width=450&show_faces=false&action=like&colorscheme=light&font=arial&height=21';

                        var fblink_path = 'http://www.facebook.com/plugins/like.php?app_id=117787264903013&href=http%3A%2F%2Fwww.facebook.com%2FTOIIndianews&send=false&layout=button_count&width=450&show_faces=false&action=like&colorscheme=light&font=arial&height=21';
                        if (fblink_path != '') {
                        $('#follow_srch #fbk').attr('src', fblink_path).show();
                        }
                        createIframe(fb_src_path,82,20,"fbk_t_cnt");

                        $.get('/videos/yellowpageswidget.cms', function(data) {
                        $('#yp_c').html(data);
                        $("#pgmenu2").css({"display":"block"});
                        });
                        }


                        function createIframe(src,w,h,id){ var i = document.createElement("iframe"); i.src = src; i.scrolling = "no"; i.frameBorder = "0"; i.width = w; i.height = h; document.getElementById(id).appendChild(i); };
                        function attachfile(url) {
                        var s = document.createElement('script');
                        s.type = 'text/javascript';
                        s.async = true;
                        s.src = url;
                        var x = document.getElementsByTagName('script')[0];
                        x.parentNode.insertBefore(s, x);
                        }
                        (function () {
                        if (window.attachEvent)
                        window.attachEvent('onload', attachsocial);
                        else
                        window.addEventListener('load', attachsocial, false);
                        })();</script><script>
var featuredtodaylist = $("li[id^='featuretodayarticle']");
for(i=0;i<featuredtodaylist.length;i++)
{
    attribute=$(featuredtodaylist[i]).attr("msid");
    if(attribute==navmsid)
    {
        $(featuredtodaylist[i]).hide();
        $(featuredtodaylist[featuredtodaylist.length-1]).show();
        if(i==0){
            $(featuredtodaylist[1]).find('a.first').css('font-weight','bold');
        }
    }
}

					</script><script>

function openDivLayer()
{
    $('#menulayer').show();
}
function clDivLayer()
{
    $('#menulayer').hide();
}
var trigerMenu = $("a[id^='tablinknw']");
var trigerMenu1 = $("a[id^='submenuid']");
for(i=0;i<trigerMenu.length;i++)
{
    attributemenu=$(trigerMenu[i]).attr("ssname");
    if(attributemenu==sectionidname)
    {
        //alert("macth:"+attributemenu);alert("macth:"+sectionidname);
        $(trigerMenu1[i]).hide();
        $(trigerMenu[i]).hide();
        //document.getElementById('menulayer').style.height="163px";
    }
}
//var sectionidname1='<a href="javascript:void();">'+ sectionidname +'</a><img src="/photo/12443228.cms" style="padding-top:12px;padding-left:3px;padding-right:7px;" align="absmiddle">'+ '<div id="menulayer" class="newcsslayer">' +$('#menulayer').html()+"</div>";
                        //$('#menulayertxt').html(sectionidname1);</script><script>
if(document.getElementById('videolistrootcount')!=null && document.getElementById('videolistrootcount')!=undefined)
{
    var videolistrootcount=document.getElementById('videolistrootcount').value;
    videolistrootcount=videolistrootcount/5;
    videolistrootr=videolistrootcount%3;
    if(videolistrootr>0)videolistrootcount=videolistrootcount+1;
}
else {videolistrootcount=3;}
recvPostUpdate = new NBSlider("recvidslider",videolistrootcount,576,75);

					</script><script>var cntrelvideopg=2;</script><script>
    //var rleatedvideoslider = new CSlider1("rleatedvideoslide",'',1,570);
    recvPostUpdate1 = new NBSlider("rleatedvideoslide",cntrelvideopg,576,75);
    recvPostUpdate1.setBtn('lbano','rbano');
    recvPostUpdate1.mngbtn();

						</script><script>
callfbsiframe();

					</script><script>
var verqs=window.location.search;
if (verqs.indexOf('signin=1') != -1){
    loadPopup('3');}
					</script><div name="tmpFbokk" id="tmpFbokk"></div><script>setTimeout("twtFbSso();",1000);setTimeout("showhidebox();",1000);</script><div id="twittersource"><img id="twtimgsrc"></div><div id="reportAbuseDiv" class="reprotAbuseLayoutDiv" style="display: none; left: 10px; top:0px" align="center"><div class="reprotAbuseLayout"><form id="abuseForm" method="post" name="abuseForm"><div class="borderTop"><a onclick="closeAbusiveDivForm();"></a></div><div style="background:url(/photo/5877932.cms);"><div style="display: block;" id="abusiveCommentDiv" class="borderBot"><input value="fdc9c803-1c41-4b9f-9774-ffb531e06db4" id="_commentId" name="_commentId" type="hidden"><input value="reco4fdc9c803-1c41-4b9f-9774-ffb531e06db4" id="cookieValue" name="cookieValue" type="hidden"><p class="redhead">Find this comment offensive?</p><p class="reddes">Choose your reason below and click on the Submit button. This will alert our moderators to take action</p><p id="namelabel" class="greyhead">Name</p><div id="namelabelval" class="abusivetextareaDiv"><p style="height:23px;"><input tabindex="1" maxlength="100" style="margin-left:2px;" size="45" id="ofusername" name="ofusername" type="text" class="inputbox"></p></div><p class="greyhead">Reason for reporting:</p><div style="margin-bottom:15px;float:left" class="abusivetextareaDiv"><div style="background:none;font-size:11px;"><input id="ofreason" name="ofreason" type="hidden"><div style="height:20px;font-size:12px;vertical-align:bottom;"><span style="text-align:left;"><input value="Foul language" name="ofreasonradio" onclick="showradiolayer(0)" type="radio" style="width:25px;">Foul language</input></span></div><div style="height:20px;font-size:12px;vertical-align:bottom;"><span style="text-align:right;"><input value="Slanderous" name="ofreasonradio" type="radio" onclick="showradiolayer(0)" style="width:25px;">Slanderous</input></span></div><div style="height:20px;font-size:12px;vertical-align:bottom;"><input value="Inciting hatred against a certain community" name="ofreasonradio" type="radio" onclick="showradiolayer(0)" style="width:25px;">Inciting hatred against a certain community</input></div><div style="height:20px;font-size:12px;vertical-align:bottom;"><input value="Spam/out of context" name="ofreasonradio" type="radio" onclick="showradiolayer(0)" style="width:25px;">Spam/out of context</input></div><div style="height:35px;font-size:12px;vertical-align:bottom;"><input value="Others" onclick="showradiolayer(1)" name="ofreasonradio" type="radio" style="width:25px;">Others</input><br><div style="display:none;padding:0px 15px 5px 7px;margin:0px;" id="offensiveotherdiv"><div style="height:45px;"><textarea style="height:45px;background-color:#ECECEC;border:1px solid #C0C0C0;width:235px;overflow-x:hidden;overflow-y:scroll;" value="" name="offensiveother"></textarea></div></div></div></div></div><p class="reportButton"><input style="height:45px;*height:50px;" tabindex="3" class="reportThis" onclick="SubmitAbuse('abuseForm');" type="button"><input style="height:45px;*height:50px;" tabindex="4" class="reportClose" onclick="closeAbusiveDivForm();" type="button"></p><input value="0" id="ofuserisloggedin" name="ofuserisloggedin" type="hidden"><input id="ofuserssoid" name="ofuserssoid" type="hidden"><input id="ofuseremail" name="ofuseremail" type="hidden"><input id="ofcommenteroid" name="ofcommenteroid" type="hidden"><input value="83" id="ofcommenthostid" name="ofcommenthostid" type="hidden"><input value="-2128958273" id="ofcommentchannelid" name="ofcommentchannelid" type="hidden"><input id="ofcommentid" name="ofcommentid" type="hidden"></div></div><div style="background:url(/photo/5877932.cms);"><div id="abusiveCommentSecondDiv" class="borderBot" style="display: none;"><p class="reddes">Your Reason has been Submitted to the admin.</p><p class="reportButton"><input class="reportClose" onclick="closeAbusiveDivForm();" type="button"></p></div></div></form></div></div><div id="result"></div><script>var msgparent = '22328733';
                        var _obj=document.getElementById("reportAbuseDiv");
                        var y = findPosY(_obj);</script><div class="hide_new" id="yahoobuzzsyn">"People of Gujarat have given me a mandate to serve them till 2017 and I have to do this with my full strength," Narendra Modi said.</div><script type="text/javascript">
				    //alert("goxs");
					function hidereferid(){
					   $("#headlinewrap li#" + navmsid).hide();
					}
				    function getreferrer(querystring) {
					try{
					  var referrer="";
				      var stringPassed = "";
				    	if (querystring.indexOf('google.co.in') != -1) {
				    		console.log("Referrer is google");
				    		referrer='google.co.in';
							//alert(referrer);

				    		if (querystring.indexOf('q') != -1) {
				    			console.log("querystring found");
				    			stringPassed = (querystring.match(/q=([^&]*)/))[1].replace(/\+/g, " ");
								//alert(stringPassed);

				    		} else {

				    		}
				     } else if (querystring.indexOf('yahoo') != -1) {
				    		console.log("Referrer is yahoo");
				    		referrer='yahoo.com';
				    		 if (querystring.indexOf('?') != -1) {
				    			console.log("querystring found");
				    			stringPassed = (querystring.match(/p=([^&]*)/))[1].replace(/\+/g, " ");
				    			console.log("stringPassed...." + stringPassed);
				    		} else {
				    			console.log("querystring not found");
				                         }
				    	 }
				             else if (querystring.indexOf('bing') != -1) {
				    		console.log("Referrer is bing");
				    		referrer='bing.com';
				    		 if (querystring.indexOf('q') != -1) {
				    			console.log("querystring found");
				    			stringPassed = (querystring.match(/q=([^&]*)/))[1].replace(/\+/g, " ");
				    			console.log("stringPassed...." + stringPassed);
				    		} else {
				    			console.log("querystring not found");
				                    }
				    	 }
				     	var result = [stringPassed, referrer ];
				    	return result;
						}
						catch(ex){}
				    }

                   var retrievedArray= getreferrer(document.referrer);
				   //alert(document.referrer);
                   var queryID="";
				     if(retrievedArray[1]!== 'undefined' && retrievedArray[1]!== "" && retrievedArray[0]!== 'undefined' && retrievedArray[0]!== "")
				     {
				      //queryID="1";
						var mysrchstr='/myrefsearch.cms?msid='+ s1id +'&sname='+ s1name +'&query='+retrievedArray[0];
						//alert(mysrchstr);
					    populate_wf(mysrchstr,'myrecostry','no','hidereferid()');
				     }
				     else if(retrievedArray[0]== 'undefined' || retrievedArray[0]== ""){
				      queryID="2";
				       }
				     if(retrievedArray[1]!== 'undefined' && retrievedArray[1]!== ""){
					 //alert(retrievedArray[0]);
				       queryID="3";
					  //alert(mysrchstr);
					  //alert(retrievedArray[1]);
                    }


					</script><script>var AddOthers = document.getElementById("yahoobuzzsyn").innerHTML;</script><script>var typeofcomment='';
                        function poulatecomment(parametername,parametervalue,thisobj)
                        {
                        iiifor=2;
                        commentcalculatepagination(parametervalue);
                        commenturl='/new_cmtofart2_nit/22328733.cms?msid=22328733';
    if(parametername!=null && parametername!=undefined && parametername!=""){commenturl+='&'+parametername+'='+parametervalue;typeofcomment='&'+parametername+'='+parametervalue;	}
    if(parametervalue=='disagree' || parametervalue=='agree' || parametervalue=='mostrecommended'){commenturl+='&sorttype=bycount';typeofcomment+='&sorttype=bycount';}
    populate_wff(commenturl,'populatecomment','yes','authlayer();putMathQ(1);fillformdetail(1);putCmtCnt();getemid();logtimespoint(1)');
    $(thisobj).siblings().removeClass('current');
    $(thisobj).addClass("current");


}
function commentcalculatepagination(parametervalue)
{
    try{
        if(parametervalue=='mostrecommended')
        {
            totcounta=parseInt(document.getElementById("cmtcountrecommend").innerHTML);
            totcountasp=parseInt(document.getElementById("cmtcountrecommend").innerHTML);
        }
        else if(parametervalue=='agree')
        {
            totcounta=parseInt(document.getElementById("cmtcountagree").innerHTML);
            totcountasp=parseInt(document.getElementById("cmtcountagree").innerHTML);
        }
        else if(parametervalue=='disagree')
        {
            totcounta=parseInt(document.getElementById("cmtcountdisagree").innerHTML);
            totcountasp=parseInt(document.getElementById("cmtcountdisagree").innerHTML);
        }
        else
        {
            totcounta=parseInt(document.getElementById("cmtcountplain").innerHTML);
            totcountasp=parseInt(document.getElementById("cmtcountplain").innerHTML);
        }
        totcounta=parseInt(totcounta/25);
        totcounta=totcounta + 1;

        if(totcountasp % 25 == 0){totcounta=totcounta - 1;}
    }catch(ex){}
}
function createDivart()
{
    if(iiifor>totcounta)
    {
    }
    else
    {
        var nifor = document.getElementById('cmtMainBox');
        var divTaga = document.createElement("div");
        var divname="cmtBox"+iiifor;
        divTaga.id = divname;
        nifor.appendChild(divTaga);
        urlpopulate='/articleshow_othcmtofart/'+ navmsid +'.cms?curpg='+iiifor;
        if(typeofcomment!=null && typeofcomment!=undefined && typeofcomment!="")urlpopulate+=typeofcomment;
        gettpointval=iiifor;
        populate_wff(urlpopulate,divname,"yes",'putMathQ(1);fillformdetail(1);putCmtCnt();getemid();logtimespoint(gettpointval);resetscroll();');
        iiifor++;
    }
}
</script><script>setTimeout("populate_wf_new('/new_cmtofart2_nit/22328733.cms?msid=22328733&messageid=','populatecomment','no','authlayer();putMathQ(1);fillformdetail(1);putCmtCnt();getemid();logtimespoint(1);email_very();registerPopup()')",1000);
                        setTimeout("getSsopref();",9000);
                        populate_wf('/artshowcmt/22328733.cms?userfilter=editor','ftredcmt','no','');</script><script>function registerPopup(){
						}</script><script>populatediv('/new_mostreadsec2/'+subsec1id+'.cms','mrctabData');populatediv('/new_mostreadchnl1.cms','toiReadData');</script><script>bnews(120000);</script><div class="hide_new"><iframe name="trckr" id="trckr" src="" height="1" width="1" MARGINWIDTH="0" MARGINHEIGHT="0" HSPACE="0" VSPACE="0" FRAMEBORDER="0" SCROLLING="no" align="center" title="trcr" ALLOWTRANSPARENCY="true"></iframe></div><iframe id="fbssoupd" name="fbssoupd" ALLOWTRANSPARENCY="true" title="" align="center" SCROLLING="no" FRAMEBORDER="0" VSPACE="0" HSPACE="0" MARGINHEIGHT="0" MARGINWIDTH="0" height="1" width="1" class="hide_new"></iframe><div name="fbimgvalidate" id="fbimgvalidate"></div><script>
        var insideslider = new CSlider('insideslider','',1,250);
        var tntwk = new CSlider("xx",'',1,280);
        var recv = new CSlider("recvidslider_test",'',1,300);
        var vslid = new CSlider("videoslider",'',1,665);
							</script><script>var subsecid='-2128936835';

								alsoinurl='/alsoinside.cms?msid='+subsecid;populatediv(alsoinurl,'alsoinside');</script><script language="Javascript"></script><script>var imagslide='http://timesofindia.indiatimes.com/thumb/22333092.cms';
function msnshare()
{
    msnurl="http://profile.live.com/badge?url="+AddURL+"&screenshot="+imagslide+"&title="+AddTitle+"&description="+facebooksyn;
    window.open(msnurl);
}
</script><script>
var inputs=null;
var textnode=null;
var active=null;
defload1();

					</script><script>try{
            if(navigator.appName=="Microsoft Internet Explorer")
            {
            populatediv('/social_html_ie.cms','socialreader_content');
            }
            else
            {
            populatediv('/social_html_ffcrome.cms','socialreader_content');
            }
            }
            catch(ex){
            }</script><div id="sharebarx_newfb"><div style="float:left;width:80px"><fb:like layout="button_count" show_faces="false" width="40" send="false" href="http://timesofindia.indiatimes.com/india/Want-to-serve-Gujarat-till-2017-Narendra-Modi/articleshow/22328733.cms"/></div></div><script>
						 function Set_Ckienew(name,value,expires,path,domain,secure){
							var today=new Date()
							today.setTime(today.getTime())
							if(expires){expires=expires*1000*60}
							var expires_date=new Date(today.getTime()+(expires))
							document.cookie=name+"="+escape(value)+((expires)? ";expires="+expires_date.toGMTString(): "")+((path)? ";path="+path : "")+((domain)? ";domain="+domain : "")+((secure)? ";secure" : "")
							}
		               function Get_Ckie(name){
							var start=document.cookie.indexOf(name+"=")
							var len=start+name.length+1
							if((!start)&&(name !=document.cookie.substring(0,name.length))){
								return null
							}
							if(start==-1)return null;
							var end=document.cookie.indexOf(";",len)
							if(end==-1)end=document.cookie.length
							return unescape(document.cookie.substring(len,end))
						}

						function Delete_Ckie(name,path,domain){
						try{
							if(Get_Ckie(name)){
							document.cookie=name+"="+((path)? ";path="+path : "")+((domain)? ";domain="+domain : "")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";
							}
						}
						catch(ex){}
						}
					  $("a").click(function(){
                          if($(this).attr("hid")){
						   var myhid = $(this).attr("hid");
						   Set_Ckienew("PlRef",myhid,2,"/",".indiatimes.com","");
						   var cookvalue = Get_Ckie("PlRef");
						  }
						  else{
						  var cookvalue1 = Get_Ckie("PlRef");
						  if(cookvalue1 != null || cookvalue1 != undefined)
                             Delete_Ckie("PlRef","/",".indiatimes.com");
						  }
						 });


			</script><link type="text/css" href="/timestrendstopcommoncssnewv.cms?version=1&amp;minify=1" rel="stylesheet"><script>
				function blockError(){return true;}
				window.onerror = blockError;
				var timeslog_channel_url = 'timesofindia.indiatimes.com';

				var ttrendlogmsid='22328733';</script><script src="http://timestrends.indiatimes.com/timestrend_v13.js"></script><noscript><img width="1" height="1" src="http://timeslog.indiatimes.com/timeslog.dll/pgnoscr?CHUR=timesofindia.indiatimes.com&logmviewed=1&msid=22328733"></img></noscript><script src="http://static.rewards.indiatimes.com/js/lb.js" type="text/javascript"></script><script type="text/javascript">(function() {
					var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true;
					em.src = ('https:' == document.location.protocol ? 'https://in-ssl' : 'http://in-cdn') + '.effectivemeasure.net/em.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s);
				})();</script><noscript><img style="position:absolute; left:-5px;" alt="" src="//in.effectivemeasure.net/em_image"></noscript><script type="text/javascript">var secname="";
			var agename="";</script><script type="text/javascript">secname='India';
			agename='';
				var _sf_async_config={uid:10538,domain:"timesofindia.indiatimes.com"};
				_sf_async_config.sections = secname;
				_sf_async_config.authors = agename;
				(function(){
				  function loadChartbeat() {
				    window._sf_endpt=(new Date()).getTime();
				    var e = document.createElement('script');
				    e.setAttribute('language', 'javascript');
				    e.setAttribute('type', 'text/javascript');
				    e.setAttribute('src',
				       (("https:" == document.location.protocol) ? "https://s3.amazonaws.com/" : "http://") +
				       "static.chartbeat.com/js/chartbeat.js");
				    document.body.appendChild(e);
				  }
				  var oldonload = window.onload;
				  window.onload = (typeof window.onload != 'function') ?
				     loadChartbeat : function() { oldonload(); loadChartbeat(); };
				})();
				</script><script type="text/javascript" src="/tpoint_js_v12.cms?version=6&amp;minify=1" language="javascript"></script><div id="fb-root"></div><script>
				  var usersessionkey="";
				  var loginFbSts="";
				   FB.init({appId: '117787264903013',oauth:true, status: true, cookie: true, xfbml: true});


				  if(Get_Ckie('autologin')!=null){
						if(Get_Ckie('autologin')=='2'){
							Delete_Ckie("autologin","/",".indiatimes.com");
						}
				  }


				  function getFbActiveSession()
				  {
					try
					{
						if(usersessionkey!='' && Get_Ckie('autologin')==null && Get_Ckie('MSCSAuth')==null){

							if(Get_Ckie('loginbegin')==null)
							{
								Set_Ckie("autologin","1",0,"/",".indiatimes.com","");
								document.getElementById("signupsso").src="/autologin.cms";
							}
							else
							{
								//alert("auto login aborted");
							}
						}
						else
						{
							if(loginFbSts=="not_authorized")
							{
								//Received the FB Active Session but app not authenticated
								if(Get_Ckie('disableautolg')==null)
								{
									Set_Ckie("autologin","1",0,"/",".indiatimes.com","");
									loadPopup('13');
								}
							}
							if(loginFbSts=="unknown")
							{
								// FB not connected
							}
						}
					}
					catch(ex){
					}
				  }


				  function getSessionFB(){
				  FB.getLoginStatus(function(response) {
				  loginFbSts=response.status;
				  if (response.authResponse)
				  {
				  	usersessionkey=response.authResponse.accessToken;
				  }
				  else {
				  }
				  getFbActiveSession();
				  });
				  }
				  try {
				  setTimeout("getSessionFB()",2000);
				  }
				  catch(ex){
				  }


			</script><div><img height="1" width="1" id="imgLogout"></div><div style="width:392px;" id="slidebadgearea"></div><div style="display:none;" id="shortenurlresponse"></div><script>badgedinit();</script><script>
			var _tp_async_data;
				try{
				var istrack1 = Get_Ckie('MSCSAuth');
				if(istrack1!=null)
				{
						//var locurl=document.location.href;
						//locurl=locurl.replace('jcmsstg','timesofindia');
					//lbsubmit(locurl,"toi","b39b9b02b0ef4bc6a0f38eef3e4618fe","","visit",rewardemail);
					//alert("UID:"+_tp_uid);alert("Email:"+_tp_email);alert(_tp_url);
					_tp_async_data = {
					host: "TOI",
					channel : 'News',
					URL: _tp_url,
					userId : _tp_uid,
					oid:"",
					email:_tp_email
					};
					log('visit','');
				}
				}
				catch(ex){}


			</script><div><div name="twitterbv" id="twitterbv"></div><div name="facebookbv" id="facebookbv"></div><div style="display:none;" id="iframevisbv"><iframe width="1" height="1" frameborder="0" id="myprefoptionbv"></iframe></div><div style="display:none;" id="iframevisbv1"><iframe width="1" height="1" frameborder="0" id="myprefoptionbv1"></iframe></div><div style="display:none;" id="bvsignup"><iframe width="1" height="1" frameborder="0" id="bvsignupiframe"></iframe><div style="display:none;" id="bvsignupdetail"></div></div></div><script>getbvdetails();</script><script>log('read',navmsid);</script><script>
				function activitytree(activityid)
				{
				document.location.href='http://mytimes.indiatimes.com?activityid='+activityid;
				}

			</script><script>setTimeout(function(){
                        var htmlstruc=$('#sharebarx_newfb').html();
                        $('#sharebarx_new').prepend(htmlstruc);
                        $('#sharebarx_new1').prepend(htmlstruc);
                        $('#sharebarx_newfb').html('');
                        },5000);</script><script>if(navigator.appName=="Microsoft Internet Explorer")
            {
            checkdeletejscssfile("/social_jsie_bottom.cms?minify=1", "js");
            checkloadjscssfile("/social_jsie_bottom.cms?minify=1", "js");
            document.getElementById('readerie').style.display="block";
            }
            else
            {
            checkdeletejscssfile("/social_jsffcrome_bottom_v2.cms?minify=1", "js");
            checkloadjscssfile("/social_jsffcrome_bottom_v2.cms?minify=1", "js");
            document.getElementById('readerffchr').style.display="block";

            }</script><script>setTimeout("dolike();",1000);</script><script>
var istrack = Get_Ckie('MSCSAuth');
if(istrack!=null)
{
    var rewardemail=Get_Ckie('MSCSAuthDetails').split('=')[1];
    if(rewardemail.indexOf('@')==-1)
    {
        rewardemail=rewardemail+'@indiatimes.com';
    }
    var locurl=document.location.href;
    locurl=locurl.replace('cmsportaldev','timesofindia');
    lbsubmit(locurl,"toi","b39b9b02b0ef4bc6a0f38eef3e4618fe",navmsid,"read_article",rewardemail);
}

					</script><script>
FB.Event.subscribe('edge.create', function(href, widget) {
    _gaq.push(['_trackEvent','Facebook','FBlikeLHS']);
    logaction('715');
    logonmyt('Shared',navmsid,'facebook');
    log('sh_fb',navmsid);
});
FB.Event.subscribe('message.send', function(href, widget) {
    log('like_fb',navmsid);
});

					</script><script>
					$(".Normal ").find('p:last').not(':last').append(" <a href='javascript:void(0);' onclick='pagination(\"next\")'>Continue...</a>");
					if (((curpg > $(".pgno").length) && ($(".pgno").length != "0")) || (curpg < 1)){
					 pagination("1");
					}

					</script><script src="http://ads.indiatimes.com/ads.dll/genptypead?slotid=3738" language="javascript"></script><script>showDCAdsInnov1(0,0);</script><script>showDCAdsPop(0,0);</script><script>showDCAdsShosh(0,0);</script><script src="http://ads.indiatimes.com/ads.dll/genptypead?slotid=2384&amp;poptype=2" language="javascript"></script><script type="text/javascript">function displayCompanionBanners(banners) {
                        tmDisplayBanner(banners, "adDiv", 300, 250);
                        }</script><script type="text/javascript" src="/jsyumeplayer.cms"></script><script src="http://netspiderads3.indiatimes.com/ads.dll/getxmlad?slotid=1219&amp;rettype=1" language="Javascript"></script></div><script>
var cookvalue1 ="";
if(Get_Ckie('PlRef') != null && Get_Ckie('PlRef') != ""){
    cookvalue1 = Get_Ckie('PlRef');
	//alert(cookvalue1);
}

				</script><script type="text/javascript">function trim(str){return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');}
                    var _iBeat_articleid="22328733";
                    var _iBeat_articledt="Sep 5, 2013, 04.02 PM IST";
                    var _iBeat_author="";
                    var _iBeat_tag='Narendra Modi,Gujarat chief minister';
                    var _iBeat_channel ="PTI";
                    var _iBeat_url = window.location.href;
                    _iBeat_url=escape(_iBeat_url);
                    var _iBeat_type="";
                    if(_iBeat_url.indexOf('articleshow') != -1){_iBeat_type = 1}
                    else if(_iBeat_url.indexOf('videoshow') != -1){_iBeat_type = 2}
                    else{_iBeat_type = 3}
                    var _iBeat_cat=trim('India');
                    var _iBeat_subcat=trim('');
                    var _iBeat_position=cookvalue1;</script><script type="text/javascript">if(getCookievalue1('mscsauth') != null){
                    if(getCookievalue1('mscsauth') != ""){
                    var _iBeat_action="1";
                    var _iBeat_uid=getCookievalue1('mscsauthdetails').split('=')[1];
                    var _iBeat_searchterm="";
                    var _iBeat_async_config={
                    host: "timesofindia.indiatimes.com",
                    key : 'ae9d3286a3123c65177df0aa6088b6e7'
                    };
                    var _iBeat_async_data = {
                    action : _iBeat_action,
                    URL: _iBeat_url,
                    searchterm: _iBeat_searchterm,
                    domain: 'timesofindia.indiatimes.com',
                    articleid:_iBeat_articleid,
                    articledt:_iBeat_articledt,
                    userId : _iBeat_uid,
                    contenttype:_iBeat_type,
                    cat : _iBeat_cat,
                    subcat: _iBeat_subcat,
                    author: _iBeat_author,
                    contenttag:_iBeat_tag,
                    position:_iBeat_position
                    };
                    (function(){
                    function pingIbeatlog() {
                    var e = document.createElement('script');
                    e.setAttribute('language', 'javascript');
                    e.setAttribute('type', 'text/javascript');
                    e.setAttribute('src',"http://ibeat.indiatimes.com/js/trackingV4.js");
                    document.body.appendChild(e);
                    }
                    pingIbeatlog();
                    })();
                    }}</script><script type="text/javascript">var _pg_startpt = (new Date()).getTime();
                    var _page_config;
                    function ibconfig(ibeatact, ibeatctype){
                    var _pg_startpt = (new Date()).getTime();
                    _page_config = {
                    host: 'timesofindia.indiatimes.com',
                    key: 'ae9d3286a3123c65177df0aa6088b6e7',
                    domain: 'timesofindia.indiatimes.com',
                    action : ibeatact,
                    articleId: _iBeat_articleid,
                    articledt:_iBeat_articledt,
                    author:_iBeat_author,
                    contentType: ibeatctype,
                    location : 1,
                    channel: _iBeat_channel,
                    cat : _iBeat_cat,
                    subcat: _iBeat_subcat,
                    contenttag: _iBeat_tag,
                    position:_iBeat_position
                    };
                    }
                    ibconfig('1',_iBeat_type);
                    (function(){
                    function pingIbeat() {
                    window._pg_endpt=(new Date()).getTime();
                    var e = document.createElement('script');
                    e.setAttribute('language', 'javascript');
                    e.setAttribute('type', 'text/javascript');
                    e.setAttribute('src',"http://ibeat.indiatimes.com/js/pgtrackingV4.js");
                    document.body.appendChild(e);

                    }
                    var oldonload = window.onload;
                    window.onload = (typeof window.onload != 'function') ?
                    pingIbeat : function() { oldonload(); pingIbeat(); };
                    })();</script><script>var _pg_startpt = (new Date()).getTime();
                    var _page_config;
                    function ibconfig(ibeatact, ibeatctype){
                    var _pg_startpt = (new Date()).getTime();
                    _page_config = {
                    host: 'timesofindia.indiatimes.com',
                    key: 'ae9d3286a3123c65177df0aa6088b6e7',
                    domain: 'timesofindia.indiatimes.com',
                    action : ibeatact,
                    articleId: _iBeat_articleid,
                    articledt:_iBeat_articledt,
                    author:_iBeat_author,
                    contentType: ibeatctype,
                    location : 1,
                    channel: _iBeat_channel,
                    cat : _iBeat_cat,
                    subcat: _iBeat_subcat,

                    contenttag: _iBeat_tag,
                    position:_iBeat_position
                    };
                    }
                    ibconfig('1',_iBeat_type);
                    (function(){
                    function pingIbeat() {
                    window._pg_endpt=(new Date()).getTime();
                    var e = document.createElement('script');
                    e.setAttribute('language', 'javascript');
                    e.setAttribute('type', 'text/javascript');
                    e.setAttribute('src',"http://ibeat.indiatimes.com/js/pgtrackingV4.js");
                    document.body.appendChild(e);
                    }
                    var oldonload = window.onload;
                    window.onload = (typeof window.onload != 'function') ?
                    pingIbeat : function() { oldonload(); pingIbeat(); };
                    })();</script><script>
var mytimes = {
    _M_mode:1,
    _M_url : window.location.href,
    _M_baseEntityType : "ARTICLE",
    _M_objType:"B",
    _M_isLoggedIn : function(){
        var _m_getlogCook= Get_Ckie("MSCSAuth");
        if(_m_getlogCook == null || _m_getlogCook == "" || _m_getlogCook ==undefined){
            return 0;
        }else{
            return 1;
        }
    },
    _M_actType:function(actT){
        switch(actT){
            case "100" : actT = "Agreed";this._M_objType="A";this._M_url="";break;
            case "101" : actT = "Disagreed";this._M_objType="A";this._M_url="";break;
            case "102" : actT = "Reccomended";this._M_objType="A";this._M_url="";break;
        }
        return actT;
    },
    _M_act:function(activityType,_m_msid,_m_msg){
        var blockedSec = "1456344,4756886,";
        if(blockedSec.indexOf(sectionid+",") == -1){
            if(this._M_mode==1 && (this._M_isLoggedIn() == 1 || (activityType == 100 || activityType == 101 || activityType == 102)) && (_m_msid != undefined || _m_msid != null)){
                var src = "http://myt.indiatimes.com/mytimes/addActivity?";
                src = src + "activityType="+this._M_actType(activityType);
                src = src + "&appKey=TOI";
                if(activityType == "100" || activityType == "101" || activityType == "102"){
                    src = src + "&parentCommentId="+_m_msid;
                }else{
                    src = src + "&uniqueAppID="+_m_msid;
                }
                src = src + "&baseEntityType="+this._M_baseEntityType;
                src = src + "&objectType="+this._M_objType;
                src = src + "&url="+this._M_url;
                if(_m_msg != null && _m_msg != undefined && _m_msg != ""){
                    src = src + "&via="+_m_msg;
                }
                var img = new Image(1,1);
                img.src=src;
            }
        }
    },
    _M_done:function(){
    }
};
(function(){



    if(Get_Ckie_str("myt_read_"+navmsid,1)!= "READ"){


        Set_Ckie_str("myt_read_"+navmsid,"READ",1,"/","","");
        setTimeout('mytimes._M_act("Read",navmsid,"")',5000);
    }
})();
function logonmyt(m_activity,m_msid,m_msg){
    mytimes._M_act(m_activity,m_msid,m_msg);
}
function savetomyt(m_msid){
    var xx_Msg = document.getElementById("savedat1").innerHTML;
    var yy_Msg = document.getElementById("savedat").innerHTML;
	//alert(yy_Msg);
    if(xx_Msg.indexOf("This headline has been added to your saved article(s)") != -1){
	//alert(yy_Msg);
        mytimes._M_act("Saved",m_msid,"");
    }
    if(yy_Msg.indexOf("This headline has been added to your saved article(s)") != -1){
        mytimes._M_act("Saved",m_msid,"");
    }

}
function copy (str)
{
    //for IE ONLY!

    window.clipboardData.setData('Text',str);
}

				</script><div style="display:none;" id="phMgContainer"><script language="javascript" type="text/javascript">var _afs = _afs || {};
	_afs['pb'] = "wph64";
	_afs['aduid'] = "42";
	(function() {
		var mg = document.createElement('script'); mg.type = 'text/javascript';
		mg.src = '//inm.affinitymatrix.com/js/mg.js?pb='+_afs['pb'];
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mg, s);
	})();</script></div><script language="JavaScript">
;(function () {
    var param = {
        'cmpubid': 'wph64',
        'aduid': 55
    };
    var d = document,s = d.createElement('script'),u = [],p;param.cmurl = location.href;param.phR = Math.random() + "_" + (new Date().getTime());for (p in param) {if( param.hasOwnProperty(p) ){u.push(p + "=" + encodeURIComponent(param[p]));}}s.src = 'http://itn.ph.affinity.com/init/i.js?' + u.join("&");s.type = 'text/javascript';d.getElementsByTagName('head')[0].appendChild(s);
})();

				</script><script>
if(Get_Ckie('FRMartshow')!=null)
{
    Delete_Ckie("FRMartshow","/",".indiatimes.com");
}
function mysvdart()
{
    Set_Ckie("FRMartshow","1",1,"/",".indiatimes.com","");
}

				</script><script type="text/javascript">var nsjxSetups=[4];</script><script src="http://netspideradswc.indiatimes.com/ads.dll/getjsonad?slotid=211"></script><script type="text/javascript" src="http://adscontent2.indiatimes.com/nsjsonrequest_v1.js"></script><script>var recv = new CSlider1("recvidslider",'',1,570);</script><div id="exposeMask" class="black_overlay_new"></div><div style="display:none;" id="shareMask" class="sharemaskstyle"></div><script type="text/javascript">$("#openDiv").bind("contextmenu", function(e) {
                    e.preventDefault();
                    });

                    $('#openDiv').click(function() {
                    $("#moreL").toggle();
                    if ($('#moreL').is(":visible")) {
                    $('body').click(function(event) {
                    var $target = $(event.target);

                    if ($target.parents('#moreL').length == 0) {
                    $("#moreL").hide();
                    }
                    });


                    }
                    return false;
                    });
                    try{  deleteoldstorage("myt_read_",1);}catch(e){}
                    try{   deleteoldstorage("usercomt",1);}catch(e){}</script><script src="http://ads.indiatimes.com/ads.dll/genptypead?slotid=5044" language="javascript"></script><script>
				if(Get_Ckie('PlRef') != null || Get_Ckie('PlRef') != ""){
				//alert("removed");
				    Delete_Ckie("PlRef","/",".indiatimes.com");
				}

				</script><script type="text/javascript" src="/bottom_js.cms?version=1"></script><script type="text/javascript" src="http://tags.crwdcntrl.net/c/2801/cc.js?ns=_cc2801" id="LOTCC_2801"></script><script type="text/javascript" language="javascript">_cc2801.bcp();</script><script type="text/javascript">ADSPANDABLE_PARAMS = {
					container : ['adbreak-adspdbl:id','timesindia-test:class','body .timesindia-test:selector']
					}</script><script src="http://files.adspdbl.com/publishers/timesofindia/code.js" type="text/javascript"></script></body></html>`)
/*
    ads.indiatimes.com;ads2book.com;adscontent2.indiatimes.com;advertise.indiatimes.com;ahmedabadmirror.com;astrospeak.com;b.scorecardresearch.com;bangaloremirror.com;base.google.com;boxtv.com;brandcapital.co.in;cmstrendslog.indiatimes.com;content.magicbricks.com;download.macromedia.com;economictimes.indiatimes.com;email.indiatimes.com;entertainment.timesofindia.com;epaper.timesofindia.com;facebook.com;files.adspdbl.com;gaana.com;gogreenindia.co.in;graph.facebook.com;gujarati.economictimes.indiatimes.com;guylife.com;healthmeup.com;hindi.economictimes.indiatimes.com;hotklix.com;ibeat.indiatimes.com;idiva.com;indiatimes.com;itn.ph.affinity.com;itsmyascent.com;luxpresso.com;m.timesofindia.com;macromedia.com;magicbricks.com;maharashtratimes.indiatimes.com;mobile.indiatimes.com;mocolife.com;mumbaimirror.com;myeducationtimes.com;myt.indiatimes.com;mytimes.indiatimes.com;navbharattimes.indiatimes.com;netspiderads2.indiatimes.com;netspiderads3.indiatimes.com;netspideradswc.indiatimes.com;ogp.me;photogallery.indiatimes.com;plus.google.com;profile.live.com;punemirror.in;s3.amazonaws.com;salescrm.indiatimes.com;shopping.indiatimes.com;simplymarry.com;ssl.gstatic.com;static.rewards.indiatimes.com;tags.crwdcntrl.net;techgig.com;technoholik.com;tenders.indiatimes.com;timescity.com;timescontent.com;timescrest.com;timesdeal.com;timesinternet.in;timesjobs.com;timeslog.indiatimes.com;timesnow.live.indiatimes.com;timesnow.tv;timesofindia.hotklix.com;timesofindia.indiatimes.com;timesofindia.speakingtree.in;timesofmoney.com;timestrends.indiatimes.com;twitter.com;vijaykarnataka.indiatimes.com;w3.org;webuild.indiatimes.com;widgets.outbrain.com;ww.itimes.com;yolist.com;zigwheels.com;zoomtv.in
*/