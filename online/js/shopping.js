/*alert("编译成功");

require.config({
	paths:{
		jquery:"jquery-1.11.1",
		coo:"coo",
	}
})
define(['jquery','coo'],function(jquery,coo){*/
		//加入购物车
$(function(){
	$("#buy1").click(function(){
		var first = $.cookie("goods") == null ? true :false;
		if(first){
			$.cookie("goods",'[{src : "'+ $("#goods_img").attr("src") +'", title :"'+ $("#good_tit").html() +'", price :"'+ $("#prices").find("span").html() +'",count:'+ $("#num").val() +'}]',{expires : 7});
		}else{
			var str = $.cookie("goods");
			var arr = eval(str);
			arr[0].count += parseInt($("#num").val());
			var cookieStr = JSON.stringify(arr);
			$.cookie("goods",cookieStr,{expires : 7});
		}
	})
})


$(function(){
	$(".span2").mouseover(function(){
		$(this).find("a").css("color","red");
		$(".span4").css("display","block");
	})
	$(".span2").mouseout(function(){
		$(this).find("a").css("color","");
	})

	$("#input").click(function(){
		if(!this.checked){
			$(".left").html("会员价");
			$("#prices").html("￥85.00");
			$(".span1").html("42");
			$(".span4").css("display","none");
		}else{
			$(".left").html("促销价");
			$("#prices").html("￥70.00");
			$(".span1").html("0");
		}
	})
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
					for(var m in res[4]){
						html8 += '<a href="#" target="_blank">'+ res[4][m]+'</a>';
					};
					$("#wLink8").html(html8);
				}
			});
		//对商品移入移除操作
		$("#menu_nav").on("mouseover",function(){
			$(".winenav").css("display","block");
		})
		$("#menu_nav").on("mouseout",function(){
			$(".winenav").css("display","none");
		})
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
	sunadd();
})

//数量加减
function sunadd(){
	var num = $("#num").attr("value");
	$("#subtraction").click(function(){
		if(parseInt(num) > 1){
			num = parseInt(num) - 1;
		}
		$("#num").attr("value",num);
	})
	$("#add").click(function(){
		num = parseInt(num) + 1;
		$("#num").attr("value",num);
	})

}

//加载相关产品
$(function(){
	$.ajax({
		url : "data/shopping.json",
		success:function(data){
			var html1 = "";
			var html2 = "";
			var html3 = "";
			for(var i in data.related){
				html1 += '<li><a href="#" target="_blank" title="'+ data.related[i].title +'"><img src="'+ data.related[i].src +'" alt="'+ data.related[i].alt +'"></a><a href="#" target="_blank" title="'+ data.related[i].title +'">'+ data.related[i].describe +'</a><p>'+ data.related[i].price +'</p></li>';
			}
			$("#related").html(html1);
			for(var i in data.like){
				html2 +='<li><div class="li_left"><a href="#"><img src="'+ data.like[i].src +'"/></a></div><div class="li_right"><p class="li_right_p1"><a href="#">'+ data.like[i].describe +'</a></p><p>零售价:<span>'+ data.like[i].priceout +'</span></p><p>'+ data.like[i].price +'</p></div></li>'; 
			}
			$("#like").html(html2);

			html3 +='<li><div class="li_left"><a href="#"><img src="'+ data.like1.src +'"/></a></div><div class="li_right"><p class="li_right_p1"><a href="#">'+ data.like1.describe +'</a></p><p>零售价:<span>'+ data.like1.priceout +'</span></p><p>'+ data.like1.price +'</p></div></li>'; 
			$("#like1").html(html3);
		}
	})
})


//放大镜
$(function(){
	$("#normal").hover(function(){
		$("#glass").css("display","block");
		$("#normal2").css("display","block");
		$("#magnify").css("display","block");
	},function(){
		$("#glass").css("display","none");
		$("#normal2").css("display","none");
		$("#magnify").css("display","none");
	})
	 $("#non").mousemove(function(ev){
	 	var left = ev.offsetX - $("#glass").outerWidth()/2;
	 	var top = ev.offsetY - $("#glass").outerHeight()/2;
	 	if(left < 0){
	 		left = 0;
	 	}else if(left > this.offsetWidth - $("#glass").outerWidth()){
	 		left = this.offsetWidth - $("#glass").outerWidth();
	 	}
	 	if(top < 0){
	 		top = 0;
	 	}else if(top > this.offsetHeight - $("#glass").outerHeight()){
	 		top = this.offsetHeight - $("#glass").outerHeight();
	 	}
	 	$("#glass").css("left",left);
	 	$("#glass").css("top",top);

	 	var proportionX = left / (this.offsetWidth - $("#glass").outerWidth());
	 	var proportionY = top / (this.offsetHeight - $("#glass").outerWidth());

	 	var mLeft = - proportionX * ($("#magnify").outerWidth() - $(
	 		"#normal2").outerWidth());
	 	var mTop = - proportionY * ($("#magnify").outerHeight() - $("#normal2").outerHeight())
	 	$("#magnify").css("left",mLeft);
	 	$("#magnify").css("top",mTop);
	 })
})


