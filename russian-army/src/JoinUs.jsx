import Navbar from './NavBar';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function JoinUs() {

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        year: '',
        month: '',
        day: '',
        millitary: '',
        checkbox: '',
        address: '',
        email: '',
        phone: '',
        nationality: '',
        religion: '',
        file: '',
    })
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value.trim(),
        }));
    };

    const handleSumbit = (e) => {
        e.preventDefault();

        // Dodajemo kratko kašnjenje kako bismo omogućili browser autofill da popuni polja pre validacije
        setTimeout(() => {
            // Validacija obaveznih polja
            const requiredFields = ['firstname', 'lastname', 'email', 'address', 'gender'];
            for (let field of requiredFields) {
                if (!values[field].trim()) { // trim() osigurava da nije samo prazan prostor
                    showAlert(`${field.charAt(0).toUpperCase() + field.slice(1)} is required!`, 'error');
                    return;
                }
            }

            // Validacija emaila
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(values.email)) {
                setEmailMessage({ text: "Invalid email format!", color: "red" });
                return;
            }

            // Validacija telefona
            if (!isValidPhoneNumber(values.phone)) {
                showAlert('Invalid phone number!', 'error');
                return;
            }

            // Kreiranje objekta sa podacima forme
            const templateParams = {
                firstname: values.firstname,
                lastname: values.lastname,
                gender: values.gender,
                day: values.day,
                month: values.month,
                year: values.year,
                millitary: values.millitary,
                checkbox: values.checkbox ? "Yes" : "No",
                address: values.address,
                email: values.email,
                phone: values.phone,
                nationality: values.nationality,
                religion: values.religion
            };

            // Slanje emaila putem EmailJS
            emailjs.send(
                'service_xb61aih',  // Zameni sa EmailJS service ID
                'template_ij0ogod', // Zameni sa EmailJS template ID
                templateParams,
                'lbNtWJkWSSr-KDG0G'   // Zameni sa EmailJS public key
            ).then((response) => {
                showAlert('Email sent successfully!', 'success');
                console.log('SUCCESS!', response.status, response.text);
            }).catch((error) => {
                console.error('FAILED...', error);
                showAlert('Failed to send email.', 'error');
            });

        }, 100); // Kratko kašnjenje od 100ms omogućava popunjavanje preko autofill-a
    };


    //funkcija za da moze samo da se cekira ili male ili female
    const handleGenderChanger = (e) => {
        setValues({ ...values, gender: e.target.value });
    }

    //funkcija za podesavanje datuma rodjenja
    const curentYear = new Date().getFullYear();
    const minYear = curentYear - 51;
    const maxYear = curentYear - 18;

    const handleYearChange = (e) => {
        const year = parseInt(e.target.value); // moramo parseint jer java script u sebi sadrzi da svaka kontsnata po default bude string pa ga ovim prebacuje u ceo broj
        if (year < minYear || year > maxYear) {
            setValues({ ...values, year: '' });
            showAlert(`Year must be between ${minYear} and ${maxYear}`, 'error');

        } else {
            setValues({ ...values, year });
        }
    };

    //funcija za proveru maila
    const [emailMessage, setEmailMessage] = useState({ text: "", color: "" });

    const validateEmail = (e) => {
        const email = e.target.value;
        setValues({ ...values, email });
        //ovo je deo vecinom za paragraf gde ce ispisati da li je dobar mail ili ne glavni deo je return gde nece dozvoliti slanje sumbitanje
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            setEmailMessage({ text: "", color: "" });
        } else if (!emailRegex.test(email)) {
            setEmailMessage({ text: "Invalid email format!", color: "red" });
            return; // Prekida funkciju ako email nije validan

        } else {
            setEmailMessage({ text: "Valid email address!", color: "green" });
        }
    };
    //fucnija za doddavanje vise fajlova i da mogu se brisu

    const [files, setFiles] = useState([]);

    //const handleFileChange = (event) => {
    //   const newFiles = Array.from(event.target.files);
    //  setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    //  };

    //const removeFile = (index) => {
    //  setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    // };
    //reset f-ja
    const handleReset = () => {
        setFiles([]); // Briše sve fajlove
        setValues({
            firstname: '',
            lastname: '',
            gender: '',
            year: '',
            mounth: '',
            day: '',
            millitary: '',
            checkbox: '',
            address: '',
            email: '',
            phone: '',
            nationality: '',
            religion: '',
            file: '',
        });
    };
    //ogranicavanja fajlova na max 7]
    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);

        if (files.length + newFiles.length > 7) {
            showAlert("You can only upload up to 7 files.", 'error');

            return;
        }

        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    //problem sa renderingom


    const inputRef = useRef(null); // Kreiraj referencu

    const removeFile = (index) => {
        if (document.activeElement) {
            inputRef.current = document.activeElement; // Sačuvaj trenutno aktivan element
        }

        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));

        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus(); // Vrati fokus na prethodno polje
            }
        }, 0); // Kratak delay da React završi re-render
    };

    //custom alert
    const [alert, setAlert] = useState({ message: '', type: '' });

    const showAlert = (message, type = 'success') => {
        setAlert({ message, type });

        setTimeout(() => {
            setAlert({ message: '', type: '' });
        }, 3000); // Nestaje posle 3 sekunde
    };

    return (
        <div className="joinus-section">
            <Navbar />
            {alert.message && (
                <div className={`custom-alert ${alert.type}`}>
                    {alert.message}
                </div>
            )}

            <div className="joinus-contact">
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg id='mail' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style={{ transform: 'translateY(2px)' }} className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    russiawagnerarmy@gmail.com
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ transform: 'translateY(2px)' }} className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                    </svg>
                    +7 (306) 567 456
                </p>

            </div>
            <div className="joinus-header">
                <h1>JOIN US</h1>
                <p>Be a soldier! Be a man!</p>
            </div>
            <div className="form-contanier">
                <form>

                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" placeholder='Enter First name' name='firstname' required onChange={(e) => handleChange(e)} />

                    <label htmlFor="LastName">LastName</label>
                    <input type="text" placeholder='Enter Last name' name='lastname' required onChange={(e) => handleChange(e)} onBlur={handleBlur} />


                    <label htmlFor="gender">Gender</label>
                    <div className="gender">
                        <input name='gender' type="radio" value="Male" onChange={handleGenderChanger} onBlur={handleBlur} /> Male
                        <input name='gender' type="radio" value="Female" onChange={handleGenderChanger} onBlur={handleBlur} /> Female

                    </div>
                    <div className="form-years">
                        <label htmlFor="years">Date of Birth</label>
                        <select name="year" required onChange={handleYearChange}>
                            <option value="">Select Year</option>
                            {[...Array(maxYear - minYear + 1)].map((_, i) => (
                                <option key={i} value={minYear + i}>{minYear + i}</option>
                            ))}
                        </select>

                        <select name="month" required onChange={handleChange}>
                            <option value="">Select Month</option>
                            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, i) => (
                                <option key={i} value={month}>{month}</option>
                            ))}
                        </select>

                        <select name="day" required onChange={handleChange}>
                            <option value="">Select Day</option>
                            {[...Array(31)].map((_, i) => (
                                <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>

                    </div>
                    <label htmlFor="millitary">Choose Military Forces</label>
                    <select name="millitary" id="millitary" onChange={(e) => handleChange(e)} defaultValue="">
                        <option value="" disabled selected>Choose Forces</option>
                        <option value="wagner">Wagner</option>
                        <option value="land">Land Forces</option>
                        <option value="aerospace">AeroSpace Forces</option>
                        <option value="navy">Navy</option>
                        <option value="misile">Strategic Missile Forces</option>
                        <option value="airborne">Airborne Troops</option>
                        <option value="healt">Military Health</option>
                    </select>

                    <div className="checkbox" >
                        <label htmlFor="servemillitary">Have you served in the military?</label>
                        <input type="checkbox" name='checkbox' onChange={(e) => handleChange(e)} />
                    </div>
                    <label htmlFor="locaction" >Your Address</label>
                    <input type="text" name='address' placeholder='Enter your address' required onChange={(e) => handleChange(e)} onBlur={handleBlur} />

                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder='Enter your Email' name='email' required onChange={validateEmail} onBlur={handleBlur} />
                    <p style={{ color: emailMessage.color }}>{emailMessage.text}</p>

                    <label htmlFor="Contact">Contact phone</label>
                    <div className="phone-input-container">

                        <PhoneInput
                            country={'ru'}
                            value={values.phone}
                            onChange={(phone) => setValues({ ...values, phone: `+${phone}` })}
                        />

                    </div>
                    <label htmlFor="Nationality">Nationality</label>
                    <input type="text" placeholder='Enter your Nationality' name='nationality' onChange={(e) => handleChange(e)} />

                    <label htmlFor="Religion">Religion</label>
                    <input type="text" placeholder='Enter your religion' name='religion' onChange={(e) => handleChange(e)} />
                    <div className="documents">
                        <label id='documents' htmlFor="File">You must attach the following Documents: <br />
                            Your portrait photo <br />
                            Passport or other official
                            An identification document. <br />
                            Birth certificate.          <br />
                            Diploma of completion or other relevant educational documents. <br />
                            Health card or a medical report, which confirms your health condition.
                        </label>
                        <div className="file-upload-container">
                            <label htmlFor="file-input" className="" id='custom-file-label'>Choose Files</label>
                            <input type="file" id="file-input" multiple onChange={handleFileChange} />
                            <p>Your Documents:</p>
                            <div className="file-list">

                                {files.map((file, index) => (
                                    <div key={index} className="file-item">
                                        {file.name}
                                        <button className="remove-btn" onClick={() => removeFile(index)}>X</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="btn-2" type='reset' onClick={handleReset}>Reset</button> {/*Reseta automatski ne treba funkcija izgleda */}
                    <button className="btn-1" type='submit' onClick={handleSumbit}>Sumbit</button>
                </form>
            </div>
        </div>
    );

}