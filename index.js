
// taskInput.style.display = "block";
function show() {
var x = document.getElementById("taskinput").style.display="block";
var y = document.getElementById("blur").style.filter = "blur(3px)";
  
}
function cancel ()
    {
     let x = document.getElementById("taskinput").style.display="none"; 
    let  y = document.getElementById("blur").style.filter = "blur(0px)";
     let x1 = document.getElementById("taskinput2").style.display="none"; 
    let y1 = document.getElementById("blur").style.filter = "blur(0px)";
    }


    var array = [];
    // var   card=""
    var i=-1
    var obj={};
    var tempObj = {};
    var list =[];


  let add =()=>
    {
   
       
       
       let inputField = document.getElementById("inputfield").value;
       if(inputField!="")
       {
           obj = {
                id : Date.now(),
               "heading" : inputField,
               list : []
               
            //    id : index
            
       
           }
           array.push(obj); 
       }
       console.log(array);
       var   card="";
       ;
    length =array.length-1
     array.forEach(function(element,index ){     
      
        card +=`<div class="card" id="${array[index].id}">
        <p id="mainText">${element.heading}</p>
        <hr>
        <div id="text"></div>
        <button onclick="subtask(${array[index].id})" class="addbtn"><i class="fas fa-plus-circle"></i></button>
        <button class="delbtn" onclick="dele(${index})"><i class="fas fa-trash-alt"></i></button>
    </div>`;
    
});

    container.innerHTML = card; 
    // console.log(card) 

   
 
    x = document.getElementById("taskinput").style.display="none"; 
    y = document.getElementById("blur").style.filter = "blur(0px)";
    
    
    
    }
    // inputField = document.getElementById("inputfield").value;
    // inputField="zxvnVJB";
    if(array.length == 0)
    {
        container.innerHTML ="No items to show! click on Add to add list";
        container.style.color = "white";
        container.style.fontSize="40px";

    }
    function dele(index)
    {
        
        console.log(index)
        
     array.splice(index,1);
     var card="";
    
     
     array.forEach(function(element, index){     
      
        card +=`<div class="card" >
        <p id="mainText">${element.heading}</p>
        <hr>
        <div class="text">
        </div>
        <button onclick="subtask(${array[index].id})" class="addbtn"><i class="fas fa-plus-circle"></i></button>
        <button class="delbtn" onclick="dele(${index})"><i class="fas fa-trash-alt"></i></button>
    </div>`;
   
    console.log(element.id)
});


container.innerHTML = card; 
if(array.length == 0)
{
    container.innerHTML ="No items to show! click on Add to add list";
    container.style.color = "white";
    container.style.fontSize="40px";

}
     
     
     console.log(array)
    }

    function subtask (sub)
    {
        let add2 = document.getElementById("taskinput2");
        add2.style.display = "block";
        y = document.getElementById("blur").style.filter = "blur(0px)";
        console.log(sub);
        addList(sub);
        display(sub);

    }
    var cardChild;

    function addList(sub)
    {
        console.log(sub);
        var inputfield2 = document.getElementById("inputfield2").value;
        
        array.forEach(function(element, index, sub){
            if (array[index].id==sub){
            var     tempObj= {
                    task : inputfield2
                };
                
                array[index].list.push(tempObj); 
                console.log(array);
             
            }
            
            
        
    
        // const index = document.getElementById("index"
        // array[index].list.forEach(function (element, index)
        // {
          
        
        // })
       
        
        
        

    });
    
    
}
let add3=document.getElementById("taskinput2");
        add3.style.display="none";
       function  display(sub)
       {
           console.log(sub)
           cardChild="";
        array.forEach(function(element, index, sub)
        { 
            console.log(array[index].id)
            if (array[index].id==sub)
        
            cardChild += `
        <li id="${index}" style="color:red">${array[index].list.task}</li>
        <li >
        <button id="done" onclick="done(${index})">Mark done</button>
        </li>`

          })
          let mini= document.getElementById("text");
       mini.innerHTML=cardChild;
        console.log(cardChild);
        }
        


    



