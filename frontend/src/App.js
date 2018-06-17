import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toolbar, { ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ImageWbSunny from 'material-ui/svg-icons/image/wb-sunny';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

        
const style = {
  marginTop: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const pstyles = {
  marginTop: 100,
  textAlign: 'center'
};

const twstyle = {
  backgroundColor:"#DCDCDC"
  
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
   
        <Toolbar style={twstyle}>
        <IconButton tooltip="Home">
      <ImageWbSunny />
    </IconButton>
    <ToolbarSeparator />
    <FlatButton
      href="https://github.com/devshiva619/Dialogflow-Weather-Bot-"
      target="_blank"
      label="Fork this on Github"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
        <ToolbarSeparator />

          <ToolbarTitle text="WeatherBot with Dialogflow" />
          </Toolbar>
 

<Paper style={style}>
<iframe
title="chatbot"
align="center"
    width="1500"
    height="700"
    src="https://console.dialogflow.com/api-client/demo/embedded/newweatherbot">
</iframe>
      </Paper>


      <p style={pstyles}>
        Made using <a href="https://dialogflow.com/">Dialogflow(api.ai)</a> as a part of Hasura Internship Project 
        </p>
      </div>
      </MuiThemeProvider> 
    );
  }
}

export default App;
