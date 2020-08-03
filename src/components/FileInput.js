import React, { Component } from "react"
import { Button, Container, TextField, Divider, ButtonGroup, Box } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

var styles = {
  fileInput: {
    display: "none"
  },
  text: {
    width: "40rem"
  }
}

class FileInput extends Component {
  constructor(props) {
    super()
    this.props = props
  }

  render() {
    return (
      <ButtonGroup>
        <TextField style={styles.text} value={this.props.name} id="standard-basic" label="Select file" />
        <Button variant="contained" color="primary" aria-label="upload file" component="label">
          <input onChange={this.props.updateFile} type="file" style={styles.fileInput} accept=".pdf"/>
          <Add />
        </Button>
        <Button onClick={this.props.removeFile} variant="contained" color="secondary" aria-label="upload file" component="label">
          <Remove />
        </Button>
      </ButtonGroup>
    )
  }

}

export default FileInput;
