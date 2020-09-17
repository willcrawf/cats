import React, { Component } from 'react'
import './CatForm.css'




class CatForm extends Component {
    state = { 
        invalidForm: true,
        formData: {
            breed: '',
            pic: '',
            name: '',
            gender: '',
            age: ''
        }
    }
    
    handleSubmit = e =>{
       e.preventDefault();
       this.props.handleAddCat(this.state.formData)
   }
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
     }
    
    formRef = React.createRef()
    render() { 
        return (
        <>
            <h1>New Cat</h1>
            <form id = "ncForm" ref={this.formRef} onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="breed">Breed: </label>
                <input name ='breed' type="text" className="active" value={this.state.formData.breed} onChange={this.handleChange}/>
            </div>

            <div>
                <label htmlFor="pic">Picture URL: </label>
                <input name ='pic' type="text" className="active" pattern="^https ^http ^www [a-z][A-Z][0-9] .jpg$ .jpeg$ .png$ .gif$ {1,100}" value={this.state.formData.pic} onChange={this.handleChange}/>
            </div>

            <div>
                <label htmlFor="name">Name: </label>
                <input name ='name' type="text" className="active" value={this.state.formData.name} onChange={this.handleChange}/>
            </div>

            <div>
                <label htmlFor="gender">Gender: </label>
                <input name ='gender' type="text" className="active" value={this.state.formData.gender} onChange={this.handleChange}/>
            </div>

            <div>
                <label htmlFor="age">Age: </label>
                <input name ='age' type="text" pattern="[0-9]{1,3}" className="active" value={this.state.formData.age} onChange={this.handleChange}/>
            </div>
            <button
                type="submit"
                disabled={this.state.invalidForm}>
                Add Cat
            </button> 
            </form>
            
        </>
          );
    }
}
 
export default CatForm;