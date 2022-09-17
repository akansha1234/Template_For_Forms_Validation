import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [err, setErr] = useState({
    errName: "",
    errDob: "",
    errGender: "",
    errCourse: "",
    errCondition: ""
  });
  const [condition, setCondition] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setErr((prevState) => ({
        ...prevState,
        errName: "Please fill the name field"
      }));
      return;
    }
    if (dob === "") {
      setErr((prevState) => ({
        ...prevState,
        errDob: "Please fill the Date of Birth"
      }));
      return;
    }
    if (gender === "") {
      setErr((prevState) => ({
        ...prevState,
        errGender: "Please fill the gender"
      }));
      return;
    }
    if (course === "") {
      setErr((prevState) => ({
        ...prevState,
        errCourse: "Please fill the Course"
      }));
      return;
    }
    if (condition === "") {
      setErr((prevState) => ({
        ...prevState,
        errCondition: "Please agree the term & condition"
      }));
      return;
    }
    let result = {
      Name: name,
      Dob: dob,
      Gender: gender,
      Course: course,
      Agree: condition
    };
    console.log(result);
  };

  return (
    <div>
      <form>
        <h3>Name</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {err["errName"]}
        <h3>Date of Birth</h3>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        {err.errDob}
        <h3>Gender</h3>
        <div onChange={(e) => setGender(e.target.value)}>
          <input type="radio" value="Male" name="gender" />
          Male
          <input type="radio" value="Female" name="gender" />
          Female
          {err.errGender}
        </div>
        <h3>Course</h3>
        <div onChange={(e) => setCourse(e.target.value)}>
          <input type="radio" value="MTech" name="course" />
          MTech
          <input type="radio" value="MCA" name="course" />
          MCA
          <input type="radio" value="MBA" name="course" />
          MBA
          <input type="radio" value="MA" name="course" />
          MA
          <input type="radio" value="MSC" name="course" />
          MSC
          {err.errCourse}
        </div>
        <div onChange={() => setCondition(!condition)}>
          <input type="checkbox" />
          Agree all terms & conditions
        </div>
        {err.errCondition}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
export default Form;
