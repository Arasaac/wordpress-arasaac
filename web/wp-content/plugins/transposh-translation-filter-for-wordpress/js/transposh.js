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
(function(c){function B(b,a){if(0!==c.trim(a).length){var d=function(){var b=c(this).attr("id").substr(c(this).attr("id").lastIndexOf("_")+1),a=c("#"+f+"img_"+b);c("#"+f+b).attr("data-source",1);a.removeClass("tr-icon-yellow").removeClass("tr-icon-green").addClass("tr-icon-yellow")};b=b.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");c("*[data-orig='"+b+"'][data-hidden!='y']").html(a).each(d);c("*[data-orig='"+b+"'][data-hidden='y']").attr("data-trans",a).each(d)}}function C(b,a){clearTimeout(s);
h.push(b);n.push(a);B(b,a);s=setTimeout(function(){var b={ln0:t_jp.lang,sr0:p,action:"tp_translation",items:h.length},a;for(a=0;a<h.length;a+=1)b["tk"+a]=h[a],b["tr"+a]=n[a],q+=c("*[data-orig='"+h[a].replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1")+"']").size();c.ajax({type:"POST",url:t_jp.ajaxurl,data:b,success:function(){console.window&&console.log(q+"/"+k+" translations posted")}});n=[];h=[]},200)}function l(b,a){C(b,c("<div>"+c.trim(a)+"</div>").text());window.console&&console.log(k-
c("."+f+'[data-source=""]').size()+"/"+k+" auto translated")}function t(b,a,d){c.ajax({url:t_jp.ajaxurl,dataType:"json",type:"GET",data:{action:"tp_gp",tl:d,q:b},success:a})}function u(b,a){t(a,function(a){c(a.results).each(function(a){l(b[a],this)})},t_jp.lang)}function v(b,a,d){c.ajax({url:"https://www.googleapis.com/language/translate/v2",dataType:"jsonp",data:{key:t_jp.google_key,q:b,target:d,source:t_jp.olang},traditional:!0,success:a})}function D(b,a){v(a,function(d){"undefined"!==typeof d.error?
u(b,a):c(d.data.translations).each(function(a){l(b[a],this.translatedText)})},t_jp.lang)}function m(b,a,d){if(t_jp.msn_key){var e="[";c(b).each(function(a){e+='"'+encodeURIComponent(b[a].replace(/[\\"]/g,"\\$&").replace(/(\r\n|\n|\r)/gm," "))+'",'});e=e.slice(0,-1)+"]";c.ajax({url:"//api.microsofttranslator.com/V2/Ajax.svc/TranslateArray?appId="+t_jp.msn_key+"&to="+d+"&texts="+e,dataType:"jsonp",jsonp:"oncomplete",success:a})}else 1===w?setTimeout(function(){m(b,a,d)},500):(w=1,c.getScript("//www.microsofttranslator.com/ajax/v2/toolkit.ashx?loc=en&toolbar=none",
function(){t_jp.msn_key=_mstConfig.appId;m(b,a,d)}))}function E(b,a){p=2;m(a,function(a){c(a).each(function(a){l(b[a],this.TranslatedText)})},t_jp.binglang)}function x(b,a,d){c.ajax({url:"http://api.apertium.org/json/translate",data:{q:b,langpair:t_jp.olang+"|"+d,markUnknown:"no"},dataType:"jsonp",traditional:!0,success:a})}function F(b,a){p=3;x(a,function(a){200<=a.responseStatus&&300>a.responseStatus&&(void 0!==a.responseData.translatedText?l(b[0],a.responseData.translatedText):c(a.responseData).each(function(a){200===
this.responseStatus&&l(b[a],this.responseData.translatedText)}))},t_jp.lang)}function y(b,a){!t_jp.msn||"2"!==t_jp.preferred&&void 0!==t_jp.google?!t_jp.apertium||"en"!==t_jp.olang&&"es"!==t_jp.olang?t_jp.google_key?D(b,a):u(b,a):F(b,a):E(b,a)}function z(){var b=[],a=0,d=[],e=[];c("."+f+'[data-source=""]').each(function(){var f=c(this).attr("data-orig"),g=c(this).attr("data-orig");void 0===g&&(g=c(this).html());1!==b[g]&&(b[g]=1,a+encodeURIComponent(g).length>G&&(y(e,d),a=0,d=[],e=[]),a+=encodeURIComponent(g).length,
e.push(f),d.push(g))});y(e,d)}function A(b){"function"===typeof c.xLazyLoader?b():(t_jp.$=c,c.getScript(t_jp.plugin_url+"/js/lazy.js",b))}function r(b){r.hit?b():(r.hit=!0,A(function(){c.fn.propAttr=c.fn.prop||c.fn.attr;c.xLazyLoader({js:t_jp.jQueryUI+"jquery-ui.min.js",css:t_jp.jQueryUI+"themes/"+t_jp.theme+"/jquery-ui.css",success:b})}))}var G=1024,k,f=t_jp.prefix,p=1,q=0,s,h=[],n=[],w=0;t_jp.dgpt=t;t_jp.dgt=v;t_jp.dmt=m;t_jp.dat=x;t_jp.at=z;t_jp.tfl=A;t_jp.tfju=r;c(function(){t_jp.msn&&(t_jp.binglang=
t_jp.lang,"zh"===t_jp.binglang?t_jp.binglang="zh-chs":"zh-tw"===t_jp.binglang?t_jp.binglang="zh-cht":"mw"===t_jp.binglang&&(t_jp.binglang="mww"));c("."+f+"setdeflang").click(function(){c.ajax({url:t_jp.ajaxurl,data:{action:"tp_cookie"},cache:!1});c("."+f+"setdeflang").hide("slow");return!1});k=c("."+f+'[data-source=""]').size();c.ajaxSetup({cache:!0});k&&!t_jp.noauto&&(t_jp.google||t_jp.msn||t_jp.apertium)&&z();t_jp.edit&&c.getScript(t_jp.plugin_url+"/js/transposhedit.js")})})(jQuery);