$().ready(function(){
  $("#sentenceInput").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentenceForm").val();
    alert(sentence);
    var sentenceArray = sentence.split(' ');
    alert(sentenceArray)
});
});
