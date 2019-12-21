$('.close').on('click', function() {
	$('.dlzc').hide();
	$('.zc').hide();
});

$('.login').on('click', function() {
	$('.dlzc').show(100);
});

$('.zhuce').on('click', function() {
	$('.dlzc').hide();
	$('.zc').show(100);
});

$('.black').on('click', function() {
	$('.zc').hide();
	$('.dlzc').show(100);
});

//回到顶部
$('.top').on('click',function(){
    $('html,body').animate({
        scrollTop:0
    });
});




