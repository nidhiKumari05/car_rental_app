import React, { useState } from "react";
import { Form, Row, Col, Button, Container, InputGroup } from "react-bootstrap";
import DoneIcon from '@mui/icons-material/Done';
import carImg from "./blue_modern_car_closeup.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "./searchForm.css"; // Add this for custom styling

const SearchForm = () => {
  const [pickUpDate, setPickUpDate] = useState("Nov 7");
  const [dropOffDate, setDropOffDate] = useState("Nov 8");
  const [pickUpTime, setPickUpTime] = useState("10:30 AM");
  const [dropOffTime, setDropOffTime] = useState("10:30 AM");
  const [dropdown, showDropdown] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState(""); // State for selected brand
  const [selectedDiscountType, setSelectedDiscountType] = useState(""); // State for selected discount type
  const [showBrandDropdown, setShowBrandDropdown] = useState(false); // State to toggle brand dropdown
  const [showDiscountTypeDropdown, setShowDiscountTypeDropdown] =
    useState(false); // State to toggle discount type dropdown

  const handleToggleBrandDropdown = () => {
    setShowBrandDropdown(!showBrandDropdown);
  };

  const handleSelectBrand = (brand) => {
    setSelectedBrand(brand);
    setShowBrandDropdown(false); // Close dropdown after selection
  };

  const handleToggleDiscountTypeDropdown = () => {
    setShowDiscountTypeDropdown(!showDiscountTypeDropdown);
  };

  const handleSelectDiscountType = (type) => {
    setSelectedDiscountType(type);
    setShowDiscountTypeDropdown(false); // Close dropdown after selection
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hours = 0; hours < 24; hours++) {
      for (let mins = 0; mins < 60; mins += 15) {
        const timeString = `${String(hours).padStart(2, "0")}:${String(
          mins
        ).padStart(2, "0")}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const handlePickUpDate = (event, picker) => {
    setPickUpDate(picker.startDate.format("MMM D"));
  };

  const handleDropOffDate = (event, picker) => {
    setDropOffDate(picker.startDate.format("MMM D"));
  };

  return (
    <Container className="mt-4">
      {/* Existing title on top */}
      <h2 style={{ fontSize: "2rem" }}>Search cars</h2>

      {/* Buttons below the title */}
      <div className="d-flex  mb-4">
        <Button
          variant="primary"
          style={{
            borderRadius: "2rem",
            backgroundColor: "#c8dff9", // Light blue color for Rental Cars
            color: "#0d4eaf",
            border: "none",
            padding: "0.5rem 1.5rem",
            marginRight: "1rem",
            fontSize: "1rem",
          }}
        >
          Rental Cars
        </Button>

        <Button
          // variant="outline-primary"
          style={{
            borderRadius: "0rem",
            padding: "0.5rem 1.5rem",
            border: "none",
            backgroundColor: "white",
            color: "black",
            fontSize: "1rem",
          }}
        >
          Airport Transportation
        </Button>
      </div>

      {/* Form below the buttons */}
      <Form>
        <Row>
          <Col md={6} xs={12}>
            <Form.Group controlId="formPickUp">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Pick-up location" />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6} xs={12}>
            <Form.Group controlId="formPickUp">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Same as pick up" />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-2">
          {/* Pick-up Date */}
          <Col md={3} xs={12}>
            <Form.Group controlId="formPickUpDate">
              <Form.Label className="small-font-label">Pick-up date</Form.Label>
              <DateRangePicker singleDatePicker onApply={handlePickUpDate}>
                <InputGroup className="custom-input">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    value={pickUpDate || "Pick-up date"}
                    readOnly
                    className="small-font-input"
                  />
                </InputGroup>
              </DateRangePicker>
            </Form.Group>
          </Col>

          {/* Drop-off Date */}
          <Col md={3} xs={12}>
            <Form.Group controlId="formDropOffDate">
              <Form.Label className="small-font-label">
                Drop-off date
              </Form.Label>
              <DateRangePicker singleDatePicker onApply={handleDropOffDate}>
                <InputGroup className="custom-input">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    value={dropOffDate || "Drop-off date"}
                    readOnly
                  />
                </InputGroup>
              </DateRangePicker>
            </Form.Group>
          </Col>

          {/* Pick-up Time */}
          <Col md={3} xs={12}>
            <Form.Group controlId="formPickUpTime">
              <Form.Label className="small-font-label">Pick-up time</Form.Label>
              <InputGroup className="custom-input">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faClock} />
                </InputGroup.Text>
                <Form.Control
                  as="select"
                  value={pickUpTime}
                  onChange={(e) => setPickUpTime(e.target.value)}
                >
                  <option>7:30 AM</option>
                  {generateTimeOptions().map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>

          {/* Drop-off Time */}
          <Col md={3} xs={12}>
            <Form.Group controlId="formDropOffTime">
              <Form.Label className="small-font-label">
                Drop-off time
              </Form.Label>
              <InputGroup className="custom-input">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faClock} />
                </InputGroup.Text>
                <Form.Control
                  as="select"
                  value={dropOffTime}
                  onChange={(e) => setDropOffTime(e.target.value)}
                >
                  <option>7:30 AM</option>
                  {generateTimeOptions().map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mt-3 d-flex align-items-center">
          {/* AARP Member Rates Checkbox */}
          <Form.Check
            type="checkbox"
            id="includeAARP"
            label="Include AARP member rates"
            className="me-2"
          />

          {/* Membership Info Text */}
        </Form.Group>
        <Form.Text className="text-muted ms-4">
          Membership is required and verified at pick-up.
        </Form.Text>
        <div className="d-flex">
          <Form.Group controlId="formDiscountCode" className="mt-2 me-3">
            <Form.Label className="small-font-label">
              Preferred Brand
            </Form.Label>
            <InputGroup className="custom-input" style={{ width: "350px" }}>
              <Form.Control
                as="input" // Change this to input for custom dropdown appearance
                value={selectedBrand}
                onClick={handleToggleBrandDropdown} // Show/hide dropdown on click
                readOnly // Prevent manual input
                placeholder="Select a brand..."
              />
              <InputGroup.Text
                onClick={handleToggleBrandDropdown}
              ></InputGroup.Text>
            </InputGroup>

            {showBrandDropdown && (
              <div className="dropdown-menu show" style={{ width: "350px" }}>
                <div
                  className="dropdown-item"
                  onClick={() => handleSelectBrand("Budget")}
                >
                  Budget
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleSelectBrand("Rental Car Company")}
                >
                  Rental Car Company
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleSelectBrand("Avis")}
                >
                  Avis
                </div>
              </div>
            )}
          </Form.Group>

          <Form.Group controlId="formDiscountType" className="mt-2 me-3">
            <Form.Label className="small-font-label">Discount Type</Form.Label>
            <InputGroup className="custom-input" style={{ width: "350px" }}>
              <Form.Control
                as="input"
                value={selectedDiscountType}
                onClick={handleToggleDiscountTypeDropdown} // Show/hide dropdown on click
                readOnly // Prevent manual input
                placeholder="Select discount type..."
              />
              <InputGroup.Text
                onClick={handleToggleDiscountTypeDropdown}
              ></InputGroup.Text>
            </InputGroup>

            {showDiscountTypeDropdown && (
              <div className="dropdown-menu show" style={{ width: "350px" }}>
                <div
                  className="dropdown-item"
                  onClick={() =>
                    handleSelectDiscountType("I don't have a code")
                  }
                >
                  I don't have a code
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleSelectDiscountType("Corporate")}
                >
                  Corporate
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleSelectDiscountType("Contracted")}
                >
                  Contracted
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleSelectDiscountType("Special")}
                >
                  Special
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleSelectDiscountType("Advertised")}
                >
                  Advertised
                </div>
              </div>
            )}
          </Form.Group>
        </div>

        <Form.Group className="mt-3">
          <Button
            variant="primary"
            type="submit"
            style={{ borderRadius: "2rem", padding: "0.7rem", width: "180px" }}
          >
            Search
          </Button>
        </Form.Group>
      </Form>

      <div className="mt-5 d-flex">
        <div className="d-flex">
        <div>
         <DoneIcon/>
        </div>
        <div className="ms-2">
        Compare car suppliers and package your flight, hotel, and car to save.
        </div>
        </div>
        <div className="d-flex">
        <div>
         <DoneIcon/>
        </div>
        <div className="ms-2">
        Compare car suppliers and package your flight, hotel, and car to save.
        </div>
        </div>
        <div className="d-flex">
        <div>
         <DoneIcon/>
        </div>
        <div className="ms-2">
        Enjoy flexibility with penalty-free cancellation on many/select car rentals.
        </div>
        </div>

      </div>

      <div style={{ position: 'relative', width: '850px', borderRadius: '2rem', overflow: 'hidden',border: '1px solid lightgray',  }}>
        <img src={carImg} alt="blue car"
        style={{width:"850px",borderRadius:"2rem"}}
        />
        <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          padding: '10px',
          
          borderRadius: '0 0 2rem 2rem', // Round bottom corners
          boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)', // Optional shadow for better visibility
        }}
      >
        <h6 style={{ textAlign:"left" }}>Looking for car rental deals?</h6>
        <h7 style={{ textAlign:"left" }}>find and book cheap last-minute car rentals!</h7>
      </div>
      </div>
    </Container>
  );
};

export default SearchForm;
