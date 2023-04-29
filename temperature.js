//FUNCTIONS

//Celsius functions
function from_cels(tp,target){
    //For Fahrenheit
    if(target==2){
        let conv_temp = (tp*1.8)+32;
        document.getElementById("result").innerHTML = conv_temp + "F";
    }
    //For Kelvin
    if(target==3){
        let conv_temp = tp+273;
        document.getElementById("result").innerHTML = conv_temp + "K";       
    }
}

//Fahrenheit functions
function from_fah(tp,target){
    //For Kelvin
    if(target==3){
        let conv_temp = (tp-32)*0.55+273;
        document.getElementById("result").innerHTML = conv_temp + "K";
    }
    //For Celsius
    if(target==1){
        let conv_temp = (tp-32)*0.55;
        document.getElementById("result").innerHTML = conv_temp + "C";       
    }
}

//Kelvin functions
function from_kelv(tp,target){
    //For Fahrenheit
    if(target==2){
        let conv_temp = 1.8*(tp-273)+32;
        document.getElementById("result").innerHTML = conv_temp + "F";
    }
    //For Celsius
    if(target==1){
        let conv_temp = tp-273;
        document.getElementById("result").innerHTML = conv_temp + "C";       
    }
}

//Fahrenheit to Celsius
//Fahrenheit to Kelvin

const UNITS = ["","C", "F", "K"];

document.getElementById("convert").onclick = function(){

    let temp = document.getElementById("temp-value").value;
    temp = Number(temp);

    //Checking input
    let input_unit;
    if(document.getElementById("input-cel").checked==true){
        input_unit = 1;
    }
    else if(document.getElementById("input-fah").checked==true){
        input_unit = 2;
    }
    else{
        input_unit = 3;
    }

    //Checking target

    let target_unit;
    if(document.getElementById("target-cel").checked==true){
        target_unit = 1;
    }
    else if(document.getElementById("target-fah").checked==true){
        target_unit = 2;
    }
    else{
        target_unit = 3;
    }

    //Calling corresponding function

    //Same unit to same unit
    if(input_unit==target_unit){
        document.getElementById("result").innerHTML = temp + UNITS[target_unit];
    }

    //Celsius to target
    if(input_unit==1){
        from_cels(temp,target_unit);
    }
    //Fahrenheit to target
    else if(input_unit==2){
        from_fah(temp,target_unit);
    }
    //Kelvin to target
    else if(input_unit==3){
        from_kelv(temp,target_unit);       
    }
    else{
        document.getElementById("not-checked").innerHTML = "One or more fields missing.";
    }
}