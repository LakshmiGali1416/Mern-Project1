import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() && message.trim()) {
      const newFeedback = { name: name.trim(), message: message.trim() };
      setFeedbackList([newFeedback, ...feedbackList]);
      setName('');
      setMessage('');
    }
  };

  const deleteFeedback = (index) => {
    const updatedList = feedbackList.filter((_, i) => i !== index);
    setFeedbackList(updatedList);
  };

  return (
    <section
      id="feedback"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #d7b2d7ff, #86c2eaff)',
      }}
    >
      <div className="container">
        <div
          className="card shadow-lg p-5 border-0 rounded-4 mx-auto"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 192, 203, 0.3)',
            maxWidth: '750px',
          }}
        >
          <h2 className="text-center text-danger fw-bold mb-4">
            <i className="bi bi-chat-left-heart-fill me-2"></i>We Love Your Feedback!
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control rounded-3 shadow-sm"
                placeholder="💁 Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control rounded-3 shadow-sm"
                rows="4"
                placeholder="💬 Share your thoughts..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="btn btn-danger px-4 py-2 fw-semibold shadow"
                type="submit"
              >
                <i className="bi bi-send-fill me-1"></i>Send Feedback
              </button>
            </div>
          </form>

          <ul
            className="list-group mt-4 rounded-3 shadow-sm"
            style={{ maxHeight: '250px', overflowY: 'auto' }}
          >
            {feedbackList.map((fb, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{fb.name}</div>
                  {fb.message}
                </div>
                <button
                  className="btn btn-sm btn-outline-danger ms-3"
                  onClick={() => deleteFeedback(index)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
