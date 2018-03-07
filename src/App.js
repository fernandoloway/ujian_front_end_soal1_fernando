import React, { Component } from 'react';
import './App.css';


// using 2 Component
// --------------------------------------------

import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';


class App extends Component {

  constructor() {
    super();
    this.state = { nama: '' };
  };

  updateName = (user) => {
    this.setState({ nama: user.name });
  }

  render() {


    return (

      <div className="container-fluid">
        <h4>Soal 1 - React Passing Data (Props & State)</h4>
        <p style={{ textAlign: "right" }}><i>JC4 - Fernando Loway</i></p>
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#login">Login</a></li>
          <li><a data-toggle="tab" href="#welcome">Welcome</a></li>

        </ul>

        <div className="tab-content">
          {/* Komponen 1 - Form Login */}
          <div id="login" className="tab-pane fade in active">
            &nbsp;
            <LoginForm onSubmit={this.updateName} />
          </div>
          {/* Komponen 2 - Welcome */}
          <div id="welcome" className="tab-pane fade">
            <Welcome outputName={this.state.nama} />
          </div>
        </div>
      </div>

    );
  }
}


export default App;





// using 1 Component
// ----------------------------------------------

// class App extends Component {

//   constructor(){
//     super();
//     this.state= {nama:''};
//   };

//   updateName = () => {
//     this.setState({nama :this.refs.nama.value});
//   } 

//   render() {

//     return (

//       <div className="container">
//         <h2>Soal Ujian 1</h2>
//         <ul className="nav nav-tabs">
//           <li className="active"><a data-toggle="tab" href="#login">Login</a></li>
//           <li><a data-toggle="tab" href="#welcome">Welcome</a></li>

//         </ul>

//         <div className="tab-content">
//           <div id="login" className="tab-pane fade in active">
//             &nbsp;
//             {/* Form Login */}
//             <form className="form-horizontal">
//               <div className="form-group">
//                 <label htmlFor="name" className="col-sm-12 control-label" id="inputname">Name</label>
//                 <div className="col-sm-12">
//                   <input type="text" ref="nama" className="form-control" id="name" placeholder="Lintang" />
//                 </div>
//               </div>
//               <button className="btn btn-info" onClick={this.updateName} >Submit</button>
//             </form>

//           </div>
//           <div id="welcome" className="tab-pane fade">
//             <h3>Halo {this.state.nama}</h3>
//           </div>
//         </div>
//       </div>

//     );
//   }
// }

