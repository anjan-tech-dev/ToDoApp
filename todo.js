let todoList=[];


for (let i = 0; i < localStorage.length; i++) {
  todoList[i]={item:localStorage.key(i),dueDate:localStorage.getItem(localStorage.key(i))}
};

displayItems();
function addTodo(){
  let inputTodo=document.querySelector("#todo-input");
  let inputDate=document.querySelector("#todo-date");
  todoList.push({item:inputTodo.value,dueDate:inputDate.value,});
  console.log(typeof inputTodo.value);
  localStorage.setItem(`${inputTodo.value}`,`${inputDate.value}`)
  inputDate.value='';
  inputTodo.value='';
  displayItems();
}
function displayItems(){
  
  let container=document.querySelector("#todo-container");
  container.innerHTML='';
  for(let i=0;i<todoList.length;i++)
  {
    container.innerHTML+=`<span>${todoList[i].item}</span><span>${todoList[i].dueDate}</span><button class="btn-delete" onclick="localStorage.removeItem('${todoList[i].item}');todoList.splice(${i},1);displayItems();">Delete</button>
  `}
}