import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createStream } from '../../actions'

export class StreamCreate extends Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui er
                ror message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (

            <div className={className}>
                <label>{label}</label>
                <input {...input} placeholder={label} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
        // return <input {...formProps.input} onChange={formProps.input.onChange} value={formProps.input.value} />
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }


    render() {
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Field name="title" component={this.renderInput} label="Enter Title" />
                    <Field name="description" component={this.renderInput} label="Enter Description" />
                    <button className="ui primary button" style={{ marginTop: '10px' }}>Submit</button>
                </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'Please enter title !'
    }
    if (!formValues.description) {
        errors.description = 'Please enter description !'
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate', validate
})(StreamCreate)

export default connect(null, {
    createStream
})(formWrapped) 
