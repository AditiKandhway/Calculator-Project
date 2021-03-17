var buttons=document.getElementsByClassName("button");

var display1 = document.getElementById('screen');
var tempdisplay = document.getElementById('display');
var operand1=0;
var operand2=null;
var operator;
// display1.innerText=null;
var cnt=0;
var arr = [];
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        console.log(value);
        var text = display1.textContent.trim();
        // console.log(display);
        if(value=='C')
        {
            display1.innerText="";
            tempdisplay.textContent="";
            arr=[];
        }
        else if(value =='+')
        {
            operator='+';
            operand1=parseFloat(display1.textContent);
             display1.textContent="";
             tempdisplay.textContent="";
             tempdisplay.textContent+=operand1;
             tempdisplay.textContent+=operator;
             arr=[];
        }
        else if(value=='-')
        {
            operator='-';
            operand1=parseFloat(display1.textContent);
            display1.textContent="";
            tempdisplay.textContent="";
            tempdisplay.textContent+=operand1;
            tempdisplay.textContent+=operator;
            arr=[];
        }
        else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display1.textContent = operand1;
            tempdisplay.textContent=operand1;
            arr=[];
        }
        else if(value=='/')
        {
            operator='/';
            operand1=parseFloat(display1.textContent);
            display1.textContent="";
            tempdisplay.textContent="";
            tempdisplay.textContent+=operand1;
            tempdisplay.textContent+=operator;
            arr=[];
        }
        else if(value=='*')
        {
            operator='*';
            operand1=parseFloat(display1.textContent);
            display1.textContent="";
            tempdisplay.textContent="";
            tempdisplay.textContent+=operand1;
            tempdisplay.textContent+=operator;
            arr=[];
        }
        else if(value=='%')
        {
            operator='%';
            operand1=parseFloat(display1.textContent);
            operand1=operand1/100;
            display1.textContent=operand1;
            tempdisplay.textContent=operand1;
        }
        else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display1.textContent = text + '.';
            }
        }
        else if(value == '=')
        {
            operand2=parseFloat(display1.textContent);
            tempdisplay.textContent+=operand2;
            var result=eval(operand1+" "+operator+" "+operand2);
            if(result)
            {
                 display1.textContent=result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
            else{
                result=0;
                display1.textContent=result;
                operand1=result;
                operand2 = null;
                operator = null;
            }
        }
        else if(value=='CE')
        {
            display1.textContent="";
            for(var i=0;i<arr.length-1;i++)
            {
                console.log(arr[i]);
            display1.textContent+=arr[i];
            }
            arr.pop();
        }
        else{
            if(text.length==20 || text.length==40 || text.length==60 || text.length==80)
            {
                display1.textContent+='\n';
            }
             display1.textContent+=value;
             arr.push(value);
        }
    });
}

document.addEventListener('keydown',function(event){
    console.log(event.keyCode);
    var k=event.keyCode;
     if(k==107)
     {
        operator='+';
        operand1=parseFloat(display1.textContent);
        display1.textContent="";
        tempdisplay.textContent="";
        tempdisplay.textContent+=operand1;
        tempdisplay.textContent+=operator;
        arr=[];
     }
     else if(k==32)
     {
        display1.textContent="";
        tempdisplay.textContent="";
        arr=[];
     }
     else if(k==109)
     {
        operator='-';
        operand1=parseFloat(display1.textContent);
        display1.textContent="";
        tempdisplay.textContent="";
        tempdisplay.textContent+=operand1;
        tempdisplay.textContent+=operator;
        arr=[];
     }
     else if(k==106)
     {
        operator='*';
        operand1=parseFloat(display1.textContent);
        display1.textContent="";
        tempdisplay.textContent="";
        tempdisplay.textContent+=operand1;
        tempdisplay.textContent+=operator;
        arr=[];
     }
     else if(k==111)
     {
       operator='/';
       operand1=parseFloat(display1.textContent);
       display1.textContent="";
       tempdisplay.textContent="";
       tempdisplay.textContent+=operand1;
       tempdisplay.textContent+=operator;
       arr=[];
     }
      else if(k==13)
      {
        operand2=parseFloat(display1.textContent);
        tempdisplay.textContent+=operand2;
        var result=eval(operand1+" "+operator+" "+operand2);
        if(result)
        {
            display1.textContent=result;
            operand1 = result;
            operand2 = null;
            operator = null;
        }
        else{
            result=0;
            display1.textContent=result;
            operand1=result;
            operand2 = null;
            operator = null;
        }
      }
      else if(k==110)
      {
            var text = display1.textContent.trim();
            if (text.length && !text.includes('.')) {
                display1.textContent = text + '.';
            }
     }
     else if(k==8)
     {
        display1.textContent="";
        for(var i=0;i<arr.length-1;i++)
        {
            console.log(arr[i]);
        display1.textContent+=arr[i];
        }
        arr.pop();
     }
     else{
        if(k==97)
        {
            value=1;
        }
        else if(k==98)
        {
            value=2;
        }
        else if(k==99)
        {
            value=3;
        }
        else if(k==100)
        {
            value=4;
        }
        else if(k==101)
        {
            value=5;
        }
        else if(k==102)
        {
            value=6;
        }
        else if(k==103)
        {
            value=7;
        }
        else if(k==104)
        {
            value=8;
        }
        else if(k==105)
        {
            value=9;
        }
        else if(k==96)
        {
            value=0;
        }
        else{
            value="";
        }
        var text = display1.textContent.trim();
        if(text.length==20 || text.length==40 || text.length==60 || text.length==80)
        {
           display1.textContent+='\n';
        }
        display1.textContent+=value;
        arr.push(value);
     }

})
