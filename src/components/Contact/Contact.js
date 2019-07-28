import React from 'react';
import './Contact.scss';

const Contact = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 contactText">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
          </p>
        </div>
      </div>
      <div className="row formContainer">
        <div className="col-12 formWrapper">
          <form action="https://formspree.io/kjtk@o2.pl" method="POST">
            <div className="row">
              <div className="col-12 col-md-6 input-item">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-12 col-md-6 input-item">
                <input type="email" name="mail-address" placeholder="Email" />
              </div>
              <div className="col-12 input-item">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="col-12 input-item">
                <textarea name="message" placeholder="Message"></textarea>
              </div>
              <input type="submit" value="Send message" className="btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;