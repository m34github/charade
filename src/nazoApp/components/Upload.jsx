import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Grid, Header, Input, Modal, Segment } from 'semantic-ui-react';

import SideMenu from './SideMenu.jsx';
import style from '../style';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      titleRef: React.createRef(),
      messageRef: React.createRef(),
      feeRef: React.createRef(),
      publicRef: React.createRef()
    };
  }

  load(file) {
    this.setState({
      file
    });
  }

  upload() {
    this.props.uploadFile(this.props.auth.user, {
      title: this.state.titleRef.current.inputRef.value,
      message: this.state.messageRef.current.inputRef.value,
      fee: this.state.feeRef.current.inputRef.value,
      public: this.state.publicRef,
      file: this.state.file,
      thumbnail: 'assets/img/dummy.jpg'
    });
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
              <Header as="h2">謎解きメーカー</Header>

              <Header as="h3">タイトル</Header>
              <Input placeholder="例) 謎解き街歩き" ref={this.state.titleRef} />

              <Header as="h3">メッセージ</Header>
              <Input placeholder="例) 川崎市からの挑戦状" ref={this.state.messageRef} />

              <Header as="h3">参加費 (円)</Header>
              <Input placeholder="例) 1000" type="number" ref={this.state.feeRef} />

              <Header as="h3">公開する</Header>
              <Checkbox
                toggle
                ref={this.state.publicRef}
                onChange={(e, v) => { this.state.publicRef = v.checked; }}
              />

              <Header as="h3">ファイル (PDF)</Header>
              <input
                id="localFile"
                onChange={(e) => { this.load(e.target.files[0]); }}
                style={style.upload.input}
                type="file"
              />
              <label htmlFor="localFile">
                <Button basic color="violet" as="span" style={style.upload.button}>
                  {this.state.file ? this.state.file.name : 'ローカルファイルを選択'}
                </Button>
              </label>

              <div style={style.upload.divButton}>
                <Button color="violet" as="span" onClick={() => { this.upload(); }}>アップロード</Button>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Modal basic size="small" open={this.props.upload.uploading}>
          <Modal.Content>
            <h1>Now Uploading...</h1>
          </Modal.Content>
        </Modal>
      </article>
    );
  }
}

Upload.propTypes = {
  auth: PropTypes.object.isRequired,
  upload: PropTypes.object.isRequired,
  uploadFile: PropTypes.func.isRequired
};

export default Upload;
