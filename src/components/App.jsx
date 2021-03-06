import React, { Component } from 'react'
import { Link } from 'react-router'

import App from 'grommet/components/App'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Search from 'grommet/components/Search'
import Menu from 'grommet/components/Menu'

import MenuIcon from 'grommet/components/icons/base/Menu'
import FavoriteIcon from 'grommet/components/icons/base/Favorite'

import NavSplit from './template/NavSplit'

export default class MainApp extends Component {
  render() {
    return (
      <App centered={false}>
        <NavSplit
          logo={<MenuIcon />}
          heading="Moleculist"
          navMenu={<Menu primary={true}>
            <Link to="/blog" >Blog</Link>
            <Link to="/toggle" >Toggle</Link>
          </Menu>}
          search={<Search inline={true} placeHolder="Search" />}>
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
        </NavSplit>
      </App>
    )
  }
}