import React from "react";

import Form from "./Form";
import FormSlider from "./Form/FormSlider";

const CreateAccount = () => {
    return (
        <div className="createAccount">
            <div className="createAccount__left">
                <FormSlider />
            </div>
            <div className="createAccount__right">
                <Form />
            </div>
        </div>
    );
};

export default CreateAccount;
