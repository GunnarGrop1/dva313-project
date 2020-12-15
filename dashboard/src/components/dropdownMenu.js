// @ts-check

// @ts-ignore
import React, {Component} from 'react';
import {RiArrowDownSLine} from 'react-icons/ri';

/**
 * A generic dropdown menu which takes it's text and menu items as properties in the constructor.
 */
class Dropdown extends Component {
    /**
     * @param {Object} args - Properties passed from the caller
     * @param {boolean} args.showMenu - Defaults as false.
     * @param {Object} args.menuItems - The menu items that will be shown in the dropdown.
     * @param {Object[]} args.menuItems - An array of items.
     * @param {string} args.menuItems[].link - The link that the menu item will open.
     * @param {string} args.menuItems[].text - The text that will be displayed on the menu item.
     */
    constructor(args) {
        super(args);
        this.state = {
            showMenu: false,
            menuItems: args.menuItems
        };
    }

    /**
     * Deafult properties. These can be overridden.
     * @type{{text: string}}
     */
    static defaultProps = {
        text: "Dropdown menu"
    }

    /**
     * Renders the dropdown to the screen
     */
    render() {
        return(
            <div>
              <button onClick={(e) => this.setState({showMenu: !this.state.showMenu})}>{this.props.text}  <RiArrowDownSLine /></button>
              {
                  this.state.showMenu ? (
                          <div className="Dropdown">
                            <ul>
                              {
                                  this.state.menuItems.map((obj, i) => {
                                      return ( <li key={i}>
                                                 <a href={obj.link}>
                                                   {obj.text}
                                                 </a>
                                               </li> );
                                  })
                              }
                            </ul>
                          </div>
                      ) : (
                          null
                      )
              }
            </div>
        );
    }
}

export default Dropdown;
