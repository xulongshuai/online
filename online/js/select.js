alert("编译成功");

require.config({
	paths:{
		jquery:"jquery-1.11.1",
		shopping : "shopping",
	}
})

require(['jquery','shopping'],function(){
		//通过ajax加载数据
$(function(){
	$.ajax({
		url:"data/select.json",
		success:function(data){
			var html = "";
			var html1 = "";
			var html2 = "";
			var html2_2 = "";
			var html2_3 = "";
			var html4 = "";
			var html5 = "";
			var html6 = "";
		/*	var num = 0;
			for(var i in data){
				var html7 = "";
				for(var j in data[i]){
					html7 += '<li class="occasion_preli"><div><a title="'+ data[i][j].title +'" href="#" target="_blank"><img alt="'+ data[i][j].title +'" src="'+ data[i][j].src +'"></a></div><p><a title="'+ data[i][j].title +'" href="#" target="_blank">'+ data[i][j].title +'</a></p><p>零售价:<b>'+ data[i][j].retail +'</b></p><p>会员价:<em>'+ data[i][j].member +'</em></p></li>';
				}
				alert($(".occasion_lf").siblings().eq(0).attr("id"));
				$(".occasion_lf").siblings().eq(0).find("ul").html(html7);
				break;
			}*/
			for(var i in data.romantic){
				html +='<li class="occasion_preli"><div><a title="'+ data.romantic[i].title +'" href="#" target="_blank"><img alt="'+ data.romantic[i].title +'" src="'+ data.romantic[i].src +'"></a></div><p><a title="'+ data.romantic[i].title +'" href="#" target="_blank">'+ data.romantic[i].title +'</a></p><p>零售价:<b>'+ data.romantic[i].retail +'</b></p><p>会员价:<em>'+ data.romantic[i].member +'</em></p></li>';
			}
			$("#occasion_1 ul").html(html);
			for(var i in data.marry){
				html1 +='<li class="occasion_preli"><div><a title="'+ data.marry[i].title +'" href="#" target="_blank"><img alt="'+ data.marry[i].title +'" src="'+ data.marry[i].src +'"></a></div><p><a title="'+ data.marry[i].title +'" href="#" target="_blank">'+ data.marry[i].title +'</a></p><p>零售价:<b>'+ data.marry[i].retail +'</b></p><p>会员价:<em>'+ data.marry[i].member +'</em></p></li>';
			}
			$("#occasion_2 ul").html(html1);
			for(var i in data.business){
				html2 +='<li class="occasion_preli"><div><a title="'+ data.business[i].title +'" href="#" target="_blank"><img alt="'+ data.business[i].title +'" src="'+ data.business[i].src +'"></a></div><p><a title="'+ data.business[i].title +'" href="#" target="_blank">'+ data.business[i].title +'</a></p><p>零售价:<b>'+ data.business[i].retail +'</b></p><p>会员价:<em>'+ data.business[i].member +'</em></p></li>';
			}
			$("#occasion_3 .occasion_3_1").html(html2);
			for(var i in data.business2){
				html2_2 +='<li class="occasion_preli"><div><a title="'+ data.business2[i].title +'" href="#" target="_blank"><img alt="'+ data.business2[i].title +'" src="'+ data.business2[i].src +'"></a></div><p><a title="'+ data.business2[i].title +'" href="#" target="_blank">'+ data.business2[i].title +'</a></p><p>零售价:<b>'+ data.business2[i].retail +'</b></p><p>会员价:<em>'+ data.business2[i].member +'</em></p></li>';
			}
			$("#occasion_3 .occasion_3_2").html(html2_2);
			for(var i in data.business3){
				html2_3 +='<li class="occasion_preli"><div><a title="'+ data.business3[i].title +'" href="#" target="_blank"><img alt="'+ data.business3[i].title +'" src="'+ data.business3[i].src +'"></a></div><p><a title="'+ data.business3[i].title +'" href="#" target="_blank">'+ data.business3[i].title +'</a></p><p>零售价:<b>'+ data.business3[i].retail +'</b></p><p>会员价:<em>'+ data.business3[i].member +'</em></p></li>';
			}
			$("#occasion_3 .occasion_3_3").html(html2_3);
			for(var i in data.party){
				html4 +='<li class="occasion_preli"><div><a title="'+ data.party[i].title +'" href="#" target="_blank"><img alt="'+ data.party[i].title +'" src="'+ data.party[i].src +'"></a></div><p><a title="'+ data.party[i].title +'" href="#" target="_blank">'+ data.party[i].title +'</a></p><p>零售价:<b>'+ data.party[i].retail +'</b></p><p>会员价:<em>'+ data.party[i].member +'</em></p></li>';
			}
			$("#occasion_4 ul").html(html4);
			for(var i in data.family){
				html5 +='<li class="occasion_preli"><div><a title="'+ data.family[i].title +'" href="#" target="_blank"><img alt="'+ data.family[i].title +'" src="'+ data.family[i].src +'"></a></div><p><a title="'+ data.family[i].title +'" href="#" target="_blank">'+ data.family[i].title +'</a></p><p>零售价:<b>'+ data.family[i].retail +'</b></p><p>会员价:<em>'+ data.family[i].member +'</em></p></li>';
			}
			$("#occasion_5 ul").html(html5);
			for(var i in data.birthday){
				html6 +='<li class="occasion_preli"><div><a title="'+ data.birthday[i].title +'" href="#" target="_blank"><img alt="'+ data.birthday[i].title +'" src="'+ data.birthday[i].src +'"></a></div><p><a title="'+ data.birthday[i].title +'" href="#" target="_blank">'+ data.birthday[i].title +'</a></p><p>零售价:<b>'+ data.birthday[i].retail +'</b></p><p>会员价:<em>'+ data.birthday[i].member +'</em></p></li>';
			}
			$("#occasion_6 ul").html(html6);
		}
	})
})

//切换主场合
$(function(){
	$(".occasion_type").on("click","li",function(){
		$(".occasion_lf").siblings().css("display","none");
		$(".occasion_lf").siblings().eq($(this).index()).css("display","block");
	})
	$(".mut").on("click","span",function(){
		$("span").css("border","1px solid #ccc");
		$(this).css("border","none");
		$("#occasion_3 ul").css("display","none");
		$("#occasion_3 ul").eq($(this).index()).css("display","block");
		$(window).scrollTop(0);
	})
})

})
