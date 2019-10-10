import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CodeGenerator from './CodeGenerator';

export default class MyEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "data": "",
    }
  }
  render() {
    return (
      <div>
      <CKEditor
      editor={ ClassicEditor }
      data=""
      onInit={ editor => {
        // You can store the "editor" and use when it is needed.
        console.log( 'Editor is ready to use!', editor );
      } }
      onChange={ ( event, editor ) => {
        const data = editor.getData();
        this.setState({"data": data});
      } }
      />
      <CodeGenerator data={this.state.data} />
      </div>
      );
    }
  }