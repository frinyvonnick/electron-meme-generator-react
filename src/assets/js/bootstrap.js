import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '../../renderer-process/Grid';

window.onload = function(){
  ReactDOM.render(<Grid />, document.getElementById('main'));
}
