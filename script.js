function printTable() {
    let table = document.getElementById("tableno").value;
    let minlength = document.getElementById("minlength").value;
    let maxlength = document.getElementById("maxlength").value;

    // Clear previous table
    document.getElementById("displaytable").innerHTML = "";

    for (let i = minlength; i <= maxlength; i++) {
      document.getElementById("displaytable").innerHTML += `${table} x ${i} = ${table * i}<br>`;
    }
  }

  function refresh() {
    document.getElementById("tableno").value = "";
    document.getElementById("minlength").value = "";
    document.getElementById("maxlength").value = "";
    document.getElementById("displaytable").innerHTML = "";
  }