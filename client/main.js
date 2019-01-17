/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-stickynode';

import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import SecretTooltip from './components/SecretTooltip.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';

const websiteContent = (
  <div>

    <TitleBar id="titlebar">
    </TitleBar>

    <div style={{ height: '200px' }}></div>

    <Sticky enabled={true}>
      <Menu id="menu"
        items={[{ label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
                { label: 'THE WEDDING', href: 'wedding' },
                { label: 'RSVP', href: 'rsvp' },
                { label: 'LOGISTICS', href: 'logistics' },
                { label: 'THINGS TO DO', href: 'thingstodo' },
                { label: 'GIFTS', href: 'gifts' }]}>
      </Menu>
    </Sticky>

    <TopicContainer id="brideandgroom" name="brideandgroom" title="The Bride and Groom">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <p>
              <a><img className="vthumbnail" src="https://s3.amazonaws.com/davis-wedding-bucket/vivianababy.JPG" alt="Viviana's bio" /></a>
              Viviana Isis Haynes grew up in Spring, TX, and was born into and amazing, loving, and supportive family, She is the eldest child of Tibisuly and Mark Haynes, and has been fortunate to be big sister to Karina and Mark III.  Also important in her life are her two pups, Mona and Mimi.  Viviana will soon be expanding her family with her union to Montre Laron Davis.</p>
          </div>

          <div className="one-half column">
            <p>
              <a><img className="vthumbnail" src="https://s3.amazonaws.com/davis-wedding-bucket/IMG_4434.JPG" alt="Montre's bio" /></a>
              Montre Laron Davis was born in Tulsa, Oklahoma to Marian Jackson and Michael Davis. Although, you wouldn't believe if you saw how much he cheers for the Houston Texans! (it was meant to be 😊) The moment he met Viviana, he couldn’t wait to spend the rest of his life with her. 
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>
        <img className="large-image" style={{height: '30%', width: '30%'}} src="https://s3.amazonaws.com/davis-wedding-bucket/IMG_0469.jpeg" alt="Kal Proposing To Jocelyn" />
      </p>

      <h2>GOD'S PLAN</h2>
      <p>
      God brought these two love birds together when they needed each other the most and He continues to play a big part in their lives.  Their journey together has been unbelievable since day one and filled with so many blessings and adventures that will continue in the next chapter of their lives, beginning with the celebration of their wedding with all of their closest friends and family.
      </p>
    </TopicContainer>

    <TopicContainer id="wedding" title="Wedding">
      <div className="container">
        <div className="twelve column" style={{textAlign: "center"}}>
          <h2>CEREMONY &amp; Reception</h2>
          <p>5:00 - 10:30 pm @ The Springs in Conroe</p>
          <p>
            <a href="http://thespringsevents.com/houston-wedding-venues/lake-conroe-tx.html"><img className="location-image" src="https://s3.amazonaws.com/davis-wedding-bucket/venue.jpg" alt="Sveti Marak (St Mark's)" /></a>
          </p>
          <p style={{textAlign: "center"}}>
            <a href="https://goo.gl/maps/8r3UTvvuzUK2">Google Maps</a>
          </p>
        </div>
      </div>

      <hr />

      <h2>ON THE WEDDING DAY</h2>
      <p>The ceremony will start at 5:00 pm (CST) at the Spring Venue Lake Conroe location. Please arrive 30 minutes before so everybody can get
         seated and so we can start on time.
      </p>
      <p>After the ceremony someone will lead you to the reception where drinks and appetizers will be served.
      </p>
      <p>
        Wedding attire is formal. 
      </p>

      <hr />
    </TopicContainer>

    <TopicContainer id="rsvp" title="RSVP">
      <RSVPForm>
      </RSVPForm>
    </TopicContainer>

    <TopicContainer id="accomodation" title="Accommodations">
      <hr />

      {/* <h2>ACCOMMODATIONS</h2> */}
      <p>
        For your convenience, a block of rooms have been reserved for the <i>"Haynes/Davis Wedding"</i> at Baymont Inn & Suites Conroe/The Woodlands.
      </p>
      <p>
         <a href="https://www.wyndhamhotels.com/baymont/conroe-texas/baymont-inn-and-suites-conroe/overview"><img className="location-image" src="https://s3.amazonaws.com/davis-wedding-bucket/baymont.jpg" alt="Baymont Inn & Suites" /></a>
      </p>
      <p style={{textAlign: "center"}}>
          <a href="https://goo.gl/maps/PU6ij45F2T32">Google Maps</a>
      </p>
    </TopicContainer>

    <TopicContainer id="gifts" title="Gifts">
      <p>Dear family and friends,</p>
      <p>We feel honored that you are all travelling a long way to come and celebrate our special day with us. For this reason we don't
         want anyone to feel obliged to buy us gifts. Your presence is the biggest gift.
      </p>
      <p>If you do feel that you want to give us a gift please. We are registered at Amazon and Target.
      </p>
      <p>Thank you in advance!
      </p>

      <div className="container">
        <div className="row">
          <div className="col">
            <a href="https://www.amazon.com/wedding/viviana-haynes-montre-davis-houston-february-2019/registry/1SNN16PJ9WPG0">
              <img width="40%" src="https://s3.amazonaws.com/davis-wedding-bucket/amazon_logo_1_.png"></img>
            </a>
          </div>
          <div className="col"> 
          <img width="40%" src="https://s3.amazonaws.com/davis-wedding-bucket/target.jpg"></img>
          </div>
        </div>
      </div>
    </TopicContainer>

  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
