import React, {Component} from 'react'

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
        );
    }
}

export default ToggleSidebarComponent