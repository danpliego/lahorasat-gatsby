// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mzbkqpzw"
        method="POST"
      >
        <div className="mb-3">
          <label htmlFor="#full_name" className="form-label">Full Name</label>
          <input className="form-control" id="full_name" name="full_name" type="text" required />
        </div>
        <div className="mb-3">
          <label htmlFor="#email" className="form-label">Email address</label>
          <input className="form-control" id="email" name="email" type="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="#phone" className="form-label">Phone</label>
          <input className="form-control" id="phone" name="phone" type="text" required />
        </div>
        <div className="mb-3">
          <label htmlFor="#company" className="form-label">Company</label>
          <input className="form-control" id="company" name="company" type="text" />
        </div>
        {status === "SUCCESS" ? (
          <p style={{ padding: "1rem", textAlign: "center", background: '#DFF3E3', borderRadius: '4px' }}>
            Thank you! Your message has been sent, we will be in touch soon...
          </p>
        ) : (
          <button className="btn btn-primary mt-3" type="submit">Send</button>
        )}
        {status === "ERROR" && (
          <p style={{ padding: "1rem", textAlign: "center", background: '#F8E1E3', borderRadius: '4px' }}>
            Sorry something went wrong, try again later
          </p>
        )}
      </form>
    );
  }

  submitForm(ev) {
    console.log('send');
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
