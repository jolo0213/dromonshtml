$(document).ready(function(){ 
    $("#interviews a").click(function(e){
    	e.preventDefault();
    	$(this).tab('show');
    });
    $("#ongoing a").click(function(e){
    	e.preventDefault();
    	$(this).tab('show');
    });
});
