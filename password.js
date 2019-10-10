twoLetterWords = ["of","to","in","is","it","he","on","as","be","at","or","by","we","up","an","do","if","so","go","no","my","me","us","oh","am"];
threeLetterWords = ["the","and","you","was","for","are","his","one","had","hot","but","can","out","all","use","how","she","way","her","see","him","two","has","day","did","who","may","now","any","new","get","man","our","say","low","boy","old","too","set","air","end","put","add","big","act","why","ask","men","off","try","own","sun","eye","let","saw","far","sea","run","few","got","car","eat","cut","red","dog","top","six","ten","war","lay","map","fly","cry","box","dry","ago","ran","hot","yes","yet","arm","ice","art","bed","egg","sit","leg","sky","joy","sat","cow","job","fun","gas","buy","cat","law","bit","lie","ear","son","pay","age","lot","key","row","die","bad","oil","mix","fit","hit","bat","rub","tie","gun","hat","fig","led","win","nor","fat","dad","bar","log"];
fourLetterWords = ["that","with","they","have","this","from","word","what","some","were","when","your","said","each","time","will","many","then","them","like","long","make","look","more","come","most","over","know","than","call","down","side","been","find","work","part","take","made","live","back","only","year","came","show","good","give","name","very","just","form","help","line","turn","much","mean","move","same","tell","does","want","well","also","play","home","read","hand","port","even","land","here","must","high","such","went","kind","need","near","self","head","page","grow","food","four","keep","last","city","tree","farm","hard","draw","left","late","real","life","open","seem","next","walk","ease","both","mark","mile","feet","care","book","took","room","idea","fish","stop","once","base","hear","sure","face","wood","main","girl","ever","list","feel","talk","bird","soon","body","pose","song","door","wind","ship","area","half","rock","fire","told","knew","pass","king","best","hour","true","five","step","hold","west","fast","verb","sing","less","slow","love","road","rain","rule","pull","cold","unit","town","fine","fall","lead","dark","note","wait","plan","star","noun","rest","able","done","week","gave","warm","free","mind","tail","fact","inch","stay","full","blue","deep","moon","foot","busy","test","boat","gold","game","miss","heat","snow","tire","fill","east","ball","wave","drop","wide","sail","size","vary","pair","felt","pick","hunt","ride","cell","race","lone","wall","wish","wild","kept","edge","sign","past","soft","bear","hope","gone","jump","baby","meet","root","push","held","hair","cook","burn","hill","safe","type","copy","tall","sand","soil","roll","beat","view","else","case","kill","lake","loud","milk","tiny","cool","poor","iron","flat","skin","hole","trip","seed","tone","join","lady","yard","rise","blow","grew","cent","team","wire","cost","lost","wear","sent","fell","flow","fair","bank","save","noon","ring","atom","crop","bone","rail","thus","rich","wing","wash","corn","poem","bell","meat","tube","fear","thin","mine","send","dead","spot","suit","lift","rose","sell","deal","swim","term","wife","shoe","camp","born","nine","shop","gray","salt","nose","huge","coat","mass","card","band","rope","slip","feed","tool","seat","post","glad","duck","dear","path","neck"];
fiveLetterWords = ["other","there","which","their","about","write","would","these","thing","could","sound","water","first","place","where","after","round","every","under","great","think","cause","right","three","small","large","spell","light","house","again","point","world","build","earth","stand","found","study","still","learn","plant","cover","state","never","cross","start","might","story","don't","while","press","close","night","north","white","begin","paper","group","music","those","often","until","river","carry","began","horse","watch","color","plain","usual","young","ready","above","leave","black","short","class","order","south","piece","since","whole","space","heard","early","reach","table","vowel","money","serve","voice","power","field","pound","drive","stood","front","teach","final","green","quick","ocean","clear","wheel","force","plane","stead","laugh","check","shape","bring","paint","among","grand","heart","heavy","dance","speak","count","store","train","sleep","prove","catch","mount","board","glass","grass","visit","month","happy","eight","raise","solve","metal","seven","third","shall","floor","coast","value","fight","sense","quite","broke","scale","child","speed","organ","dress","cloud","quiet","stone","climb","stick","smile","trade","mouth","exact","least","shout","wrote","clean","break","blood","touch","brown","equal","woman","whose","radio","spoke","human","party","agree","won't","chair","fruit","thick","guess","sharp","crowd","sight","hurry","chief","clock","enter","major","fresh","allow","print","block","chart","event","quart","truck","noise","level","throw","shine","wrong","broad","anger","claim","sugar","death","skill","women","thank","match","steel","guide","score","apple","pitch","dream","total","basic","smell","track","shore","sheet","favor","spend","chord","share","bread","offer","slave","chick","enemy","reply","drink","occur","range","steam","meant","teeth","shell"];
sixLetterWords = ["number","people","little","differ","before","follow","change","animal","mother","father","should","answer","school","always","letter","second","friend","enough","though","family","direct","happen","better","during","ground","listen","travel","simple","toward","center","person","appear","govern","notice","figure","beauty","minute","strong","behind","street","course","object","decide","island","system","record","common","wonder","equate","engine","settle","weight","matter","circle","divide","sudden","square","reason","length","region","energy","forest","window","summer","winter","bright","finish","flower","clothe","either","result","phrase","silent","finger","excite","middle","moment","spring","nation","method","design","bottom","single","twenty","crease","melody","office","symbol","except","garden","choose","gentle","doctor","please","locate","insect","caught","period","effect","expect","modern","corner","supply","danger","create","rather","string","depend","famous","dollar","stream","planet","colony","search","yellow","desert","spread","invent","cotton","chance","gather","column","select","repeat","plural","oxygen","pretty","season","magnet","silver","branch","suffix","afraid","sister","bought","valley","double","arrive","master","parent","charge","proper","market","degree","speech","nature","motion","liquid"];
sevenLetterWords = ["through","picture","country","between","thought","example","science","measure","product","numeral","problem","hundred","morning","several","against","pattern","certain","machine","correct","contain","develop","special","produce","nothing","surface","brought","distant","present","general","include","perhaps","subject","brother","believe","written","weather","million","strange","village","whether","century","natural","observe","section","receive","trouble","suggest","collect","control","decimal","captain","protect","history","element","student","imagine","provide","capital","soldier","process","operate","compare","current","success","company","arrange","stretch","require","prepare","discuss","forward","similar","evening","connect","station","segment","instant","support"];

