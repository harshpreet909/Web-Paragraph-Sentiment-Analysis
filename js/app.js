'use strict';
	var most=-99;
	var emotionresult="";
	var mostsen=[];
    //Emotion from the nltk sentiment-nrc
	var _EMOTIONS = ["positive", "negative", "anger", "joy", "trust"];
	var entryArray=[];

	var _SEARCHBUTTON = document.getElementById("searchButton");

	_SEARCHBUTTON.addEventListener("click", function () { search(document.getElementById("searchBox").value) });


	// takes in a string and returns an array of meaningful words
	function extractWords(string) {
		return string.toLowerCase().split(/\W+/).filter(moreThanOneWord);
	}

	// return false if word has one or fewer character
	function moreThanOneWord(word) {
		return word.length > 1;
	}

	// takes in an array of words
	// categorizes the words and puts them into specific emotion
	// Display the emotion )
	function findSentimentWords(wordList) {
		var result = createNewFrameWk();
		
		wordList.forEach(function (eachWord) {
			console.log(eachWord);
    
			_EMOTIONS.forEach(function (emotion) {
				//console.log(_SENTIMENTS[eachWord]);
				if (_SENTIMENTS[eachWord] !== undefined &&
					_SENTIMENTS[eachWord][emotion] !== undefined)
					result[emotion].push(eachWord);
					//console.log(result[emotion].push(eachWord));
			});
		});
	
			_EMOTIONS.forEach(function (emotion) {
				//console.log(result[eachWord]);
				if(result[emotion].length){
					most=result[emotion].length;
					console.log(emotion);
					//console.log();
			
				if(emotion!="negative" && emotionresult!="negative")
					emotionresult=emotion;
				else if( emotion=="negative")
					emotionresult=emotion;
		
			}
			//console.log(result[emotion].length);
		});
  
		console.log(emores);
		//alert(emores);
		document.getElementById("output").value = emores.toUpperCase();
  
	return result;
	
	}

	// creates a basic framework for fufure use
	// which contains empty arrays
function createNewFrameWk() {
  var result = {};
  _EMOTIONS.forEach(function (emotion) {
    result[emotion] = [];
  });
  return result;
}

	// takes in an array of words
	// counts and reduces the duplicate words, sorts them, and returns the new array  
	function countDuplicates(arr) {
		
		var countDup = arr.reduce(function (prev, cur) {
		prev[cur] = (prev[cur] || 0) + 1;
		return prev;
		}, {});
		
		var wordsSorted = Object.keys(countDup).sort(function (a, b) {
			return countDup[b] - countDup[a];
		});
	
	if (wordsSorted.length > 3)
		wordsSorted = wordsSorted.slice(0, 3);
		return wordsSorted;
	}

	// takes in the defined text from the user and feed it into the analyser 
	function search(text) {
		
		if (text !== undefined) {
			entryArray = text.split(" ");
			enteryArray=countDuplicates(enteryArray);
			findSentimentWords(entryArray);
		}
	}






