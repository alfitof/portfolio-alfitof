import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    skillsSection && (
      <Container className="text-center my-5 section ">
        <div className="d-flex px-4 pt-4 pb-2">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-settings text-red" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-2 text-red">{skillsSection.title}</h4>
          </div>
        </div>
        {skillsSection.data.map((section, index) => {
          return (
            <Row className="my-5" key={index}>
              <Col lg="6" className="order-2 order-lg-1">
                <Fade left duration={2000}>
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Fade>
              </Col>
              <Col lg="6" className="order-1 order-lg-2 pt-4 mb-5">
                <Fade right duration={2000}>
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-4">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, "")}
                          >
                            <Icon
                              icon={skill.fontAwesomeClassname}
                              data-inline="false"
                            ></Icon>
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replace(/\s/g, "")}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default Skills;
