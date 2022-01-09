import React from 'react'

export default function Form() {
    return (
        <section className="contactform">
            <h3>CONTACT US</h3>
            <div className="name">
                <input type="text" name="firstname" size="30" placeholder="FIRST NAME" required/>
                <input type="text" name="lastname" size="30" placeholder="LAST NAME" required/>
            </div>
            <div className="emailaddress">
                <input type="email" name="email" size="48" placeholder="EMAIL ADDRESS" required/>
            </div>
            <div className="textarea">
                <textarea name="message" rows="9" cols="57" placeholder="MESSAGE"/>
            </div>           
        </section>
    )
}
