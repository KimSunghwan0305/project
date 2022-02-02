
$(document).ready(function(){
	
	let result = '<c:out value="${result}"/>';
	
	checkAlert(result);
	
	function checkAlert(result){
		
		if(result === ''){
			return;
		}
		
		if(result === "enrol success"){
			alert("등록이 완료되었습니다.");
		}
		
        if(result === "modify success"){
            alert("수정이 완료되었습니다.");
        }
        
        if(result === "delete success"){
            alert("삭제가 완료되었습니다.");
        }
		
	}	
	
});

let moveForm = $("#moveForm");

$(".move").on("click", function(e){
    e.preventDefault();
    
    moveForm.append("<input type='hidden' name='bno' value='"+ $(this).attr("href")+ "'>");
    moveForm.attr("action", "/board/get");
    moveForm.submit();
});

$(".pageInfo a").on("click", function(e){
	 
    e.preventDefault();
    
//    alert(${pageMaker.cri.pageNum });
//    alert($("input[name='pageNum']").val());
    
    moveForm.find("input[name='pageNum']").val($(this).attr("href"));
//    alert($("input[name='pageNum']").val());
    moveForm.attr("action", "/board/list");
    moveForm.submit();
    
});

$(".search_area button").on("click", function(){
	searchCheck();
});
	
function searchCheck(){
    let type = $(".search_area select").val();
    let keyword = $(".search_area input[name='keyword']").val();
    
    if(!type){
        alert("검색 종류를 선택하세요.");
        return false;
    }
    
    if(!keyword){
        alert("키워드를 입력하세요.");
        return false;
    }        
    
    moveForm.find("input[name='type']").val(type);
    moveForm.find("input[name='keyword']").val(keyword);
    moveForm.find("input[name='pageNum']").val(1);
    moveForm.submit();
}
/*
$(".search_area button").on("click", function(e){
    e.preventDefault();
    
    let type = $(".search_area select").val();
    let keyword = $(".search_area input[name='keyword']").val();
    
    if(!type){
        alert("검색 종류를 선택하세요.");
        return false;
    }
    
    if(!keyword){
        alert("키워드를 입력하세요.");
        return false;
    }        
    
    moveForm.find("input[name='type']").val(type);
    moveForm.find("input[name='keyword']").val(keyword);
    moveForm.find("input[name='pageNum']").val(1);
    moveForm.submit();
});
*/