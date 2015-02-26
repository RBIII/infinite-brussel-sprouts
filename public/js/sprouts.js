var page = 1;

// $('.more-sprouts').on('click', function(event) {
//   event.preventDefault();
//   page++;
//   $.get('/tweets.json?page=' + parseInt(page), function(tweets) {
//     for(i=0; i< tweets.length; i++) {
//       console.log(tweets[i].text);
//       var listItem = $('<li>').addClass('tweet');
//       var tweetText = $('<div>').addClass('body').text(tweets[i].text);
//       var user = $('<div>').addClass('user').text(tweets[i].username);
//       listItem.append(tweetText).append(user);
//       $(".tweets").append(listItem);
//       };
//   });
// });

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     page++;
     $.get('/tweets.json?page=' + parseInt(page), function(tweets) {
       for(i=0; i< tweets.length; i++) {
         var listItem = $('<li>').addClass('tweet');
         var tweetText = $('<div>').addClass('body').text(tweets[i].text);
         var user = $('<div>').addClass('user').text(tweets[i].username);
         listItem.append(tweetText).append(user);
         $(".tweets").append(listItem);
         };
     });
   }
});
// <li class="tweet">
//   <div class="body"><%= tweet[:text] %></div>
//   <div class="user"><%= tweet[:username] %></div>
// </li>
