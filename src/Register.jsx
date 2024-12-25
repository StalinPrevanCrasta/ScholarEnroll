import { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        USN: '',
        name: '',
        courses: [],
        elective: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevState) => {
                const courses = checked
                    ? [...prevState.courses, name]
                    : prevState.courses.filter((course) => course !== name);
                return { ...prevState, courses };
            });
        } else if (type === 'radio') {
            setFormData({ ...formData, [name]: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was an error registering!', error);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="USN">USN:</label>
                    <input type="text" id="USN" name="USN" value={formData.USN} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <h2>Select courses:</h2>
                    <div>
                        <input type="checkbox" id="FSD" name="FSD" onChange={handleChange} />
                        <label htmlFor="FSD">FSD</label>
                    </div>
                    <div>
                        <input type="checkbox" id="CN" name="CN" onChange={handleChange} />
                        <label htmlFor="CN">CN</label>
                    </div>
                    <div>
                        <input type="checkbox" id="SEP" name="SEP" onChange={handleChange} />
                        <label htmlFor="SEP">SEP</label>
                    </div>
                    <div>
                        <input type="checkbox" id="RMI" name="RMI" onChange={handleChange} />
                        <label htmlFor="RMI">RMI</label>
                    </div>
                    <div>
                        <input type="checkbox" id="ETP" name="ETP" onChange={handleChange} />
                        <label htmlFor="ETP">ETP</label>
                    </div>
                    <h2>Choose elective:</h2>
                    <div>
                        <input type="radio" id="BT" name="elective" value="Blockchain technology" onChange={handleChange} />
                        <label htmlFor="BT">Blockchain technology</label>
                    </div>
                    <div>
                        <input type="radio" id="ND" name="elective" value="NoSQl Database" onChange={handleChange} />
                        <label htmlFor="ND">NoSQl Database</label>
                    </div>
                    <div>
                        <input type="radio" id="SD" name="elective" value="Salesforce Developer" onChange={handleChange} />
                        <label htmlFor="SD">Salesforce Developer</label>
                    </div>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;