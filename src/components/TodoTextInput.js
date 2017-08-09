import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {FormGroup,FormControl} from 'react-bootstrap';
import '../style/App.css'

class TodoTextInput extends Component {
    constructor(props) {
        super(props);
    }

    handlePress(e){
        if(e.which === 13){
            //TODO:获取不到文本框中的内容
            this.props.handlePress(e.target.value);
        }
    }


    render() {
        return (
            <div>
                <form className="Todo-input col-xs-6">
                    <FormGroup bsSize="large" >
                        <FormControl type="text"  placeholder="what need to be done?" onKeyPress={(e)=>{this.handlePress(e)}}/>
                    </FormGroup>
                </form>
                <div>
                    {/*{this.props.todo.addTodo}*/}
                </div>
            </div>
        );
    }
}

export default TodoTextInput;