function calculateBMI() {
   let weight = document.getElementById("weight").value;
   let height = document.getElementById("height").value / 100;
 
   
   if (weight === "" || height === "") {
     document.getElementById("result").innerHTML = "Please enter the required values.";
    } else {
      let bmi = weight / (height * height);
      document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2); 
    }
  }

  
  
  
  function clearInput() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
  }
  
  
    
