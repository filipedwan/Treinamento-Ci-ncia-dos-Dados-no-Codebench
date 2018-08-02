var s_account = window.fifa.analytics.SiteCatalyst.account || "";
if (!!window.analyticsbase && !!window.analyticsbase.servicetype) {
    if (window.analyticsbase.servicetype=="mobile") {
        s_account=s_account.replace("mobile","");
        window.fifa.analytics.SiteCatalyst.account = s_account;
    }
}

var s = s_gi(s_account);
s.debugTracking = false;
s.charSet = "UTF-8";

/* Link and ClickMap tracking */
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
s.linkInternalFilters = "javascript:,fifa.com,fifa.deltatre.it";


s.linkLeaveQueryString = false;
s.linkTrackVars = "None";
s.linkTrackEvents = "None";

s.usePlugins = false;
function s_doPlugins(s) {
  /* Add usage of plugins here */
  var fifabase = window.fifa.analytics.SiteCatalyst;
  var pagevars = window.fifa.analytics.Page.getActiveVars(true);
  fifabase.setPlugins(s);
  // Add custom plugins to fifabase HERE

  var tagPlugins = fifabase.tagPlugins || {};
  tagPlugins.getSection = function(pagevars,num) {
    var sct = "";
    if (!!pagevars.channel) {
      sct=pagevars.channel;
    }
    var i = 1;
    while (i <= num) {
      if (!!pagevars["subsection"+i]) {
        sct = sct + ":" + pagevars["subsection"+i];
      }
      i = i+1;
    }
    return sct;
  };
  fifabase.tagPlugins = tagPlugins;
  

  //Set Vars 
  
  if (!!pagevars.channel) {
    s.channel = pagevars.channel.toLowerCase();
  }
   var ct = "";
    if (!!pagevars.contenttype) ct =  pagevars.contenttype.toLowerCase();
    s.prop5 = ct;
    var scts = "";
 if (!!pagevars.channel) {
    s.prop1 = tagPlugins.getSection(pagevars, 1).toLowerCase();
    s.prop2 = tagPlugins.getSection(pagevars, 2).toLowerCase();
    s.prop3 = tagPlugins.getSection(pagevars, 3).toLowerCase();
    s.prop4 = tagPlugins.getSection(pagevars, 4).toLowerCase();
    s.hier1 = tagPlugins.getSection(pagevars, 10).replace(/:/g,',').toLowerCase();
    scts = tagPlugins.getSection(pagevars, 10).toLowerCase() + ":";
     }
    
    s.prop8 = pagevars.title.toLowerCase();;
    if (!!pagevars.servicetype) s.prop43 = pagevars.servicetype.toLowerCase();
    s.prop11 = pagevars.lang;
    if (!!pagevars.tournamentName) s.prop13 = pagevars.tournamentName;
    if (!!pagevars.seasonName) s.prop14 = pagevars.seasonName;
    if (!!pagevars.matchId) s.prop16 = pagevars.matchId;    
  	if (!!pagevars.prop16) s.prop16 = pagevars.prop16;
    if (!!pagevars.roundId) s.prop17 = pagevars.roundId;
    if (!!pagevars.groupId) s.prop18 = pagevars.groupId;
    if (!!pagevars.teamId) s.prop19 = pagevars.teamId;
    if (!!pagevars.playerId) s.prop20 = pagevars.playerId;
    if (!!pagevars.contentId) s.prop7 = pagevars.contentId;
    if (!!pagevars.countrycode) s.prop22 = pagevars.countrycode;

    if (!!pagevars.parentid) {
        s.prop59 = pagevars.parentid;
    }

    if (!!pagevars.edition) {
        s.prop56 = pagevars.edition;
        s.eVar56 = pagevars.edition;
    }
    if (!!pagevars.inneredition) {
        s.prop56 = pagevars.inneredition;
        s.eVar56 = pagevars.inneredition;
    }

    if (!!pagevars.sectiontype) {
        s.prop58 = pagevars.sectiontype;
        s.eVar58 = pagevars.sectiontype;
    }
    if (!!pagevars.sparea && !!pagevars.spactiv) {
        s.prop51=pagevars.sparea+':'+pagevars.spactiv;
    }

		

s.pageURL = currentUrl;
    
 if (!!pagevars.partners) {
   s.list1 = pagevars.partners;
}

  s.pageName = "" + scts + ct;

if (!!pagevars.pagestatus) {
      s.prop55 = pagevars.pagestatus;
      s.eVar55 = pagevars.pagestatus;
   } 

if (!!pagevars.dataupdates) {
s.prop57 = s.pageName + "|dataupdates";
s.eVar57 = s.pageName + "|dataupdates";
}
  
  if(pagevars.prop60){s.prop60=pagevars.prop60;}
  if(pagevars.prop61){s.prop61=pagevars.prop61;}
  if(pagevars.prop62){s.prop62=pagevars.prop62;}

/*USER MANAGEMENT */
var user = window.CurrentUser;
if (!!user && !!s) {
	user.Init();
	if (!!user.userId) {
		s.prop24 = user.userId;
		s.eVar24 = user.userId;
	}
	if (!!user.gender) {
		s.prop28 = user.gender;
		s.eVar28 = user.gender;
	}
	if (!!user.birthdate) {
		s.prop27 = user.birthdate;
		s.eVar27 = user.birthdate;
	}
	if (!!user.status && user.status == 'logged') {
		s.prop25 = 'Logged in';
		s.eVar25 = 'Logged in';
	}
        else {
                s.prop25 = 'Not logged in';
                s.eVar25 = 'Not logged in';
        }
	if (!!user.preferredLanguage) {
		s.prop29 = user.preferredLanguage;
		s.aVar29 = user.preferredLanguage;
	} 
	if (!!user.preferredTeam) {
		s.prop30 = user.preferredTeam;
		s.eVar30 = user.preferredTeam;
	}
	if (!!user.hasAvatar && user.hasAvatar == 'true' ) {
		s.prop31 = 'Y';
		s.aVar31 = 'Y';
	} else {
		s.prop31 = 'N';
		s.aVar31 = 'N';
	}
	if (!!user.preferredLeague) {
		s.prop47 = user.preferredLeague;
		s.aVar47 = user.preferredLeague;
	}
	if (!!user.country) {
		s.prop32 = user.country;
		s.eVar32 = user.country;
	}
	if (!!user.newsLetter && user.newsLetter=='true') {
		s.prop33 = 'Y';
		s.eVar33 = 'Y';
	} else {
		s.prop33 = 'N';
		s.aVar33 = 'N';
	}
}
else {
    if (!!s) {
	s.prop25 = 'Not logged in';
        s.eVar25 = 'Not logged in';
    }
}

  if(!!pagevars.pageType){
    s.pageType=pagevars.pageType;
    if(s.pageType === 'errorPage'){
      s.pageName = s.pageName.replace('error:','');
    }
  }
  
  fifabase.doPlugins(s);
  fifabase.copyVars(s);
  
  if (window.location.href.indexOf("cid=") != -1) {
    var queryParam = window.location.href.split("?");
    var queryValue = queryParam[1].split("=");

    if (queryValue.length > 0) {
      var cidVal = queryValue[1];
      s.campaign = cidVal;
      if (cidVal.indexOf("social") != -1) {
        sessionStorage.setItem("FIFA_CID", cidVal);
      }
    }
  }

  var currentUrl = pagevars.url || window.location.href;
  var fifaCID = sessionStorage.getItem("FIFA_CID");

  if (currentUrl.indexOf("cid") == -1 && fifaCID != "" && fifaCID != null) {
    s.campaign = fifaCID;
  }

  if (typeof fifa.analytics.getActiveSponsors == 'function') {
    var sponsors = fifa.analytics.getActiveSponsors();
    for (var skey in sponsors) {
    	var itemobj = sponsors[skey],
          sid = itemobj.sponsorId || "",
          sk = itemobj.sponsorKind || "",
          sa = itemobj.sponsorArea || "",
          sact = itemobj.sponsorActivation || "",
          cnt = itemobj.count || 1;
      if (sa.length > 0) {
        sa = ":" + sa;
      }
      if (sact.length > 0) {
        sact = ":" + sact;
      }
      if (!!itemobj.sponsorId && !!s.prop11) {
        var products = ";" + sid + ":" + s.prop11 + ":" + sk + sa + sact + ";;;event27=" + cnt;
        if((s.products||'').indexOf(products) > -1){
        products='';
        }
        if (!!s.products == false) {
          s.products = "";
        } else if(s.products.indexOf(products)===-1){
          s.products = s.products + ",";
        }
        s.products = s.products + products;
      }
      if (!!s.products && s.products.length > 0) {
        if (!!s.events) {
          s.events = s.events + ',';
        } else {
          s.events = '';
        }
        if (s.events.indexOf('event2') == -1) {
          s.events = s.events + 'event2';
        }
        if (s.events.indexOf('event27') == -1) {
          s.events = s.events + ',event27';
        }
        s.events = s.events.replace(/,,/g, ",");
      }
    }
    if (!!s.prop55 && !!s.prop5 && s.prop55.indexOf("registration") >= 0) {
      if (s.prop5.indexOf("form-registration") >= 0) {
        if (!!s.events) {
          s.events = s.events + ',';
        } else {
          s.events = '';
        }
        if (s.events.indexOf('event18') == -1) {
          s.events = s.events + 'event18';
        }
        if (!!document.referrer) {
          s.eVar45 = document.referrer;
        }
      }
      if (s.prop5.indexOf("confirmation") >= 0) {
        if (!!s.events) {
          s.events = s.events + ',';
        } else {
          s.events = '';
        }
        if (s.events.indexOf('event19') == -1) {
          s.events = s.events + 'event19';
        }
      }
      s.events = s.events.replace(/,,/g, ",");
    }
    if (!!s.prop5 && s.prop5 == "activation") {
      if (!!s.events) {
        s.events = s.events + ',';
      } else {
        s.events = '';
      }
      if (s.events.indexOf('event22') == -1) {
        s.events = s.events + 'event22';
      }
    }
  }
  var pvars = window.fifa.analytics.Page.getActiveVars(true);
  if (!!pvars && !!pvars.contentId) {
    s.prop7 = pvars.contentId;
  }
  
  if (!!pagevars && !!pagevars.playertype) {
    if (pagevars.playertype == "External Player") {
      fifa.dispatcher.trigger('analytics:videoStart', 0, pagevars.playertype);
    }
  }
  window.fifa.analytics.firstTrack = true;
  s.usePlugins = true;
}
s.doPlugins = s_doPlugins;

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.pageName = s.pageName || "";
s.visitorNamespace = "fifa";
if (!(typeof Visitor === "undefined")) {
s.visitor = Visitor.getInstance("fifa");
}
s.trackingServer = "metrics.fifa.com";
s.trackingServerSecure = "";



