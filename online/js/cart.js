/*alert("编译陈宫");

require.config({
	paths:{
		shopping : "shopping",
	}
})

require(['shopping'],function(shopping){*/
	$(function(){

		check();
		var html = "";
		if($.cookie("goods")){

			var arr1 = eval($.cookie("goods"));
			html +='<ul class="goods_list"><li class="shopname"><img src="'+ arr1[0].src +'"/><span class="goods_name">'+ arr1[0].title +'</span></li><li class="shopsame">￥'+ arr1[0].price +'</li><li class="shopsame"></li><li class="shopsame"></li><li class="shopsame"><p id="subtraction"><img src="img/cart_table_btn1.gif"></p><input type="text" name="num" value="'+ arr1[0].count +'" id="num"/><p id="add"><img src="img/cart_table_btn2.gif"></p></li><li class="shopsame">瓶</li><li class="shopsame"><button>删除</button></li></ul>';
			$("#wrapGood").html(html);
			check();
			function numadd(num){
				$("#num").val(num);
				arr1[0].count = parseInt($("#num").val()) ;
				var cookieStrs = JSON.stringify(arr1);
				$.cookie("goods",cookieStrs,{expires:7});
				var arr2 = eval($.cookie("goods"));
				$("#amount span").html(arr2[0].count);
				var totpr = parseInt(arr2[0].price) * parseInt(arr2[0].count);
				$("#total span").html(totpr);
			}
			$("#subtraction").click(function(){
				if(parseInt($("#num").val()) > 1){
					var num = parseInt($("#num").val())-1;
					numadd(num);
				}
			})
			$("#add").click(function(){
					var num = parseInt($("#num").val()) + 1;
					numadd(num);
			})
			var arr2 = eval($.cookie("goods"));
			$("#amount span").html(arr2[0].count);
			var totpr = parseInt(arr2[0].price) * parseInt(arr2[0].count)
			$("#total span").html(totpr);
			$("#wrapGood").on("click","button",function(){
				$.cookie("goods",null);
				$("#wrapGood").html("");
				check();
			})
		}
})
function check(){
	if($("#wrapGood").find("ul").size() == 0){
		$("#c1").css("display","block");
		$("#c2").css("display","none");
	}else{
		$("#c2").css("display","block");
		$("#c1").css("display","none")
	}
}


/*})*/

	