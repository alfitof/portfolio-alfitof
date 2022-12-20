import React from 'react';
import { SkillBars } from '../portfolio';
import { Container, Row, Progress, Col } from 'reactstrap';

import { Fade } from 'react-reveal';

import GreetingLottie from '../components/DisplayLottie';

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section" style={{ marginBottom: '7rem' }}>
        <div className="d-flex px-4 pt-4 pb-2">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-atom text-purple" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-2 text-purple">Proficiency</h4>
          </div>
        </div>
        <Fade bottom duration={2000}>
          <Row>
            <Col lg="6" className="pt-5">
              {SkillBars.map((skill) => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress max="100" value={skill.progressPercentage} color="purple" role="progressbar" aria-label={skill.Stack} />
                  </div>
                );
              })}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" style={{ width: '75%', height: '100%' }} />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
