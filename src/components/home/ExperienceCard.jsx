import React from "react";
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col>
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          <h4>{data.role}</h4>
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
