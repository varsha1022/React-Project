import { useState } from "react";
import "./FAQs.css";

const FAQs = (props) => {
    const { list } = props;
    const [faqVisibility, setFaqVisibility] = useState({});

    const toggleAnswer = (id) => {
        setFaqVisibility((prevVisibility) => ({
            ...prevVisibility,
            [id]: !prevVisibility[id]
        }));
    };

    return (
        <div className="container">
            <h1>FAQs</h1>
            {list.map((question) => {
                const { id, questionText, answerText } = question;
                const isVisible = !!faqVisibility[id]; // Simplified isVisible calculation

                return (
                    <div className="faq" key={id}>
                        <h3>
                            {questionText}
                            <img
                                src={isVisible ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"}
                                alt=""
                                height="18px"
                                width="18px"
                                id="plus"
                                onClick={() => toggleAnswer(id)}
                            />
                        </h3>
                        <hr style={{ display: isVisible ? "block" : "none" }} />
                        <p style={{ display: isVisible ? "block" : "none" }}>{answerText}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default FAQs;
