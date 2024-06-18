import React from "react";

const Avatar = (props) => {
    const { selectedImage, handleFotoProfile } = props;
    const handleAvatarClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <label 
            htmlFor="fileInput"
            className="cursor-pointer"
        >
            <img 
                src={selectedImage}
                alt="avatar"
                className="flex items-center max-w-[150px] rounded-full"
                onClick={handleAvatarClick}
            />
            <input
                id="fileInput"
                type="file"
                name="fotoProfile"
                onChange={handleFotoProfile}
                accept="image/*"
                className="hidden"
            />
        </label>
    );
};

export default Avatar;