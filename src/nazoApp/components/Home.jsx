import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Image, Segment } from 'semantic-ui-react';

import SideMenu from './SideMenu.jsx';
import style from '../style';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMyData();
    this.props.loadPublicData();
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
              <Header as="h3">わたしの謎</Header>
              <Grid columns={4}>
                <Grid.Row>
                  {
                    Object.values(this.props.home.myData).map((d, i) => (
                      <Grid.Column key={i}>
                        <Image src={d.thumbnail} />
                      </Grid.Column>
                    ))
                  }
                </Grid.Row>
              </Grid>

              <Header as="h3">みんなの謎</Header>
              <Grid columns={4}>
                <Grid.Row>
                  {
                    Object.values(this.props.home.publicData).map((d, i) => (
                      <Grid.Column key={i}>
                        <section style={style.home.image}>
                          <Image src={d.thumbnail} />
                        </section>
                      </Grid.Column>
                    ))
                  }
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </article>
    );
  }
}

Home.propTypes = {
  home: PropTypes.object.isRequired,
  loadMyData: PropTypes.func.isRequired,
  loadPublicData: PropTypes.func.isRequired
};

export default Home;
