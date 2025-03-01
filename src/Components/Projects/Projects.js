import { Row, Col, Card } from "antd";
import "./Projects.css";
export const Projects = () => {
  const handleHover = (e) => {
    e.target.style.cursor = "none";
    e.target.style.color = "rgba(255, 255, 255, 0.85)";
    e.target.style["border-bottom"] = "none";
  };
  return (
    <div id="projects">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={6}
          xl={6}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            className="projects-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{
              borderBottom: "2px solid rgb(168, 164, 164)",
              margin: "5%",
            }}
          >
            <b>Projects</b>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={6} xl={6} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="chatting-app-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Sketchbook - Online Drawing Tool"
            extra={
              <a
                onMouseOver={handleHover}
                style={{ color: "white" }}
                href="https://sketchbook-sigma.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            }
          >
            <p
              className="chatting-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
 Designed and implemented Sketchbook, an advanced online drawing tool, using Next.js for the frontend and Node.js for the
backend.Integrated Socket.io to provide real-time updates, ensuring instantaneous visibility of changes during collaborative editing. Enhanced user experience with seamless, live interactions and smooth drawing capabilities.
            </p>
            <p
              className="chatting-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "27px",
              }}
            >
              ReactJS, NodeJS, ExpressJS, MongoDB, SocketIO
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="discord-musicbot-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Twitter Airflow Data Engineering"
            extra={
              <a
                onMouseOver={handleHover}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
                href="https://github.com/gargpuneet438/twitter-airflow-data-engineering-Project"
              >
                GitHub
              </a>
            }
          >
            <p
              className="musicbot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
Data Extraction: Uses Apache Airflow to extract data from the Twitter API.
Data Processing: Processes the extracted data using pandas.
Data Loading: Loads the processed data into an AWS S3 bucket in CSV format.            </p>
            <p
              className="musicbot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "20px",
              }}
            >
python airflow s3-bucket data-engineering            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        {/* <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} /> */}
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
