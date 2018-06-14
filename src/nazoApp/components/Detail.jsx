import React from 'react';
import * as qs from 'query-string';

class Detail extends React.Component {
  componentDidMount() {
    console.log(qs.parse(this.props.location.search));
  }

  render() {
    return (
      <article>
        hello
      </article>
    );
  }
}

export default Detail;
