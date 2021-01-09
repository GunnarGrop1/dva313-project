// @ts-check

// @ts-ignore
import React, {Component} from 'react';
import {RiArrowDownSLine} from 'react-icons/ri';

/**
 * A generic dropdown menu which takes it's text and menu items as properties in the constructor.
 */
class Dropdown extends Component {
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

    toggleFunc = this.toggleVisibility.bind(this);

    toggleVisibility() {
        this.setState(state => ({showMenu: !state.showMenu}))

        if(!this.state.showMenu) {
          document.removeEventListener("click", this.toggleFunc);
        }
    }

    /**
     * Renders the dropdown to the screen
     */
    render() {
        return(
            <div>
              <button onClick={() => {document.addEventListener("click", this.toggleFunc);}}>{this.props.text}  <RiArrowDownSLine /></button>
              {
                  this.state.showMenu ? (
                          <div className="Dropdown">
                            <ul>
                              {
                                  this.state.menuItems.map((obj, i) => {
                                      return ( <li onClick={() => this.props.method(obj.link)} key={i}>
                                                   {obj.text}
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
