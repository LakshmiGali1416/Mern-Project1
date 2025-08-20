import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Community.css";

const Community = () => {
  const [lines, setLines] = useState([
    {
      id: 1,
      text: "Are you a camera? Because every time I look at you, I smile.",
      comments: ["So cute!", "I’d use this!"],
    },
    {
      id: 2,
      text: "You must be tired because you’ve been running through my mind all day.",
      comments: [],
    },
  ]);

  const [newLine, setNewLine] = useState("");
  const [commentInputs, setCommentInputs] = useState({});

  // Handle comment input change
  const handleCommentChange = (id, value) => {
    setCommentInputs({ ...commentInputs, [id]: value });
  };

  // Submit a comment
  const handleCommentSubmit = (id) => {
    const comment = commentInputs[id]?.trim();
    if (!comment) return;

    setLines((prev) =>
      prev.map((line) =>
        line.id === id
          ? { ...line, comments: [...line.comments, comment] }
          : line
      )
    );

    setCommentInputs({ ...commentInputs, [id]: "" });
  };

  // Submit a new pickup line
  const handleLineSubmit = (e) => {
    e.preventDefault();
    if (!newLine.trim()) return;

    const newEntry = {
      id: Date.now(),
      text: newLine.trim(),
      comments: [],
    };

    setLines([newEntry, ...lines]);
    setNewLine("");
  };

  return (
    <section className="container py-5 fade-in">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-danger">
          <i className="bi bi-people-fill me-2"></i>
          Community Pick-Up Lines
        </h2>
        <p className="text-muted">
          Share and comment on fun user-generated pick-up lines 💬
        </p>
      </div>

      {/* Form to add new pickup line */}
      <form
        onSubmit={handleLineSubmit}
        className="mb-5 d-flex justify-content-center"
      >
        <div
          className="input-group shadow-lg rounded-pill overflow-hidden"
          style={{ maxWidth: "600px" }}
        >
          <input
            type="text"
            className="form-control border-0 px-3"
            placeholder="✨ Share your flirty genius..."
            value={newLine}
            onChange={(e) => setNewLine(e.target.value)}
          />
          <button className="btn btn-danger px-4 fw-semibold" type="submit">
            Post
          </button>
        </div>
      </form>

      {/* Display all community pickup lines */}
      <div className="row g-4">
        {lines.map((line) => (
          <div key={line.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow border-0 rounded-4 card-hover">
              <div className="card-body d-flex flex-column">
                {/* Pickup line text */}
                <p className="fs-6 mb-3">
                  <span className="fs-5">💬</span> {line.text}
                </p>

                {/* Comments section */}
                <div className="mt-auto">
                  <h6 className="text-muted mb-2">
                    <i className="bi bi-chat-dots me-1"></i> Comments
                  </h6>
                  <ul className="list-group list-group-flush small mb-3">
                    {line.comments.length > 0 ? (
                      line.comments.map((comment, idx) => (
                        <li
                          key={idx}
                          className="list-group-item px-0 py-1 border-0 text-secondary"
                        >
                          <i className="bi bi-chat-left-text me-2"></i>
                          {comment}
                        </li>
                      ))
                    ) : (
                      <li className="text-muted small fst-italic">
                        No comments yet. Be the first!
                      </li>
                    )}
                  </ul>

                  {/* Comment input */}
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control rounded-start"
                      placeholder="Write a comment..."
                      value={commentInputs[line.id] || ""}
                      onChange={(e) =>
                        handleCommentChange(line.id, e.target.value)
                      }
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => handleCommentSubmit(line.id)}
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
