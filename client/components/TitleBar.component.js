/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="bride-name">Viviana</span>
                <span className="groom-name">&nbsp;
                    <span>y</span> Montre
                </span>
                <div className="wedding-date">1<sup>st</sup> February, 2019</div>
            </header>
        );
    }
}

export default TitleBar;
