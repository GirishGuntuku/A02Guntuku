function myFunction() {
  
    var z = document.getElementById("txt2").value;
    var y = document.getElementById("txt1").value;
    var x =Math.sqrt(+z)+Math.sqrt(+y);
    document.getElementById("demo").innerHTML = x;
  }