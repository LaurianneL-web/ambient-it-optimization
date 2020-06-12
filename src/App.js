import React, { Component, lazy, Suspense } from "react";

import { Layout, Row, Col } from "antd";

import Europeflag from "./images/europe.png";

import "./App.css";

const Title = lazy(() => import('./components/Title'));
const ConnectWith = lazy(() => import('./components/ConnectWith'));
const Schedule = lazy(() => import('./components/Schedule'));
const Pay = lazy(() => import('./components/Pay'));

require("typeface-inter");

const { Header, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <>
          <Layout style={{ backgroundColor: "#EEF5FF" }}>
            <Header style={{ backgroundColor: "#EEF5FF" }} className='header-back'>
              <Row>
                <Col sm={{ span: 22, offset: 1 }} xs={{ span: 23, offset: 1 }}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Title />
                  </Suspense>
                </Col>
              </Row>
            </Header>
          </Layout>
          <br />
          <Row>
            <Col sm={{ span: 20, offset: 2 }} xs={{ span: 23, offset: 1 }}>
              <Suspense fallback={<div>Loading...</div>}>
                <ConnectWith />
                <br />
                <Schedule />
                <br />
                <br />
                <Pay />
              </Suspense>
            </Col>
          </Row>
          <Footer
            style={{
              backgroundColor: "rgb(238, 245, 255)",
              fontSize: 16,
              fontWeight: 500
            }}
          >
            Privacy by design{" "}
            <span style={{ marginLeft: 40 }} aria-label="lock" role="img">
              <img src={Europeflag} alt="europe-flag" className="europe" />
            </span>
            GDPR Compliant
          </Footer>
      </>
    );
  }
}

export default App;
