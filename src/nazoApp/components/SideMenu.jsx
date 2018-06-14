import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

class SideMenu extends React.Component {
  render() {
    return (
      <section>
        <Sidebar
          as={Menu}
          animation="overlay"
          width="thin"
          visible
          icon="labeled"
          vertical
          inverted
        >
          <Menu.Item as="a" href="/" name="home">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a" href="/upload" name="upload">
            <Icon name="upload" />
            Upload
          </Menu.Item>
        </Sidebar>
      </section>
    );
  }
}

export default SideMenu;
