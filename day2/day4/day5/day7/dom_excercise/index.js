      let ison=true;
      function colorHandler(color){
        const bulb=document.getElementById("bulb");
     if(ison){
        console.log(color);
        console.log(document.getElementById("bulb"));
        bulb.style.backgroundColor=color;
        ison=false; 
            }
            else{
                bulb.style.backgroundColor="grey";
                ison=true;}
            // console.log(color);
            // const bulb=document.getElementById("bulb");
            // bulb.style.backgroundColor=color;
    }
