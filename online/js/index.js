

require.config({
	paths:{
		jquery:"jquery-1.11.1",
	}
})

require(['jquery'],function(jquery){
	//天天特惠ajax数据
$(function(){
			$.ajax({
				url:"data/shouye.json",
				success:function(data){
					var html1 = "";
					var html2 = "";
					var html3 = "";
					var html4 = "";
					var html5 = "";
					var html6 = "";
					var html7 = "";
					var html8 = "";
					var html9 = "",html10 = "",html11 ="",html12="";
					var html13 = "";
					var html14 = "";
					for(var i in data.navigation1){
						html13 += '<li id="rxtj1"><a href="#"></a>'+ data.navigation1[i] +'</li>';
					}
					$("#hot-sale ul").html(html13);
					for(var i in data.navigation2){
						html14 += '<li id="rxtj1"><a href="#"></a>'+ data.navigation2[i] +'</li>';
					}
					$("#product_top ul").html(html14);

					for(var i in data.day){
						html1 += '<li><div><a href="'+ data.day[i].id +'"><img src="'+ data.day[i].img +'"></a></div><p>'+ data.day[i].title +'</p><p>促销价:<span>'+ data.day[i].price +'</span></p></li>';
					}
					$(".ttthcontent ul").html(html1);
					for(var i in data.activity){
						html2 += '<li><a href="#">'+ data.activity[i] +'</a></li>';
					}
					$(".notebox_desc1").html(html2);
					for(var i in data.information){
						html3 += '<li><a href="#">'+ data.information[i] +'</a></li>';
					}
					$(".notebox_desc2").html(html3);
					for(var i in data.notice){
						html4 += '<li><a href="#">'+ data.notice[i] +'</a></li>'
					}
					$(".notebox_desc3").html(html4);
					for(var i in data.left){
						html5 +='<div class="mzthpic"><a href="#"><img src="'+ data.left[i] +'"></a></div>'
					}
					$(".mzth1").html(html5);
					for(var i in data.right){
						html6 +='<div class="mzthpic"><a href="shopping.html"><img src="'+ data.right[i] +'"></a></div>'
					}
					$(".mzth2").html(html6);
					for(var i in data.firstleft){
						html7 +='<li><a href="#"><img src="'+ data.firstleft[i] +'"/></a></li>';
					}
					$("#content1 .content-left ul").html(html7);
					$("#content3 .content-left ul").html(html7);
					$("#content5 .content-left ul").html(html7);
					for(var i in data.firstright){
						html8 +='<li><div class="right-div"><a href="#"><img src="'+ data.firstright[i].img +'"></a><div class="'+ data.firstright[i].class +'"></div></div><p>'+ data.firstright[i].title +'</p><p>零售价:<span>'+ data.firstright[i].priceout +'</span></p><p>促销价:<span>'+ data.firstright[i].price +'</span></p></li>';
					}
					$("#content1 .content-right ul").html(html8);
					$("#content3 .content-right ul").html(html8);
					$("#content5 .content-right ul").html(html8);
					for(var i in data.secondleft){
						html9 +='<li><a href="#"><img src="'+ data.secondleft[i] +'"/></a></li>';
					}
					$("#content2 .content-left ul").html(html9);
					$("#content4 .content-left ul").html(html9);
					$("#content6 .content-left ul").html(html9);
					for(var i in data.firstright){
						html10 +='<li><div class="right-div"><a href="#"><img src="'+ data.secondright[i].img +'"></a><div class="'+ data.secondright[i].class +'"></div></div><p>'+ data.secondright[i].title +'</p><p>零售价:<span>'+ data.secondright[i].priceout +'</span></p><p>促销价:<span>'+ data.secondright[i].price +'</span></p></li>';
					}
					$("#content2 .content-right ul").html(html10);
					$("#content4 .content-right ul").html(html10);
					$("#content6 .content-right ul").html(html10);
					for(var i in data.thirdright){
						html11 +='<li><div class="right-div"><a href="#"><img src="'+ data.thirdright[i].img +'"/></a><div class="'+ data.thirdright[i].class +'"></div></div><p>'+ data.thirdright[i].title +'</p><p>零售价:<span>'+ data.thirdright[i].priceout +'</span></p><p>会员价:<span>'+ data.thirdright[i].price +'</span></p></li>';
					}
					$("#pcontent1 ul").html(html11);
					$("#pcontent3 ul").html(html11);
					$("#pcontent5 ul").html(html11);
					for(var i in data.fourright){
						html12 +='<li><div class="right-div"><a href="#"><img src="'+ data.fourright[i].img +'"/></a><div class="'+ data.fourright[i].class +'"></div></div><p>'+ data.fourright[i].title +'</p><p>零售价:<span>'+ data.fourright[i].priceout +'</span></p><p>会员价:<span>'+ data.fourright[i].price +'</span></p></li>';
					}
					$("#pcontent2 ul").html(html12);
					$("#pcontent4 ul").html(html12);
				}
			});
			$(".notebox_bottom ul ").on("mouseover","li",function(){
				$(".notebox_bottom ul").find("ul").css("display","none");
				$(this).find("ul").css("display","block");
				
			})
			$(".preference").on("mouseover",".mzthpic",function(){
				$(".mzthpic").css("opacity","0.2");
				$(this).css("opacity","1");
			});
			$(".preference").on("mouseout",".mzthpic",function(){
				$(".mzthpic").css("opacity","1");
			});
			$("#hot-sale").on("mouseover","li",function(){
				$(".hot-sale-content").css("display","none");
				$(".hot-sale-content").eq($(this).index()).css("display","block");
			})
			function tab5(){
					var iNow = 0;
					var timer = null;
					
					timer = setInterval(function(){
					$(".hot-sale-content").css("display","none");
					$(".hot-sale-content").eq(iNow).css("display","block");
					$("#hot-sale li").css({"color":"#888888"});
					$("#hot-sale li").eq(iNow).css("color","#b60405");
					iNow++;
					if(iNow % 6 == 0){
						iNow = 0;
					}
				},4000);
				$(".hot-sale-content").hover(function(){
					clearInterval(timer);
				},function(){
					tab5();
				})
			}
			tab5();
			//底部
				$("#product_top").on("mouseover","li",function(){
					$(".pcontent_right").css("display","none");
					$(".pcontent_right").eq($(this).index()).css("display","block");
				})
			function tab(){
					var iNow = 0;
					var timer = null;
					
					timer = setInterval(function(){
					$(".pcontent_right").css("display","none");
					$(".pcontent_right").eq(iNow).css("display","block");
					$("#product_top li").css({"color":"#888888"});
					$("#product_top li").eq(iNow).css("color","#b60405");
					iNow++;
					if(iNow % 4 == 0){
						iNow = 0;
					}
				},4000);
				$(".pcontent_right").hover(function(){
					clearInterval(timer);
				},function(){
					tab();
				})
			}
			tab();
		})
$(function(){
	//对招商加盟导航的移入移出
	$("#ul li:eq(7)").hover(function(){
		$("#zhaoshang").css("display","block");
	},function(){
		$("#zhaoshang").css("display","none");
	});
	//通过ajax加载商品分类白酒的详情
		$.ajax({
				url:"data/index.json",
				success:function(res){
					var html = "";
					var html1 = "";
					var html2 = "";
					var html3 = "";
					var html4 = "";
					var html5 = "";
					var html6 = "";
					var html7 = "";
					var html8 = "";	
					var html9 = "";	
					var html10 = "";
					var html11 = "";
					var html12 = "";
					var html13 = "";
					for(var i in res[14]){
						var html14 = "";
						html14 = '<div class="productweek">'+ res[14][i].week +'</div><div class="productpicture"><a href="#" target="_blank"><img src="'+ res[14][i].src +'"/></a></div><div class="producttitle">'+ res[14][i].title +'</div><div class="productprice">'+ res[14][i].price +'</div><div class="productbuy"><a href="#"><img src="'+ res[14][i].buy +'"/></a></div>';
						$(".winenav0").siblings().eq(i).find(".winenavproduct").html(html14);
					}
					for(var i in res[9]){
						html9 += '<a href="#" target="_blank">'+ res[9][i] +'</a>';
 					}
 					$(".liqueur").html(html9);	
 					for(var i in res[10]){
 						html10 += '<a href="#" target="_blank">'+ res[10][i] +'</a>';
 					}
 					$(".Spirits").html(html10);	
 					for(var i in res[11]){
 						html11 += '<a href="#" target="_blank">'+ res[11][i] +'</a>';
 					}
 					$(".grape").html(html11);	
 					for(var i in res[12]){
 						html12 += '<a href="#" target="_blank">'+ res[12][i] +'</a>';
 					}
 					$(".fizz").html(html12);
 					for(var i in res[13]){
 						html13 += '<a href="#" target="_blank">'+ res[13][i] +'</a>';
 					}
 					$(".other").html(html13);
					for(var i in res[0]){
						html += '<a href="#" target="_blank">'+ res[0][i]+'</a>';
					};
					$("#wLink").html(html);
					$("#wLink9").html(html);
					$("#wLink13").html(html);
					for(var j in res[1]){
						html1 += '<a href="#" target="_blank">'+ res[1][j]+'</a>';
					};
					$("#wLink1").html(html1);
					$("#wLink10").html(html1);
					$("#wLink14").html(html1);
					for(var k in res[2]){
						html2 += '<a href="#" target="_blank">'+ res[2][k]+'</a>';
					};
					$("#wLink2").html(html2);
					$("#wLink11").html(html2);
					$("#wLink15").html(html1);
					for(var l in res[3]){
						html3 += '<a href="#" target="_blank">'+ res[3][l]+'</a>';
					};
					$("#wLink3").html(html3);
					$("#wLink12").html(html3);
					$("#wLink16").html(html1);
					for(var m in res[4]){
						html4 += '<a href="#" target="_blank">'+ res[4][m]+'</a>';
					};
					$("#wLink4").html(html4);
					$("#wLink17").html(html4);
					for(var n in res[5]){
						html5 += '<a href="#" target="_blank">'+ res[5][n]+'</a>';
					};
					$("#wLink5").html(html5);
					$("#wLink18").html(html5);
					for(var o in res[6]){
						html6 += '<a href="#" target="_blank">'+ res[6][o]+'</a>';
					};
					$("#wLink6").html(html6);
					$("#wLink19").html(html6);
					for(var p in res[7]){
						html7 += '<a href="#" target="_blank">'+ res[7][p]+'</a>';
					};
					$("#wLink7").html(html7);
					$("#wLink20").html(html7);
					for(var m in res[8]){
						html8 += '<a href="#" target="_blank">'+ res[4][m]+'</a>';
					};
					$("#wLink8").html(html8);
				}
			});
		//对商品移入移除操作
		$(".winenav1").on("mouseover",function(){
			$(this).css("background-color","white");
			$(this).on("mouseover","a",function(){
				$(this).css("color","red");
			})
			$(".winenavdetail").css("display","block");
		});
		$(".winenav1").on("mouseout",function(){
			$(this).css("background-color","");
			$(this).on("mouseout","a",function(){
				$(this).css("color","");
			})
			$(".winenavdetail").css("display","none");
		});
		//对洋酒
		$(".winenav2").on("mouseover",function(){
			$(this).css("background-color","white");
			$(this).on("mouseover","a",function(){
				$(this).css("color","red");
			})
			$(".winenavdetail_1").css("display","block");
		});
		$(".winenav2").on("mouseout",function(){
			$(this).css("background-color","");
			$(this).on("mouseout","a",function(){
				$(this).css("color","");
			})
			$(".winenavdetail_1").css("display","none");
		});
		//葡萄酒
		$(".winenav3").on("mouseover",function(){
			$(this).css("background-color","white");
			$(this).on("mouseover","a",function(){
				$(this).css("color","red");
			});
			$(".winenavdetail_2").css("display","block");
		});
		$(".winenav3").on("mouseout",function(){
			$(this).css("background-color","");
			$(this).on("mouseout","a",function(){
				$(this).css("color","");
			});
			$(".winenavdetail_2").css("display","none");
		})
		//起泡酒
		$(".winenav4").on("mouseover",function(){
			$(this).css("background-color","white");
			$(this).on("mouseover","a",function(){
				$(this).css("color","red");
			});
			$(".winenavdetail_3").css("display","block");
		});
		$(".winenav4").on("mouseout",function(){
			$(this).css("background-color","");
			$(this).on("mouseout","a",function(){
				$(this).css("color","");
			});
			$(".winenavdetail_3").css("display","none");
		})
		//其它
			$(".winenav5").on("mouseover",function(){
			$(this).css("background-color","white");
			$(this).on("mouseover","a",function(){
				$(this).css("color","red");
			});
			$(".winenavdetail_4").css("display","block");
		});
		$(".winenav5").on("mouseout",function(){
			$(this).css("background-color","");
			$(this).on("mouseout","a",function(){
				$(this).css("color","");
			});
			$(".winenavdetail_4").css("display","none");
		})		
})
$(function(){
	var iNow = 0;
	var timer = null;
	$(".pcontent_left ol li").mouseover(function(){
		iNow = $(this).index();
		tab1();
	});
	function tab1(){
		$(".pcontent_left ol li").css("background-color","#ccc");
		$(".pcontent_left ol li").eq(iNow).css("background-color","#fff");
		$(".pcontent_left ul li").css("display","none");
		$(".pcontent_left ul li").eq(iNow).css("display","block");
	}
	function timerInner(){
		tab1();
		iNow++;
		if(iNow % 4 == 0){
			iNow = 0;
		}
	}
	timer = setInterval(timerInner,3000);
})
	//轮播图滚动
$(function(){
	var aBtns = $("#slideshow").find("ol").find("li");
	var oUl = $("#slideshow").find("ul");
	var aLi = oUl.find("li");
	var iNow = 0;
	var timer = null;


	aBtns.click(function(){
		iNow = $(this).index();
		tab2();
	});

	function tab2(){
		aBtns.attr("class","");
		aBtns.eq(iNow).attr("class","active"); 

		oUl.animate({
			left : -808 * iNow,
		},function(){
			if(iNow == aBtns.size()){
				oUl.css("left",0);
				iNow = 0;
			}
		});
	}
	function timerInner(){
		iNow++;
		tab2();
		if(iNow == aBtns.size()){
			aBtns.eq(0).attr("class","active");
		}
	}
	timer = setInterval(timerInner,4000);
})
//倒计时
$(function(){
	var intDiff = parseInt(37000);
	timer(intDiff);
	function timer(intDiff){
		window.setInterval(function(){
			var hour = 0,
			minute = 0;
			second = 0;
			if(intDiff > 0){
				hour = Math.floor(intDiff / (60 * 60));
				minute = Math.floor(intDiff/60) - (hour * 60);
				second = Math.floor(intDiff) - (minute * 60) - (hour * 60 * 60)
			}
			if(hour <= 9){
				hour = '0' + hour;
			}
			if(minute <= 9){
				minute = '0' + minute;
			}
			if(second <= 9){
				second = '0' + second;
			}
			$("#hour").html(hour);
			$("#minute").html(minute);
			$("#second").html(second);
			intDiff--;
			if(intDiff == 0){
				intDiff == 37000;
			}
		},1000);
	}

})

})
