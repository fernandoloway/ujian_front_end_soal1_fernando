
import React, { Component } from 'react';

class LoginForm extends Component {


    handleSubmit = () => {
        let user= { name: this.refs.nama.value};
        this.props.onSubmit(user);
        
    }

    render() {
        return (
            <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="name" className="col-sm-12 control-label" id="inputname">Name</label>
              <div className="col-sm-12">
                <input type="text" ref="nama" className="form-control" id="name" placeholder="Lintang" />
              </div>
            </div>
            <button className="btn btn-info" onClick={this.handleSubmit} >Submit</button>
          </form>
        );
    }
}

export default LoginForm;