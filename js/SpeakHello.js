// STEP 2:SpeakHello.js-in bütün məzmununu IIFE-nin içərisinə sarın
// 52-ci mühazirə, 2-ci hissəyə baxın


// STEP 3: Qoşulacağınız "helloSpeaker" adlı obyekt yaradın
// "speak" metodu və qlobal kontekstdə təqdim edəcəyiniz
// 52-ci mühazirə, 1-ci hissəyə baxın
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object. speakWord dəyişənini 'helloSpeaker' obyektinə əlavə etməyin.


(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function speak(name) {
    // console.log(speakWord.name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);




// STEP 4: 'speak' funksiyasını yenidən yazın ki, o, əlavə olunsun
// helloSpeaker obyekti müstəqil funksiya yerinə.
// 52-ci mühazirə, 2-ci hissəyə baxın


// STEP 5: "helloSpeaker" obyektini qlobal əhatə dairəsinə çıxarın. Ad verin
// 'hellopeaker' qlobal miqyasda da.
// 52-ci mühazirə, 2-ci hissəyə baxın
// (Qeyd, 6-cı addım SpeakGoodBye.js faylında yerinə yetiriləcək.)
// xxxx.xxxx = helloSpeaker;