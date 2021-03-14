var buttons=document.getElementsByClassName("button");

var display1 = document.getElementById('screen');
var operand1=0;
var operand2=null;
var operand3=null;
var operator;
// display1.innerText=null;
var cnt=0;
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        console.log(value);
        // console.log(display);
        if(value=='C')
        {
            display1.innerText=null;
            cnt=0;
        }
        else if(value =='+')
        {
            operator='+';
            operand1=parseFloat(display1.textContent);
            display1.innerText=null;
        }
        else if(value=='-')
        {
            operator='-';
            operand1=parseFloat(display1.textContent);
            display1.innerText=null;
        }
        else if(value=='/')
        {
            operator='/';
            operand1=parseFloat(display1.textContent);
            display1.innerText=null;
        }
        else if(value=='*')
        {
            operator='*';
            operand1=parseFloat(display1.textContent);
            display1.innerText=null;
        }
        else if(value=='%')
        {
            operator='%';
            operand1=parseFloat(display1.textContent);
            display1.innerText=null;
        }
        else if(value =='=')
        {
            operand2=parseFloat(display1.textContent);
             display1.innerText=null;
            display1.innerText=eval(operand1+" "+operator+" "+operand2);
        }
        else{
            if(cnt==0)
            {
                display1.innerText=null;
            }
             display1.innerText+=value;
             cnt++;
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
        display1.innerText=null;
     }
     else if(k==32)
     {
         display1.innerText=null;
     }
     else if(k==109)
     {
        operator='-';
        operand1=parseFloat(display1.textContent);
        display1.innerText=null;
     }
      else if(k==13)
      {
        operand2=parseFloat(display1.textContent);
        display1.innerText=null;
       display1.innerText=eval(operand1+" "+operator+" "+operand2);
      }
     else{
        if(cnt==0)
        {
            display1.innerText=null;
        }
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
         display1.innerText+=value;
         cnt++;
     }

})
