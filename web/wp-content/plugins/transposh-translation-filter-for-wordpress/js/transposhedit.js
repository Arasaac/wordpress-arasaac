/*
 * Transposh v0.9.7.0
 * http://transposh.org/
 *
 * Copyright 2015, Team Transposh
 * Licensed under the GPL Version 2 or higher.
 * http://transposh.org/license
 *
 * Date: Fri, 05 Jun 2015 02:32:15 +0300
 */
(function(a){function e(a){var b;return"object"===typeof t_jp.l&&(b=t_jp.l[a])?b:a}function q(c,d,e){c=c.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");0===a.trim(d).length&&(d=a("[data-orig='"+c+"']").attr("data-orig"));var f=function(){var c=a(this).attr("id").substr(a(this).attr("id").lastIndexOf("_")+1),d=a(b+"img_"+c);a(b+c).attr("data-source",e);d.removeClass("tr-icon-yellow").removeClass("tr-icon-green");0==e?d.addClass("tr-icon-green"):e&&d.addClass("tr-icon-yellow")};a("*[data-orig='"+
c+"'][data-hidden!='y']").html(d).each(f);a("*[data-orig='"+c+"'][data-hidden='y']").attr("data-trans",d).each(f);a(b+"translation").data("origval",d);a(b+"translation").keyup()}function r(b,d){q(b,d,0);a.ajax({type:"POST",url:t_jp.ajaxurl,data:{action:"tp_translation",ln0:t_jp.lang,sr0:0,items:1,tk0:b,tr0:d},error:function(a){q(b,"",1);alert("Problem saving translation, contact support.\n\nServer's message: "+a.statusText)}})}function B(){t_jp.google_key?t_jp.dgt(a(b+"original").val(),function(c){a(b+
"translation").val(a("<div>"+a.trim(c.data.translations[0].translatedText)+"</div>").text()).keyup()},t_jp.lang):a.ajax({type:"GET",url:t_jp.ajaxurl,dataType:"json",data:{action:"tp_gsp",tl:t_jp.lang,sl:a(b+"original").data("srclang"),q:a(b+"original").val()},success:function(c){console.log(c);a(b+"translation").val(a("<div>"+a.trim(c.result)+"</div>").text()).keyup()}})}function C(){t_jp.dmt([a(b+"original").val()],function(c){a(b+"translation").val(a("<div>"+a.trim(c[0].TranslatedText)+"</div>").text()).keyup()},
t_jp.binglang)}function D(){t_jp.dat(a(b+"original").val(),function(c){a(b+"translation").val(a("<div>"+a.trim(c.responseData.translatedText)+"</div>").text()).keyup()},t_jp.lang)}function s(b){var d,e,f;d=a(b).dialog("widget").find(".ui-dialog-title");e=d.css("margin-right");f=d.css("margin-left");d.css({"float":k,"margin-right":f,"margin-left":e});b=a(b).dialog("widget").find(".ui-dialog-titlebar-close");e=b.css("right");f=b.css("left");b.css({right:f,left:e})}function E(){var c=b+"confirmdialog";
a(c).remove();a('<div id="'+d+'confirmdialog" title="'+e("Close without saving?")+'"><span class="ui-icon ui-icon-alert" style="float:'+k+"; margin-bottom:20px; margin-"+m+':7px"></span><span style="clear:both">'+e("You have made a change to the translation. Are you sure you want to discard it?")+'<span><span id="'+d+'dcbar" style="display:block"><button id="'+d+'cancel">'+e("Cancel")+'</button><button id="'+d+'discard">'+e("Discard")+"</button></span>NaN").appendTo("body").dialog({resizable:!1,modal:!0,
minHeight:50,overlay:{backgroundColor:"#000",opacity:0.5}});a(b+"cancel").button({icons:{primary:"ui-icon-closethick"},text:!1}).click(function(){a(c).dialog("close")});a(b+"discard").button({icons:{primary:"ui-icon-check"},text:!1}).click(function(){a(b+"translation").data("changed",!1);a(c).dialog("close");a(b+"dialog").dialog("close")});a(b+"dcbar").css({"float":m}).buttonset();"rtl"===a("html").attr("dir")&&(s(c),a(b+"dcbar button:first").addClass("ui-corner-"+k).removeClass("ui-corner-"+m),a(b+
"dcbar button:last").addClass("ui-corner-"+m).removeClass("ui-corner-"+k))}function F(c){var h=b+"historydialog";a(h).remove();a('<div id="'+d+'historydialog" title="'+e("History")+'">'+e("Loading...")+"</div>").appendTo("body");a(h).css("padding",0).dialog({width:"450px",show:"slide"});"rtl"===a("html").attr("dir")&&s(h);a.ajax({url:t_jp.ajaxurl,type:"POST",data:{action:"tp_history",token:a(b+c).attr("data-orig"),lang:t_jp.lang},dataType:"json",cache:!1,success:function(n){var f,l,g,u;a(h).empty().append('<table width="100%"><col style="width: 80%;"><col><col><thead><tr> <th>'+
e("Translated")+"</th><th>"+e("By")+"</th><th>"+e("At")+"</th></tr></thead><tbody></tbody></table>");a.each(n,function(b,c){switch(c.source){case "1":f="tr-icon-google";l=e("google");break;case "2":f="tr-icon-bing";l=e("bing");break;case "3":f="tr-icon-apertium";l=e("apertium");break;default:f="ui-icon-person",l=e("manual translation")}null===c.user_login&&(c.user_login=c.translated_by);g='<span class="ui-button ui-widget ui-button-icon-only" style="width: 18px; border: 0px; margin-'+m+': 3px"><span title="'+
l+'" style="cursor: default" class="ui-button-icon-primary ui-icon '+f+'"></span><span class="ui-button-text" style="display: inline-block; "></span></span>';u=c.can_delete?'<span class="'+d+'delete" title="'+e("delete")+'" style="width: 18px; margin-'+k+': 3px">':"";a(h+" tbody").append("<tr><td>"+c.translated+'</td><td id="'+d+'histby">'+g+c.user_login+'</td><td id="'+d+'histstamp">'+c.timestamp+u+"</td></tr>")});a(b+"histby,"+b+"histstamp").css("white-space","nowrap");a(h+" th").addClass("ui-widget-header").css("padding",
"3px");a(h+" td").addClass("ui-widget-content").css("padding","3px");a("."+d+"delete").button({icons:{primary:"ui-icon-circle-close"},text:!1}).click(function(){var d=a(this).parents("tr");a.ajax({url:t_jp.ajaxurl,type:"POST",data:{action:"tp_history",token:a(b+c).attr("data-orig"),timestamp:a(this).parents("tr").children(":last").text(),lang:t_jp.lang},dataType:"json",cache:!1,success:function(e){!1===e?a(d).children().addClass("ui-state-error"):(a(d).empty(),q(a(b+c).attr("data-orig"),e.translated,
e.source))}})});a("."+d+"delete .ui-button-text").css("display","inline-block")}})}function t(c){a(b+"original").val(a(b+c).attr("data-orig"));a(b+"translation").val(a(b+c).html());a(b+c).attr("data-trans")&&a(b+"translation").val(a(b+c).attr("data-trans"));a(b+"translation").data("origval",a(b+"translation").val());a(b+"approve").button("enable");a(b+"prev").button("enable");a(b+"next").button("enable");a(b+(Number(c)-1)).length||a(b+"prev").button("disable");a(b+(Number(c)+1)).length||a(b+"next").button("disable");
a(b+"oht").removeClass("ui-state-highlight");c=a(b+c).attr("data-srclang");void 0===c&&(c=t_jp.olang);a(b+"orglang").text(p[c]);a(b+"historydialog").remove();a(b+"translation").keyup()}function v(c){var h="",n="",f="",l="",g=b+"dialog";t_jp.msn&&(h='<button class="'+d+'suggest" id="'+d+'bing">'+e("bing suggest")+"</button>");t_jp.google&&(n='<button class="'+d+'suggest" id="'+d+'google">'+e("google suggest")+"</button>");t_jp.apertium&&(f='<button class="'+d+'suggest" id="'+d+'apertium">'+e("apertium suggest")+
"</button>");t_jp.oht&&(l='<button class="'+d+'suggest" id="'+d+'oht">'+e("One Hour Translate queue")+"</button>");a(g).remove();a('<div id="'+d+'dialog" title="'+e("Edit Translation")+'"/>').appendTo("body");a(g).css("padding","1px").append('<div style="width: 100%"><label for="original">'+e("Original text")+' (<a href="#" title="'+e("read alternate translations")+'" id="'+d+'orglang"></a>)</label><textarea cols="80" row="3" name="original" id="'+d+'original" readonly="y"/><span id="'+d+'utlbar"><button id="'+
d+'prev">'+e("previous translation")+'</button><button id="'+d+'zoom">'+e("find on page")+'</button><button id="'+d+'next">'+e("next translation")+'</button></span><label for="translation">'+e("Translate to")+'</label><textarea cols="80" row="3" name="translation" lang="'+t_jp.lang+'"id="'+d+'translation"/><span id="'+d+'ltlbar"><button id="'+d+'history">'+e("view translation log")+'</button><button id="'+d+'keyboard">'+e("virtual keyboard")+"</button>"+n+h+f+l+'<button id="'+d+'approve">'+e("approve translation")+
"</button></span></div>");a(b+"utlbar,"+b+"ltlbar").css({"float":m}).buttonset();a(g+" textarea").css({width:"483px",padding:".4em",margin:"2px 0 0 0",resize:"vertical"}).addClass("text ui-widget-content ui-corner-all");a(g+" label").css({display:"block",clear:"both"});a(b+"orglang").click(function(){a(b+"langmenu").length?a(b+"langmenu").toggle():t_jp.tfl(function(){a.xLazyLoader({js:[t_jp.plugin_url+"/js/jquery.ui.menu.js"],success:function(){a.ajax({url:t_jp.ajaxurl,data:{action:"tp_trans_alts",
token:a(b+c).attr("data-orig")},dataType:"json",cache:!1,success:function(e){var f;(f=a(b+c).attr("data-srclang"))||(f=t_jp.olang);var h='<li data-translated="'+a(b+c).attr("data-orig")+'"><a href="#">'+p[f]+"</a></li>";a(e).each(function(a,b){b.lang!==t_jp.lang&&(h=h+'<li data-translated="'+b.translated+'"><a href="#">'+p[b.lang]+"</a></li>")});a('<ul style="position: absolute; top: 0px" id="'+d+'langmenu">'+h).appendTo(g);a(b+"langmenu").menu({select:function(c,d){a(this).hide();a(b+"original").val(d.item.attr("data-translated"));
a(b+"orglang").text(d.item.text()).addClass("ui-state-highlight");p[f]===d.item.text()&&a(b+"orglang").removeClass("ui-state-highlight")},input:a(this)}).show().css({top:0,left:0}).position({my:k+" top",at:k+" bottom",of:a(b+"orglang")})}})}})});return!1});a(b+"prev").button({icons:{primary:"ui-icon-seek-"+w},text:!1});a(b+"zoom").button({icons:{primary:"ui-icon-search"},text:!1});a(b+"next").button({icons:{primary:"ui-icon-seek-"+x},text:!1});a(b+"prev").click(function(){if(a(b+"translation").data("changed")){var d=
a(b+"translation").val(),e=a(b+c).attr("data-orig");r(e,d)}c=Number(c)-1;t(c)});a(b+"next").click(function(){if(a(b+"translation").data("changed")){var d=a(b+"translation").val(),e=a(b+c).attr("data-orig");r(e,d)}c=Number(c)+1;t(c)});a(b+"zoom").click(function(){a("html, body").animate({scrollTop:a(b+c).offset().top},500);a(g).dialog("widget").css({top:a(g).dialog("widget").offset().top-window.scrollY,position:"fixed"});a(b+c).animate({opacity:0.1},"slow",function(){a(g).dialog("widget").css({top:a(g).dialog("widget").offset().top,
position:"absolute"})}).animate({opacity:1},"slow").animate({opacity:0.1},"slow").animate({opacity:1},"slow").animate({opacity:0.1},"slow").animate({opacity:1},"slow")});a(b+"history").button({icons:{primary:"ui-icon-clipboard"},text:!1}).click(function(){F(c)});a(b+"keyboard").button({icons:{primary:"ui-icon-calculator"},text:!1}).click(function(){t_jp.tfl(function(){a.xLazyLoader({js:[t_jp.plugin_url+"/js/keyboard.js"],css:[t_jp.plugin_url+"/css/keyboard.css"],success:function(){VKI_attach(a(b+
"translation").get(0));VKI_show(a(b+"translation").get(0))}})})});a(b+"google").button({icons:{primary:"tr-icon-google"},text:!1}).click(function(){B();a("."+d+"suggest").button("enable");a(this).button("disable")});a(b+"bing").button({icons:{primary:"tr-icon-bing"},text:!1}).click(function(){C();a("."+d+"suggest").button("enable");a(this).button("disable")});a(b+"apertium").button({icons:{primary:"tr-icon-apertium"},text:!1}).click(function(){D();a("."+d+"suggest").button("enable");a(this).button("disable")});
a(b+"oht").button({icons:{primary:"tr-icon-oht"},text:!1}).click(function(){var d=a(this);a.ajax({url:t_jp.ajaxurl,data:{action:"tp_oht",q:a(b+"original").val(),token:a(b+c).attr("data-orig"),orglang:a(b+c).attr("data-srclang"),lang:t_jp.lang},dataType:"json",cache:!1,success:function(a){a?d.addClass("ui-state-highlight"):d.removeClass("ui-state-highlight")}})});a(b+"approve").button({icons:{primary:"ui-icon-check"},text:!1}).click(function(){var d=a(b+"translation").val(),e=a(b+c).attr("data-orig");
(a(b+"translation").data("changed")||"0"!==a(b+c).attr("data-source"))&&r(e,d)});a(b+"translation").keyup(function(d){a(this).data("origval")!==a(this).val()?(a(this).addClass("ui-state-highlight"),a(b+"approve").button("enable"),a(this).data("changed",!0)):(a(this).removeClass("ui-state-highlight"),"0"===a(b+c).attr("data-source")&&a(b+"approve").button("disable"),a(this).data("changed",!1))});t(c);a(g).dialog({resizable:!1,width:500,zIndex:99999});"rtl"===a("html").attr("dir")&&s(g);a(b+"orglang").blur();
a(g).bind("dialogclose",function(c,d){"function"===typeof VKI_close&&VKI_close(a(b+"translation").get(0));a(b+"historydialog").remove()});a(g).keydown(function(c){if(c.ctrlKey)switch(c.keyCode){case y:a(b+"prev").click();break;case z:a(b+"next").click()}});a(g).bind("dialogbeforeclose",function(c,d){return a(b+"translation").data("changed")?(E(),!1):!0})}var p={en:"English - English",af:"Afrikaans - Afrikaans",sq:"Albanian - Shqip",ar:"Arabic - \u0627\u0644\u0639\u0631\u0628\u064a\u0629",hy:"Armenian - \u0540\u0561\u0575\u0565\u0580\u0565\u0576",
az:"Azerbaijani - az\u0259rbaycan dili",eu:"Basque - Euskara",be:"Belarusian - \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",bn:"Bengali - \u09ac\u09be\u0982\u09b2\u09be",bg:"Bulgarian - \u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",ca:"Catalan - Catal\u00e0",zh:"Chinese (Simplified) - \u4e2d\u6587(\u7b80\u4f53)","zh-tw":"Chinese (Traditional) - \u4e2d\u6587(\u6f22\u5b57)",hr:"Croatian - Hrvatski",cs:"Czech - \u010ce\u0161tina",da:"Danish - Dansk",nl:"Dutch - Nederlands",
eo:"Esperanto - Esperanto",et:"Estonian - Eesti keel",fi:"Finnish - Suomi",fr:"French - Fran\u00e7ais",gl:"Galician - Galego",ka:"Georgian - \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",de:"German - Deutsch",el:"Greek - \u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",gu:"Gujarati - \u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",ht:"Haitian - Krey\u00f2l ayisyen",mw:"Hmong Daw - Hmoob Daw",he:"Hebrew - \u05e2\u05d1\u05e8\u05d9\u05ea",hi:"Hindi - \u0939\u093f\u0928\u094d\u0926\u0940; \u0939\u093f\u0902\u0926\u0940",
hu:"Hungarian - Magyar",is:"Icelandic - \u00cdslenska",id:"Indonesian - Bahasa Indonesia",ga:"Irish - Gaeilge",it:"Italian - Italiano",ja:"Japanese - \u65e5\u672c\u8a9e",kn:"Kannada - \u0c95\u0ca8\u0ccd\u0ca8\u0ca1",ko:"Korean - \uc6b0\ub9ac\ub9d0",lo:"Lao - \u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7",la:"Latin - Lat\u012bna",lv:"Latvian - Latvie\u0161u valoda",lt:"Lithuanian - Lietuvi\u0173 kalba",mk:"Macedonian - \u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438 \u0458\u0430\u0437\u0438\u043a",
ms:"Malay - Bahasa Melayu",mt:"Maltese - Malti",no:"Norwegian - Norsk",fa:"Persian - \u067e\u0627\u0631\u0633\u06cc",pl:"Polish - Polski",pt:"Portuguese - Portugu\u00eas",ro:"Romanian - Rom\u00e2n\u0103",ru:"Russian - \u0420\u0443\u0441\u0441\u043a\u0438\u0439",sr:"Serbian - C\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a",sk:"Slovak - Sloven\u010dina",sl:"Slovene - Sloven\u0161\u010dina",es:"Spanish - Espa\u00f1ol",sw:"Swahili - Kiswahili",sv:"Swedish - Svenska",tl:"Tagalog - Tagalog",
ta:"Tamil - \u0ba4\u0bae\u0bbf\u0bb4\u0bcd",te:"Telugu - \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",th:"Thai - \u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",tr:"Turkish - T\u00fcrk\u00e7e",uk:"Ukrainian - \u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",ur:"Urdu - \u0627\u0631\u062f\u0648",vi:"Vietnamese - Ti\u1ebfng Vi\u1ec7t",cy:"Welsh - Cymraeg",yi:"Yiddish - \u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"},d=t_jp.prefix,b="#"+d,A=!1,w="prev",x="next",m="right",k="left",z=39,y=37;"rtl"===a("html").attr("dir")&&
(m="left",k="right",y=39,z=37,w="next",x="prev");a("."+d).each(function(c){if("undefined"!==typeof a(this).attr("id")){var e=a(this).attr("id").substr(a(this).attr("id").lastIndexOf("_")+1);a(this).after('<span id="'+d+"img_"+e+'" class="tr-icon" title="'+a(this).attr("data-orig")+'"></span>');c=a(b+"img_"+e);var k=function(){t_jp.locale&&!A?a.getScript(t_jp.plugin_url+"/js/l/"+t_jp.lang+".js",function(){A=!0;v(e)}):v(e)};c.click(function(){t_jp.tfju(function(){k()});return!1}).css({border:"0px",
margin:"1px",padding:"0px"});"0"===a(this).attr("data-source")?c.addClass("tr-icon-green"):a(this).attr("data-source")&&c.addClass("tr-icon-yellow");"y"===a(this).attr("data-hidden")&&c.css({opacity:"0.6"})}})})(jQuery);
