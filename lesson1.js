<!DOCTYPE html>
<html>
  <body>
    <h1 style="text-align: center;"> 
        LESSON 1 : <br> Doing math, make script, and creating table with javascript!
    </h1>
    <h2 style="text-align: center;">
        I think i know how this works, lol
    </h2>

      <p id= "demo"> </p> 

      <script>
        function myFunction(a,b){
          return a*b;
        }

        let result = myFunction(450,62);
        document.getElementById("demo").innerHTML = "the product of 450 times 62 is " + result;
      </script>

      <p id="demo2"> </p>

      <script>
       document.write("<br>wish it works this time");
      </script>

      <p id= "demo3"></p>

      <script>
        function myFunction(c,d){
            return c/d;
        }

        let result3=myFunction (10,2);
        document.getElementById("demo3").innerHTML +="<br>ten devided by two is " + result3;
      </script>

      <h2> lets make a table</h2>

      <table id=""resultTable" border="1">
        <tr>
            <th>demo</th>
            <th>result</th>
        </tr>
        <tr>
            <td>demo1</td>
            <td id="r1"></td>
        </tr>
        <tr>
            <td>demo2</td>
            <td id = "r2"></td>
        </tr>
        <tr>
            <td>demo3</td>
            <td id="r3"></td>
        </tr>
      </table>

      <script>
        document.getElementById("r1").innerHTML = result;
        document.getElementById("r2").innerHTML = "(null)";
        document.getElementById("r3").innerHTML = result3;
      </script>

      <script>
        document.write("<br> can u see the table?");
        document.write("<br> yeah I think that's enough for today <br> See u next lesson!");
      </script>
      
  </body>
</html>
