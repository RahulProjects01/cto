import React, { useState } from "react";
import "./TY.scss";

export const TY = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission,
        console.log(formData);
    };
    return (
        <div className="TY">

            <div className="ty-heading"><p>Contact Us</p></div>
            <img className="ty-image-1" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-new-img-1.png" alt="" />
          
            <div className="next-cards">
                <div className="chhote-bache"></div>
                <div className="chhote-bache"></div>
                <div className="chhote-bache"></div>
                <div className="chhote-bache"></div>
            </div>

            
            <div className="ty-details-div">

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="ty-name-txt"
                        >Full Name:</label>
                        <input
                            className="ty-input-div"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div>
                        <label className="ty-name-txt" style={{ top: '23%' }}
                        >Email:</label>
                        <input
                            className="ty-input-div"
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ top: '28%' }}
                        />
                    </div>


                    <div>
                        <label className="ty-name-txt" style={{ top: '42%' }}
                        >Message:</label>
                        <input
                            className="ty-input-div"
                            type="text"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{ top: '47%' }}
                        />
                    </div>
                    <img className="ty-d-button" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-new-img-4.png" alt="" />
                    <button className="ty-d-buttton-txt">Contact Us</button>
                </form>


            </div>

            <img className="ty-bar" src="../images/ty-new-img-2.png" alt="" />
            <div className="ty-circle-bar">
                <img className="ty-circle-bar-img" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-new-img-3.png" alt="" />
            </div>
            <div className="ty-bar-details">
                <p style={{ position: 'absolute', top: '5%', color: 'white' }}>Alexander Mitchell</p>
                <div className="ty-d-profile">
                    <p>FOUNDER</p>
                </div>
            </div>

            <div className="ty-social-handles">
                <img className="ty-social-handles-img" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-linkedin.png" alt="" />
                <img className="ty-social-handles-img" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-yt.png" alt="" />
                <img className="ty-social-handles-img" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-insta.png" alt="" />
                <img className="ty-social-handles-img" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-fb.png" alt="" />
            </div>

            <div className="ty-social-txt"><p>Our Handle: </p></div>
            {/* -----------------------contact details--------------------------------------- */}
            <div className="ty-email-div">
                <p style={{ fontSize: '1vw', color: 'grey' }}>Email: <span style={{ fontStyle: 'italic', color: 'white' }}>fashionevents@yopmail.com</span></p>
            </div>

            <div className="ty-phone-div">
                <p style={{ fontSize: '0.9vw', color: 'grey' }}>Phone No: <span style={{ color: 'white' }}>9992220044</span></p>
            </div>

        </div>
    );
};
