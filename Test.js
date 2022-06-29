import React from "react";

class Test extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        fields: {},
        errors: {}
      
      }

    }
  
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Name
      if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Cannot be empty";
      }
  
      //dob
      if(!fields["dob"]){
        formIsValid = false;
        errors["dob"] = "DOB Cannot be empty";
      } 
      if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["name"] = "Only letters";
        }      	
      }
  
      //Email
      if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Cannot be empty";
      }
     //password
           if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Cannot be empty";
          }
     

      if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');
  
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      }
  
  
  
      this.setState({errors: errors});
      return formIsValid;
    }
  
    contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){
        alert("Form submitted  ");
        alert("Name- " + this.state.fields["name"] 
        + "\nDOB- " +this.state.fields["dob"]
        + "\nPhone- " +this.state.fields["phone"]
        + "\nEmail- " +this.state.fields["email"]
        + "\nPassword- " +this.state.fields["password"]
        + "\nHobby- " +this.state.fields["hobby"]);

      }else{
        alert("Form has errors.")
      }
  
    }
  
    handleChange(field, e){    		
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
    
    }
    onChangeValue(event) {
        console.log(event.target.value);
      }
 
    render(){
      return (
        <div>    
       
        <div class="container">	
          <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
            <div className="col-md-6">
            <h1>Student Form</h1>
              <fieldset>

              <p>Enter your name</p>
              <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                <span className="error">{this.state.errors["name"]}</span>
                <br/>
                <p>Enter your DOB</p>
                <input ref="name" type="date" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "dob")} value={this.state.fields["dob"]}/>
                <span className="error">{this.state.errors["dob"]}</span>
                <br/>
                <p>Enter your Phone Number</p>
                <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                <br/>
                <p>Enter your Email</p>
                <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                <span className="error">{this.state.errors["email"]}</span>
                <br/>
                <p>Enter your Password</p>
                <input refs="password" type="password" size="30" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                <br/>
                <p>Enter your Hobby</p>
                <textarea refs="message" cols="28" rows="10"
                  className="hobby" placeholder="Your Hobby" onChange={this.handleChange.bind(this, "hobby")}>{this.state.fields["hobby"]}</textarea>
              <div className="col-md-12">
              
              <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>
           
             </div>
              </fieldset>
            </div>
           
          </form>
          </div>
        </div>
      )
    }
  }

  export default Test;