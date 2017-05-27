function replace(form) 
  {
    var userinputs = new Array();
    for(i=0; i<6; i++)
    {
      userinputs[i]=form.elements[i].value;
    }
    var story = document.getElementById("story");
    if (userinputs[0] != "")
      document.getElementById("missingName").innerHTML = userinputs[0];
    else 
    {
      document.getElementById("missingName").innerHTML = "&lt;missing text&gt;";
      document.getElementById("missingName").className = "red"; 
    }
    for (i = 1; i < 6; i++) {
      if (userinputs[i] != "")
        story.children[i-1].innerHTML = userinputs[i];
      else {
        story.children[i-1].innerHTML = "&lt;missing text&gt;";
        story.children[i-1].className = "red";
      }
    }
    //document.getElementById("story").innerHTML = text;
    document.getElementById("bottom").className = "";
    document.getElementById("form").className = "hidden";
  }
function returnForm() {
  
    document.getElementById("form").className = "";
    document.getElementById("bottom").className = "hidden";
 }
