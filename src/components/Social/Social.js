import React from 'react';
import '../Community/Community.css';
import { TwitterShareButton, EmailShareButton, EmailIcon, RedditShareButton, RedditIcon, FacebookShareButton, generateShareIcon,TwitterIcon, FacebookIcon } from 'react-share';
import './Social.css'

export default function Community(props){
    return (
        <section>
                <header>
                    <h2>tell your friends!</h2>
                </header>
                <p>Share hearsay with those you know to get more voices in the mix
                </p>
                <div className="citySearch">
                <TwitterShareButton
        url="https://hearsay-app.now.sh/"
        title="Hearsay - make your voice heard."
        className="Demo__some-network__share-button">
        <TwitterIcon
          id="twitter"
          size={36}
          round />
      </TwitterShareButton>
      <FacebookShareButton
          url="https://hearsay-app.now.sh/"
          quote="Hearsay - make your voice heard."
          >
            <FacebookIcon
            id="fb"
            size={36}
            round
            />
          </FacebookShareButton>
          <RedditShareButton
          url="https://hearsay-app.now.sh/"
          title="Hearsay - make your voice heard."
          >
            <RedditIcon
            id="reddit"
            size={36}
            round
            />
          </RedditShareButton>
          <EmailShareButton
          url="https://hearsay-app.now.sh/"
          title="Hearsay - make your voice heard."
          >
            <EmailIcon
            size={36}
            round
            />
          </EmailShareButton>
                </div>
        </section>
    );
};