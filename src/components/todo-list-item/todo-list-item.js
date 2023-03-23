import React,{Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component{
    render(){
        const {label,onDeleted,
            onToggleImportant,onToggleDone,
            important,done}=this.props

        let classNames="todo-list-item"

        if(done){
            classNames += ' done'
        }

       if (important){
           classNames +=' important'
       }

        return (
            <span className={classNames} >
        <span
            className="todo-list-item-label"
            onClick={onToggleDone}>
            {label}
        </span>

<button type="button"
        onClick={onToggleImportant}
        className="btn btn-outline-success btn-sm float-end">
<i className="fa fa-exclamation"/>
        </button>

<button type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={onDeleted}>
<i className="bi bi-trash3"/>
    </button>

            </span>

    )
    }
}

