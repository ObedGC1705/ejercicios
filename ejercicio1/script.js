//arreglo para almacenar las tareas
let tasks=[];

//función que agrega una tarea a la lista
function addtask(){
    let tasktext=document.getElementById("taskinput").value;
    if(tasktext==="")return;
    tasks.push({text:tasktext, completed:false});
    document.getElementById("taskinput").value="";
    rendertask();
}

//función que cambia el estado de una tarea a completada
function toggletask(index){
    tasks[index].completed=!tasks[index].completed;
    rendertask();
}

//función que elimina una tarea de la lista
function deletetask(index){
    tasks.splice(index, 1);
    rendertask();
}

//función que edita el texto de una tarea de la lista
function edittask(index){
    let newtext=prompt("Editar tarea:",tasks[index].text);
    if(newtext!==null && newtext.trim() !==""){
        tasks[index].text=newtext;
        rendertask();
    }
}

//función que renderiza todas las tareas de la lista
function rendertask(){
    let tasklist=document.getElementById("tasklist");
    tasklist.innerHTML="";
    let complete=0;
    let incomplete=0;
    tasks.forEach((task,index)=>{
        let li=document.createElement("li");
        li.className="task";
        li.innerHTML=`
        <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggletask(${index})">
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
        <button onclick="deletetask(${index})">Eliminar</button>
        <button onclick="edittask(${index})">Editar</button>
        `;
        tasklist.appendChild(li);
        task.completed ? complete++ : incomplete++;
    });
    document.getElementById("complete").innerText=complete;
    document.getElementById("incomplete").innerText=incomplete;

}