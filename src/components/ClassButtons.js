import React, {Component} from 'react';

export default class ClassButtons extends Component{
    constructor(props){
        super(props);
        this.state = {
            "paragraphs": "",
            "headings": "",
            "ul": "",
            "ol": "",
            "link": ""
        }
    }
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