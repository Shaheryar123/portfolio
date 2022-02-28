import React from "react";
import styles from "./experience.module.scss";
import ExperienceCard from "./ExperienceCard";
import { Container } from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <div fluid className="bg-white">
          <h2 className="display-4 mt-5 mb-5 text-center">
            {experiences.heading}
          </h2>
          <div className={styles.expCont}>
            {experiences.data.map((data) => {
              return (
                <div>
                  <ExperienceCard key={data.company} data={data} />;
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
