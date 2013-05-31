
$(document).ready(function(){
	$("#alist > li").find("img").click(function(){
		var alist = $(this).closest(".name");
		var answer = alist.data("alist");
		var name = $('<p class="name">'+answer+'</p>');
		alist.append(name);
	});
});

// why don't they have validation for javascript? D: 