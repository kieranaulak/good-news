

fetch("/getRedditPosts").then((response) => response.json()).then((redditArray) => {
        //Print out the reddit post array to the console
        
            var mainContainer = document.getElementsByTagName("main")[0];

    //Fills the top good and low bad section of the page with images and titles of the top articles
            document.getElementById('tgSnip').innerHTML = redditArray[0].data.title;
            document.getElementById('lbSnip').innerHTML = redditArray[1].data.title;
            document.getElementById('tgImg').src = redditArray[0].data.thumbnail;
            document.getElementById('lbImg').src = redditArray[1].data.thumbnail;





            
            for (var i = 2; i < redditArray.length; i++) {
                // Create each element to add onto the page
                var div = document.createElement("article");
                
                var header = document.createElement('h4'); // Title
                var info = document.createElement('p'); // URL for news source. 

                var footer = document.createElement('footer'); 
                var subreddit = document.createElement('p'); // Post's orginal subreddit
                var date = document.createElement('p'); // Date of the post
        
                // Format into Json
                header.innerHTML = 'Title: ' + redditArray[i].data.title;
                info.innerHTML = 'Link: ' + redditArray[i].data.url_overridden_by_dest;

                subreddit.innerHTML = 'Subreddit: ' + redditArray[i].data.subreddit;
                date.innerHTML = 'Time: ' + redditArray[i].data.created;
                

                div.className = 'postBox';
                footer.className = 'artFoot';
                header.className = 'postTittle';
                subreddit.className = 'subreddit';
                date.className = 'date';
                info.className = 'postSnip';


                div.appendChild(header);
                div.appendChild(info);

                footer.appendChild(subreddit);
                footer.appendChild(date);
                
                div.appendChild(footer) ;              
                
                mainContainer.appendChild(div);


                

            }
    

    console.log(redditArray);
});