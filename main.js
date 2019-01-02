var tuslar = [
   {
      id:"On",
   },
   {
      id:"CE",
   },
   {
      id:"MR",
   },
   {
      id:"M-",
   },
   {
      id:"M+",
   },
   {
      id:7,
   },
   {
      id:8,
   },
   {
      id:9,
   },
   {
      id:"%",
   },
   {
      id:"Kok",
   },
   {
      id:4,
   },
   {
      id:5,
   },
   {
      id:6,
   },
   {
      id:"X",
   },
   {
      id:"/",
   },
   {
      id:1,
   },
   {
      id:2,
   },
   {
      id:3,
   },
   {
      id:"-",
   },
   {
      id:"+",
   },
   {
      id:0,
   },
   {
      id:".",
   },
   {
      id:"+/_",
   },
   {
      id:"=",
   },
   

]
function tasarimGetir(){ 
   
   var makine = '<div class="makine"><div id="hafiza"></div><div class="ekran" id="cikti"></div><button class="tus" onclick="yazdir(this),temizle()">'+tuslar[0].id+'</button><button class="tus" onclick="yazdir(this),temizle()">'+tuslar[1].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[2].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[3].id+'</button>'+
   '<button class="tus" onclick="yazdir(this)">'+tuslar[4].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[5].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[6].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[7].id+'</button><button class="tus" onclick="yazdir(this),yuzde()">'+tuslar[8].id+'</button>'+
   '<button class="tus" onclick="yazdir(this),kok(),esittir()">'+tuslar[9].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[10].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[11].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[12].id+'</button><button class="tus" onclick="yazdir(this),carp()">'+tuslar[13].id+'</button>'+
   '<button class="tus" onclick="yazdir(this),bol()">'+tuslar[14].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[15].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[16].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[17].id+'</button><button class="tus" onclick="yazdir(this),cikar()">'+tuslar[18].id+'</button>'+
   '<button class="tusEdit" onclick="yazdir(this),topla()">'+tuslar[19].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[20].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[21].id+'</button><button class="tus" onclick="yazdir(this)">'+tuslar[22].id+'</button><button class="tus" onclick="yazdir(this),esittir()">'+tuslar[23].id+'</button><div id="kontrol"></div></div>';

   document.body.innerHTML = makine;
}

function yazdir(yazi){

   var ekranYazisi = document.getElementById("cikti").innerHTML;

   if(ekranYazisi.length < 10){ 

      document.getElementById("cikti").innerHTML += yazi.innerHTML;

   }else
   {
      document.getElementById("cikti").innerHTML = ekranYazisi.substr(1,10);
   }

}function topla(){

   document.getElementById("hafiza").innerHTML = document.getElementById("cikti").innerHTML;
   var sayi1 = document.getElementById("cikti").innerHTML;
   sayi1 = parseInt(sayi1);
   document.getElementById("cikti").innerHTML = "";
   document.getElementById("kontrol").innerHTML= "topla";
   
}function cikar(){

   document.getElementById("hafiza").innerHTML = document.getElementById("cikti").innerHTML; 
   var sayi2 = document.getElementById("cikti").innerHTML;
   sayi2 = parseInt(sayi2);
   document.getElementById("cikti").innerHTML = "";
   document.getElementById("kontrol").innerHTML= "cikart";

}function carp(){

   document.getElementById("hafiza").innerHTML = document.getElementById("cikti").innerHTML; 
   var sayi2 = document.getElementById("cikti").innerHTML;
   sayi2 = parseInt(sayi2);
   document.getElementById("cikti").innerHTML = "";
   document.getElementById("kontrol").innerHTML= "carp";

}function bol(){
   
   document.getElementById("hafiza").innerHTML = document.getElementById("cikti").innerHTML; 
   var sayi2 = document.getElementById("cikti").innerHTML;
   sayi2 = parseInt(sayi2);
   document.getElementById("cikti").innerHTML = "";
   document.getElementById("kontrol").innerHTML= "bol";
   
}function yuzde(){

   document.getElementById("hafiza").innerHTML = document.getElementById("cikti").innerHTML; 
   var sayi2 = document.getElementById("cikti").innerHTML;
   sayi2 = parseInt(sayi2);
   document.getElementById("cikti").innerHTML = "";
   document.getElementById("kontrol").innerHTML= "yuzde";

}function kok(){

   document.getElementById("hafiza").innerHTML = document.getElementById("cikti").innerHTML; 
   var sayi2 = document.getElementById("cikti").innerHTML;
   sayi2 = parseInt(sayi2);
   document.getElementById("cikti").innerHTML = "";
   document.getElementById("kontrol").innerHTML= "kok";

}function temizle(){

   document.getElementById("cikti").innerHTML = "";
   document.getElementById("hafiza").innerHTML = "";        

}
function esittir(){
   
   if (document.getElementById("kontrol").innerHTML == "topla"){
      
      var sayi1 = document.getElementById("hafiza").innerHTML;
      sayi1 = parseInt(sayi1);
      var sayi2 = document.getElementById("cikti").innerHTML;
      sayi2 = parseInt(sayi2);
      document.getElementById("cikti").innerHTML = sayi1+sayi2;

   }else if (document.getElementById("kontrol").innerHTML == "cikart"){
      var sayi1 = document.getElementById("hafiza").innerHTML;
      sayi1 = parseInt(sayi1);
      var sayi2 = document.getElementById("cikti").innerHTML;
      sayi2 = parseInt(sayi2);
      document.getElementById("cikti").innerHTML = sayi1-sayi2;
   }else if (document.getElementById("kontrol").innerHTML == "carp"){ 
   
      var sayi1 = document.getElementById("hafiza").innerHTML;
      sayi1 = parseInt(sayi1);
      var sayi2 = document.getElementById("cikti").innerHTML;
      sayi2 = parseInt(sayi2);
      document.getElementById("cikti").innerHTML = sayi1*sayi2;

   }else if (document.getElementById("kontrol").innerHTML == "bol"){

      var sayi1 = document.getElementById("hafiza").innerHTML;
      sayi1 = parseInt(sayi1);
      var sayi2 = document.getElementById("cikti").innerHTML;
      sayi2 = parseInt(sayi2);
      document.getElementById("cikti").innerHTML = sayi1/sayi2;

   }else if (document.getElementById("kontrol").innerHTML == "yuzde"){

      var sayi1 = document.getElementById("hafiza").innerHTML;
      sayi1 = parseInt(sayi1);
      var sayi2 = document.getElementById("cikti").innerHTML;
      sayi2 = parseInt(sayi2);
      document.getElementById("cikti").innerHTML = (sayi1/100)*sayi2;
      document.getElementById("cikti").innerHTML = document.getElementById("cikti").innerHTML.substr(0,10);
      
   }else if (document.getElementById("kontrol").innerHTML == "kok"){

      var sayi1 = document.getElementById("hafiza").innerHTML;
      sayi1 = parseInt(sayi1);
      var sayi2 = document.getElementById("cikti").innerHTML;
      sayi2 = parseInt(sayi2);
      document.getElementById("cikti").innerHTML = Math.sqrt(sayi1);
      document.getElementById("cikti").innerHTML = document.getElementById("cikti").innerHTML.substr(0,10);

   }
}