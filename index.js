
// taskInput.style.display = "block";
const show=()=>{
var x = document.getElementById("taskinput").style.display="block";
var y = document.getElementById("blur").style.filter = "blur(3px)";
  
}
const cancel =()=>
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
    //    const input = document.getElementById("inputfield");
    //     const card = document.createElement("div");
    //     const container = document.getElementById("container")
    //     card.setAttribute("id","newcard");
    //     card.style.width = "150px";
    //     card.style.height = "200px";
    //     card.style.background = "white";
    //     container.appendChild(card);
    
   
       
       
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
      
        card +=`<div class="card" id="${element.id}">
        <p id="mainText">${element.heading}</p>
        <hr>
        <div id="text"></div>
        <button onclick="subtask(${index})" class="addbtn"><i class="fas fa-plus-circle"></i></button>
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
      
        card +=`<div class="card" id="${element.id}">
        <p id="mainText">${element.heading}</p>
        <hr>
        <div class="text"></div>
        <button onclick="subtask(this.id)" id= "${element.id}" class="addbtn"><i class="fas fa-plus-circle"></i></button>
        <button class="delbtn" onclick="dele(${index})"><i class="fas fa-trash-alt"></i></button>
    </div>`;
   
    
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

    function subtask (id)
    {
        let add2 = document.getElementById("taskinput2");
        add2.style.display = "block";
        y = document.getElementById("blur").style.filter = "blur(0px)";
    }
    var cardChild;

    function addList()
    {
        console.log();
        var inputfield2 = document.getElementById("inputfield2").value;
        console.log(inputfield2)
        array.forEach(function(element, index){
            
            var     tempObj= {
                    task : inputfield2
                };
                
                array[index].list.push(tempObj); 
                console.log(this.array);
            
            
        
    
        // const index = document.getElementById("index"
        array[index].list.forEach(function (element, index)
        {
          cardChild += `
            <li id="${index}" style="color:red">${element.task}</li>
            <li >
            <button id="done" onclick="done(${index})">Mark done</button>
            </li>`
        
        })
       let mini= document.getElementById("text");
       mini.innerHTML=cardChild;
        console.log(mini);
        let add3=document.getElementById("taskinput2");
        add3.style.display="none";
        
        

    });
}


    



