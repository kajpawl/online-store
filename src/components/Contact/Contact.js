import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.scss';

const Contact = props => {
  return (
    <main className="container contact">
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
              <div className="col-12 col-md-6 inputItem">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-12 col-md-6 inputItem">
                <input type="email" name="mail-address" placeholder="Email" />
              </div>
              <div className="col-12 inputItem">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="col-12 inputItem">
                <textarea name="message" placeholder="Message"></textarea>
              </div>
              <button 
                type="submit" 
                className="submitMessageInput backgroundBtn" 
              >
                <FontAwesomeIcon icon="envelope" />
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;