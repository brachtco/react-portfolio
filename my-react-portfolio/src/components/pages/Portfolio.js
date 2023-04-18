import React from "react";
import knowYourMusicImage from "../../assets/know-your-music.png";
import mealerDealerImage from "../../assets/the-mealer-dealer.png";

export default function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Portfolio</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://brachtco.github.io/know-your-music/" target="_blank">
                {" "}
                <img
                  src={knowYourMusicImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="know-your-music"
                />
              </a>
            </div>
            <div className="job-text">
              <h3>Know Your Music</h3>
              <p>
                Know Your Music is a website that allows the user to search up
                any music artist and recieve relevant information about them.
                When the user types an artist name into the input field and
                clicks submit the artist information will appear on the screen
                including: the name of the artist, a short bio of the artist
                with a link to Last.fm with more details, an image of one of the
                artist albums and the genres of the artist.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img2">
              <a href="https://the-mealer-dealer-production.up.railway.app/" target="_blank">
                {" "}
                <img
                  src={mealerDealerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="the-mealer-dealer"
                />
              </a>
            </div>
            <div className="job-text2">
              <h3>The Mealer Dealer</h3>
              <p>
                The Mealer Dealer is a meal prep app that allows users to input
                various criteria, which has the app select a meal based on the
                criteria. When a user logs in they are directed to the homepage.
                Then they can click the create a meal button or the view all
                meals button. The create a meal button takes them to the build
                your meal page, and they enter the following criteria: Total
                Time, Quanity of Meals, Quantity of People and Choose a Protein.
                When they submit the form, they will see all the results that
                match that their input. When they click on the recipe, they will
                then find ingredients and instructions for that meal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
