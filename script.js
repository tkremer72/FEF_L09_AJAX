let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("einstein").innerHTML =  myObj.name + " " + "Born On" + " " +  myObj.birthday;
    
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function getEinstein () {
let getEinstein = new XMLHttpRequest();
getEinstein.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            let getObject = JSON.parse(this.responseText);
            document.getElementById("getBio").innerHTML = getObject.bio;
      }
};
getEinstein.open("GET", "einstein.json", true);
getEinstein.send();
}