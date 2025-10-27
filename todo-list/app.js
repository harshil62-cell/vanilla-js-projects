const form=document.querySelector('form');
const allTask=document.querySelector('#allTask');
const input=document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=input.value.trim();
    if(text==""){
        return;
    }
    const parent=document.createElement('div');
    parent.style.marginTop='20px';
    const task=document.createElement('span');
    task.textContent=text;
    task.style.marginRight="20px";

    const deletebtn=document.createElement('button');
    deletebtn.textContent="Delete";
    deletebtn.style.width="60px";

    const donebtn=document.createElement('button');
    donebtn.textContent="Done";
    donebtn.style.marginRight="10px";
    donebtn.style.width="60px";

    parent.append(task,donebtn,deletebtn);
    allTask.append(parent);

    deletebtn.addEventListener('click',()=>{
        parent.remove();
    });

    donebtn.addEventListener('click',()=>{
        task.style.textDecoration='line-through';
        task.style.color='gray';
    });

    form.reset();
});