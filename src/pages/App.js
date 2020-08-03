import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase, Grid, Paper, Card, CardContent, Typography, CardHeader, TextField } from '@material-ui/core';

var styles = {
  card: {
    width: "240px"
  }
}

class App extends Component {
  constructor() {
    super()
    this.tools = [{
        title: "Merge PDFs",
        hash: "MergePDF",
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
      },
      {
        title: "Split PDF",
        hash: "SplitPDF",
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
      },
      {
        title: "Excels to CSV",
        hash: "Excel2CSV",
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
      },
      {
        title: "CSVs to Excel",
        hash: "CSV2Excel",
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
      }]
  }
  
  render() {
    return (
      <div>
        <TextField margin="normal" style={styles.search} fullWidth label="Search" />
          <Grid item sm={12}>
            <Grid container justify="center" spacing={2}>
              {this.tools.map((value) => (
                <Grid key={value.hash} item>
                  <ButtonBase href={"#"+value.hash}>
                    <Card style={styles.card}>
                      <CardHeader title={value.title}/>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </ButtonBase>
                </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App
