import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const { name, description, svn_url, languages_url } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>
            {!description ? "" : description || <Skeleton count={3} />}{" "}
          </Card.Text>
          {svn_url ? (
            <a
              href={svn_url}
              target=" _blank"
              className="btn btn-outline-secondary"
            >
              <i className="fab fa-google-play" /> Live App
            </a>
          ) : (
            <Skeleton count={1} />
          )}
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const data = languages_url;

  const array = [];
  // eslint-disable-next-line
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <a
              key={language}
              className="badge badge-light card-link"
              href={repo_url + `/search?l=${language}`}
              target=" _blank"
            >
              {language}
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

export default ProjectCard;
