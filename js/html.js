	// 活动倒计时
	function countdown() {
		var nowTime = new Date();
		var nowHour = nowTime.getHours();
		if (nowHour >= 22) {
			var endTime = new Date("2028/11/06,00:00:00");
			document.getElementById("time").innerHTML = "00:00"+"&nbsp;"+"场";
			timeCount();
		}else if(nowHour >= 0 && nowHour < 10) {
			var endTime = new Date("2028/11/06,10:00:00");
			document.getElementById("time").innerHTML = "10:00"+"&nbsp;"+"场";
			timeCount();
		}else if(nowHour >= 10 && nowHour < 12) {
			var endTime = new Date("2028/11/06,12:00:00");
			document.getElementById("time").innerHTML = "12:00"+"&nbsp;"+"场";
			timeCount();
		}else if(nowHour >= 12 && nowHour < 18) {
			var endTime = new Date("2028/11/06,18:00:00");
			document.getElementById("time").innerHTML = "18:00"+"&nbsp;"+"场";
			timeCount();
		}else if(nowHour >= 18 && nowHour < 22) {
			var endTime = new Date("2028/11/06,22:00:00");
			document.getElementById("time").innerHTML = "22:00"+"&nbsp;"+"场";
			timeCount();
		}
		function timeCount() {
			var times = parseInt((endTime.getTime() - nowTime.getTime())/1000);
			hour = parseInt((times/3600)%24);
			minute = parseInt((times/60)%60);
        	second = parseInt(times%60);
        	if( minute/10 < 1) {
        		minute = "0"+ minute;
        	}
        	if( second/10 < 1) {
        		second = "0"+ second;
        	}
        	document.getElementById("box1").innerHTML = "0"+hour;
        	document.getElementById("box2").innerHTML = minute;
        	document.getElementById("box3").innerHTML = second;
        	// 设置活动结束
        	if(times <= 0){ 
             clearInterval(timeend);
          }
		}
	} 
	var timeend;
    timeend=setInterval(countdown,1000);
	window.onload = countdown;

// 搜索框
	$(function () {
		$("#search_border input").focus(function () {
			$(this).parent().addClass("searchColor");
			$(".search-submit").addClass("searchColor-l");
			$("#hotWords").hide();
		});
		$("#search_border input").blur(function () {
			$("#hotWords").show();
			$(this).parent().removeClass("searchColor");
			$(".search-submit").removeClass("searchColor-l");
		})
	})
// 大图轮播图
	$(function() {
		var count = 0;
		$(".arrow-right").on("click",function () {
			count++;
			if(count == $(".title-img li").length) {
				count = 0;
			};
			$(".title-img li").eq(count).fadeIn().siblings("li").fadeOut();
		});
		$(".arrow-left").on("click",function () {
			count--;
			if(count == -1) {
				count = $(".title-img li").length-1;
			};
			$(".title-img li").eq(count).fadeIn().siblings("li").fadeOut();
		});

		$(".title-controls li").on("click",function (){
			var idx = $(this).index();
			$(".title-img li").eq(idx).fadeIn().siblings("li").fadeOut();
			$(this).children().css("backgroundColor","rgba(255,255,255,0.4)").parent().siblings().children().css("backgroundColor","#707070");
		})
	});

// 闪购点击切换
	$(function () {
		var count = 0;
		$(".xm-controls a").eq(1).on("click",function () {
			count++;
			if(count >= $(".lightning-r ul").length) {
				count = 0;	
			};
			$(".lightning-r").stop().animate({left:-(988*count)});	
		});
		$(".xm-controls a").eq(0).on("click",function() {
			$(".lightning-r").stop().animate({left:0});
		});
	});

//返回顶部箭头
	$(function () {
		$(window).scroll(function () {
			if($(window).scrollTop() >= 1000) {
				$(".returnTop").stop().fadeIn();
			}else {
				$(".returnTop").stop().fadeOut(1000);
			};
			$(".returnTop").on("click",function () {
				$("html,body").stop().animate({scrollTop:0},3000);
			})
		})
	})