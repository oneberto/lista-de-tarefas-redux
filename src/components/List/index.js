import React, { Component } from "react";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// actions
import * as TodoActions from "../../store/actions/todos";

class List extends Component {
  render() {
    const { todos, removeTodo } = this.props;

    return (
      <ul className="list-group">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`list-group-item list-group-item-${todo.cor}`}
          >
            {todo.texto}

            <button onClick={() => removeTodo(todo.id)} className="close">
              <span aria-hidden="true">&times;</span>
            </button>

            {/* TODO
            
            <span
              onClick={() => removeTodo(todo.id)}
              className="float-right mx-2"
            >
              edit
            </span> */}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
