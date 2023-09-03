import React, { Fragment } from "react";

import { Container, Row, Button, Col, Card, CardBody } from "reactstrap";
import { Icon } from "@iconify/react";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <section className="section section-sm">
      <Container>
        <div className="d-flex p-3">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-red" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-2 text-red">Projects</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>ASE Laboratory Website</h3>
                      <p className="description mt-3">
                        Advanced Software Engineer Laboratory Website built with
                        reactJS and tailwindCSS which helps showcase activities
                        in the ASE Lab.
                      </p>
                      <Fragment>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="react"
                        >
                          <Icon
                            icon="vscode-icons:file-type-reactjs"
                            data-inline="false"
                          ></Icon>
                        </div>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="tailwind"
                        >
                          <Icon
                            icon="vscode-icons:file-type-tailwind"
                            data-inline="false"
                          ></Icon>
                        </div>
                      </Fragment>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="github"
                        href="https://github.com/alfitof/FE-ASELab"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mt-4 bg-gradient-red"
                        href="https://ase-lab.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-arrow-right mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          Demo
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>UMKM Mie Aceh Website</h3>
                      <p className="description mt-3">
                        UMKM Mie Aceh Website built with mongoDB, expressJS,
                        SCSS, and nodeJS which helps UMKM traders sell their
                        products.
                      </p>
                      <Fragment>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="nodejs"
                        >
                          <Icon
                            icon="logos:nodejs-icon"
                            data-inline="false"
                          ></Icon>
                        </div>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="expressjs"
                        >
                          <Icon icon="logos:express" data-inline="false"></Icon>
                        </div>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="mongodb"
                        >
                          <Icon
                            icon="vscode-icons:file-type-mongo"
                            data-inline="false"
                          ></Icon>
                        </div>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="scss"
                        >
                          <Icon
                            icon="vscode-icons:file-type-scss"
                            data-inline="false"
                          ></Icon>
                        </div>
                      </Fragment>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="github"
                        href="https://github.com/alfitof/umkm-web-mieAceh"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>Droozle Store Website</h3>
                      <p className="description mt-3">
                        Droozle Store Website built with PHP, Codeigniter, and
                        Bootstrap which can help sellers display their products
                        on the Website.
                      </p>
                      <Fragment>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="php"
                        >
                          <Icon
                            icon="vscode-icons:file-type-php"
                            data-inline="false"
                          ></Icon>
                        </div>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="codeigniter"
                        >
                          <Icon
                            icon="logos:codeigniter-icon"
                            data-inline="false"
                          ></Icon>
                        </div>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="mysql"
                        >
                          <Icon icon="logos:mysql" data-inline="false"></Icon>
                        </div>
                        <div
                          className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                          id="bootstrap"
                        >
                          <Icon
                            icon="logos:bootstrap"
                            data-inline="false"
                          ></Icon>
                        </div>
                      </Fragment>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="github"
                        href="https://github.com/alfitof/FE-ASELab"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mt-4 bg-gradient-red"
                        href="https://droozle.netlify.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-arrow-right mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          Demo
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>KliniQ Application Design</h3>
                      <p className="description mt-3">
                        KliniQ Application Design built with Figma which can
                        help access doctors, pharmacies, and health insurance
                        easily in the application.
                      </p>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="figma"
                      >
                        <Icon icon="logos:figma" data-inline="false"></Icon>
                      </div>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="success"
                        href="https://www.figma.com/file/3iLspw3IrqBkjEfkM0kwUK/KliniQ-(Tim-Restu-Ibu)?t=XGJkYVPWm0lwEG5E-0"
                        target="_blank"
                        rel="noopener"
                        aria-label="Figma"
                      >
                        <span className="btn-inner--icon">
                          <Icon icon="ph:figma-logo" className="text-white" />
                        </span>
                      </Button>
                      <Button
                        className="btn-icon  mt-4 bg-gradient-red"
                        href="https://www.figma.com/proto/3iLspw3IrqBkjEfkM0kwUK/KliniQ-(Tim-Restu-Ibu)?node-id=26%3A80&scaling=scale-down&page-id=0%3A1&starting-point-node-id=26%3A80"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-arrow-right mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          Demo
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>Portfolio Website</h3>
                      <p className="description mt-3">
                        Portfolio Website built with nextJS and Bootstrap which
                        helps showcase my work and let other people know about
                        my self.
                      </p>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="next"
                      >
                        <Icon
                          icon="vscode-icons:file-type-light-next"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="bootstrap"
                      >
                        <Icon icon="logos:bootstrap" data-inline="false"></Icon>
                      </div>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="github"
                        href="https://github.com/alfitof/portfolio-alfitof"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mt-4 bg-gradient-red"
                        href="https://portfolio-alfitof.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-arrow-right mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          Demo
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>Kokumi Website</h3>
                      <p className="description mt-3">
                        Kokumi Website built with nextJS and tailwindCSS which
                        can grab the visitors attention and present them with a
                        Kokumi product
                      </p>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="html"
                      >
                        <Icon
                          icon="vscode-icons:file-type-light-next"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="css"
                      >
                        <Icon
                          icon="vscode-icons:file-type-tailwind"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="github"
                        href="https://github.com/alfitof/kokumi-drink"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mt-4 bg-gradient-red"
                        href="https://kokumi-drink.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-arrow-right mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          Demo
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>Chicken William Website</h3>
                      <p className="description mt-3">
                        Chicken William Website built with nextJS, tailwindCSS
                        and Sanity.io which can order the menu and present to
                        visitor with a Chicken William products
                      </p>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="html"
                      >
                        <Icon
                          icon="vscode-icons:file-type-light-next"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="css"
                      >
                        <Icon icon="logos:sanity" data-inline="false"></Icon>
                      </div>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="html"
                      >
                        <Icon
                          icon="vscode-icons:file-type-tailwind"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="github"
                        href="#"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                        disabled
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mt-4 bg-gradient-red"
                        href="https://chicken-william.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-arrow-right mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          Demo
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>E-Learning Course App</h3>
                      <p className="description mt-3">
                        E-Learning Course App built with Flutter and Dart which
                        can can buy courses and study them through online
                        learning
                      </p>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="html"
                      >
                        <Icon icon="logos:flutter" data-inline="false"></Icon>
                      </div>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="css"
                      >
                        <Icon icon="logos:dart" data-inline="false"></Icon>
                      </div>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="github"
                        href="https://github.com/alfitof/aplikasi-elearning-kelompok2"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>Rudi Russel Profile</h3>
                      <p className="description mt-3">
                        Rudi Russell Company Profile built with nextJS and
                        tailwindCSS which can introduce the company to people
                      </p>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="html"
                      >
                        <Icon
                          icon="vscode-icons:file-type-light-next"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="html"
                      >
                        <Icon
                          icon="vscode-icons:file-type-tailwind"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="github"
                        href="https://github.com/alfitof/rudi-russel-academy"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mt-4 bg-gradient-red"
                        href="https://rudirussel-academy.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-arrow-right mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          Demo
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h3>Logbook AirNav Website</h3>
                      <p className="description mt-3">
                        AirNav Website Notebook is built with nextJS,
                        tailwindCSS and Firebase which can keep track of all the
                        quality of the tools in AirNav
                      </p>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="html"
                      >
                        <Icon
                          icon="vscode-icons:file-type-light-next"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="html"
                      >
                        <Icon
                          icon="vscode-icons:file-type-firebase"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <div
                        className="icon icon-sm d-inline icon-shape-sm shadow-sm rounded-sm my-1 mr-2"
                        id="html"
                      >
                        <Icon
                          icon="vscode-icons:file-type-tailwind"
                          data-inline="false"
                        ></Icon>
                      </div>
                      <br />
                      <Button
                        className="btn-icon mt-4"
                        color="github"
                        disabled
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mt-4 bg-gradient-red"
                        href="https://log-book-app.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-arrow-right mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          Demo
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
