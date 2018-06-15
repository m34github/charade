import React from 'react';
import PropTypes from 'prop-types';
import * as qs from 'query-string';
import axios from 'axios';
import { Button, Header } from 'semantic-ui-react';

import { db } from '../.env/firebase.config';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: qs.parse(this.props.location.search).id,
      data: {}
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
        fileName: 'test.pdf',
        filePath: 'https://firebasestorage.googleapis.com/v0/b/xen-charade.appspot.com/o/k%2Ftest.pdf?alt=media&token=578078df-0694-4e32-8d1a-9ce997b9aef2'
      }
    })
      .then((d) => {
        console.log(d); // eslint-disable-line
      });
    this.setState({}); // dummy
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
          <Header size="large">
            <Header as="h3">{this.state.data.title}</Header>
          </Header>
        </section>

        <Header as="h3">{this.state.data.message}</Header>
        <Header as="h3">{this.state.data.fee}</Header>
        <Header as="h3">{this.state.data.name}</Header>
        <Header as="h3">{this.state.data.file}</Header>

        <Button onClick={() => { this.print(); }}>Print</Button>
      </article>
    );
  }
}

Detail.propTypes = {
  location: PropTypes.object.isRequired
};

export default Detail;
