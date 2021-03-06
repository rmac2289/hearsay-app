import React, { useState } from "react";
import "./WriteReview.css";
import { Textarea, Input, Button } from "../../Utils/Utils";

export default function WriteReview({
  state,
  onChangeState,
  deptName,
  onChangeDept,
  handleAddReview,
}) {
  const [setNature, setNatureState] = useState("");
  const [setComments, setCommentsState] = useState("");
  const [setRating, setRatingState] = useState("");
  const [setDateMonth, setDateMonthState] = useState("");
  const [setDateDay, setDateDayState] = useState("");
  const [setDateYear, setDateYearState] = useState("");

  function getNatureText(e) {
    setNatureState(e.target.value);
  }
  function getCommentsText(e) {
    setCommentsState(e.target.value);
  }
  function getRating(e) {
    setRatingState(e.target.value);
  }
  function getDateMonth(e) {
    if (e.target.value.length < 2) {
      setDateMonthState(`0${e.target.value}`);
    } else {
      setDateMonthState(e.target.value);
    }
  }
  function getDateDay(e) {
    setDateDayState(e.target.value);
  }

  function getDateYear(e) {
    setDateYearState(e.target.value);
  }
  function reset() {
    setNatureState("");
    setCommentsState("");
    setDateMonthState("");
    setDateDayState("");
    setDateYearState("");
    setRatingState("");
  }
  const handleSubmit = (e) => {
    reset();
    const element = document.getElementById("Review");
    e.preDefault();
    const incidentDate = `${setDateYear}-${setDateMonth}-${setDateDay}`;
    const review_fields = {
      state: state,
      department: deptName,
      nature: setNature,
      rating: setRating,
      comments: setComments,
      incident_date: incidentDate,
      user: sessionStorage.getItem("username"),
    };

    if (!review_fields) {
      return;
    }
    handleAddReview(e, review_fields);
    element.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };
  const setMax = () => {
    if (
      setDateMonth === "01" ||
      setDateMonth === "1" ||
      setDateMonth === "03" ||
      setDateMonth === "3" ||
      setDateMonth === "05" ||
      setDateMonth === "5" ||
      setDateMonth === "07" ||
      setDateMonth === "7" ||
      setDateMonth === "08" ||
      setDateMonth === "8" ||
      setDateMonth === "10" ||
      setDateMonth === "12"
    ) {
      return "31";
    } else if (
      setDateMonth === "04" ||
      setDateMonth === "4" ||
      setDateMonth === "06" ||
      setDateMonth === "6" ||
      setDateMonth === "09" ||
      setDateMonth === "9" ||
      setDateMonth === "11"
    ) {
      return "30";
    } else if (
      (setDateMonth === "02" || setDateMonth === "2") &&
      setDateYear !== "2000" &&
      setDateYear !== "2004" &&
      setDateYear !== "2008" &&
      setDateYear !== "2012" &&
      setDateYear !== "2016" &&
      setDateYear !== "2020"
    ) {
      return "28";
    } else {
      return "29";
    }
  };
  return (
    <main>
      <section className="section">
        <header id="banner">
          <h1 className="newHeader">New Review</h1>
        </header>
        <form className="reviewForm ReviewForm" onSubmit={handleSubmit}>
          <div className="form-section">
            <label className="reviewLabel" htmlFor="state">
              <strong>State</strong>
            </label>
            <Input
              value={state}
              onChange={onChangeState}
              className="reviewInput"
              type="text"
              name="state"
              required
            />
          </div>
          <div className="form-section">
            <label className="reviewLabel" htmlFor="department">
              <strong>Department</strong>
            </label>
            <Input
              value={deptName}
              onChange={onChangeDept}
              className="reviewInput"
              type="text"
              name="department"
              required
            />
          </div>
          <div className="form-section">
            <label className="reviewLabel" htmlFor="nature">
              <strong>What led to the encounter?</strong>
            </label>
            <Textarea
              onChange={getNatureText}
              value={setNature}
              className="reviewTextarea"
              name="nature"
              rows="4"
              required
            />
          </div>
          <div className="form-section">
            <label className="reviewLabel" htmlFor="comments">
              <strong>Comments</strong>
            </label>
            <Textarea
              onChange={getCommentsText}
              value={setComments}
              className="reviewTextarea"
              name="comments"
              rows="6"
            />
          </div>
          <div className="form-section">
            <div>
              <label htmlFor="rating">
                <strong>Rating</strong>
              </label>
              <select
                value={setRating}
                className="select"
                onChange={getRating}
                required
                aria-label="Rating"
                name="rating"
                id="rating"
              >
                {" "}
                <option value="">--pick a rating--</option>
                <option value="1">1 - Unacceptable</option>
                <option value="2">2 - Bad</option>
                <option value="3">3 - Acceptable</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Above and Beyond</option>
              </select>
            </div>
            <label htmlFor="date-month">
              <strong>When did this happen?</strong>
            </label>
            <div id="date">
              <Input
                className="reviewInput"
                value={setDateMonth}
                onChange={getDateMonth}
                id="date-month"
                type="number"
                name="date-month"
                placeholder="MM"
                min="1"
                max="12"
                required=""
              />
              <Input
                className="reviewInput date-day"
                value={setDateDay}
                onChange={getDateDay}
                id="date-day"
                type="number"
                name="date-day"
                placeholder="DD"
                min="1"
                max={setMax()}
                required=""
              />
              <Input
                className="reviewInput date-year"
                value={setDateYear}
                onChange={getDateYear}
                id="date-year"
                type="number"
                name="date-year"
                placeholder="YYYY"
                min="2000"
                max="2020"
                required=""
              />
            </div>
          </div>

          <Button id="reviewSubmit" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
}
