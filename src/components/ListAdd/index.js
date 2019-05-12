import React, { Component } from "react";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TodoActions from "../../store/actions/todos";

class ListAdd extends Component {
  state = {
    textoTarefa: "",
    corTarefa: "primary"
  };

  handleChangeTexto = event =>
    this.setState({ textoTarefa: event.target.value });

  handleChangeCor = event => this.setState({ corTarefa: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    this.props.addTodo(this.state.textoTarefa, this.state.corTarefa);
    this.setState({
      textoTarefa: "",
      corTarefa: "primary"
    });
  };

  // this.setState({ corTarefa: event.target.value });

  render() {
    const { textoTarefa, corTarefa } = this.state;

    const classeSelect = corTarefa
      ? `custom-select rounded-0 bg-${corTarefa}`
      : "custom-select rounded-0 bg-primary";

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Escreva uma tarefa..."
            value={textoTarefa}
            onChange={this.handleChangeTexto}
            required
          />

          <div className="input-group-append">
            <select
              className={classeSelect}
              value={corTarefa}
              onChange={this.handleChangeCor}
              required
            >
              <option value="primary">azul</option>
              <option value="success">verde</option>
              <option value="danger">vermelho</option>
              <option value="warning">amarelo</option>
              <option value="light">branco</option>
            </select>

            <button className="btn btn-outline-secondary" type="submit">
              Adicionar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ListAdd);
