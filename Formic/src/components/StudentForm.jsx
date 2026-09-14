import { useState } from "react";

function StudentForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        skills: [],
        message: "",
        agree: false
    });

    function handleChange(e) {  // e is a use information jo send kart AHAI 

        const { name, value, type, checked } = e.target;  // ye object destructuring kr rha hai

        if (type === "checkbox" && name === "skills") {

            setFormData((prev) => ({  // Prev
                ...prev,
                skills: checked
                    ? [...prev.skills, value]
                    : prev.skills.filter((skill) => skill !== value)
            }));

        } else if (type === "checkbox") {

            setFormData((prev) => ({
                ...prev,
                [name]: checked
            }));

        } else {

            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));

        }
    }

    function handleSubmit(e) {

        e.preventDefault();

        console.log("Submitted Data:");
        console.log(formData);

        alert("Form submitted successfully!");
    }

    return (
        <div className="form-container">

            <h2>Student Registration</h2>

            <form onSubmit={handleSubmit}>

                {/* Name */}

                <div className="form-group">

                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                </div>


                {/* Email */}

                <div className="form-group">

                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                </div>


                {/* Password */}

                <div className="form-group">

                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                </div>


                {/* Gender */}

                <div className="form-group">

                    <label>Gender</label>

                    <div>

                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleChange}
                            />

                            Male
                        </label>


                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
                            />

                            Female
                        </label>

                    </div>

                </div>


                {/* City */}

                <div className="form-group">

                    <label htmlFor="city">
                        City
                    </label>

                    <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    >

                        <option value="">
                            Select City
                        </option>

                        <option value="Lucknow">
                            Lucknow
                        </option>

                        <option value="Delhi">
                            Delhi
                        </option>

                        <option value="Mumbai">
                            Mumbai
                        </option>

                        <option value="Bangalore">
                            Bangalore
                        </option>

                    </select>

                </div>


                {/* Skills */}

                <div className="form-group">

                    <label>Skills</label>

                    <div>

                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="HTML"
                                checked={formData.skills.includes("HTML")}
                                onChange={handleChange}
                            />

                            HTML
                        </label>


                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="CSS"
                                checked={formData.skills.includes("CSS")}
                                onChange={handleChange}
                            />

                            CSS
                        </label>


                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="React"
                                checked={formData.skills.includes("React")}
                                onChange={handleChange}
                            />

                            React
                        </label>

                    </div>

                </div>


                {/* Message */}

                <div className="form-group">

                    <label htmlFor="message">
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                    />

                </div>


                {/* Agree */}

                <div className="form-group">

                    <label>

                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                        />

                        I agree to the terms

                    </label>

                </div>


                {/* Submit */}

                <button type="submit">
                    Register
                </button>

            </form>

        </div>
    );
}

export default StudentForm;