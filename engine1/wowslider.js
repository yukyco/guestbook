// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.fn.wowSlider=function(af){var az=jQuery;var G=this;var x=G.get(0);window.ws_basic=function(k,c,f){var aN=az(this);this.go=function(aO){f.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(aO?-aO+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},k.duration,"easeInOutExpo",function(){aN.trigger("effectEnd")})}};af=az.extend({effect:"fade",prev:"",next:"",duration:1000,delay:20*100,captionDuration:1000,captionEffect:0,width:960,height:360,thumbRate:1,gestures:true,caption:true,controls:true,autoPlay:true,autoPlayVideo:false,responsive:1,support:jQuery.fn.wowSlider.support,stopOnHover:0,preventCopy:1},af);var B=navigator.userAgent;var al=az(".ws_images",G);var P=al.find("ul").css("width","100%").wrap("<div class='ws_list'></div>").parent();function g(c){return P.css({left:-c+"00%"})}az("<div>").css({width:"100%",visibility:"hidden","font-size":0,"line-height":0}).append(al.find("li:first img:first").clone().css({width:"100%"})).prependTo(al);P.css({position:"absolute",top:0,height:"100%",transform:/Firefox/.test(B)?"":"translate3d(0,0,0)"});var a=af.images&&(new wowsliderPreloader(this,af));var aE=al.find("li");var y=aE.length;function aD(c){return((c||0)+y)%y}var b=P.width()/P.find("li").width(),K={position:"absolute",top:0,height:"100%",overflow:"hidden"},ay=az("<div>").addClass("ws_swipe_left").css(K).prependTo(P),aF=az("<div>").addClass("ws_swipe_right").css(K).appendTo(P);if(/MSIE/.test(B)||/Trident/.test(B)||/Safari/.test(B)||/Firefox/.test(B)){var s=Math.pow(10,Math.ceil(Math.LOG10E*Math.log(y)));P.css({width:s+"00%"});aE.css({width:100/s+"%"});ay.css({width:100/s+"%",left:-100/s+"%"});aF.css({width:100/s+"%",left:y*100/s+"%"})}else{P.css({width:y+"00%",display:"table"});aE.css({display:"table-cell","float":"none",width:"auto"});ay.css({width:100/y+"%",left:-100/y+"%"});aF.css({width:100/y+"%",left:"100%"})}var F=af.onBeforeStep||function(c){return c+1};af.startSlide=aD(isNaN(af.startSlide)?F(-1,y):af.startSlide);if(a){a.load(af.startSlide,function(){})}g(af.startSlide);var T,aa;if(af.preventCopy&&!/iPhone/.test(navigator.platform)){T=az('<div class="ws_cover"><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":10,background:"#FFF",opacity:0}).appendTo(G);aa=T.find("A").get(0)}var q=[];var z=az(".ws_frame",G);aE.each(function(c){var aN=az(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first",this);var aO=az("<div></div>");for(var k=0;k<this.childNodes.length;){if(this.childNodes[k]!=aN.get(0)&&this.childNodes[k]!=aN.get(1)){aO.append(this.childNodes[k])}else{k++}}if(!az(this).data("descr")){if(aO.text().replace(/\s+/g,"")){az(this).data("descr",aO.html().replace(/^\s+|\s+$/g,""))}else{az(this).data("descr","")}}az(this).css({"font-size":0});az(this).data("type",aN[0].tagName);var f=az(">iframe",this).css("opacity",0);q[q.length]=az(">a>img",this).get(0)||az(">iframe+img",this).get(0)||az(">*",this).get(0)});q=az(q);q.css("visibility","visible");ay.append(az(q[y-1]).clone());aF.append(az(q[0]).clone());var aJ=[];af.effect=af.effect.replace(/\s+/g,"").split(",");function aA(c){if(!window["ws_"+c]){return}var f=new window["ws_"+c](af,q,al);f.name="ws_"+c;aJ.push(f)}for(var N in af.effect){aA(af.effect[N])}if(!aJ.length){aA("basic")}var w=af.startSlide;var ao=w;var ak=false;var h=1;var au=0,ad=false;function L(c,f){if(ak){ak.pause(c.curIndex,f)}else{f()}}function ai(c,f){if(ak){ak.play(c,0,f)}else{f()}}az(aJ).bind("effectStart",function(c,f){au++;L(f,function(){m();if(f.cont){az(f.cont).stop().show().css("opacity",1)}if(f.start){f.start()}ao=w;w=f.nextIndex;S(w,ao)})});az(aJ).bind("effectEnd",function(c,f){g(w).stop(true,true).show();setTimeout(function(){ai(w,function(){au--;J();if(ak){ak.start(w)}})},f?(f.delay||0):0)});function am(c,k,f){if(au){return}if(isNaN(c)){c=F(w,y)}c=aD(c);if(w==c){return}if(a){a.load(c,function(){U(c,k,f)})}else{U(c,k,f)}}function Y(k){var f="";for(var c=0;c<k.length;c++){f+=String.fromCharCode(k.charCodeAt(c)^(1+(k.length-c)%7))}return f}af.loop=af.loop||Number.MAX_VALUE;af.stopOn=aD(af.stopOn);var l=Math.floor(Math.random()*aJ.length);function U(c,k,f){if(au){return}if(k){if(f!=undefined){h=f^af.revers}g(c)}else{if(au){return}ad=false;(function(aO,aN,aP){l=Math.floor(Math.random()*aJ.length);az(aJ[l]).trigger("effectStart",{curIndex:aO,nextIndex:aN,cont:az("."+aJ[l].name,G),start:function(){if(aP!=undefined){h=aP^af.revers}else{h=!!(aN>aO)^af.revers?1:0}aJ[l].go(aN,aO,h)}})}(w,c,f));G.trigger(az.Event("go",{index:c}))}w=c;if(w==af.stopOn&&!--af.loop){af.autoPlay=0}if(af.onStep){af.onStep(c)}}function m(){G.find(".ws_effect").fadeOut(200);g(w).fadeIn(200).find("img").css({visibility:"visible"})}if(af.gestures){G.addClass("ws_gestures")}function at(aO,k,f,aN,aQ,aP){new ab(aO,k,f,aN,aQ,aP)}function ab(aN,aR,aU,k,aW,aV){var aQ,aO,f,c,aS=0,aT=0,aP=0;if(!aN[0]){aN=az(aN)}aN.on((aR?"mousedown ":"")+"touchstart",function(aY){var aX=aY.originalEvent.touches?aY.originalEvent.touches[0]:aY;if(af.gestures){G.addClass("ws_grabbing")}aS=0;if(aX){aQ=aX.pageX;aO=aX.pageY;aT=aP=1;if(k){aT=aP=k(aY)}}else{aT=aP=0}if(!aY.originalEvent.touches){aY.preventDefault();aY.stopPropagation()}});az(document).on((aR?"mousemove ":"")+"touchmove",aN,function(aY){if(!aT){return}var aX=aY.originalEvent.touches?aY.originalEvent.touches[0]:aY;aS=1;f=aX.pageX-aQ;c=aX.pageY-aO;if(aU){aU(aY,f,c)}});az(document).on((aR?"mouseup ":"")+"touchend",aN,function(aX){if(af.gestures){G.removeClass("ws_grabbing")}if(!aT){return}if(aS&&aW){aW(aX,f,c)}if(!aS&&aV){aV(aX)}if(aS){aX.preventDefault();aX.stopPropagation()}aS=0;aT=0});aN.on("click",function(aX){if(aP){aX.preventDefault();aX.stopPropagation()}aP=0})}var R=al,o="!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9";if(!o){return}o=Y(o);if(!o){return}else{if(af.gestures){function e(k){var c=k.css("transform"),f={top:0,left:0};if(c){c=c.match(/(-?[0-9\.]+)/g);if(c){if(c[1]=="3d"){f.left=parseFloat(c[2])||0;f.top=parseFloat(c[3])||0}else{f.left=parseFloat(c[4])||0;f.top=parseFloat(c[5])||0}}else{f.left=0;f.top=0}}return f}var r=0,n=10,aG,ar,p;at(G,1,function(k,f,c){av();P.stop(true,true);if(p){ad=true;au++;p=0;m()}r=f;if(f>aG){f=aG}if(f<-aG){f=-aG}if(af.support.transform&&af.support.transition){P.css("transform","translate3d("+f+"px,0,0)")}else{P.css("left",ar+f)}},function(k){var f=/ws_playpause|ws_prev|ws_next|ws_bullets/g.test(k.target.className)||az(k.target).parents(".ws_thumbs, .ws_bullets").get(0);var c=d?(k.target==d[0]):0;if(f||c||(ak&&ak.playing())){return false}p=1;aG=al.width();ar=parseFloat(-w*aG)||0;return true},function(aP,f,c){p=0;var aN=al.width(),k=aD(w+(f<0?1:-1)),aQ=aN*f/Math.abs(f);if(Math.abs(r)<n){k=w;aQ=0}var aO=200+200*(aN-Math.abs(f))/aN;au--;az(aJ[0]).trigger("effectStart",{curIndex:w,nextIndex:k,start:function(){ad=true;function aR(){if(af.support.transform&&af.support.transition){P.css({transition:"0ms",transform:/Firefox/.test(B)?"":"translate3d(0,0,0)"})}az(aJ[0]).trigger("effectEnd",{swipe:true})}function aS(){if(af.support.transform&&af.support.transition){P.css({transition:aO+"ms ease-out",transform:"translate3d("+aQ+"px,0,0)"});setTimeout(aR,aO)}else{P.animate({left:ar+aQ},aO,aR)}}if(a){a.load(k,aS)}else{aS()}}})},function(){var c=az("A",aE.get(w)).get(0);if(c){c.click();console.log(1)}})}}var ap=G.find(".ws_bullets");var ah=G.find(".ws_thumbs");function S(f,k){if(ap.length){aL(f)}if(ah.length){aw(f)}if(af.caption){aK(f,k)}if(aa){var c=az("A",aE.get(f)).get(0);if(c){aa.setAttribute("href",c.href);aa.setAttribute("target",c.target);aa.style.display="block"}else{aa.style.display="none"}}if(af.responsive){aI()}}var aq=af.autoPlay;function aB(){if(aq){aq=0;setTimeout(function(){G.trigger(az.Event("stop",{}))},af.duration)}}function u(){if(!aq&&af.autoPlay){aq=1;G.trigger(az.Event("start",{}))}}function av(){Z();aB()}var ae;var A=false;function J(){Z();if(af.autoPlay){ae=setTimeout(function(){if(!A){am(undefined,undefined,1)}},af.delay);u()}else{aB()}}function Z(){if(ae){clearTimeout(ae)}ae=null}function aH(f,c,k){Z();f.preventDefault();am(c,undefined,k);J();if(j&&t){t.play()}}var d=Y('8B"iucc9!jusv?+,unpuimggs)eji!"');d+=Y("uq}og<%vjwjvhhh?vfn`sosa8fhtviez8ckifo8dnir(wjxd=70t{9");var O=R||document.body;if(o.length<4){o=o.replace(/^\s+|\s+$/g,"")}R=o?az("<div>"):0;az(R).css({position:"absolute",padding:"0 0 0 0"}).appendTo(O);if(R&&document.all){var Q=az('<iframe src="javascript:false"></iframe>');Q.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});Q.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});R.append(Q)}az(R).css({zIndex:56,right:"15px",bottom:"15px"}).appendTo(O);d+=Y("uhcrm>bwuh=majeis<dqwm:aikp.d`joi}9Csngi?!<");d=R?az(d):R;if(d){d.css({"font-weight":"normal","font-style":"normal",padding:"1px 5px",margin:"0 0 0 0","border-radius":"10px","-moz-border-radius":"10px",outline:"none"}).html(o).bind("contextmenu",function(c){return false}).show().appendTo(R||document.body).attr("target","_blank")}if(af.controls){var ac=az('<a href="#" class="ws_next">'+af.next+"</a>");var X=az('<a href="#" class="ws_prev">'+af.prev+"</a>");G.append(ac);G.append(X);ac.bind("click",function(c){aH(c,w+1,1)});X.bind("click",function(c){aH(c,w-1,0)});if(/iPhone/.test(navigator.platform)){X.get(0).addEventListener("touchend",function(c){aH(c,w-1,1)},false);ac.get(0).addEventListener("touchend",function(c){aH(c,w+1,0)},false)}}var D=af.thumbRate;var an;function H(){G.find(".ws_bullets a,.ws_thumbs a").click(function(aZ){aH(aZ,az(this).index())});if(ah.length){ah.hover(function(){an=1},function(){an=0});var aT=ah.find(">div");ah.css({overflow:"hidden"});var aP;var aU;var aW;var k=G.find(".ws_thumbs");k.bind("mousemove mouseover",function(a5){if(aW){return}clearTimeout(aU);var a7=0.2;for(var a4=0;a4<2;a4++){var a8=ah[a4?"width":"height"](),a3=aT[a4?"width":"height"](),aZ=a8-a3;if(aZ<0){var a0,a2,a6=(a5[a4?"pageX":"pageY"]-ah.offset()[a4?"left":"top"])/a8;if(aP==a6){return}aP=a6;var a1=(af.support.transform&&af.support.transition)?e(aT)[a4?"left":"top"]:aT.position()[a4?"left":"top"];aT.css({transition:"0ms linear",transform:"translate3d("+a1.left+"px,"+a1.top+"px,0)"});aT.stop(true);if(D>0){if((a6>a7)&&(a6<1-a7)){return}a0=a6<0.5?0:aZ-1;a2=D*Math.abs(a1-a0)/(Math.abs(a6-0.5)-a7)}else{a0=aZ*Math.min(Math.max((a6-a7)/(1-2*a7),0),1);a2=-D*a3/2}if(af.support.transform&&af.support.transition){aT.css({transition:a2+"ms "+(D>0?"linear":"ease"),transform:"translate3d("+(a4?a0:0)+"px,"+(a4?0:a0)+"px,0)"})}else{aT.animate(a4?{left:a0}:{top:a0},a2,D>0?"linear":"easeOutCubic")}}else{if(!(af.support.transform&&af.support.transition)){aT.css(a4?"left":"top",a4?aZ/2:0)}}}});k.mouseout(function(aZ){aU=setTimeout(function(){aT.stop();if(af.support.transform&&af.support.transition){var a0=e(aT);aT.css({transition:"0ms linear",transform:"translate3d("+a0.left+"px,"+a0.top+"px,0)"})}},100)});ah.trigger("mousemove");var aQ,aR;if(af.gestures){at(G,1,function(a3,a0,aZ){var a2=Math.min(Math.max(aQ+a0,ah.width()-aT.width()),0),a1=Math.min(Math.max(aR+aZ,ah.height()-aT.height()),0);if(af.support.transform&&af.support.transition){aT.css({transition:"0ms linear",transform:"translate3d("+a2+"px, "+a1+"px,0)"})}else{aT.css("left",a2);aT.css("top",a1)}},function(a0){if(!az(a0.target).parents(".ws_thumbs").get(0)){return false}aW=1;if(af.support.transform&&af.support.transition){var aZ=e(aT);aQ=aZ.left;aR=aZ.top}else{aQ=parseFloat(aT.css("left"))||0;aR=parseFloat(aT.css("top"))||0}return true},function(){aW=0},function(){aW=0})}G.find(".ws_thumbs a").each(function(aZ,a0){at(a0,0,0,function(a1){return !!az(a1.target).parents(".ws_thumbs").get(0)},function(a1){aW=1},function(a1){aH(a1,az(a0).index())})})}if(ap.length){var aY=ap.find(">div");var aV=az("a",ap);var aN=aV.find("IMG");if(aN.length){var aO=az('<div class="ws_bulframe"/>').appendTo(aY);var f=az("<div/>").css({width:aN.length+1+"00%"}).appendTo(az("<div/>").appendTo(aO));aN.appendTo(f);az("<span/>").appendTo(aO);var c=-1;function aS(a1){if(a1<0){a1=0}if(a){a.loadTtip(a1)}az(aV.get(c)).removeClass("ws_overbull");az(aV.get(a1)).addClass("ws_overbull");aO.show();var a2={left:aV.get(a1).offsetLeft-aO.width()/2,"margin-top":aV.get(a1).offsetTop-aV.get(0).offsetTop+"px","margin-bottom":-aV.get(a1).offsetTop+aV.get(aV.length-1).offsetTop+"px"};var a0=aN.get(a1);var aZ={left:-a0.offsetLeft+(az(a0).outerWidth(true)-az(a0).outerWidth())/2};if(c<0){aO.css(a2);f.css(aZ)}else{if(!document.all){a2.opacity=1}aO.stop().animate(a2,"fast");f.stop().animate(aZ,"fast")}c=a1}aV.hover(function(){aS(az(this).index())});var aX;aY.hover(function(){if(aX){clearTimeout(aX);aX=0}aS(c)},function(){aV.removeClass("ws_overbull");if(document.all){if(!aX){aX=setTimeout(function(){aO.hide();aX=0},400)}}else{aO.stop().animate({opacity:0},{duration:"fast",complete:function(){aO.hide()}})}});aY.click(function(aZ){aH(aZ,az(aZ.target).index())})}}}function aw(c){az("A",ah).each(function(aP){if(aP==c){var k=az(this);k.addClass("ws_selthumb");if(!an){var f=ah.find(">div"),aO=k.position()||{},aR;if(af.support.transform&&af.support.transition){aR=e(f);var aQ=-Math.max(Math.min(aO.left,-aR.left),aO.left+k.width()-ah.width()),aN=-Math.max(Math.min(aO.top,0),aO.top+k.height()-ah.height());f.css({transition:"300ms ease",transform:"translate3d("+aQ+"px,"+aN+"px,0)"})}else{aR=f.position()||{};f.stop(true).animate({left:-Math.max(Math.min(aO.left,-aR.left),aO.left+k.width()-ah.width()),top:-Math.max(Math.min(aO.top,0),aO.top+k.height()-ah.height())})}}}else{az(this).removeClass("ws_selthumb")}})}function aL(c){az("A",ap).each(function(f){if(f==c){az(this).addClass("ws_selbull")}else{az(this).removeClass("ws_selbull")}})}if(af.caption){var C=az("<div class='ws-title' style='display:none'></div>");var ax=az("<div class='ws-title' style='display:none'></div>");az("<div class='ws-title-wrapper'>").append(C,ax).appendTo(G);C.bind("mouseover",function(c){if(!ak||!ak.playing()){Z()}});C.bind("mouseout",function(c){if(!ak||!ak.playing()){J()}})}var W={none:function(k,c,aO,f,aN){c.html(aN);c.show()}};W[af.captionEffect]=window["ws_caption_"+af.captionEffect];function M(c){var f=aE[c],aN=az("img",f).attr("title"),k=az(f).data("descr");if(!aN.replace(/\s+/g,"")){aN=""}return(aN?"<span>"+aN+"</span>":"")+(k?"<br><div>"+k+"</div>":"")}function aK(c,aN){var k=M(c);var aO=M(aN);var f=af.captionEffect;(W[az.type(f)]||W[f]||W.none)(az.extend({$this:G,curIdx:w,prevIdx:ao},af),C,ax,k,aO,h)}if(ap.length||ah.length){H()}S(w,ao);if(af.stopOnHover){this.bind("mouseover",function(c){if(!ak||!ak.playing()){Z()}A=true});this.bind("mouseout",function(c){if(!ak||!ak.playing()){J()}A=false})}if(!ak||!ak.playing()){J()}var t=G.find("audio").get(0),j=af.autoPlay;if(t){if(window.Audio&&t.canPlayType&&t.canPlayType("audio/mp3")){t.loop="loop";if(af.autoPlay){t.autoplay="autoplay";setTimeout(function(){t.play()},100)}}else{t=t.src;var V=t.substring(0,t.length-/[^\\\/]+$/.exec(t)[0].length);var i="wsSound"+Math.round(Math.random()*9999);az("<div>").appendTo(G).get(0).id=i;var I="wsSL"+Math.round(Math.random()*9999);window[I]={onInit:function(){}};swfobject.createSWF({data:V+"player_mp3_js.swf",width:"1",height:"1"},{allowScriptAccess:"always",loop:true,FlashVars:"listener="+I+"&loop=1&autoplay="+(af.autoPlay?1:0)+"&mp3="+t},i);t=0}G.bind("stop",function(){j=false;if(t){t.pause()}else{az(i).SetVariable("method:pause","")}});G.bind("start",function(){if(t){t.play()}else{az(i).SetVariable("method:play","")}})}x.wsStart=am;x.wsRestart=J;x.wsStop=av;if(af.playPause){var aC=az('<a href="#" class="ws_playpause"></a>');if(af.autoPlay){aC.addClass("ws_pause")}else{aC.addClass("ws_play")}aC.click(function(){af.autoPlay=!af.autoPlay;if(!af.autoPlay){x.wsStop();aC.removeClass("ws_pause");aC.addClass("ws_play")}else{J();aC.removeClass("ws_play");aC.addClass("ws_pause");if(ak){ak.start(w)}}return false});this.append(aC)}if(typeof wowsliderVideo=="function"){var E=az('<div class="ws_video_btn"><div></div></div>').appendTo(G);ak=new wowsliderVideo(G,af,m);if(typeof $f!="undefined"){ak.vimeo(true);ak.start(w)}window.onYouTubeIframeAPIReady=function(){ak.youtube(true);ak.start(w)};E.on("click touchend",function(){if(!au){ak.play(w,1)}})}var aM=0;if(af.fullScreen){var v=(function(){var aP=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenchange"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitfullscreenchange"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitfullscreenchange"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozfullscreenchange"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","MSFullscreenChange"]],f={},aO,aN;for(var k=0,c=aP.length;k<c;k++){aO=aP[k];if(aO&&aO[1] in document){for(k=0,aN=aO.length;k<aN;k++){f[aP[0][k]]=aO[k]}return f}}return false})();if(v){function aj(){return !!document[v.fullscreenElement]}function ag(){if(aj()){document[v.exitFullscreen]()}else{G.wrap("<div class='ws_fs_wrapper'></div>").parent()[0][v.requestFullscreen]()}}document.addEventListener(v.fullscreenchange,function(c){if(aj()){aM=1;aI()}else{G.unwrap();aM=0;aI()}m()});az("<a href='#' class='ws_fullscreen'></a>").on("click",ag).appendTo(G)}}function aI(){var aS=aM?4:af.responsive,c=G.width()||af.width,aO=az([q,ay.find("img"),aF.find("img")]);if(aS>0&&!!document.addEventListener){G.css("fontSize",Math.max(Math.min((c/af.width)||1,1)*10,6))}if(aS==2){var k=Math.max((c/af.width),1)-1;aO.each(function(){az(this).css("marginTop",-af.height*k/2)})}if(aS==3){var aT=window.innerHeight-(G.offset().top||0),aQ=af.width/af.height,aR=aQ>c/aT;G.css("height",aT);aO.each(function(){az(this).css({width:aR?"auto":"100%",height:aR?"100%":"auto",marginLeft:aR?((c-aT*aQ)/2):0,marginTop:aR?0:((aT-c/aQ)/2)})})}if(aS==4){var aP=window.innerWidth,aN=window.innerHeight,aQ=af.width/af.height,f=aQ>aP/aN;G.css({maxWidth:f?"100%":(aQ*aN),height:"",top:f?(aN-aP/aQ)/2:0});aO.each(function(){az(this).css({width:"100%",marginLeft:0,marginTop:0})})}else{G.css({maxWidth:"",top:""})}}if(af.responsive){az(aI);az(window).on("load resize",aI)}return this};jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeOutElastic1:function(k,l,i,h,g){var f=Math.PI/2;var m=1.70158;var e=0;var j=h;if(l==0){return i}if((l/=g)==1){return i+h}if(!e){e=g*0.3}if(j<Math.abs(h)){j=h;var m=e/4}else{var m=e/f*Math.asin(h/j)}return j*Math.pow(2,-10*l)*Math.sin((l*g-m)*f/e)+h+i},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a}});jQuery.fn.wowSlider.support={transform:(function(){if(!window.getComputedStyle){return false}var b=document.createElement("div");document.body.insertBefore(b,document.body.lastChild);b.style.transform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";var a=window.getComputedStyle(b).getPropertyValue("transform");b.parentNode.removeChild(b);if(a!==undefined){return a!=="none"}else{return false}})(),perspective:(function(){var b="perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" ");for(var a=0;a<b.length;a++){if(document.body.style[b[a]]!==undefined){return !!b[a]}}return false})(),transition:(function(){var a=document.body||document.documentElement,b=a.style;return b.transition!==undefined||b.WebkitTransition!==undefined||b.MozTransition!==undefined||b.MsTransition!==undefined||b.OTransition!==undefined})()}
/*! jQuery requestAnimationFrame - v0.1.3pre - 2014-02-07
* https://github.com/gnarf37/jquery-requestAnimationFrame
* Copyright (c) 2014 Corey Frang; Licensed MIT */
;(function(c){var a,d=0,h=["webkit","moz"],g=window.requestAnimationFrame,f=window.cancelAnimationFrame;for(;d<h.length&&!g;d++){g=window[h[d]+"RequestAnimationFrame"];f=f||window[h[d]+"CancelAnimationFrame"]||window[h[d]+"CancelRequestAnimationFrame"]}function e(){if(a){g(e);c.fx.tick()}}if(g){window.requestAnimationFrame=g;window.cancelAnimationFrame=f;c.fx.timer=function(i){if(i()&&c.timers.push(i)&&!a){a=true;e()}};c.fx.stop=function(){a=false}}else{var b=0;window.requestAnimationFrame=function(m,j){if(b){return false}b=1;var i=new Date().getTime(),k=Math.max(0,16-(i-d)),l=window.setTimeout(function(){b=0;m(i+k)},k);d=i+k;return l};window.cancelAnimationFrame=function(i){clearTimeout(i)}}}(jQuery));