//组合商品
$(function(){
	var member2 = $("#member2").find("span").html();
	var member1 = $("#member1").find("span").html();
	var pgorder_p1 = $(".pgorder_p1").find("span").html();
	var pgorder_p2 = $(".pgorder_p2").find("span").html();

	$("#selectpro2").click(function(){
		if(this.checked){
			pgorder_p2 = Number(pgorder_p2) + Number(member2);
			 $(".pgorder_p2").find("span").html(pgorder_p2);
			pgorder_p1 = parseInt(pgorder_p1) + 1;
			$(".pgorder_p1").find("span").html(pgorder_p1);
		}else{
			pgorder_p2 = parseInt(pgorder_p2) - parseInt(member2);
			$(".pgorder_p2").find("span").html(pgorder_p2)
			pgorder_p1 = parseInt(pgorder_p1) - 1;
			$(".pgorder_p1").find("span").html(pgorder_p1);
		}
	})
	$("#selectpro1").click(function(){
		if(this.checked){
			pgorder_p2 = Number(pgorder_p2) + Number(member1);
			 $(".pgorder_p2").find("span").html(pgorder_p2);
			pgorder_p1 = parseInt(pgorder_p1) + 1;
			$(".pgorder_p1").find("span").html(pgorder_p1);
		}else{
			pgorder_p2 = parseInt(pgorder_p2) - parseInt(member1);
			$(".pgorder_p2").find("span").html(pgorder_p2)
			pgorder_p1 = parseInt(pgorder_p1) - 1;
			$(".pgorder_p1").find("span").html(pgorder_p1);
		}
	})
})

//切换商品详情
$(function(){
	$(".theme_ul").find("li:eq(0)").css({
		"background-color" : "#FFFFFF",
		"color" : "#E4393C",
		"height" : "34px",
		"margin-top" : "-6px",
		"border-top" : "2px solid #E4393C",
	})
	$("#show0").css("display","block");
	$(".theme_ul").on("click","li",function(){
		$(".show").css("display","none");
		$("#show"+$(this).index()).css("display","block");
		$(".theme_ul").find("li").css({
			"background-color" : "",
			"color" : "",
			"height" : "30px",
			"margin-top" : "",
			"border-top" : "",
		});
		$(this).css({
			"background-color" : "#FFFFFF",
			"color" : "#E4393C",
			"height" : "34px",
			"margin-top" : "-6px",
			"border-top" : "2px solid #E4393C",
		});
	})
})


//注册表转换
$(function(){
	$(".dealer").click(function(){
		$(".focus").find("ul").stop().animate({
			left : "-770px",
		});
		$(".focus").find("ul").find("li:eq(1)").css("display","block");
	})
	$(".user").click(function(){
		$(".focus").find("ul").find("li:eq(1)").css("display","none");
		$(".focus").find("ul").stop().animate({
			left : "",
		});
	})
})


//验证手机号
$(function(){
	$("#phone").focus(function(){
		$("#errorMsg").css({display:"block",color:""}).html("请输入您需要注册的手机号码");
	})
	$("#phone").blur(function(){
		if(IsTel($(this).val())){
			$(this).css("background","url(img/sucess.png) no-repeat 235px center");
			$("#errorMsg").css("display","none");
		}else{
			$(this).css("background","url(img/one6.jpg) no-repeat 235px center");
			$("#errorMsg").css({"display":"block","color":"red"}).html("手机号码格式不正确");
		}
	})
	$("#phone1").blur(function(){
		var html1 = null;
		html1 = '<img src="img/sucess.png"/>';
		if(IsTel($(this).val())){
			$("#spanMobileTel").html(html1);
		}else{
			$("#spanMobileTel").html("手机号码格式不正确");
		}
	})
})
function IsTel(Tel){
        var re = /^0?1[3|4|5|8][0-9]\d{8}$/;
        var retu=Tel.match(re);
        if(retu){
            return true;
        }else{
            return false;
        }
    }
 //验证密码
 $(function(){
 	$("#password").focus(function(){
 		$("#pass").css({display:"block",color:""}).html("6-20位字符，可使用字母，数字或符号的组合");
 	});
 	$("#password").blur(function(){
 		if(/^(\w){6,20}$/.exec($("#password").val())){
 			$("#pass").css("display","none");
 			$(this).css("background","url(img/sucess.png) no-repeat 235px center");
 		}else{
 			$("#pass").html("密码长度只能在6-20位字符之间").css("color","red");
 		}
 	});
 	$("#againpassword").focus(function(){
 		$("#againpass").css({display:"block",color:""}).html("请再次输入密码");
 	})
 	$("#againpassword").blur(function(){
 		if($("#password").val() != $(this).val()){
 			$("#againpass").html("两次输入的密码不一致").css("color","red");
 		}else{
 			$("#againpass").css("display","none");
 			$(this).css("background","url(img/sucess.png) no-repeat 235px center");
 		}
 	})
 	$("#password1").blur(function(){
 		var html1 = null;
		html1 = '<img src="img/sucess.png"/>';
		if(/^(\w){6,20}$/.exec($(this).val())){
			$("#spanpassword").html(html1);
		}else{
			$("#spanpassword").html("密码长度只能在6-20位字符之间");
		}
 	})
 })
 //验证邮箱
 $(function(){
 	var html1 = null;
	html1 = '<img src="img/sucess.png"/>';
 	var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 	$("#email").blur(function(){
 		if(ePattern.exec($(this).val())){
 			$("#spanemail").html(html1);
 		}else{
 			$("#spanemail").html("邮箱格式不正确");
 		}
 	})
 })
 //登陆提示
 $(function(){
 	$("#textUserName").focus(function(){
 		$("#uitip").css("display","block").animate({
 			width : 128,
 			height: 29,
 		},"linear");
 	})
 })
//图片转换透明度
$(function(){
	var timer = null;
	var iNow = 0;
	var aImg = $("#chage_4").find("img");
	setInterval(function(){
		aImg.eq(iNow).animate({
			opacity : 0,
		}).animate({
			display:"none",
		});
		iNow++;
		if(iNow == 4){
			iNow =0;
		}
		aImg.eq(iNow).animate({
			opacity : 1,
		}).animate({
			display:"block",
		});
		
	},4000);
})

/*})*/
