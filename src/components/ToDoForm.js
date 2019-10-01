 import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      pregunta: '',
      respuesta: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      pregunta: '',
      respuesta: ''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            {this.props.pregunta}
          </div>
          <div className="form-group">
            <select
                name="respuesta"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>Si</option>
              <option>No</option>
              <option>No sabe</option>
            </select>
          </div>
          <button type=" submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;