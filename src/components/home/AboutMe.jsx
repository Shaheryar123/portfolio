import React from "react";
import styles from "./about.module.scss";
import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
    // eslint-disable-next-line
  }, [link]);

  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

  return (
    <div
      style={{ backgroundColor: "#000" }}
      id="aboutme"
      className="jumbotron jumbotron-fluid m-0"
    >
      <div className="container container-fluid">
        <div
          className="row"
          style={{
            alignItems: "center",
          }}
        >
          <div id="stars2"></div>
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                // className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                className={styles.profileImg}
              />
            )}
          </div>

          <div
            style={{ color: "#fff" }}
            className={`col-lg-${showPic ? "7" : "12"}`}
          >
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
