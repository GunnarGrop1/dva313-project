// @ts-check

// @ts-ignore
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/**
 * Creates a menu bar with links
 */
class GlobalMenuBar extends Component {
    /**
     * @param {Object} args - Properties passed from caller.
     * @param {Object[]} args.links - An array of links
     * @param {Object} args.links[].component - The componenent that will be loaded when navigating to this link
     * @param {string} args.links[].path - The path that should be used to reach said component
     * @param {Object} args.links[].icon - An icon from the "react-icons" package that will be shown in the menu bar
     */
    constructor(args) {
        super(args);
        this.state = {
            links: args.links
        };
    }

    /**
     * Deafult properties. These can be overridden.
     * @type {{iconSize: string}}
     */
    static defaultProps = {
        iconSize: '40'
    };

    /**
     * Renders the menu bar to the screen
     */
    render() {
        return(
            <>
              <div className="GlobalMenuBar">
                <ul className="links">
                  {
                      this.state.links.map((obj, i) => {
                          return ( <Link to={obj.path}>
                                     <li key={i}>
                                       <obj.icon size={this.props.iconSize} />
                                     </li>
                                   </Link> );
                      })
                  }
                </ul>
              </div>
            </>
        );
    }
}

export default GlobalMenuBar;
