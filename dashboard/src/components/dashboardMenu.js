// @ts-check

// @ts-ignore
import React, {Component} from 'react';
import DropdownMenu from './dropdownMenu';

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

    /**
     * Renders the menu bar to the screen
     */
    render() {
        return(
            <>
              <div className="DashboardMenu">
                <ul className="links">
                  <DropdownMenu text="tjenare"/>
                  <DropdownMenu/>
                </ul>
              </div>
            </>
        );
    }
}

export default DashboardMenu;
