// 刷新弹出框
$(function(){
	$(".pop").hide();
	$("#freshClick").click(function(){
		$("#fresh").show();
	})	

	// 关闭当前弹出框
	$(".pop .close").click(function(){
		$(this).parents(".pop").hide();
	})

	$("#shenbaoClick").click(function(){
		$("#shenbao").show();
	})

	$("#shenbaoConfim").click(function(){
		$(this).parents(".pop").hide();
		$("#confimYes").show();
	})

	$("#zuofeiClick").click(function(){
		$("#zuofei").show();
	})

	// 纳税额减征额收起展开
	$(".fold").parents(".name").siblings(".list-tianbiao").hide();
	$(".fold").click(function(){
		if($(this).text()=="+"){
			$(this).parents(".name").siblings(".list-tianbiao").show();
			$(this).text("-");
		}else{
			$(this).parents(".name").siblings(".list-tianbiao").hide();
			$(this).text("+");
		}
	})
	
})
