import React from 'react';
import PropTypes from 'prop-types';
import * as qs from 'query-string';
import axios from 'axios';
import { Button, Header, Icon, Input, Message, Modal } from 'semantic-ui-react';

import { db } from '../.env/firebase.config';
import style from '../style';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: qs.parse(this.props.location.search).id,
      data: {},
      printed: false,
      printInfo: {}
    };
  }

  componentDidMount() {
    this.load();
  }

  async load() {
    db.ref().child('data').once('value', (snapshot) => {
      const data = Object.values(snapshot.val()).filter(v => v.path === parseInt(this.state.id, 10));
      this.setState({
        data: data[0]
      });
    });
  }

  print() {
    axios({
      method: 'post',
      url: 'https://h55il4d97b.execute-api.ap-northeast-1.amazonaws.com/prod/netprint',
      data: {
        fileName: this.state.data.name,
        filePath: this.state.data.file
      }
    })
      .then((d) => {
        this.setState({
          printed: true,
          printInfo: JSON.parse(d.data.body)
        });
      });
  }

  closeModal() {
    this.setState({
      printed: false
    });
  }

  render() {
    return (
      <article>
        <section
          style={{
            background: `url(${this.state.data.thumbnail}) center / cover`,
            height: 200,
            width: '100%'
          }}
        >
          <section style={style.detail.titleSection}>
            <Header as="h3" style={style.detail.header}>{this.state.data.title}</Header>
          </section>
        </section>

        <section style={style.detail.contents}>
          <Message size="big">{this.state.data.message}</Message>

          <section style={style.detail.content}>
            <p>参加費</p>
            <Header as="h2">￥{this.state.data.fee}</Header>
          </section>
        </section>

        <section style={style.detail.answer}>
          <Input placeholder="解答を入力する" />
          <Button primary>送信</Button>
        </section>

        <footer style={style.detail.footer}>
          <Button fluid color="orange" size="large" onClick={() => { this.print(); }}>この謎に挑戦する</Button>
        </footer>

        <Modal basic size="small" open={this.state.printed}>
          <Modal.Content>
            <section>
              <h2>覚悟完了</h2>
              <p>この画面のスクリーンショットを取っておいた方が良いですよ</p>
              <h5>印刷番号: {this.state.printInfo.printID}</h5>
              <h5>印刷費: ￥{this.state.printInfo.price}</h5>
            </section>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={() => { this.closeModal(); }}>
              <Icon name="checkmark" /> とりましたよ
            </Button>
          </Modal.Actions>
        </Modal>
      </article>
    );
  }
}

Detail.propTypes = {
  location: PropTypes.object.isRequired
};

export default Detail;
