//your code here

var todovalue= document.getelementById("newTodoInput");
var btn=document.getelementById("addTodoBtn");
var btn=document.getelementById("todoList");

function addTodo() {
	if(todoValue.value){
		var li=document.createElement('li');
		li.textContent=todoValue.value;
		ol.appenChild(li);
		todoValue.value="";
	}
}
btn.addEventListener('click',addTodo);
