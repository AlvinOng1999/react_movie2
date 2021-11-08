import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
    const initialFieldValues = {
        MovieName: '',
        Imdb: '',
        year: '',
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-film"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Movie Name" name="MovieName"
                    value={values.MovieName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fab fa-imdb"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="IMDB Rating" name="Imdb"
                        value={values.Imdb}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-calendar"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Year" name="year"
                        value={values.year}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-danger btn-block" />
            </div>
        </form >
    );
}

export default ContactForm;