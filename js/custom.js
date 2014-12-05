$(document).ready(function(){ 
    $("#interviews a").click(function(e){
    	e.preventDefault();
    	$(this).tab('show');
    });
    $("#assessments a").click(function(e){
    	e.preventDefault();
    	$(this).tab('show');
    });
});
