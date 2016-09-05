import React, { Component } from 'react'

import App from 'grommet/components/App'
import Header from 'grommet/components/Header'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Search from 'grommet/components/Search'
import Sidebar from 'grommet/components/Sidebar'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Button from 'grommet/components/Button'
import Split from 'grommet/components/Split'
import Article from 'grommet/components/Article'

import MenuIcon from 'grommet/components/icons/base/Menu'
import CloseIcon from 'grommet/components/icons/base/Close'
import FavoriteIcon from 'grommet/components/icons/base/Favorite'

export default class MainApp extends Component {
  _onClose() {
    console.log('Close Side Menu');
  }
  render() {
    return (
      <App centered={false}>
        <Header large={true}
          direction="row"
          justify="between"
          pad={{ "horizontal": "medium" }}
          colorIndex="brand">
          <Title onClick={this._onClose}>
            <MenuIcon />
            Moleculist
          </Title>
          <Search inline={true} placeHolder="Search" />
        </Header>
        {this.props.children}
        <Footer
          primary={true}
          appCentered={true}
          direction="column"
          wrap={true}
          justify="between"
          align="center"
          pad={{ vertical: "small", horizontal: "medium", between: "medium" }}
          colorIndex="grey-1">
          <Box pad={{ vertical: "small", between: "small" }} align='center'
            direction='row' responsive={false}>
            <span>Made with</span><FavoriteIcon colorIndex="brand" /> <span>by Sumit Hingu</span>.
          </Box>
        </Footer>
      </App>
    )
  }
}
