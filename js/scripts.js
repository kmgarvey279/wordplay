$().ready(function(){
  $("#sentenceForm").submit(function(event) {
    event.preventDefault();
    var sentenceValue = $("#sentenceInput").val();
    var words = sentenceValue.split(' ');
    var threePlusWords = words.map(function(word) {
      if (word.length >= 3) {
        return word
      }
  });
  var reversedWords = threePlusWords.reverse()
  var joinedWords = reversedWords.join();
  alert(joinedWords)
});
});
