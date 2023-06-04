import React from 'react';

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Contact</h4>
          <p>Our Address: Tawi Tawi</p>
          <p>Phone: 123456789</p>
          <p>Mobile: 987654321</p>
          <p>Email: example@example.com</p>
        </div>
        <div className="col">
          <h4>Our Partners</h4>
          <div className="partner-images">
            <img className='partners' src="https://mrtravel.com.ph/wp-content/uploads/2014/03/dot-new-logo.png" alt="Partner 1" />
            <img className='partners' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Official_Seal_of_Tawi-Tawi.svg/2048px-Official_Seal_of_Tawi-Tawi.svg.png" alt="Partner 2" />
            <img className='partners' src="https://images.squarespace-cdn.com/content/v1/613d9f7e68a4c91bdaa6e75c/433693bc-6901-4718-91c7-d209a4f67435/Logo_1_site_logo.png" alt="Partner 3" />
          </div>
        </div>
      </div>
    </div>
  );
}
