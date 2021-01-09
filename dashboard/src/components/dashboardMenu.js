// @ts-check

// @ts-ignore
import React, {Component} from 'react';
import Dropdown from './dropdownMenu';

/**
 * A specific menu for the dashboard
 */
class DashboardMenu extends Component {
    /**
     * @param {Object} args - Properties passed from caller.
     */
    constructor(args) {
        super(args);
    }

    // TODO: fix proper values
    list = [
        {
            link: "-33 minutes",
            text: "Last 30 minutes"
        },
        {
            link: "-63 minutes",
            text: "Last hour"
        },
        {
            link: "-243 minutes",
            text: "Last 4 hours"
        }
    ];

    /**
     * Renders the menu bar to the screen
     */
    render() {
        return(
            <div className="DashboardMenu">
              <Dropdown method={this.props.method} text="Time span" menuItems={this.list}/>
            </div>
        );
    }
}

export default DashboardMenu;
