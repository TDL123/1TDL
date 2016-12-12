/*nav*/
var liDtNode=$(".nav li,.nav dt");
//console.log(lisNode);
liDtNode.hover(//导航及导航下拉菜单
	function(){
		$(this).children(".navDetails").show();
		if($(this).children(".navDetails").hasClass("navDetails")){
			if(this.nodeName.toLocaleLowerCase()=="dt"){
				$(this).children("a").addClass("curNav");
			}
		}
	},
	function(){
		$(this).children(".navDetails").hide();
		if($(this).children(".navDetails").hasClass("navDetails")){
			if(this.nodeName.toLocaleLowerCase()=="dt"){
				$(this).children("a").removeClass("curNav");
			}
		}
	}
);
/*幻灯片*/
var flashObj={
	flashNode:$("#flash"),
	flashLisNode:$("#flash li"),
	spansNode:$("#flash .flashBtn span"),
	leftNode:$(".leftBtn"),
	rightNode:$(".rightBtn"),
	spanCurName:"flashCur",
	spanCurNode:"#flash .flashBtn .flashCur",
	fadeInOut:function(oldPos,curPos){
		flashObj.spansNode.eq(oldPos).removeClass();
		flashObj.spansNode.eq(curPos).addClass(flashObj.spanCurName);
		flashObj.flashLisNode.eq(oldPos).stop(false,true).fadeOut();
		flashObj.flashLisNode.eq(curPos).stop(false,true).fadeIn();
	},
	aboutMoveFun:function(){
		var firstDt=$('.textDet dt:first');
		$('.textDet').append(firstDt);
	},
	toTop:function(){
		var num=document.documentElement.scrollTop+document.body.scrollTop;
		num-=30;
		if(num>0){
			document.documentElement.scrollTop=num;
			document.body.scrollTop=num;
			window.setTimeout(flashObj.toTop,5);
		}
	},
	scrollMove:$(window).scroll(function(){
		var winHeight=parseInt($(window).height());
		var scrollHeight=$(this).scrollTop();
		if(scrollHeight>=winHeight){
			$("#toTop").fadeIn();
		}else{
			$("#toTop").fadeOut();
		}
	}),
	mainLeft:$('.main-left'),
	mainLeftul:$('.main-left .mainNav'),
	lisNode:$('.main-left .mainNav li')
};

flashObj.flashNode.hover(
	function(){
		$(".leftBtn,.rightBtn").fadeIn();
	},
	function(){
		$(".leftBtn,.rightBtn").fadeOut();
	}
);

flashObj.spansNode.mouseenter(function(){
	if($(this).is("."+flashObj.spanCurName))
	{
		return;
	}
	var oldPos=$(flashObj.spanCurNode).index();
	var curPos=$(this).index();
	flashObj.fadeInOut(oldPos,curPos);
});

flashObj.rightNode.click(function(){
	var oldPos=$(flashObj.spanCurNode).index();
	var lastPos=flashObj.spansNode.length-1;
	var curPos=oldPos==lastPos?0:oldPos+1;
	flashObj.fadeInOut(oldPos,curPos);
});

flashObj.leftNode.click(function(){
		var oldPos=$(flashObj.spanCurNode).index();
		var lastPos=flashObj.spansNode.length-1;
		var curPos=oldPos==0?lastPos:oldPos-1;
		flashObj.fadeInOut(oldPos,curPos);
	});
if($(flashObj.rightNode).length!=0){
	flashObj.fadeDo=window.setInterval(function(){
			flashObj.rightNode.click();
	},3000);
}
/*ball*/
var ballLis=$(".ballAn").children("li");
//console.log(ballLis);
ballLis.mouseenter(function(){
	if($(this).hasClass("ballPublic")){
		return;
	}
	var oldPos=$(".ballAn .ballPublic").index();
	var nowPos=$(this).index();
	ballLis.eq(oldPos).removeClass("ballPublic");
	ballLis.eq(oldPos).removeClass("ballAn"+(oldPos+1)+"Cur");
	ballLis.eq(nowPos).addClass("ballPublic");
	ballLis.eq(nowPos).addClass("ballAn"+(nowPos+1)+"Cur");
	ballLis.eq(oldPos).stop(true).animate({width:"0px"},500);
	$(this).stop(true).animate({width:"334px"},500);
});
/*abort*/
$(".abortTextLeft").hover(
	function(){
		$(this).find("span").animate({top:"129px"},500);
		
		$(this).find("img").animate({width:"540px",height:"265px",marginTop:"-25px",marginLeft:"-12px"},500);
	},
	function(){
		$(this).find("span").animate({top:"241px"},500);

		$(this).find("img").animate({width:"491",height:"241px",marginTop:"0px",marginLeft:"0"},500);
	}
);

var aboutMove=setInterval(flashObj.aboutMoveFun,3000);
$('.textDet').mouseleave(function(){
	aboutMove=setInterval(flashObj.aboutMoveFun,3000);
});
$('.abortLinkLeft,.abortLinkRight').mouseleave(function(){
	aboutMove=setInterval(flashObj.aboutMoveFun,3000);
});
$('.abortLinkLeft').click(function(){
	var firstDt=$('.textDet dt:first');
	$('.textDet').append(firstDt);
});
$('.abortLinkRight').click(function(){
	var lastDt=$('.textDet dt:last');
	$('.textDet').prepend(lastDt);
});
$('.textDet').mouseenter(function(){
	clearInterval(aboutMove);
});
$('.abortLinkLeft,.abortLinkRight').mouseenter(function(){
	clearInterval(aboutMove);
});

/*navRight*/
$(".btn4").click(function(){
	flashObj.toTop();
});
/*toTop*/
$("#toTop").click(function(){
	flashObj.toTop();
});
flashObj.scrollMove;

/*About*/
flashObj.lisNode.click(function(){
	$(this).parent().find(".current").removeClass();
	$(this).addClass("current");
});