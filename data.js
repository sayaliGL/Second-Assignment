
    var data =[{"id":1,"first_name":"Kit","last_name":"Curston","email":"kcurston0@usgs.gov","gender":"Male","ip_address":"47.80.222.54"},
{"id":2,"first_name":"Mallorie","last_name":"Fallis","email":"mfallis1@economist.com","gender":"Female","ip_address":"138.66.81.165"},
{"id":3,"first_name":"Patrizius","last_name":"Bianco","email":"pbianco2@cbsnews.com","gender":"Male","ip_address":"216.156.243.69"},
{"id":4,"first_name":"Alayne","last_name":"Coil","email":"acoil3@fda.gov","gender":"Female","ip_address":"191.227.152.60"},
{"id":5,"first_name":"Harlan","last_name":"Gasgarth","email":"hgasgarth5@mail.ru","gender":"Male","ip_address":"242.87.202.234"},
{"id":21,"first_name":"Brittne","last_name":"Harefoot","email":"bharefootk@uiuc.edu","gender":"Female","ip_address":"130.181.77.225"},
{"id":22,"first_name":"Murry","last_name":"De Castri","email":"mdecastril@mysql.com","gender":"Male","ip_address":"255.141.172.162"},
{"id":23,"first_name":"Belicia","last_name":"Argrave","email":"bargravem@shop-pro.jp","gender":"Female","ip_address":"231.23.127.60"},
{"id":24,"first_name":"Gaspar","last_name":"Blakely","email":"gblakelyn@163.com","gender":"Male","ip_address":"2.26.46.44"},
{"id":25,"first_name":"Carmelia","last_name":"Esh","email":"cesho@de.vu","gender":"Female","ip_address":"64.25.146.3"},
{"id":26,"first_name":"Brittaney","last_name":"Pechan","email":"bpechanp@ifeng.com","gender":"Female","ip_address":"180.239.154.34"},
{"id":27,"first_name":"Fleur","last_name":"Pescod","email":"fpescodq@yellowbook.com","gender":"Female","ip_address":"30.204.97.108"},
{"id":28,"first_name":"Lelah","last_name":"De Ferraris","email":"ldeferrarisr@apache.org","gender":"Female","ip_address":"31.116.144.42"},
{"id":29,"first_name":"Sibylle","last_name":"Cauldwell","email":"scauldwells@earthlink.net","gender":"Female","ip_address":"142.81.87.167"},
{"id":30,"first_name":"Tedi","last_name":"Wimbury","email":"twimburyt@hubpages.com","gender":"Female","ip_address":"70.107.36.67"},
{"id":31,"first_name":"Anya","last_name":"D' Angelo","email":"adangelou@google.com.au","gender":"Female","ip_address":"148.150.169.96"},
{"id":32,"first_name":"Olympie","last_name":"Sisland","email":"osislandv@google.nl","gender":"Female","ip_address":"134.94.86.122"},
{"id":33,"first_name":"Reinaldos","last_name":"Bamlett","email":"rbamlettw@wikipedia.org","gender":"Male","ip_address":"35.53.43.14"},
{"id":34,"first_name":"Dunstan","last_name":"Slixby","email":"dslixbyx@wp.com","gender":"Male","ip_address":"142.86.185.184"},
{"id":35,"first_name":"Glynis","last_name":"Durham","email":"gdurhamy@cam.ac.uk","gender":"Female","ip_address":"42.214.208.99"},
{"id":36,"first_name":"Hugh","last_name":"McGiffin","email":"hmcgiffinz@about.me","gender":"Male","ip_address":"65.46.148.222"},
{"id":37,"first_name":"Clarice","last_name":"Bowen","email":"cbowen10@slideshare.net","gender":"Female","ip_address":"157.158.51.73"},
{"id":38,"first_name":"Holly-anne","last_name":"Alfwy","email":"halfwy11@cnbc.com","gender":"Female","ip_address":"184.192.83.35"},
{"id":39,"first_name":"Walther","last_name":"Dumbrell","email":"wdumbrell12@netlog.com","gender":"Male","ip_address":"119.223.114.173"},
{"id":40,"first_name":"Jena","last_name":"Hestrop","email":"jhestrop13@google.com.br","gender":"Female","ip_address":"190.158.42.106"},
{"id":41,"first_name":"Barnie","last_name":"Mazin","email":"bmazin14@themeforest.net","gender":"Male","ip_address":"6.55.28.236"},
{"id":42,"first_name":"Lorne","last_name":"Blumsom","email":"lblumsom15@google.ca","gender":"Male","ip_address":"8.38.174.204"},
{"id":6,"first_name":"Mariette","last_name":"Skeleton","email":"mskeleton6@imageshack.us","gender":"Female","ip_address":"23.188.76.0"}
];

var list = document.getElementById("list");
var drop_box = document.getElementById("drop_box");
for (i = 0; i < data.length; i++) { 
list.innerHTML = list.innerHTML + "<div class='list-item'  draggable='true' ondragstart='drag(event)' id="+data[i].id+">"+ data[i].first_name +" "+data[i].last_name +"</div>";
drop_box.innerHTML = drop_box.innerHTML + "<div class='box-border' ondragenter='dragEnter(event)' ondragleave='dragLeave(event)' ondrop='drop(event)' ondragover='allowDrop(event)' id="+"box"+data[i].id+"><button type='button' class='close' id="+"button"+data[i].id+">X</button></div>";

}
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function dragEnter(event) {
    if ( event.target.className == "box-border" ) {
      event.target.style.background = "antiquewhite";
    }
   
  }
  
  function dragLeave(event) {
    if ( event.target.className == "box-border" ) {
    event.target.style.background = "";
    }
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  function drop(ev) {
    event.preventDefault();
    event.target.style.background = "";
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    var close =document.getElementById(ev.target.firstElementChild.id);
    close.style.display = "block";
    var elem = document.getElementById(ev.target.id);
        elem.setAttribute('draggable', false);
    close.setAttribute('onclick', 'remove_drop_item('+ev.target.lastElementChild.id +','+ ev.target.firstElementChild.id+')');
    

  }
 
function remove_drop_item(id , close_button){
    close_button.style.display = "none";
    var element = document.getElementById(id);
    //console.log(element);
    var remove_element =  element.parentNode.removeChild(element);

    //console.log(remove_element);
    var remove_element_id = remove_element.lastChild.id;
    var remove_element_name = remove_element.lastChild.textContent;
   // console.log(remove_element_name);
    list.innerHTML = list.innerHTML + "<div class='list-item' draggable='true' ondragstart='drag(event)' id="+id+">"+ remove_element_name +"</div>";
 
}
function remove(e){
    // alert("hi");
    var list = document.getElementById('data');
    var node = e.target.parentElement;
    var child = node.firstElementChild.getAttribute('id');
    child = child - 1;
    // console.log(child);
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }
    // node.removeChild(node.childNodes[0]);
    // node.removeChild(node.childNodes[1]);
    // console.log();
    list.innerHTML = list.innerHTML + "<div class='inner' draggable='true' ondragstart='drag(event)' id="+data[child].id+">"+ data[child].first_name +" "+data[child].last_name +"</div>";;
    node.removeAttribute('style');
  }
 