import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = (props) => {
  let tweets = props.data.map(tweet => {
    let timestampDate = new Date(parseInt(tweet.timestamp_ms));
    let toString = (date) => {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months[date.getUTCMonth()] + ' ' + date.getUTCDate();
    };

    let picURL;
    let tweetText
    tweet.entities.media ? picURL = tweet.entities.media[0].media_url : picURL = null;
    picURL ? tweetText=tweet.text.replace(tweet.entities.media[0].display_url,'') : tweetText=tweet.text; 

    let handleReply = () => alert('Reply');
    let handleRetweet = () => alert('Retweet');
    let handleFavorite = () => alert('Favorite');
    let handleMore = () => alert('More');

    return(
      <Tweet
        key={tweet.id_str}
        text={tweetText}
        name={tweet.user.name}
        screenName={tweet.user.screen_name}
        profilePic={tweet.user.profile_image_url}
        retweetCount={tweet.retweet_count}
        favoriteCount={tweet.favorite_count}
        date={toString(timestampDate)}
        picURL={picURL}
        handleReply={handleReply}
        handleRetweet={handleRetweet}
        handleFavorite={handleFavorite}
        handleMore={handleMore}
        favorited={tweet.favorited}
        retweeted={tweet.retweeted}
      />
  );
  })
    return(
    <ul>
      {tweets}
    </ul>
    );
}
export default TwitterFeed;
