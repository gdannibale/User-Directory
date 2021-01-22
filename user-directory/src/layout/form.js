import React from "react";

function Form(props) {
    return (
        <form className="d-flex justify-content-center" onSubmit={props.onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="search"
                    onChange={props.onChange}
                />
            </form>
    )
}

export default Form;