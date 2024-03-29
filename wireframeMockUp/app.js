var header = document.getElementById('header')
var intervalID = setInterval(changeHeader, 5000);
var counter = 0
var content = [
    {
        topic: 'Systemic Racism',
        headerText: 'What is Systemic Racism?',
        content: 'It is a wild adventure we are on. Here, as we are rushing along through the darkness, with the cold from the river seeming to rise up and strike us; with all the mysterious voices of the night around us, it all comes home. We seem to be drifting into unknown places and unknown ways; into a whole world of dark and dreadful things. Godalming is shutting the furnace door....',
        sources: "A source",
        research: "A research place"
    }, {
        topic: 'Toxic Masculinity',
        headerText: 'What is Toxic Masculinity?',
        content: "Later.--It took all my courage to say good-bye to my darling. We may never meet again. Courage, Mina! the Professor is looking at you keenly; his look is a warning. There must be no tears now--unless it may be that God will let them fall in gladness. October 30. Night.--I am writing this in the light from the furnace door of the steam launch: Lord Godalming is firing up. He is an experienced hand at the work, as he has had for years a launch of his own on the Thames, and another on the Norfolk Broads. Regarding our plans, we finally decided that Mina's guess was correct, and that if any waterway was chosen for the Count's escape back to his Castle, the Sereth and then the Bistritza at its junction, would be the one. We took it, that somewhere about the 47th degree, north latitude, would be the place chosen for the crossing the country between the river and the Carpathians. We have no fear in running at good speed up the river at night; there is plenty of water, and the banks are wide enough apart to make steaming, even in the dark, easy enough. Lord Godalming tells me to sleep for a while, as it is enough for the present for one to be on watch. But I cannot sleep--how can I with the terrible danger hanging over my darling, and her going out into that awful place.... My only comfort is that we are in the hands of God. Only for that faith it would be easier to die than to live, and so be quit of all the trouble. Mr. Morris and Dr. Seward were off on their long ride before we started; they are to keep up the right bank, far enough off to get on higher lands where they can see a good stretch of river and avoid the following of its curves. They have, for the first stages, two men to ride and lead their spare horses--four in all, so as not to excite curiosity. When they dismiss the men, which shall be shortly, they shall themselves look after the horses. It may be necessary for us to join forces; if so they can mount our whole party. One of the saddles has a movable horn, and can be easily adapted for Mina, if required.",
        sources: "A source",
        research: "A research place"
    }, {
        topic: 'Trans rights',
        headerText: 'What are trans rights?',
        content: "Later.--Oh, it did me good to see the way that these brave men worked. How can women help loving men when they are so earnest, and so true, and so brave! And, too, it made me think of the wonderful power of money! What can it not do when it is properly applied; and what might it do when basely used. I felt so thankful that Lord Godalming is rich, and that both he and Mr. Morris, who also has plenty of money, are willing to spend it so freely. For if they did not, our little expedition could not start, either so promptly or so well equipped, as it will within another hour. It is not three hours since it was arranged what part each of us was to do; and now Lord Godalming and Jonathan have a lovely steam launch, with steam up ready to start at a moment's notice. Dr. Seward and Mr. Morris have half a dozen good horses, well appointed. We have all the maps and appliances of various kinds that can be had. Professor Van Helsing and I are to leave by the 11:40 train to-night for Veresti, where we are to get a carriage to drive to the Borgo Pass. We are bringing a good deal of ready money, as we are to buy a carriage and horses. We shall drive ourselves, for we have no one whom we can trust in the matter. The Professor knows something of a great many languages, so we shall get on all right. We have all got arms, even for me a large-bore revolver; Jonathan would not be happy unless I was armed like the rest. Alas! I cannot carry one arm that the rest do; the scar on my forehead forbids that. Dear Dr. Van Helsing comforts me by telling me that I am fully armed as there may be wolves; the weather is getting colder every hour, and there are snow-flurries which come and go as warnings.",
        sources: "A source",
        research: "A research place"
    }, {
        topic: 'Feminism',
        headerText: 'What is feminism?',
        content: 'Oh, my friend, it is because I would save Madam Mina from that awful place that I would go. God forbid that I should take her into that place. There is work--wild work--to be done there, that her eyes may not see. We men here, all save Jonathan, have seen with their own eyes what is to be done before that place can be purify. Remember that we are in terrible straits. If the Count escape us this time--and he is strong and subtle and cunning--he may choose to sleep him for a century, and then in time our dear one"--he took my hand--"would come to him to keep him company, and would be as those others that you, Jonathan, saw. You have told us of their gloating lips; you heard their ribald laugh as they clutched the moving bag that the Count threw to them. You shudder; and well may it be. Forgive me that I make you so much pain, but it is necessary. My friend, is it not a dire need for the which I am giving, possibly my life? If it were that any one went into that place to stay, it is I who would have to go to keep them company.',
        sources: "A source",
        research: "A research place"
    }, {
        topic: 'Intersectionality',
        headerText: 'What is intersectionality?',
        content: '"Do as you will," said Jonathan, with a sob that shook him all over, "we are in the hands of God!"',
        sources: "A source",
        research: "A research place"
    },
    
] 

var availableTopics = content.map(x=>x.topic)

  $( "#topic_input" ).autocomplete({
    source: availableTopics
  });

function changeHeader (params) {
    header.innerText = content[counter].headerText;
    counter < content.length-1 ? counter++ : counter = 0
}

$("#topicForm").on("submit", function(event){
    event.preventDefault(); 
    // function stopTextColor() {
        clearInterval(intervalID);
    // }
    // stopTextColor()
   var selectedTopic = $('#topic_input').val()
   console.log(selectedTopic);
   var index = content.findIndex(x=>x.topic == selectedTopic)
   console.log(index);
    header.innerText = content[index].headerText
    document.getElementById('topicText').innerText = content[index].content
    document.getElementById('sources').innerText = content[index].sources
    document.getElementById('resources').innerText = content[index].research
    document.getElementById("contentArticle").style.height = "auto";
})