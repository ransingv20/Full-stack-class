                

function show(){
    var ele1 = document.getElementsByName('que1');
    var ele2 = document.getElementsByName('que2'); 
    var ele3 = document.getElementsByName('que3');
    var ele4 = document.getElementsByName('que4');
    var ele5 = document.getElementsByName('que5');

    var ans1="A";  
    var ans2="B"; 
    var ans3="A"; 
    var ans4="C"; 
    var ans5="A";  

    var s1,s2,s3,s4,s5,i;

            for(i = 0; i < ele1.length; i++) { 
                if(ele1[i].checked) {
                    s1=ele1[i].value;
                    }
            } 

            for(i = 0; i < ele2.length; i++) { 
                if(ele2[i].checked) {
                    s2=ele2[i].value;
                    }
            } 

            for(i = 0; i < ele3.length; i++) { 
                if(ele3[i].checked) {
                    s3=ele3[i].value;
                    }
            } 

            for(i = 0; i < ele4.length; i++) { 
                if(ele4[i].checked) {
                    s4=ele4[i].value;
                    }
            } 

            for(i = 0; i < ele5.length; i++) { 
                if(ele5[i].checked) {
                    s5=ele5[i].value;
                    }
            } 

            if(ans1===s1 && ans2===s2 && ans3===s3 && ans4===s4 
                && ans5===s5) 
                {
                    alert("Congratulations......All answer are correct......!!");

                }
            
            
            
            else
            alert("Better Luck For Next Time......");

}




