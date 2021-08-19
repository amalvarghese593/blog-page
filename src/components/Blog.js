import React from "react";
import "./blog.css";
import img1 from "../images/img-01.png";
import img2 from "../images/img-02.png";
import img3 from "../images/img-03.png";
import img4 from "../images/img-04.png";
import img5 from "../images/img-05.jpg";
import img6 from "../images/img-06.png";
import img7 from "../images/img-07.png";

export const Blog = () => {
  return (
    <div className="blog-wrapper">
      {/* <div className="blog-navbar">
        <h2>Navbar goes here</h2>
      </div> */}
      <div className="blog-container-wrapper">
        <div className="blog-container">
          <div className="blog-sub-container container1">
            <img className="welcome-img" src={img1} alt="no image" />
            <p>
              <strong>F</strong>inding the right talent has never been easier.
              WebPipl is a digital platform that helps companies get best
              candidates for their open positions by providing them with access
              to thousands of vetted freelancers across all disciplines and
              industries. This blog post will discuss how this service can help
              your company find the perfect candidate for any position. The Gig
              Recruiter Workforce offers an extensive list of curated
              professionals from different countries, industries, and skill sets
              who are ready to take on new projects now! Freelancers have
              varying rates depending on their experience level and industry
              expertise which means you'll be able to find someone just as good
              as or better than anyone you're currently working with at half the
              price (or even less)!
            </p>
          </div>
          <div className="blog-sub-container container2">
            <img src={img3} alt="no image" />

            <div>
              <h2>Be On Your Own</h2>
              <p>
                <strong>I</strong>f you want to be your own boss, there's never
                been a better time. We have outlined the benefits of being
                self-employed and how it can lead to improved job satisfaction.
                And now is as good a time as any to make that leap because we
                all know what happens when opportunity knocks - you answer! Are
                you ready? Let us help you get started by answering some
                questions about your business goals or working with someone who
                has done this before (we have). We're here for one thing -
                making sure yours truly gets ahead in life! You won't regret it.
              </p>
            </div>
          </div>
          <div className="blog-sub-container container3">
            <img src={img5} alt="no image" />

            <div>
              <h2>Earn More</h2>
              <p>
                <strong>T</strong>he benefits of freelancing are not just about
                freedom. Freelancers have the opportunity to make a great living
                if they put in the right work; and that includes doing their
                research on prospective clients, networking with other
                professionals in their industry, and focusing on building up an
                enviable candidate pool for themselves. If you’re ready to start
                your own freelance career or looking for additional ways to grow
                your current one, get more tips by reading our blog post series
                "Freelance Doesn't Mean Free."
              </p>
            </div>
          </div>
          <div className="blog-sub-container container4">
            <img src={img7} alt="no image" />

            <h2>Work your Style</h2>
            <p>
              <strong>I</strong>f you are thinking about switching jobs, or if
              you want to have the opportunity to work from anywhere in the
              world with your laptop and an Internet connection, then
              freelancing as a recruiter may be for you. You’ll never again need
              to spend hours on end commuting back and forth between home base
              (or wherever) and office space. Instead of sitting at a cubicle
              all day long waiting for that next assignment, now is your chance
              to explore the globe while working remotely! What do we mean by
              remote? Basically, anywhere besides inside a cubicle arrangement
              will be considered “remote” these days. So, feel free but don't
              stop there; take this advice even further than just applying it
              within our industry – apply
            </p>
          </div>
          <div className="blog-sub-container container5">
            <img src={img2} alt="no image" width="500px" />

            <div>
              <h2>Choose your Requirements</h2>
              <p>
                <strong>I</strong>magine you are a recruiter at an agency, and
                your firm decides to take on a new client. You need someone who
                can be the face of this company in 30 days or less - not enough
                time for recruiting! But wait; what if it was YOUR decision?
                Then there is no deadline pressure because YOU get to choose how
                many requirements you want, so that means when one needs more
                attention than others, they don't go neglected. Plus as
                freelancer-recruiter now all jobs will have equal importance
                since each person has their own special niche within recruiting
                rather than having just 1 job title which might seem only
                relevant during certain times in history.
              </p>
            </div>
          </div>
          <div className="blog-sub-container container6">
            <img src={img6} alt="no image" width="500px" />

            <div>
              <h2>Do it in your free time</h2>
              <p>
                <strong>F</strong>reelance recruiting is a great way to generate
                extra income. It can help you pay off debt and save money for
                the future, while also giving you fun opportunities!
              </p>
            </div>
          </div>
          <div className="blog-sub-container container7">
            <img src={img4} alt="no image" width="500px" />

            <h2>Ownership</h2>
            <p>
              <strong>U</strong>nlike a lot of companies, you have the control
              on your resumes, you can see at each level what is happening with
              your resume and status of your submissions, WebPipl has been built
              in such a way that the possibility of a duplicate resume is almost
              zero so this gives you an opportunity to earn on each resume you
              upload in the system.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="blog-footer">
        <h2>footer goes here</h2>
      </div> */}
    </div>
  );
};