function generatePasswords() {
	min = document.querySelector("#minWordLength").value;
	max = document.querySelector("#maxWordLength").value;
	pwLength = document.querySelector("#maxPWLength").value;
	numSubs = document.querySelector("#subNums").checked;
	list = document.getElementById("passwords");
	list.parentNode.removeChild(list);
    ul = document.createElement("ul");
	ul.setAttribute("id", "passwords");
	
	for(i = 0; i < 20; i++) {
		li = document.createElement("li");
		newPW = createPassword(min, max, pwLength);
		if (numSubs) {
			newPW = numberSubstitute(newPW);
		}
		contents = document.createTextNode(newPW);
		li.appendChild(contents);
		ul.appendChild(li);
		document.body.append(ul);
	}
    //n = randomWord(2);
    //document.body.innerHtml = n;
    //t = document.querySelector("#pwTable");
    //trow = document.createElement("tr");
    //td = document.createElement("td");
    //contents = document.createTextNode("HI");
    //td.appendChild(contents);
    //td.onclick = clickon;
    //trow.appendChild(td);
    //t.appendChild(trow);
}

function createPassword(min, max, maxLength) {
	if (min > maxLength) {
		return "";
	}
	else {
		if (max < maxLength) {
			rand = Math.floor((Math.random() * (max-min)) + min);
		} else {
			rand = Math.floor((Math.random() * (maxLength-min)) + min);
		}
		word = randomWord(rand);
		return word + createPassword(min, max, maxLength - rand);
	}
}

function randomWord(n) {
	if(n===2) {
		item = twoLetterWords[Math.floor(Math.random() * twoLetterWords.length)];
	} else if (n==3) {
		item = threeLetterWords[Math.floor(Math.random() * threeLetterWords.length)];
	} else if (n==4) {
		item = fourLetterWords[Math.floor(Math.random() * fourLetterWords.length)];
	} else if (n==5) {
		item = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
	} else if (n==6) {
		item = sixLetterWords[Math.floor(Math.random() * sixLetterWords.length)];
	} else if (n==7) {
		item = sevenLetterWords[Math.floor(Math.random() * sevenLetterWords.length)];
	} else {
		item = twoLetterWords[Math.floor(Math.random() * twoLetterWords.length)];
	}
    return item;
}

function numberSubstitute(str) {
	newStr = "";
	for (i=0; i<str.length; i++) {
		c = str.charAt(i);
		if (c=="e") {
			newStr += "3";
		} else if (c=="o") {
			newStr += "0";
		} else if (c=="l") {
			newStr += "1";
		} else if (c=="a") {
			newStr += "4";
		} else if (c=="s") {
			newStr += "5";
		} else {
			newStr += c;
		}
	}
	return newStr;
}