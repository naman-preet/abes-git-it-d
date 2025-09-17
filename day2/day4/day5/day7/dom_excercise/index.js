 let ison = true; // control enable/disable

    function colorHandler(color) {
      const bulb = document.getElementById("bulb");

      if (ison) {
        bulb.style.backgroundColor = color;
      } else {
        alert("Bulb is disabled! Click Enable to use it again.");
      }
    }