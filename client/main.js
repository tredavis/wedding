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
              <a href="img/jocelyn-baby.jpg"><img className="thumbnail" src="img/jocelyn-baby.jpg" alt="Viviana" /></a>
              Viviana is very cheesy.
            </p>
          </div>

          <div className="one-half column">
            <p>
              <a href="img/kal-baby.jpg"><img className="thumbnail" src="img/kal-baby.jpg" alt="Montre" /></a>
              Montre is very cheesy.
            </p>
          </div>
        </div>
      </div>

      <hr />

      {/* <p>
        <img className="large-image" src="img/proposal.jpg" alt="Kal Proposing To Jocelyn" />
      </p> */}

      <h2>OUR STORY</h2>
      <p>
        Being children of the modern day and age, our story began with venturing onto OK Cupid. As hesitant as one of us was to engage
        herself with a complete stranger online (while the other happily explored with enthusiasm) on our first date it soon became
        apparent that we met the natural occurrences when 2 people meet and all feelings of the unknown disappeared because at that moment
        right in front of me I was meeting my best friend. As the cliche tale goes, the rest is history.
      </p>
    </TopicContainer>

    <TopicContainer id="wedding" title="Wedding">
      <div className="container">
        <div className="twelve column" style={{textAlign: "center"}}>
          <h2>CEREMONY &amp; Reception</h2>
          <p>5:00 - 9:00 pm @ The Springs in Conroe</p>
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
      <p>Once on the island in Hvar Town there are various accommodation options ranging from fancy hotels to renting an apartment
         on <a href="https://goo.gl/uHTDYn">AirBnB</a>. The wedding will be in the Amfora Resort so any accommodation within walking
         distance from there should be fine.
      </p>
      <p>From our research we have found that hotels are fairly expensive and there are very nice AirBnB options available, so we highly
         recommend doing that.
      </p>
      <p>For guests wishing to stay in a hotel, the <a href="http://www.suncanihvar.com/">Suncani Hvar</a> chain of hotels offers a 20%
         discount using <SecretTooltip fnTooltip={() => { return 'WEDDKALOIANJOCELYN'; }}>this code</SecretTooltip> (please click on the
         'this' in order to show it). The code must be entered in the <i>"Corporate/Promo Code ?"</i> section for the discounted prices to
         apply and is valid for staying 5 days prior and 5 days after the wedding day. While this code indeed reduces the listed prices,
         we have found that booking through <a href="https://goo.gl/2xzaIg">Expedia</a> or <a href="https://goo.gl/z6zsZk">Hotels.com</a>&nbsp;
         shows about the same prices or in some cases even cheaper, so please bear that in mind as well.
      </p>
    </TopicContainer>

    <TopicContainer id="gifts" title="Gifts">
      <p>Dear family and friends,</p>
      <p>We feel honoured that you are all travelling a long way to come and celebrate our special day with us. For this reason we don't
         want anyone to feel obliged to buy us gifts. Your presence is the biggest gift.
      </p>
      <p>If you do feel that you want to give us a gift please remember that just like you, we will only have a suitcase full of clothes
        so we won't be able to carry any items back.
      </p>
      <p>Thank you in advance!
      </p>
    </TopicContainer>

  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
