import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // Save submitted data
    setSubmittedData({ ...formData });
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{ background: "linear-gradient(135deg, #ffe4e1, #fff0f5)" }}
    >
      <div className="container">
        <div
          className="card shadow-lg border-0 rounded-4 p-5 mx-auto"
          style={{
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(8px)",
            maxWidth: "750px",
          }}
        >
          <h2 className="text-center text-danger fw-bold mb-4">
            <i className="bi bi-envelope-heart-fill me-2"></i>Contact Us
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                id="name"
                className="form-control rounded-3 shadow-sm"
                placeholder="👤 Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control rounded-3 shadow-sm"
                placeholder="📧 Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                className="form-control rounded-3 shadow-sm"
                rows="4"
                placeholder="💬 Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="btn btn-danger px-4 py-2 fw-semibold shadow"
                type="submit"
              >
                <i className="bi bi-send-fill me-1"></i>Submit
              </button>
            </div>
          </form>

          {showAlert && (
            <div className="alert alert-success mt-4 text-center fw-semibold rounded-3 shadow-sm">
              ✅ Thank you for contacting us!
            </div>
          )}

          {submittedData && (
            <div className="mt-4">
              <h5 className="text-center fw-bold mb-3 text-success">
                📋 Your Submitted Details
              </h5>
              <ul className="list-group shadow-sm">
                <li className="list-group-item">
                  <strong>Name:</strong> {submittedData.name}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {submittedData.email}
                </li>
                <li className="list-group-item">
                  <strong>Message:</strong> {submittedData.message}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
