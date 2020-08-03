import React, { Component } from "react"
import { Button, Container, Typography, Box } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import FileInput from "../components/FileInput.js"
import UArray from "../utils/UArray.js"

var styles = {
  fileInput: {
    display: "none"
  },
  container: {
    height: "75vh",
    "overflowY": "scroll"
  }
}

class MergePDF extends Component {

  constructor() {
    super()
    this.state = {files: [""], output:""}
    this.updateFile = this.updateFile.bind(this)
    this.renderFileInput = this.renderFileInput.bind(this)
    this.addMoreFileInput = this.addMoreFileInput.bind(this)
    this.removeFile = this.removeFile.bind(this)
  }

  updateFile(evnt, index) {
    console.log(evnt.target.value, index)
    let filePath = evnt.target.files[0].path
    let files = this.state.files
    files[index] = filePath
    if (files[files.length-1] != "") {
      files.push("")
    }
    this.setState({...files})
  }

  removeFile(i) {
    let files = this.state.files
    files = UArray.removeByIndex(files, i)
    console.log(files, i)
    if (files.length == 0 || files[files.length-1] != "") {
      files.push("")
    }
    console.log(files)
    this.setState({...files})
  }

  renderFileInput(name, index) {
    return (
      <Box mt={1}>
        <FileInput
          name={name}
          updateFile={(evnt) => this.updateFile(evnt, index)}
          removeFile={() => this.removeFile(index)}
        />
      </Box>
    )
  }

  addMoreFileInput() {
    let files = this.state.files
    files.push("")
    this.setState({...files})
  }

  render() {
    return (
      <Box mt={1}>
        <Typography component="h3">
          Merge PDFs
        </Typography>
        <Container style={styles.container}>
          {this.state.files.map(this.renderFileInput)}
        </Container>
        <Button onClick={this.addMoreFileInput} variant="contained" color="primary" aria-label="upload file" component="span">
          Add More Files
        </Button>
        <br />
        <Container>
        <Button variant="contained" color="secondary" component="span">
          Home
        </Button>
        <Button variant="contained" color="primary" component="span">
          Merge PDF
        </Button>
        </Container>
      </Box>
    )
  }

}

export default MergePDF;
