import React, { useState } from "react";
import "./Card.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    width: "40%",
    height: "33rem",
    overflow: "hidden",
    padding: "0rem",
  },
};

const Card = ({ cardObject, posts, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const handlePopUp = (cardData) => {
    if (index + 1 === posts.length) {
      setIsOpen(true);
      setModalContent(cardData);
    }
  };
  return (
    <>
      <div
        className={
          index + 1 === posts.length ? "custom_card hover" : "custom_card"
        }
        onClick={() => handlePopUp(cardObject)}
      >
        <div className="custom_card_body">
          <div className="container">
            <img
              className="custom_card_img image"
              src={cardObject?.thumbnail?.large}
              alt=""
            />
            {index + 1 === posts.length && (
              <div className="overlay">
                <h5 className="show_more"> Learn more</h5>
              </div>
            )}
          </div>
          <div className="custom_dots">
            <div className="dot_dodger"></div>
            <div className="dot_yellow"></div>
          </div>
          <h3 className="custom_card_title">{cardObject?.title}</h3>
          <p className="custom_card_text">{cardObject?.content}</p>
          <div className="custom_card_footer">
            <div className="author">
              {cardObject?.author?.name} - {cardObject?.author?.role}
            </div>
            <div className="date">
              {new Date().toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="My dialog"
          style={customModalStyles}
        >
          <div className="custom_card_body">
            <div className="modal_close">
              <button onClick={() => setIsOpen(false)}> X </button>
            </div>
            <img
              className="custom_card_img no_border_radius"
              src={modalContent?.thumbnail?.large}
              alt=""
            />
            <h6 className="custom_card_title small_title">
              {modalContent?.title}
            </h6>
            <p className="custom_card_text small_content">
              {modalContent?.content}
            </p>
            <div className="custom_card_footer">
              <div className="author near_by_near">
                <div>
                  <img
                    className="avatar"
                    src={cardObject?.author?.avatar}
                    alt="cardObject?.author?.name"
                  />
                </div>
                <div className="author_name">
                  {cardObject?.author?.name} - {cardObject?.author?.role}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Card;
