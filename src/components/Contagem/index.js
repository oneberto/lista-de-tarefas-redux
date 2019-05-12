import React, { Component } from "react";

import { connect } from "react-redux";

// import { Container } from './styles';

class Contagem extends Component {
  render() {
    const { todos } = this.props;

    return (
      <p className="lead">
        {todos.length === 0 && <>Você ainda nâo possui tarefas.</>}

        {todos.length > 0 && (
          <>
            Você possui{" "}
            <span className="badge badge-secondary">{todos.length}</span> tarefa
            {todos.length > 1 && "s"}.
          </>
        )}
      </p>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Contagem);
