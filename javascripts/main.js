(function(){var e,t;!function(){var e,t,i,o,r,n,a;for(r=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],e=window.console||(window.console={}),t=n=0,a=o.length;a>=0?a>=n:n>=a;t=a>=0?++n:--n)i=o[t],e[i]||(e[i]=r);return!0}(),window.location_pathname=function(){return location.pathname.replace(/index.\w+$/,"")},e=function(){var e;return Modernizr.audio&&""===Modernizr.audio.mp3?(e=$("audio"),e.replaceWith('<embed src="'+e.find("source").attr("src")+'" autostart=false width=\'80%\' height=30 enablejavascript="true" >')):void 0},t=function(){var e;return e={data_track_addressbar:!0,services_compact:"sinaweibo,twitter,facebook,linkedin,email"},$(".icons-share").each(function(t,i){return addthis.button(i,e,{url:window.location.protocol+"//"+window.location.host+$(i).data("url"),title:"[Teahour.fm] "+$(i).data("title")})})},$(function(){return $("<h6/>").html("<a href='#' class='toggle-notes'>More Resources \xbb</a>").insertBefore(".notes"),$(".toggle-notes").click(function(e){var t;return e.preventDefault(),e.stopPropagation(),t=$(this).parent().siblings(".notes"),"none"===t.css("display")?(t.show(),$(this).siblings("p").remove()):(t.hide(),$(this).parent().prepend("<p>...</p>"))}),e(),t(),$("article").find("a").each(function(e,t){return $(t).attr("target","_blank")}),$("li#episodes > a").click(function(){var e;return $("li#about").removeClass("open"),$("li#episodes").toggleClass("open"),$("li#episodes > ul").is(":visible")&&"5000"!==$("li#episodes > ul").attr("tabindex")&&(e=$(window).height()-$(".nav").height()-80,$("li#episodes > ul").css("max-height",e),$("li#episodes > ul").niceScroll({nativeparentscrolling:!1,cursorcolor:"#4D8F5F",cursorwidth:"2px",hidecursordelay:100})),!1})})}).call(this);