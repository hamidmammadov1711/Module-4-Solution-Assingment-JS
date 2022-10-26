// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// Bu tapşırığın ideyası mövcud adlar toplusunu götürməkdir
// və sonra konsola Hello 'Ad' və ya Good Bye 'Ad'ı çıxarın.
// Proqram "J" hərfi ilə başlayan adlar istisna olmaqla, istənilən ada "Hello" deməlidir.
// və ya "j", əks halda proqram "Good Bye" deməlidir. Beləliklə, son çıxış
// konsolda belə görünməlidir:
/*
Hello Yaakov
Hello Hamid
Hello Rasid
Hello Nilay
Hello Aydin
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
WARNING!!! WARNING!!!
Kod hazırda işləmir! Onu işə salmaq SİZİN işinizdir
tələblər və bunu tamamlamaq üçün addımlarda təsvir olunduğu kimi
tapşırıq.
WARNING!!! WARNING!!!
*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// script.js-in bütün məzmununu IIFE-nin içərisinə sarın
// 52-ci mühazirə, 2-ci hissəyə baxın
// (Qeyd, Addım 2 SpeakHello.js faylında yerinə yetiriləcək.)

(function () {

    var names = ["Yaakov", "Rasid", "Jasmin", "Hamid", "Nilay", "Aydin", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
// STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Adlar massivində dövr edin və "Hello" və ya "Good Bye" deyin!
// helloSpeaker və ya byeSpeaker-in 'speak' metodundan istifadə etməklə.
// 50-ci mühazirə, 1-ci hissəyə baxın
  for (var i = 0; i < names.length; i++) {

    
    
  // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Döngədə cari adın ilk hərfini əldə edin.
  //  Simli obyektin 'charAt' funksiyasından istifadə edin. Madam ki, biz axtarırıq
  //  böyük və ya kiçik hərflərlə başlayan adlar 'J'/'j', zəng edin
  //  string obyektin 'toLowerCase' metodunu nəticədə müqayisə edə bilək
  //  sonra kiçik hərf 'j' simvolu.
  //  Lazım gələrsə, Mozilla Developer Network veb saytında bu üsulları axtarın.
      var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
// ADDIM 11-də əldə edilmiş "ilk hərfi" kiçik hərflə müqayisə edin
// 'j'. Eynidirsə, byeSpeaker-in "danışmaq" metodunu cari adla çağırın
// döngədə. Əks halda, cərəyanla helloSpeaker-in 'danışma' metodunu çağırın
// döngədə ad.
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);

      console.log("Good Bye " + names[i]);

    } else {
      helloSpeaker.speak(names);

      console.log("Hello " + names[i]);
    }
  } 
})();




