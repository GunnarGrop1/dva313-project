// @ts-check

// @ts-ignore
import React, {Component} from 'react';

/**
 * A generic dropdown menu
 */
class DropdownMenu extends Component {
    /**
     * @param {Object} args - Properties passed from caller.
     */
    constructor(args) {
        super(args);
        this.state = {
            toggleMenu: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    static defaultProps = {
        text: "Dropdown menu"
    }

    toggleMenu(event) {
        event.preventDefault();

        this.setState({
            toggleMenu: true
        });
    }

    /**
     * Renders the dropdown to the screen
     */
    render() {
        return(
            <div className="dropdownMenu">
              <button onClick={this.toggleMenu}>{this.props.text}</button>
              {
                  this.state.toggleMenu
                      ? (
                          <div className="Items">
                            {
                                /*this.props.items.map((obj, i) => {
                                    return(
                                        <button key={i}>{obj}</button>
                                    );
                                    })*/

                            }
                            <button>Menu item 1</button>
                            <button>Menu item 2</button>
                            <button>Menu item 3</button>
                          </div>
                      )
                      : (null)
              };
            </div>
        );
    }
}

export default DropdownMenu;
