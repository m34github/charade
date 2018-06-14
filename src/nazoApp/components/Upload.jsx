import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';

import SideMenu from './SideMenu.jsx';
import style from '../style';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }

  load(file) {
    this.setState({
      file
    });
    // const reader = new FileReader();
    // reader.addEventListener('load', () => {
    //   this.setState({
    //     data: reader.result,
    //     file
    //   });
    // });
    // reader.readAsDataURL(file);
  }

  upload() {
    this.props.uploadFile(this.state.file);
  }

  render() {
    return (
      <article style={style.common.article}>
        <Grid>
          <Grid.Column width={2}>
            <SideMenu />
          </Grid.Column>
          <Grid.Column width={14}>
            <Segment basic>
              <Header as="h2">Charade</Header>
              <input
                id="localFile"
                onChange={(e) => { this.load(e.target.files[0]); }}
                style={style.upload.input}
                type="file"
              />
              <label htmlFor="localFile">
                <Button basic color="violet" as="span" style={style.upload.button}>
                  {this.state.file ? this.state.file.name : 'Choose File'}
                </Button>
              </label>
              <Button color="violet" as="span" onClick={() => { this.upload(); }}>Upload</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </article>
    );
  }
}

export default Upload;
