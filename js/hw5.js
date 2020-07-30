function generateTable() {

      document.getElementById('div1').innerHTML = "";

      var h1 = document.getElementById("hBound1").value;
      var h2 = document.getElementById("hBound2").value;
      var v1 = document.getElementById("vBound1").value;
      var v2 = document.getElementById("vBound2").value;

      if (!h1 || !h2 || !v1 || !v2) {
          document.getElementById("validation-result").style.color = "red";
          document.getElementById("validation-result").textContent = "Empty field(s).";
          return;
      } else if (!Number.isInteger(+h1) || !Number.isInteger(+h2) || !Number.isInteger(+v1) || !Number.isInteger(+v2)) {
          document.getElementById("validation-result").style.color = "red";
          document.getElementById("validation-result").textContent = "Please enter integers only.";
          return;
      } else {
          document.getElementById("validation-result").style.color = "green";
          document.getElementById("validation-result").textContent = "Entered values are valid.";

          if (+h1 > +h2) {
            var htemp = h1;
            h1 = h2;
            h2 = htemp;
          }

          if (+v1 > +v2) {
            var vtemp = v1;
            v1 = v2;
            v2 = vtemp;
          }

          document.getElementById("horizontal-bounds").textContent = h1 + ' ~ ' + h2;
          document.getElementById("vertical-bounds").textContent = v1 + ' ~ ' + v2;

          var rows = (v2 - v1) + 2;
          var columns = (h2 - h1) + 2;

          // get the reference for the body
          var div1 = document.getElementById('div1');

          // creates a <table> element
          var table = document.createElement("table");

          // creating rows
          for (var r = v1-1; r <= v2; r++) {
              //create a row of table
              var row = document.createElement("tr");
              // create cells in row
              for (var c = h1-1; c <= h2; c++) {
                  //create a cell in the row
                  var cell = document.createElement("td");
                  //top row
                  if (r == v1-1) {
                      if (c == h1-1){
                          //top left corner
                            var cellText = document.createTextNode(" ");
                      } else {
                          //horizontal bound labels
                          var cellText = document.createTextNode(c);
                      }
                  } else {
                      if (c == h1-1) {
                          //vertical bound labels
                          var cellText = document.createTextNode(r);
                      } else {
                          //product cells
                          var cellText = document.createTextNode(c*r);
                      }
                  }
                  cell.appendChild(cellText);
                  row.appendChild(cell);
              }
              table.appendChild(row);
          }
          div1.appendChild(table);
      }


}
