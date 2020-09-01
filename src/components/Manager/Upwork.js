import React, { Component } from "react";
import { Button, Form } from "reactstrap";

export default class Upwork extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  render() {
    return (
      <Form>
        <div className="form-group multi-preview justify-content-center">
          {(this.fileArray || []).map((url) => (
            <img src={url} alt="..." style={{ width: 300, height: 300 }} />
          ))}
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control"
            onChange={this.uploadMultipleFiles}
            multiple
          />
        </div>

        {/** <Button
          className="mr-4"
          type="button"
          //className="btn btn-danger btn-block"
          color="info"
          href="#pablo"
          size="sm"
          onClick={this.uploadFiles}
        >
          Upload
        </Button>*/}
      </Form>
    );
  }
}
