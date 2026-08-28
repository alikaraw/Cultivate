import { useState } from "react";
import { IoMdAlert } from "react-icons/io";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import "./InputField.css"

type InputFieldProps = {
    title: string;
    placeHolder:string;
    type: string;
    onChange: (event: string) => void;
    error: string | null;
    icon: React.ReactNode;
}

export default function InputField({
        title = "Title",
        placeHolder = "Place Holder",
        type = "text",
        error = null,
        onChange,
        icon
    }: InputFieldProps ) {
    
        const [isPasswordVisible, setPasswordVisible] = useState(false);
        const inputType = type === "password" ? (isPasswordVisible ? "text" : "password") : type;
    
        return (
            <div className="InputFieldWrapper">
                <div className="InputFieldTitleWrapper">
                    <p>{title}</p>
                    
                    {error && (
                        <div className="InputFieldError">
                            <IoMdAlert />

                            <div className="InputFieldErrorTooltip">
                                {error}
                            </div>
                        </div>
                    )}
                </div>
                <div className="InputFieldContent">
                    <span className="InputFieldIcon">
                        {icon}
                    </span>
                    
                    <input 
                    type={inputType} 
                    placeholder={placeHolder} onChange={(event) => {
                        onChange(event.target.value)
                    }}
                    style={{
                        paddingRight: type === "password" ? "3rem" : "0.5rem"
                    }}
                    />
                    
                    {type === "password" && (
                        <button
                            type="button"
                            className="PasswordToggle"
                            onClick={() => setPasswordVisible(!isPasswordVisible)}
                        >
                            {isPasswordVisible
                                ? <IoEyeOutline/>
                                : <IoEyeOffOutline/>
                            }
                        </button>
                    )}
                </div>
            </div>
        );
}