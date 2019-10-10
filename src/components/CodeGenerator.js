import React, {Component} from 'react';
import ClassButtons from './ClassButtons';

export default class CodeGenerator extends Component{
    render(){
        return(
            <div className="codeSnippet">
                <div className="copyBtn">Copy Code</div>
                <ClassButtons />
                <div className="container">{this.props.data}</div>
            </div>
            );
        }
    }