import React, { useState } from "react";
import { X } from "react-feather";

import Wrapper from "../assets/wrappers/CustomInput";

/*interface CustomInputProps {
    text;
    onSubmit: (value) => void;
    displayClass;
    editClass;
    placeholder;
    defaultValue;
    buttonText;
}*/

const CustomInput = (props) => {
    const {
        text,
        onSubmit,
        displayClass,
        editClass,
        placeholder,
        defaultValue,
        buttonText,chef,
    } = props;
    const [isCustomInput, setIsCustomInput] = useState(false);
    const [inputText, setInputText] = useState(defaultValue || "");

    const submission = (e) => {
        e.preventDefault();
        if (inputText && onSubmit) {
            setInputText("");
            onSubmit(inputText);
        }
        setIsCustomInput(false);
    };

    function handleClick() {
        if (chef) setIsCustomInput(true);
    }

    return (
        <Wrapper>
        <div className="custom-input">
            {isCustomInput ? (
                <form
                    className={`custom-input-edit ${editClass ? editClass : ""}`}
                    onSubmit={submission}
                >
                    <input
                        type="text"
                        value={inputText}
                        placeholder={placeholder || text}
                        onChange={(event) => setInputText(event.target.value)}
                        autoFocus
                    />
                    <div className="custom-input-edit-footer">
                        <button type="submit">{buttonText || "Add"}</button>
                        <X onClick={() => setIsCustomInput(false)} className="closeIcon" />
                    </div>
                </form>
            ) : (
                <p
                    className={`custom-input-display ${displayClass ? displayClass : ""}`}
                    onClick={handleClick }
                >
                    {text}
                </p>
            )}
        </div>
        </Wrapper>
    );
};

export default CustomInput;