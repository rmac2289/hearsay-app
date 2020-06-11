import React from 'react';
import '../Community/Community.css';
import { TwitterShareButton,FacebookMessengerShareButton,FacebookMessengerIcon, LinkedinShareButton , LinkedinIcon, EmailShareButton, EmailIcon, RedditShareButton, RedditIcon, FacebookShareButton, TwitterIcon, FacebookIcon } from 'react-share';
import './Social.css'

export default function Social(props){
    return (
        <section className="socialsection">
                <header className="friendsheader">
                    <h2>tell your friends!</h2>
                </header>
                <p>Share hearsay with those you know to get more voices in the mix
                </p>
                <div className="sharebuttons">
                <TwitterShareButton
        url="https://hearsay-app.now.sh/"
        title="Hearsay - make your voice heard."
        className="Demo__some-network__share-button">
        <TwitterIcon
          id="twitter"
          size={60}
          round />
      </TwitterShareButton>
      <FacebookShareButton
          url="https://hearsay-app.now.sh/"
          quote="Hearsay - make your voice heard."
          >
            <FacebookIcon
            id="fb"
            size={60}
            round
            />
          </FacebookShareButton>
          <FacebookMessengerShareButton
          url="https://hearsay-app.now.sh/"
          title="Hearsay - make your voice heard."
          >
            <FacebookMessengerIcon
            id="fbmessenger"
            size={60}
            round
            />
          </FacebookMessengerShareButton>
          <RedditShareButton
          url="https://hearsay-app.now.sh/"
          title="Hearsay - make your voice heard."
          >
            <RedditIcon
            id="reddit"
            size={60}
            round
            />
          </RedditShareButton>
          <EmailShareButton
          url="https://hearsay-app.now.sh/"
          title="Hearsay - make your voice heard."
          >
            <EmailIcon
            id="email"
            size={60}
            round
            />
          </EmailShareButton>
          <LinkedinShareButton
          url="https://hearsay-app.now.sh/"
          title="Hearsay - make your voice heard."
          >
            <LinkedinIcon
            id="linkedin"
            size={60}
            round
            />
          </LinkedinShareButton>
                </div>
        </section>
    );
};