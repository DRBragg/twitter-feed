import React from 'react';

const Tweet = (props) => {
  let favoritedClass;
  let retweetedClass;
  props.favorited ? favoritedClass = 'favorite' : favoritedClass = null;
  props.retweeted ? retweetedClass = 'retweet' : retweetedClass = null;

  return(
    <li>
    <div className = "row box">
      <div className = "small-8 small-centered columns tweet-box">
        <div className = "row allContent">
          <div className = "small-2 columns">
            <img className="profile-pic" src={props.profilePic}></img>
          </div>
          <div className = "small-10 columns tweet-body">
            <div className = "row">
              <div className = "small-12 columns">
                <ul className = "tweet-data">
                  <li id="tweet-name">
                    {props.name}
                  </li>
                  <li>
                    {props.screenName}
                  </li>
                  <li>
                    {props.date}
                  </li>
                </ul>
              </div>
            </div>

            <div className ="row">
              <div className = "small-12 columns">
                <p>{props.text}</p>
              </div>
              {props.picURL && <img className='tweet-img' src={props.picURL}></img>}
            </div>

            <div className = "row">
              <div className = "small-10 columns">
                <ul className = "tweet-data">
                  <li onClick={props.handleReply}>
                    <i className="fa fa-reply" aria-hidden="true"></i>
                  </li>
                  <li onClick={props.handleRetweet}>
                    <div className={retweetedClass}>
                      <i className="fa fa-retweet" aria-hidden="true"></i> {props.retweetCount}
                    </div>
                  </li>
                  <li onClick={props.handleFavorite}>
                    <div className={favoritedClass}>
                      <i className="fa fa-heart" aria-hidden="true"></i> {props.favoriteCount}
                    </div>
                  </li>
                  <li onClick={props.handleMore}>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </li>
  );

};
export default Tweet;
