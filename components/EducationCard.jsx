import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';

import { Fade } from 'react-reveal';

const EducationCard = ({ education }) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h4 className="text-white">{education.schoolName}</h4>
              <h6 className="text-white">{education.subHeader}</h6>
              <Badge color="success" className="mr-1 text-white">
                {education.duration}
              </Badge>
              {education.grade && (
                <Badge color="primary" className="mr-1 text-white">
                  {education.grade}
                </Badge>
              )}

              <ul className="mt-3 text-white">
                {education.descBullets
                  ? education.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
