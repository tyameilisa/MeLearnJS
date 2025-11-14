<!DOCTYPE HTML>
<html>
    <body>
        <h1 style="text-align: center;">
            LESSON 2 : <br> Doing a more complicated math and fix my table
        </h1>
        <h2 style="text-align: center;">
            Still not adding any color today (thumbs up)
            <br> I think I need to learn to add emojis to better express myself
        </h2>
    <p id="runText"> </p>
        <script>
            function myFunction (a,b,d){
                return a*b+d; 
            }
            let result = myFunction(7,14,21);
            let result2 = myFunction(8,16,24);
            let result3 = myFunction(9,18,27);
            document.getElementById("run1").innerHTML = "a times b plus d is <br>" + result;
            document.getElementById("run1").innerHTML += "<br>" + result2
            document.getElementById("run2").innerHTML -= "<br>" + result3
        </script>
        <h2> okay, here's the BETTER table </h2>
        <script>
            document.write("<br>how much is a times b plus d?");
        </script>
        <table id="resultTable" border ="1">
            <tr>
                <th>Run Number</th>
                <th>Variable a</th>
                <th>Variable b</th>
                <th>Variable d</th>
                <th>a x b + d</th>
            </tr>
            <tr>
                <td>Run 1</td>
                <td>7</td>
                <td>14</td>
                <td>21</td>
                <td id="run1"></td>
            </tr>
            <tr>
                <td>Run 2</td>
                <td>8</td>
                <td>16</td>
                <td>24</td>
                <td id="run2"></td>
            </tr>
            <tr>
                <td>Run 3</td>
                <td>9</td>
                <td>18</td>
                <td>27</td>
                <td id="run3"></td>
            </tr>
        </table>

        <script>
            document.getElementById("run1").innerHTML = result;
            document.getElementById("run2").innerHTML = result2;
            document.getElementById("run3").innerHTML = result3;
        </script>

        <h2>
            more complicated math
        </h2>
        <p id="runText">   </p>
            <script>
                function myFunction (a,b.d){
                    return (a)^2 + (d/b);
                }
                let result4 = myFunction(2,4,6);
                let result5 = myFunction(3,6,9);
                let result6 = myFunction(4,8,12);
                document.getElementById("run4").innerHTML = "a square plus d devided by b is <br>" + result4;
                document.getElementById("run5").innerHTML = "<br>" + result5;
                document.getElementById("run6").innerHTML = "<br>" + result6;
            </script>
            <h2> Table II </h2>
            <script>
                document.write("How much is a squared plus d divided by b?");            
            </script>
            <table id=""resultTable" border = "1">
            <tr>
                <th> Run Number</th>
                <th> Variable a</th>
                <th> variable b</th>
                <th> Variable d</th>
                <th> (a)^2 + (d/b) </th>
            </tr>
            <tr>
                <td>Run 4</td>
                <td>2</td>
                <td>4</td>
                <td>6</td>
                <td id="run4"></td>
            </tr>
            <tr>
                <td>Run 5</td>
                <td>3</td>
                <td>6</td>
                <td>9</td>
                <td id="run5"></td>
            </tr>
            <tr>
                <td>Run 6</td>
                <td>4</td>
                <td>8</td>
                <td>12</td>
                <td id="run6"></td>
            </tr>
            </table>

            <script>
                document.getElementById("run4").innerHTML = result4
                document.getElementById("run5").innerHTML = result5
                document.getElementById("run6").innerHTML = result6
            </script>

            <script>
                document.write("<br>can i automated all this? stay tuned for the next lesson!")
            </script>

    </body>
</html>