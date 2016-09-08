import React, {Component} from 'react'
import { Link } from 'react-router'

import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'

import MenuIcon from 'grommet/components/icons/base/Menu'

class ToggleSidebarComponent extends Component {
    onToggleButtonClick() {
        this.props.toggleSidebar(this.props.showSidebar)
    }

    render() {
        return (
            <div>
                Showing SideBar: {this.props.showSidebar.toString() }
                <button onClick={this.onToggleButtonClick.bind(this) }>Toggle Sidebar</button>
            </div>
        )
    }
}

export default ToggleSidebarComponent
