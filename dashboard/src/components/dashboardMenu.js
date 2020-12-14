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
        this.state = {
        };
    }

    // TODO: fix proper values
    list = [
        {
            link: "/whatever/",
            text: "Menu item 1"
        },
        {
            link: "/whatever/",
            text: "Menu item 1"
        },
        {
            link: "/whatever/",
            text: "Menu item 1"
        }
    ];

    /**
     * Renders the menu bar to the screen
     */
    render() {
        return(
            <div className="DashboardMenu">
              <Dropdown text="Time span" menuItems={this.list}/>
            </div>
        );
    }
}

export default DashboardMenu;
