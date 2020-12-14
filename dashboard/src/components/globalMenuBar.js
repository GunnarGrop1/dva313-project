// @ts-check

// @ts-ignore
import React, {Component} from 'react';
import {AiOutlineDashboard, AiOutlineSetting} from 'react-icons/ai';

/**
 * Creates a menu bar with links
 */
class GlobalMenuBar extends Component {
    /**
     * @param {Object} args - Properties passed from caller.
     */
    constructor(args) {
        super(args);
        this.state = {
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
     * An array consisting of the links that will be in the menu bar
     */
    links = [
        {
            link: "/",
            icon: AiOutlineDashboard
        },
        {
            link: "/settings/",
            icon: AiOutlineSetting
        }
    ];

    /**
     * Renders the menu bar to the screen
     */
    render() {
        return(
            <>
              <div className="GlobalMenuBar">
                <ul className="links">
                  {
                      this.links.map((obj, i) => {
                          return ( <li key={i}>
                                     <a href={obj.link}>
                                       <obj.icon size={this.props.iconSize} />
                                     </a>
                                   </li> );
                      })
                  }
                </ul>
              </div>
            </>
        );
    }
}

export default GlobalMenuBar;
