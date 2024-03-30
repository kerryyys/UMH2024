// Report.jsx
import React from "react";
import "../components-css/Report.css";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function Report() {
  const [formData, setFormData] = useState({
    companyName: "",
    meetingNumber: "",
    meetingDate: "",
    complianceOfficer: "",
    prevStatus: "",
    financialYearEnd: "",
    market: "",
    sector: "",
    announcementDate: "",
    groupRevenue: "",
    groupProfit: "",
    totalAssets: "",
    currentCash: "",
    prevCash: "",
    currentTotalDebt: "",
    prevTotalDebt: "",
    currentInterestIncome: "",
    prevInterestIncome: "",
    currentDividendIncome: "",
    prevDividendIncome: "",
    currentNonShariah: "",
    prevNonShariah: "",
    benchmark5: "",
    benchmark20: "",
    screeningStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/generate_pdf",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log("PDF generated successfully on the backend");
        alert("PDF downloaded successfully");
      } else {
        console.error("Failed to generate PDF on the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="report-container">
      <div className="report-header">
        <h3>Screening Report</h3>
      </div>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="companyName">
              <Form.Label column sm="5">
                Company Name
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="meetingNumber">
              <Form.Label column sm="5">
                Meeting Number
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="meetingNumber"
                  value={formData.meetingNumber}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="meetingDate">
              <Form.Label column sm="5">
                Meeting Date
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="meetingDate"
                  value={formData.meetingDate}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="complianceOfficer">
              <Form.Label column sm="5">
                Compliance Officer
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="complianceOfficer"
                  value={formData.complianceOfficer}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="prevStatus">
              <Form.Label column sm="5">
                Previous Status
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="prevStatus"
                  value={formData.prevStatus}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="financialYearEnd">
              <Form.Label column sm="5">
                Financial Year Ended
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="financialYearEnd"
                  value={formData.financialYearEnd}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="market">
              <Form.Label column sm="5">
                Market
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="market"
                  value={formData.market}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="sector">
              <Form.Label column sm="5">
                Sector
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="announcementDate">
              <Form.Label column sm="5">
                Announcement Date
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="announcementDate"
                  value={formData.announcementDate}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <p>Financial Parameter</p>
            <Form.Group as={Row} className="mb-3" controlId="groupRevenue">
              <Form.Label column sm="5">
                Group Revenue
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="number"
                  name="groupRevenue"
                  value={formData.groupRevenue}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="groupProfit">
              <Form.Label column sm="5">
                Group Profit
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="number"
                  name="groupProfit"
                  value={formData.groupProfit}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="totalAssets">
              <Form.Label column sm="5">
                Total Assets
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="number"
                  name="totalAssets"
                  value={formData.totalAssets}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <p>Financial Ratio: Cash Ratio</p>
            <p>Total cash</p>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="currentCash">
                <Form.Label>Current</Form.Label>
                <Form.Control
                  type="number"
                  name="currentCash"
                  value={formData.currentCash}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="prevCash">
                <Form.Label>Previous</Form.Label>
                <Form.Control
                  type="number"
                  name="prevCash"
                  value={formData.prevCash}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <p>Financial Ratio: Debt Ratio</p>
            <p>Total debt</p>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="currentTotalDebt">
                <Form.Label>Current</Form.Label>
                <Form.Control
                  type="number"
                  name="currentTotalDebt"
                  value={formData.currentTotalDebt}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="prevTotalDebt">
                <Form.Label>Previous</Form.Label>
                <Form.Control
                  type="number"
                  name="prevTotalDebt"
                  value={formData.prevTotalDebt}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <p>Interest income</p>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="currentInterestIncome">
                <Form.Label>Current</Form.Label>
                <Form.Control
                  type="number"
                  name="currentInterestIncome"
                  value={formData.currentInterestIncome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="prevInterestIncome">
                <Form.Label>Previous</Form.Label>
                <Form.Control
                  type="number"
                  name="prevInterestIncome"
                  value={formData.prevInterestIncome}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <p>Dividend income</p>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="currentDividendIncome">
                <Form.Label>Current</Form.Label>
                <Form.Control
                  type="number"
                  name="currentDividendIncome"
                  value={formData.currentDividendIncome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="prevDividendIncome">
                <Form.Label>Previous</Form.Label>
                <Form.Control
                  type="number"
                  name="prevDividendIncome"
                  value={formData.prevDividendIncome}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <p>Shariah Non-Compliant Activities</p>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="currentNonShariah">
                <Form.Label>Current</Form.Label>
                <Form.Control
                  type="number"
                  name="currentNonShariah"
                  value={formData.currentNonShariah}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="prevNonShariah">
                <Form.Label>Previous</Form.Label>
                <Form.Control
                  type="number"
                  name="prevNonShariah"
                  value={formData.prevNonShariah}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group as={Row} className="mb-3" controlId="benchmark5">
              <Form.Label column sm="5">
                5% benchmark
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="benchmark5"
                  value={formData.benchmark5}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="benchmark20">
              <Form.Label column sm="5">
                20% benchmark
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="benchmark20"
                  value={formData.benchmark20}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="screeningStatus">
              <Form.Label column sm="5">
                Screening Status
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="screeningStatus"
                  value={formData.screeningStatus}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
              Generate Report
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Report;
