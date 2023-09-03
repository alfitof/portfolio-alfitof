import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    experience && (
      <section className="section section-sm">
        <Container>
          <div className="d-flex px-4 pb-5">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-red" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-2 text-red">Experience</h4>
            </div>
          </div>
          <div className="align-items-start">
            {experience.map((data, i) => {
              return <ExperienceCard key={i} data={data} />;
            })}
          </div>
        </Container>
      </section>
    )
  );
};

export default Experience;