s.doPlugins(s);


//TESTING MR SOCIAL TRACKING CODE
_satellite.whenEvent('load', function () {
  if (typeof massrel != 'undefined' && !!massrel) {
    massrel.ui.events.on('analytics', function (event) {
      if (event.eventName === 'trackEvent') {
        var data = event.eventData;
        var category = data.category;
        var action = data.action;
        var label = data.label;
        if (!!category && !!action && !!label) {
          //console.log('CHECK');
          //console.log(category + ":" + action + ":" + label);
          var curvars = fifa.analytics.Page.getActiveVars() || {};
          if (!!curvars) {
            subsection1 = curvars.subsection1;
            var custvars = {};
            //console.log('CHECKSUBS1');
            //console.log(subsection1);
            switch (subsection1) {
              case "matches":
                switch (category + ":" + action + ":" + label) {
                  case "adhoccp:FIFAWorldCup2014:click:clickPlayer":
                    custvars.subsection6 = "top-trending";
                    custvars.subsection7 = "player";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhoto":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhotoFacebook":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "facebook-photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhotoTwitter":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "twitter-photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhotoInstagram":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "instagram-photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:retweet":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "retweet";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:inlineTweet":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "inline-tweet";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:facebookPost":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "facebook-post";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicBrandedTile":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "branded-tile";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:twitterVote":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "twitter-vote";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:facebookVote":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "facebook-vote";
                    custvars.track = true;
                    break;
                  case "tweetaction:reply:other":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "twitter-reply";
                    custvars.track = true;
                    break;
                  case "tweetaction:fav:other":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "twitter-favourite";
                    custvars.track = true;
                    break;
                  case "tweetaction:author:other":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "twitter-author";
                    custvars.track = true;
                    break;
                  case "fbaction:author:other":
                    custvars.subsection6 = "conversation";
                    custvars.subsection7 = "facebook-author";
                    custvars.track = true;
                    break;
                }
                break;
              case "players":
              case "teams":
                switch (category + ":" + action + ":" + label) {
                  case "adhoccp:FIFAWorldCup2014:click:clickPlayer":
                    custvars.subsection5 = "top-trending";
                    custvars.subsection6 = "player";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhoto":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhotoFacebook":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "facebook-photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhotoTwitter":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "twitter-photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhotoInstagram":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "instagram-photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:retweet":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "retweet";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:inlineTweet":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "inline-tweet";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:facebookPost":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "facebook-post";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicBrandedTile":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "branded-tile";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:twitterVote":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "twitter-vote";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:facebookVote":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "facebook-vote";
                    custvars.track = true;
                    break;
                  case "tweetaction:reply:other":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "twitter-reply";
                    custvars.track = true;
                    break;
                  case "tweetaction:fav:other":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "twitter-favourite";
                    custvars.track = true;
                    break;
                  case "tweetaction:author:other":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "twitter-author";
                    custvars.track = true;
                    break;
                  case "fbaction:author:other":
                    custvars.subsection5 = "conversation";
                    custvars.subsection6 = "facebook-author";
                    custvars.track = true;
                    break;
                }
                break;
              case "social":
                switch (category + ":" + action + ":" + label) {
                  case "adhoccp:FIFAWorldCup2014:click:clickTabteams":
                    custvars.subsection2 = "top-trending";
                    custvars.subsection6 = "teams";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickTeam":
                    custvars.subsection2 = "top-trending";
                    custvars.subsection3 = "teams";
                    custvars.subsection4 = "team";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickGridBrandedTile":
                    custvars.subsection2 = "top-trending";
                    custvars.subsection3 = "branded tile";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickTabplayers":
                    custvars.subsection2 = "top-trending";
                    custvars.subsection3 = "players";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickPlayer":
                    custvars.subsection2 = "top-trending";
                    custvars.subsection3 = "players";
                    custvars.subsection4 = "player";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicTabFans":
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicTabPlayers":
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicTabCelebs":
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicTabAll":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "labels";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:filterMosaic":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "labels";
                    custvars.subsection4 = "selectby";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhoto":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhotoFacebook":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "facebook-photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhotoTwitter":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "twitter-photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicPhotoInstagram":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "instagram-photo";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:retweet":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "retweet";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:inlineTweet":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "inline-tweet";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:facebookPost":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "facebook-post";
                    custvars.track = true;
                    break;
                  case "adhoccp:FIFAWorldCup2014:click:clickMosaicBrandedTile":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "branded-tile";
                    custvars.track = true;
                    break;
                  case "tweetaction:reply:other":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "twitter-reply";
                    custvars.track = true;
                    break;
                  case "tweetaction:fav:other":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "twitter-favourite";
                    custvars.track = true;
                    break;
                  case "tweetaction:author:other":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "twitter-author";
                    custvars.track = true;
                    break;
                  case "fbaction:author:other":
                    custvars.subsection2 = "conversation";
                    custvars.subsection3 = "facebook-author";
                    custvars.track = true;
                    break;
                }
                break;

            }
            //console.log('VARS');
            //console.log(custvars);
            if (!!custvars.track) {
              fifa.dispatcher.trigger('analytics:customPageView', custvars);
            }
          }
        }
      }
    });
  }
});
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

 AppMeasurement for JavaScript version: 1.2.1
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function AppMeasurement(){var s=this;s.version="1.2.1";var w=window;if(!w.s_c_in)w.s_c_il=[],w.s_c_in=0;s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;s._c="s_c";var k=w.fb;k||(k=null);var m=w,i,n;try{i=m.parent;for(n=m.location;i&&i.location&&n&&""+i.location!=""+n&&m.location&&""+i.location!=""+m.location&&i.location.host==n.host;)m=i,i=m.parent}catch(p){}s.Sa=function(s){try{console.log(s)}catch(a){}};s.ja=function(s){return""+parseInt(s)==""+s};s.replace=function(s,a,c){if(!s||s.indexOf(a)<
0)return s;return s.split(a).join(c)};s.escape=function(b){var a,c;if(!b)return b;b=encodeURIComponent(b);for(a=0;a<7;a++)c="+~!*()'".substring(a,a+1),b.indexOf(c)>=0&&(b=s.replace(b,c,"%"+c.charCodeAt(0).toString(16).toUpperCase()));return b};s.unescape=function(b){if(!b)return b;b=b.indexOf("+")>=0?s.replace(b,"+"," "):b;try{return decodeURIComponent(b)}catch(a){}return unescape(b)};s.Ja=function(){var b=w.location.hostname,a=s.fpCookieDomainPeriods,c;if(!a)a=s.cookieDomainPeriods;if(b&&!s.ca&&
!/^[0-9.]+$/.test(b)&&(a=a?parseInt(a):2,a=a>2?a:2,c=b.lastIndexOf("."),c>=0)){for(;c>=0&&a>1;)c=b.lastIndexOf(".",c-1),a--;s.ca=c>0?b.substring(c):b}return s.ca};s.c_r=s.cookieRead=function(b){b=s.escape(b);var a=" "+s.d.cookie,c=a.indexOf(" "+b+"="),e=c<0?c:a.indexOf(";",c);b=c<0?"":s.unescape(a.substring(c+2+b.length,e<0?a.length:e));return b!="[[B]]"?b:""};s.c_w=s.cookieWrite=function(b,a,c){var e=s.Ja(),d=s.cookieLifetime,f;a=""+a;d=d?(""+d).toUpperCase():"";c&&d!="SESSION"&&d!="NONE"&&((f=a!=
""?parseInt(d?d:0):-60)?(c=new Date,c.setTime(c.getTime()+f*1E3)):c==1&&(c=new Date,f=c.getYear(),c.setYear(f+5+(f<1900?1900:0))));if(b&&d!="NONE")return s.d.cookie=b+"="+s.escape(a!=""?a:"[[B]]")+"; path=/;"+(c&&d!="SESSION"?" expires="+c.toGMTString()+";":"")+(e?" domain="+e+";":""),s.cookieRead(b)==a;return 0};s.C=[];s.B=function(b,a,c){if(s.da)return 0;if(!s.maxDelay)s.maxDelay=250;var e=0,d=(new Date).getTime()+s.maxDelay,f=s.d.cb,g=["webkitvisibilitychange","visibilitychange"];if(!f)f=s.d.eb;
if(f&&f=="prerender"){if(!s.M){s.M=1;for(c=0;c<g.length;c++)s.d.addEventListener(g[c],function(){var b=s.d.cb;if(!b)b=s.d.eb;if(b=="visible")s.M=0,s.delayReady()})}e=1;d=0}else c||s.q("_d")&&(e=1);e&&(s.C.push({m:b,a:a,t:d}),s.M||setTimeout(s.delayReady,s.maxDelay));return e};s.delayReady=function(){var b=(new Date).getTime(),a=0,c;for(s.q("_d")&&(a=1);s.C.length>0;){c=s.C.shift();if(a&&!c.t&&c.t>b){s.C.unshift(c);setTimeout(s.delayReady,parseInt(s.maxDelay/2));break}s.da=1;s[c.m].apply(s,c.a);s.da=
0}};s.setAccount=s.sa=function(b){var a,c;if(!s.B("setAccount",arguments))if(s.account=b,s.allAccounts){a=s.allAccounts.concat(b.split(","));s.allAccounts=[];a.sort();for(c=0;c<a.length;c++)(c==0||a[c-1]!=a[c])&&s.allAccounts.push(a[c])}else s.allAccounts=b.split(",")};s.W=function(b,a,c,e,d){var f="",g,j,w,q,i=0;b=="contextData"&&(b="c");if(a){for(g in a)if(!Object.prototype[g]&&(!d||g.substring(0,d.length)==d)&&a[g]&&(!c||c.indexOf(","+(e?e+".":"")+g+",")>=0)){w=!1;if(i)for(j=0;j<i.length;j++)g.substring(0,
i[j].length)==i[j]&&(w=!0);if(!w&&(f==""&&(f+="&"+b+"."),j=a[g],d&&(g=g.substring(d.length)),g.length>0))if(w=g.indexOf("."),w>0)j=g.substring(0,w),w=(d?d:"")+j+".",i||(i=[]),i.push(w),f+=s.W(j,a,c,e,w);else if(typeof j=="boolean"&&(j=j?"true":"false"),j){if(e=="retrieveLightData"&&d.indexOf(".contextData.")<0)switch(w=g.substring(0,4),q=g.substring(4),g){case "transactionID":g="xact";break;case "channel":g="ch";break;case "campaign":g="v0";break;default:s.ja(q)&&(w=="prop"?g="c"+q:w=="eVar"?g="v"+
q:w=="list"?g="l"+q:w=="hier"&&(g="h"+q,j=j.substring(0,255)))}f+="&"+s.escape(g)+"="+s.escape(j)}}f!=""&&(f+="&."+b)}return f};s.La=function(){var b="",a,c,e,d,f,g,j,w,i="",k="",m=c="";if(s.lightProfileID)a=s.P,(i=s.lightTrackVars)&&(i=","+i+","+s.ma.join(",")+",");else{a=s.e;if(s.pe||s.linkType)if(i=s.linkTrackVars,k=s.linkTrackEvents,s.pe&&(c=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1),s[c]))i=s[c].pb,k=s[c].ob;i&&(i=","+i+","+s.H.join(",")+",");k&&(k=","+k+",",i&&(i+=",events,"));s.events2&&
(m+=(m!=""?",":"")+s.events2)}for(c=0;c<a.length;c++){d=a[c];f=s[d];e=d.substring(0,4);g=d.substring(4);!f&&d=="events"&&m&&(f=m,m="");if(f&&(!i||i.indexOf(","+d+",")>=0)){switch(d){case "timestamp":d="ts";break;case "dynamicVariablePrefix":d="D";break;case "visitorID":d="vid";break;case "marketingCloudVisitorID":d="mid";break;case "analyticsVisitorID":d="aid";break;case "audienceManagerVisitorID":d="aamid";break;case "audienceManagerLocationHint":d="aamlh";break;case "pageURL":d="g";if(f.length>
255)s.pageURLRest=f.substring(255),f=f.substring(0,255);break;case "pageURLRest":d="-g";break;case "referrer":d="r";break;case "vmk":case "visitorMigrationKey":d="vmt";break;case "visitorMigrationServer":d="vmf";s.ssl&&s.visitorMigrationServerSecure&&(f="");break;case "visitorMigrationServerSecure":d="vmf";!s.ssl&&s.visitorMigrationServer&&(f="");break;case "charSet":d="ce";break;case "visitorNamespace":d="ns";break;case "cookieDomainPeriods":d="cdp";break;case "cookieLifetime":d="cl";break;case "variableProvider":d=
"vvp";break;case "currencyCode":d="cc";break;case "channel":d="ch";break;case "transactionID":d="xact";break;case "campaign":d="v0";break;case "resolution":d="s";break;case "colorDepth":d="c";break;case "javascriptVersion":d="j";break;case "javaEnabled":d="v";break;case "cookiesEnabled":d="k";break;case "browserWidth":d="bw";break;case "browserHeight":d="bh";break;case "connectionType":d="ct";break;case "homepage":d="hp";break;case "plugins":d="p";break;case "events":m&&(f+=(f!=""?",":"")+m);if(k){g=
f.split(",");f="";for(e=0;e<g.length;e++)j=g[e],w=j.indexOf("="),w>=0&&(j=j.substring(0,w)),w=j.indexOf(":"),w>=0&&(j=j.substring(0,w)),k.indexOf(","+j+",")>=0&&(f+=(f?",":"")+g[e])}break;case "events2":f="";break;case "contextData":b+=s.W("c",s[d],i,d);f="";break;case "lightProfileID":d="mtp";break;case "lightStoreForSeconds":d="mtss";s.lightProfileID||(f="");break;case "lightIncrementBy":d="mti";s.lightProfileID||(f="");break;case "retrieveLightProfiles":d="mtsr";break;case "deleteLightProfiles":d=
"mtsd";break;case "retrieveLightData":s.retrieveLightProfiles&&(b+=s.W("mts",s[d],i,d));f="";break;default:s.ja(g)&&(e=="prop"?d="c"+g:e=="eVar"?d="v"+g:e=="list"?d="l"+g:e=="hier"&&(d="h"+g,f=f.substring(0,255)))}f&&(b+="&"+d+"="+(d.substring(0,3)!="pev"?s.escape(f):f))}d=="pev3"&&s.g&&(b+=s.g)}return b};s.u=function(s){var a=s.tagName;if(""+s.nb!="undefined"||""+s.Xa!="undefined"&&(""+s.Xa).toUpperCase()!="HTML")return"";a=a&&a.toUpperCase?a.toUpperCase():"";a=="SHAPE"&&(a="");a&&((a=="INPUT"||
a=="BUTTON")&&s.type&&s.type.toUpperCase?a=s.type.toUpperCase():!a&&s.href&&(a="A"));return a};s.fa=function(s){var a=s.href?s.href:"",c,e,d;c=a.indexOf(":");e=a.indexOf("?");d=a.indexOf("/");if(a&&(c<0||e>=0&&c>e||d>=0&&c>d))e=s.protocol&&s.protocol.length>1?s.protocol:l.protocol?l.protocol:"",c=l.pathname.lastIndexOf("/"),a=(e?e+"//":"")+(s.host?s.host:l.host?l.host:"")+(h.substring(0,1)!="/"?l.pathname.substring(0,c<0?0:c)+"/":"")+a;return a};s.D=function(b){var a=s.u(b),c,e,d="",f=0;if(a){c=b.protocol;
e=b.onclick;if(b.href&&(a=="A"||a=="AREA")&&(!e||!c||c.toLowerCase().indexOf("javascript")<0))d=s.fa(b);else if(e)d=s.replace(s.replace(s.replace(s.replace(""+e,"\r",""),"\n",""),"\t","")," ",""),f=2;else if(a=="INPUT"||a=="SUBMIT"){if(b.value)d=b.value;else if(b.innerText)d=b.innerText;else if(b.textContent)d=b.textContent;f=3}else if(b.src&&a=="IMAGE")d=b.src;if(d)return{id:d.substring(0,100),type:f}}return 0};s.kb=function(b){for(var a=s.u(b),c=s.D(b);b&&!c&&a!="BODY";)if(b=b.parentElement?b.parentElement:
b.parentNode)a=s.u(b),c=s.D(b);if(!c||a=="BODY")b=0;if(b&&(a=b.onclick?""+b.onclick:"",a.indexOf(".tl(")>=0||a.indexOf(".trackLink(")>=0))b=0;return b};s.Va=function(){var b,a,c=s.linkObject,e=s.linkType,d=s.linkURL,f,g;s.Q=1;if(!c)s.Q=0,c=s.j;if(c){b=s.u(c);for(a=s.D(c);c&&!a&&b!="BODY";)if(c=c.parentElement?c.parentElement:c.parentNode)b=s.u(c),a=s.D(c);if(!a||b=="BODY")c=0;if(c){var j=c.onclick?""+c.onclick:"";if(j.indexOf(".tl(")>=0||j.indexOf(".trackLink(")>=0)c=0}}else s.Q=1;!d&&c&&(d=s.fa(c));
d&&!s.linkLeaveQueryString&&(f=d.indexOf("?"),f>=0&&(d=d.substring(0,f)));if(!e&&d){var i=0,k=0,m;if(s.trackDownloadLinks&&s.linkDownloadFileTypes){j=d.toLowerCase();f=j.indexOf("?");g=j.indexOf("#");f>=0?g>=0&&g<f&&(f=g):f=g;f>=0&&(j=j.substring(0,f));f=s.linkDownloadFileTypes.toLowerCase().split(",");for(g=0;g<f.length;g++)(m=f[g])&&j.substring(j.length-(m.length+1))=="."+m&&(e="d")}if(s.trackExternalLinks&&!e&&(j=d.toLowerCase(),s.ia(j))){if(!s.linkInternalFilters)s.linkInternalFilters=w.location.hostname;
f=0;s.linkExternalFilters?(f=s.linkExternalFilters.toLowerCase().split(","),i=1):s.linkInternalFilters&&(f=s.linkInternalFilters.toLowerCase().split(","));if(f){for(g=0;g<f.length;g++)m=f[g],j.indexOf(m)>=0&&(k=1);k?i&&(e="e"):i||(e="e")}}}s.linkObject=c;s.linkURL=d;s.linkType=e;if(s.trackClickMap||s.trackInlineStats)if(s.g="",c){e=s.pageName;d=1;c=c.sourceIndex;if(!e)e=s.pageURL,d=0;if(w.s_objectID)a.id=w.s_objectID,c=a.type=1;if(e&&a&&a.id&&b)s.g="&pid="+s.escape(e.substring(0,255))+(d?"&pidt="+
d:"")+"&oid="+s.escape(a.id.substring(0,100))+(a.type?"&oidt="+a.type:"")+"&ot="+b+(c?"&oi="+c:"")}};s.Ma=function(){var b=s.Q,a=s.linkType,c=s.linkURL,e=s.linkName;if(a&&(c||e))a=a.toLowerCase(),a!="d"&&a!="e"&&(a="o"),s.pe="lnk_"+a,s.pev1=c?s.escape(c):"",s.pev2=e?s.escape(e):"",b=1;s.abort&&(b=0);if(s.trackClickMap||s.trackInlineStats){a={};c=0;var d=s.cookieRead("s_sq"),f=d?d.split("&"):0,g,j,w;d=0;if(f)for(g=0;g<f.length;g++)j=f[g].split("="),e=s.unescape(j[0]).split(","),j=s.unescape(j[1]),
a[j]=e;e=s.account.split(",");if(b||s.g){b&&!s.g&&(d=1);for(j in a)if(!Object.prototype[j])for(g=0;g<e.length;g++){d&&(w=a[j].join(","),w==s.account&&(s.g+=(j.charAt(0)!="&"?"&":"")+j,a[j]=[],c=1));for(f=0;f<a[j].length;f++)w=a[j][f],w==e[g]&&(d&&(s.g+="&u="+s.escape(w)+(j.charAt(0)!="&"?"&":"")+j+"&u=0"),a[j].splice(f,1),c=1)}b||(c=1);if(c){d="";g=2;!b&&s.g&&(d=s.escape(e.join(","))+"="+s.escape(s.g),g=1);for(j in a)!Object.prototype[j]&&g>0&&a[j].length>0&&(d+=(d?"&":"")+s.escape(a[j].join(","))+
"="+s.escape(j),g--);s.cookieWrite("s_sq",d)}}}return b};s.Na=function(){if(!s.bb){var b=new Date,a=m.location,c,e,d,f=d=e=c="",g="",w="",i="1.2",k=s.cookieWrite("s_cc","true",0)?"Y":"N",n="",p="",o=0;if(b.setUTCDate&&(i="1.3",o.toPrecision&&(i="1.5",c=[],c.forEach))){i="1.6";d=0;e={};try{d=new Iterator(e),d.next&&(i="1.7",c.reduce&&(i="1.8",i.trim&&(i="1.8.1",Date.parse&&(i="1.8.2",Object.create&&(i="1.8.5")))))}catch(r){}}c=screen.width+"x"+screen.height;d=navigator.javaEnabled()?"Y":"N";e=screen.pixelDepth?
screen.pixelDepth:screen.colorDepth;g=s.w.innerWidth?s.w.innerWidth:s.d.documentElement.offsetWidth;w=s.w.innerHeight?s.w.innerHeight:s.d.documentElement.offsetHeight;b=navigator.plugins;try{s.b.addBehavior("#default#homePage"),n=s.b.lb(a)?"Y":"N"}catch(t){}try{s.b.addBehavior("#default#clientCaps"),p=s.b.connectionType}catch(u){}if(b)for(;o<b.length&&o<30;){if(a=b[o].name)a=a.substring(0,100)+";",f.indexOf(a)<0&&(f+=a);o++}s.resolution=c;s.colorDepth=e;s.javascriptVersion=i;s.javaEnabled=d;s.cookiesEnabled=
k;s.browserWidth=g;s.browserHeight=w;s.connectionType=p;s.homepage=n;s.plugins=f;s.bb=1}};s.G={};s.loadModule=function(b,a){var c=s.G[b];if(!c){c=w["AppMeasurement_Module_"+b]?new w["AppMeasurement_Module_"+b](s):{};s.G[b]=s[b]=c;c.ua=function(){return c.wa};c.xa=function(a){if(c.wa=a)s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c)};try{Object.defineProperty?Object.defineProperty(c,"onLoad",{get:c.ua,set:c.xa}):c._olc=1}catch(e){c._olc=1}}a&&(s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c))};
s.q=function(b){var a,c;for(a in s.G)if(!Object.prototype[a]&&(c=s.G[a])){if(c._olc&&c.onLoad)c._olc=0,c.onLoad(s,c);if(c[b]&&c[b]())return 1}return 0};s.Qa=function(){var b=Math.floor(Math.random()*1E13),a=s.visitorSampling,c=s.visitorSamplingGroup;c="s_vsn_"+(s.visitorNamespace?s.visitorNamespace:s.account)+(c?"_"+c:"");var e=s.cookieRead(c);if(a){e&&(e=parseInt(e));if(!e){if(!s.cookieWrite(c,b))return 0;e=b}if(e%1E4>v)return 0}return 1};s.I=function(b,a){var c,e,d,f,g,w;for(c=0;c<2;c++){e=c>0?
s.$:s.e;for(d=0;d<e.length;d++)if(f=e[d],(g=b[f])||b["!"+f]){if(!a&&(f=="contextData"||f=="retrieveLightData")&&s[f])for(w in s[f])g[w]||(g[w]=s[f][w]);s[f]=g}}};s.qa=function(b,a){var c,e,d,f;for(c=0;c<2;c++){e=c>0?s.$:s.e;for(d=0;d<e.length;d++)f=e[d],b[f]=s[f],!a&&!b[f]&&(b["!"+f]=1)}};s.Ia=function(s){var a,c,e,d,f,g=0,w,i="",k="";if(s&&s.length>255&&(a=""+s,c=a.indexOf("?"),c>0&&(w=a.substring(c+1),a=a.substring(0,c),d=a.toLowerCase(),e=0,d.substring(0,7)=="http://"?e+=7:d.substring(0,8)=="https://"&&
(e+=8),c=d.indexOf("/",e),c>0&&(d=d.substring(e,c),f=a.substring(c),a=a.substring(0,c),d.indexOf("google")>=0?g=",q,ie,start,search_key,word,kw,cd,":d.indexOf("yahoo.co")>=0&&(g=",p,ei,"),g&&w)))){if((s=w.split("&"))&&s.length>1){for(e=0;e<s.length;e++)d=s[e],c=d.indexOf("="),c>0&&g.indexOf(","+d.substring(0,c)+",")>=0?i+=(i?"&":"")+d:k+=(k?"&":"")+d;i&&k?w=i+"&"+k:k=""}c=253-(w.length-k.length)-a.length;s=a+(c>0?f.substring(0,c):"")+"?"+w}return s};s.za=!1;s.Z=!1;s.ib=function(b){s.marketingCloudVisitorID=
b;s.Z=!0;s.z()};s.J=!1;s.X=!1;s.ta=function(b){s.analyticsVisitorID=b;s.X=!0;s.z()};s.ya=!1;s.Y=!1;s.hb=function(b){s.audienceManagerVisitorID=b;if(s.audienceManagerVisitorID&&s.visitor.getAudienceManagerLocationHint)s.audienceManagerLocationHint=s.visitor.getAudienceManagerLocationHint();s.Y=!0;s.z()};s.isReadyToTrack=function(){var b=!0,a=s.visitor;if(a&&a.isAllowed()){if(!s.J&&!s.analyticsVisitorID&&a.getAnalyticsVisitorID&&(s.analyticsVisitorID=a.getAnalyticsVisitorID([s,s.ta]),!s.analyticsVisitorID))s.J=
!0;if(s.za&&!s.Z&&!s.marketingCloudVisitorID||s.J&&!s.X&&!s.analyticsVisitorID||s.ya&&!s.Y&&!s.audienceManagerVisitorID)b=!1}return b};s.k=k;s.l=0;s.callbackWhenReadyToTrack=function(b,a,c){var e;e={};e.Da=b;e.Ca=a;e.Aa=c;if(s.k==k)s.k=[];s.k.push(e);if(s.l==0)s.l=setInterval(s.z,100)};s.z=function(){var b;if(s.isReadyToTrack()){if(s.l)clearInterval(s.l),s.l=0;if(s.k!=k)for(;s.k.length>0;)b=s.k.shift(),b.Ca.apply(b.Da,b.Aa)}};s.va=function(b){var a,c,e=k,d=k;if(!s.isReadyToTrack()){a=[];if(b!=k)for(c in e=
{},b)e[c]=b[c];d={};s.qa(d,!0);a.push(e);a.push(d);s.callbackWhenReadyToTrack(s,s.track,a);return!0}return!1};s.Ka=function(){var b=s.cookieRead("s_fid"),a="",c="",e;e=8;var d=4;if(!b||b.indexOf("-")<0){for(b=0;b<16;b++)e=Math.floor(Math.random()*e),a+="0123456789ABCDEF".substring(e,e+1),e=Math.floor(Math.random()*d),c+="0123456789ABCDEF".substring(e,e+1),e=d=16;b=a+"-"+c}s.cookieWrite("s_fid",b,1)||(b=0);return b};s.t=s.track=function(b,a){var c,e=new Date,d="s"+Math.floor(e.getTime()/108E5)%10+
Math.floor(Math.random()*1E13),f=e.getYear();f="t="+s.escape(e.getDate()+"/"+e.getMonth()+"/"+(f<1900?f+1900:f)+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" "+e.getDay()+" "+e.getTimezoneOffset());s.q("_s");if(!s.B("track",arguments)){if(!s.va(b)){a&&s.I(a);b&&(c={},s.qa(c,0),s.I(b));if(s.Qa()){if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.Ka();s.Va();s.usePlugins&&s.doPlugins&&s.doPlugins(s);if(s.account){if(!s.abort){if(s.trackOffline&&!s.timestamp)s.timestamp=Math.floor(e.getTime()/
1E3);e=w.location;if(!s.pageURL)s.pageURL=e.href?e.href:e;if(!s.referrer&&!s.ra)s.referrer=m.document.referrer,s.ra=1;s.referrer=s.Ia(s.referrer);s.q("_g")}s.Ma()&&!s.abort&&(s.Na(),f+=s.La(),s.Ua(d,f));s.abort||s.q("_t")}}b&&s.I(c,1)}s.timestamp=s.linkObject=s.j=s.linkURL=s.linkName=s.linkType=w.mb=s.pe=s.pev1=s.pev2=s.pev3=s.g=0}};s.tl=s.trackLink=function(b,a,c,e,d){s.linkObject=b;s.linkType=a;s.linkName=c;if(d)s.i=b,s.p=d;return s.track(e)};s.trackLight=function(b,a,c,e){s.lightProfileID=b;s.lightStoreForSeconds=
a;s.lightIncrementBy=c;return s.track(e)};s.clearVars=function(){var b,a;for(b=0;b<s.e.length;b++)if(a=s.e[b],a.substring(0,4)=="prop"||a.substring(0,4)=="eVar"||a.substring(0,4)=="hier"||a.substring(0,4)=="list"||a=="channel"||a=="events"||a=="eventList"||a=="products"||a=="productList"||a=="purchaseID"||a=="transactionID"||a=="state"||a=="zip"||a=="campaign")s[a]=void 0};s.Ua=function(b,a){var c,e=s.trackingServer;c="";var d=s.dc,f="sc.",w=s.visitorNamespace;if(e){if(s.trackingServerSecure&&s.ssl)e=
s.trackingServerSecure}else{if(!w)w=s.account,e=w.indexOf(","),e>=0&&(w=w.gb(0,e)),w=w.replace(/[^A-Za-z0-9]/g,"");c||(c="2o7.net");d=d?(""+d).toLowerCase():"d1";c=="2o7.net"&&(d=="d1"?d="112":d=="d2"&&(d="122"),f="");e=w+"."+d+"."+f+c}c=s.ssl?"https://":"http://";c+=e+"/b/ss/"+s.account+"/"+(s.mobile?"5.":"")+"1/JS-"+s.version+(s.ab?"T":"")+"/"+b+"?AQB=1&ndh=1&"+a+"&AQE=1";s.Pa&&(c=c.substring(0,2047));s.Ga(c);s.N()};s.Ga=function(b){s.c||s.Oa();s.c.push(b);s.O=s.r();s.pa()};s.Oa=function(){s.c=
s.Ra();if(!s.c)s.c=[]};s.Ra=function(){var b,a;if(s.T()){try{(a=w.localStorage.getItem(s.R()))&&(b=w.JSON.parse(a))}catch(c){}return b}};s.T=function(){var b=!0;if(!s.trackOffline||!s.offlineFilename||!w.localStorage||!w.JSON)b=!1;return b};s.ga=function(){var b=0;if(s.c)b=s.c.length;s.v&&b++;return b};s.N=function(){if(!s.v)if(s.ha=k,s.S)s.O>s.F&&s.na(s.c),s.V(500);else{var b=s.Ba();if(b>0)s.V(b);else if(b=s.ea())s.v=1,s.Ta(b),s.Ya(b)}};s.V=function(b){if(!s.ha)b||(b=0),s.ha=setTimeout(s.N,b)};s.Ba=
function(){var b;if(!s.trackOffline||s.offlineThrottleDelay<=0)return 0;b=s.r()-s.la;if(s.offlineThrottleDelay<b)return 0;return s.offlineThrottleDelay-b};s.ea=function(){if(s.c.length>0)return s.c.shift()};s.Ta=function(b){if(s.debugTracking){var a="AppMeasurement Debug: "+b;b=b.split("&");var c;for(c=0;c<b.length;c++)a+="\n\t"+s.unescape(b[c]);s.Sa(a)}};s.Ya=function(b){var a;if(!a)a=new Image,a.alt="";a.ba=function(){try{if(s.U)clearTimeout(s.U),s.U=0;if(a.timeout)clearTimeout(a.timeout),a.timeout=
0}catch(b){}};a.onload=a.$a=function(){a.ba();s.Fa();s.K();s.v=0;s.N()};a.onabort=a.onerror=a.Ha=function(){a.ba();(s.trackOffline||s.S)&&s.v&&s.c.unshift(s.Ea);s.v=0;s.O>s.F&&s.na(s.c);s.K();s.V(500)};a.onreadystatechange=function(){a.readyState==4&&(a.status==200?a.$a():a.Ha())};s.la=s.r();a.src=b;if(a.abort)s.U=setTimeout(a.abort,5E3);s.Ea=b;s.jb=w["s_i_"+s.replace(s.account,",","_")]=a;if(s.useForcedLinkTracking&&s.A||s.p){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;s.L=setTimeout(s.K,
s.forcedLinkTrackingTimeout)}};s.Fa=function(){if(s.T()&&!(s.ka>s.F))try{w.localStorage.removeItem(s.R()),s.ka=s.r()}catch(b){}};s.na=function(b){if(s.T()){s.pa();try{w.localStorage.setItem(s.R(),w.JSON.stringify(b)),s.F=s.r()}catch(a){}}};s.pa=function(){if(s.trackOffline){if(!s.offlineLimit||s.offlineLimit<=0)s.offlineLimit=10;for(;s.c.length>s.offlineLimit;)s.ea()}};s.forceOffline=function(){s.S=!0};s.forceOnline=function(){s.S=!1};s.R=function(){return s.offlineFilename+"-"+s.visitorNamespace+
s.account};s.r=function(){return(new Date).getTime()};s.ia=function(s){s=s.toLowerCase();if(s.indexOf("#")!=0&&s.indexOf("about:")!=0&&s.indexOf("opera:")!=0&&s.indexOf("javascript:")!=0)return!0;return!1};s.setTagContainer=function(b){var a,c,e;s.ab=b;for(a=0;a<s._il.length;a++)if((c=s._il[a])&&c._c=="s_l"&&c.tagContainerName==b){s.I(c);if(c.lmq)for(a=0;a<c.lmq.length;a++)e=c.lmq[a],s.loadModule(e.n);if(c.ml)for(e in c.ml)if(s[e])for(a in b=s[e],e=c.ml[e],e)if(!Object.prototype[a]&&(typeof e[a]!=
"function"||(""+e[a]).indexOf("s_c_il")<0))b[a]=e[a];if(c.mmq)for(a=0;a<c.mmq.length;a++)e=c.mmq[a],s[e.m]&&(b=s[e.m],b[e.f]&&typeof b[e.f]=="function"&&(e.a?b[e.f].apply(b,e.a):b[e.f].apply(b)));if(c.tq)for(a=0;a<c.tq.length;a++)s.track(c.tq[a]);c.s=s;break}};s.Util={urlEncode:s.escape,urlDecode:s.unescape,cookieRead:s.cookieRead,cookieWrite:s.cookieWrite,getQueryParam:function(b,a,c){var e;a||(a=s.pageURL?s.pageURL:w.location);c||(c="&");if(b&&a&&(a=""+a,e=a.indexOf("?"),e>=0&&(a=c+a.substring(e+
1)+c,e=a.indexOf(c+b+"="),e>=0&&(a=a.substring(e+c.length+b.length+1),e=a.indexOf(c),e>=0&&(a=a.substring(0,e)),a.length>0))))return s.unescape(a);return""}};s.H=["timestamp","dynamicVariablePrefix","visitorID","marketingCloudVisitorID","analyticsVisitorID","audienceManagerVisitorID","audienceManagerLocationHint","fid","vmk","visitorMigrationKey","visitorMigrationServer","visitorMigrationServerSecure","charSet","visitorNamespace","cookieDomainPeriods","fpCookieDomainPeriods","cookieLifetime","pageName",
"pageURL","referrer","contextData","currencyCode","lightProfileID","lightStoreForSeconds","lightIncrementBy","retrieveLightProfiles","deleteLightProfiles","retrieveLightData","pe","pev1","pev2","pev3","pageURLRest"];s.e=s.H.concat(["purchaseID","variableProvider","channel","server","pageType","transactionID","campaign","state","zip","events","events2","products","tnt"]);s.ma=["timestamp","charSet","visitorNamespace","cookieDomainPeriods","cookieLifetime","contextData","lightProfileID","lightStoreForSeconds",
"lightIncrementBy"];s.P=s.ma.slice(0);s.$=["account","allAccounts","debugTracking","visitor","trackOffline","offlineLimit","offlineThrottleDelay","offlineFilename","usePlugins","doPlugins","configURL","visitorSampling","s.visitorSamplingGroup","linkObject","linkURL","linkName","linkType","trackDownloadLinks","trackExternalLinks","trackClickMap","trackInlineStats","linkLeaveQueryString","linkTrackVars","linkTrackEvents","linkDownloadFileTypes","linkExternalFilters","linkInternalFilters","useForcedLinkTracking",
"forcedLinkTrackingTimeout","trackingServer","trackingServerSecure","ssl","abort","mobile","dc","lightTrackVars","maxDelay"];for(i=0;i<=75;i++)s.e.push("prop"+i),s.P.push("prop"+i),s.e.push("eVar"+i),s.P.push("eVar"+i),i<6&&s.e.push("hier"+i),i<4&&s.e.push("list"+i);i=["resolution","colorDepth","javascriptVersion","javaEnabled","cookiesEnabled","browserWidth","browserHeight","connectionType","homepage","plugins"];s.e=s.e.concat(i);s.H=s.H.concat(i);s.ssl=w.location.protocol.toLowerCase().indexOf("https")>=
0;s.charSet="UTF-8";s.contextData={};s.offlineThrottleDelay=0;s.offlineFilename="AppMeasurement.offline";s.la=0;s.O=0;s.F=0;s.ka=0;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.w=w;s.d=w.document;try{s.Pa=navigator.appName=="Microsoft Internet Explorer"}catch(o){}s.K=function(){if(s.L)w.clearTimeout(s.L),s.L=k;s.i&&s.A&&s.i.dispatchEvent(s.A);if(s.p)if(typeof s.p=="function")s.p();else if(s.i&&s.i.href)s.d.location=s.i.href;s.i=s.A=s.p=0};s.oa=function(){s.b=
s.d.body;if(s.b)if(s.o=function(b){var a,c,e,d,f;if(!(s.d&&s.d.getElementById("cppXYctnr")||b&&b.Wa)){if(s.aa)if(s.useForcedLinkTracking)s.b.removeEventListener("click",s.o,!1);else{s.b.removeEventListener("click",s.o,!0);s.aa=s.useForcedLinkTracking=0;return}else s.useForcedLinkTracking=0;s.j=b.srcElement?b.srcElement:b.target;try{if(s.j&&(s.j.tagName||s.j.parentElement||s.j.parentNode))if(e=s.ga(),s.track(),e<s.ga()&&s.useForcedLinkTracking&&b.target){for(d=b.target;d&&d!=s.b&&d.tagName.toUpperCase()!=
"A"&&d.tagName.toUpperCase()!="AREA";)d=d.parentNode;if(d&&(f=d.href,s.ia(f)||(f=0),c=d.target,b.target.dispatchEvent&&f&&(!c||c=="_self"||c=="_top"||c=="_parent"||w.name&&c==w.name))){try{a=s.d.createEvent("MouseEvents")}catch(g){a=new w.MouseEvent}if(a){try{a.initMouseEvent("click",b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget)}catch(i){a=0}if(a)a.Wa=1,b.stopPropagation(),b.Za&&b.Za(),b.preventDefault(),
s.i=b.target,s.A=a}}}}catch(k){}s.j=0}},s.b&&s.b.attachEvent)s.b.attachEvent("onclick",s.o);else{if(s.b&&s.b.addEventListener){if(navigator&&(navigator.userAgent.indexOf("WebKit")>=0&&s.d.createEvent||navigator.userAgent.indexOf("Firefox/2")>=0&&w.MouseEvent))s.aa=1,s.useForcedLinkTracking=1,s.b.addEventListener("click",s.o,!0);s.b.addEventListener("click",s.o,!1)}}else setTimeout(s.oa,30)};s.oa()}
function s_gi(s){var w,k=window.s_c_il,m,i=s.split(","),n,p,o=0;if(k)for(m=0;!o&&m<k.length;){w=k[m];if(w._c=="s_c"&&w.account)if(w.account==s)o=1;else{if(!w.allAccounts)w.allAccounts=w.account.split(",");for(n=0;n<i.length;n++)for(p=0;p<w.allAccounts.length;p++)i[n]==w.allAccounts[p]&&(o=1)}m++}o||(w=new AppMeasurement);w.setAccount(s);return w}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var s=window,w=s.s_giq,k,m,i;if(w)for(k=0;k<w.length;k++)m=w[k],i=s_gi(m.oun),i.setAccount(m.un),i.setTagContainer(m.tagContainerName);s.s_giq=0}s_pgicq();



