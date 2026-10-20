



document.write('<br>');


if(result<=32){
    document.write('faild');
}else if(result>=33 && result<=40){
    document.write('you have got D ');
}else if(result>=41 && result<=50){
    document.write('you have got C')
}else if(result>=51 && result<=60){
    document.write('you have got B')
}else if(result>=61 && result<=70){
    document.write('you have got A')
}else if(result>=71 && result<=80){
    document.write('you have got A-')
}else if(result>=81 && result<=90){
    document.write('you have got A+')
}else if(result>=91 && result<=100){
    document.write('you have got A+* Mark ')
}else alert('you have input value Is worng!')



function checkResult() {
   
    var resultInput = document.getElementById('marks-input').value;
    var displayBox = document.getElementById('display-result');
    
   
    if (resultInput === "") {
        displayBox.innerHTML = "<span style='color: #e67e22;'>Please enter a number!</span>";
        displayBox.style.backgroundColor = "#fdf2e9";
        return;
    }

    var result = Number(resultInput);
    var message = "";
    var bgColor = "#eef2f3"; 

    
    if (result < 0 || result > 100) {
        message = "<span style='color: #e74c3c;'>Wrong Input! (0-100)</span>";
        bgColor = "#fadbd8";
    } else if (result <= 32) {
        message = "<span style='color: #e74c3c;'>Failed</span>";
        bgColor = "#fadbd8";
    } else if (result >= 33 && result <= 40) {
        message = "You have got D";
    } else if (result >= 41 && result <= 50) {
        message = "You have got C";
    } else if (result >= 51 && result <= 60) {
        message = "You have got B";
    } else if (result >= 61 && result <= 70) {
        message = "You have got A";
    } else if (result >= 71 && result <= 80) {
        message = "<span style='color: #2980b9;'>You have got A-</span>";
        bgColor = "#ebf5fb";
    } else if (result >= 81 && result <= 90) {
        message = "<span style='color: #27ae60;'>You have got A+</span>";
        bgColor = "#e8f8f5";
    } else if (result >= 91 && result <= 100) {
        message = "<span style='color: #27ae60;'>You have got A+* Mark</span>";
        bgColor = "#e8f8f5";
    }

   
    displayBox.innerHTML = message;
    displayBox.style.backgroundColor = bgColor;
}