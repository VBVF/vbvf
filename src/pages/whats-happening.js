import React, { useState, useEffect } from "react";
import { sanity } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import { format } from "date-fns";
import { Spinner } from "reactstrap";
import "../css/whats-happening.scss";
import UpcomingEvents from "../components/upcoming-events";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";

export default function WhatsHappening() {
  const [announcement, setAnnouncement] = useState();
  const [noAnnouncement, setNoAnnouncement] = useState(false);
  const [isAnnouncementLoading, setIsAnnouncementLoading] = useState(true);
  const [faq, setFaq] = useState();
  const [isFaqLoading, setIsFaqLoading] = useState(true);

  const announcementQuery = `*[_type == "biWeeklyAnnouncements" ] | order(_createdAt desc) [0] `;
  const faqQuery = `*[_type == "faq" && title == "About Page"] [0..3] {
    faqs
  }`;
  useEffect(() => {
    sanity
      .fetch(announcementQuery)
      .then((response) => {
        console.log(response);
        if (response === null) {
          setNoAnnouncement(true);
          setIsAnnouncementLoading(false);
        } else {
          setAnnouncement(response);
          setIsAnnouncementLoading(false);
        }
      })
      .catch(() => {
        setNoAnnouncement(true);
      });
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    sanity.fetch(faqQuery).then((response) => {
      setFaq(response[0].faqs);
      setIsFaqLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="announcements">
      {noAnnouncement ? (
        <>
          <p>Looks like there's no announcements.</p>
          <p>
            Please try again later. In the meantime, check out our FAQs below.
          </p>
        </>
      ) : isAnnouncementLoading ? (
        <Spinner />
      ) : (
        <>
          <h5>{format(new Date(announcement._createdAt), "PPP")}</h5>
          <h1>VBVF Announcements</h1>
          <div className="announcements-video">
            <iframe
              allowFullScreen
              title={announcement._id}
              src={`https://player.vimeo.com/video/${announcement.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`}
            ></iframe>
          </div>
          <UpcomingEvents />
          <div className="announcements-text">
            <PortableText blocks={announcement?.text} />
          </div>
        </>
      )}

      {isFaqLoading ? (
        <Spinner />
      ) : (
        <>
          <FrequentlyAskedQuestions faq={faq} />
        </>
      )}
    </div>
  );
}
