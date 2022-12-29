let kilo = Number(prompt("Kilonuzu giriniz"));
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz"));
let kare = Math.pow(boy,2);
let sonuc = kilo/(kare);

if (sonuc<18.5) {
    console.log("Test sonucu:::" + sonuc + "İdeal killonun altındasınız");
}else if (sonuc>=18.5 && sonuc<25) {
    console.log("Test sonucu:::" + sonuc + "İdeal kilodasınız");
}else if (sonuc>=25 && sonuc<30) {
    console.log("Test sonucu:::" + sonuc + "İdeal kilonun üstündesiniz");    
}else if (sonuc>=30 && sonuc<40) {
    console.log("Test sonucu:::" + sonuc + "ideal kilonın çok üstündesiniz. Obezsiniz.");
}else if (sonuc>=40) {
    console.log("Test sonucu:::" + sonuc + "morbid obez");
}
else {
   console.log("lütfen kilonuzu ve boyunuzu doğru giriniz.");
}


// ! lütfen büyük eşitlerin sıralmasını doğru giriniz