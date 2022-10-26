// NOTE! Bu fayldakı addımlar əsasən sizinkinizlə eynidir
// SpeakHello.js faylında yerinə yetirildi.

// STEP 6: SpeakGoodBye.js-in bütün məzmununu IIFE-nin içərisinə sarın
// 52-ci mühazirə, 2-ci hissəyə baxın

// STEP 7: Qoşulacağınız "byeSpeaker" adlı obyekt yaradın
// "speak" metodu və qlobal kontekstdə təqdim edəcəyiniz
// 52-ci mühazirə, 1-ci hissəyə baxın
//var byeSpeaker =

// speakWord dəyişənini 'byeSpeaker' obyektinə əlavə etməyin!!!

(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function speak(name) {
    // console.log( speakWord.name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);



// STEP 8: 'speak' funksiyasını yenidən yazın ki, o, əlavə olunsun
// byeSpeaker obyekti müstəqil funksiya yerinə.
// 52-ci mühazirə, 2-ci hissəyə baxın



// STEP 9: "ByeSpeaker" obyektini qlobal əhatə dairəsinə çıxarın. Ad verin
// 'byeSpeaker' qlobal miqyasda da.
//xxxx.xxxx = byeSpeaker;