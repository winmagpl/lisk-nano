/* global document */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';
import ReduxCounter from './components/counter';
import Metronome from './utils/metronome';
import Dialogs from './components/dialogs/dialogs';
import styles from './main.css';
import Static from './components/static';
import grid from '../node_modules/flexboxgrid/dist/flexboxgrid.css';

class App extends React.Component {
  constructor() {
    super();
    this.ReduxCounter = ReduxCounter;
    // TODO: use Redux for this state
    this.state = {
      activeDialog: null,
      // TODO: implement login page
      account: {
        passphrase: 'wagon stock borrow episode laundry kitten salute link globe zero feed marble',
        publicKey: 'c094ebee7ec0c50ebee32918655e089f6e1a604b83bcaa760293c61e0f18ab6f',
      },
    };
  }

  setActiveDialog(name) {
    this.setState(Object.assign({}, this.state, { activeDialog: name }));
  }

  componentDidMount() {
    // start dispatching sync ticks
    this.metronome = new Metronome();
    this.metronome.init();
  }

  render() {
    return (
      <section className={styles['body-wrapper']}>
        <Router>
          <div>
            <nav>
              <div className={`${grid.row} ${grid['end-xs']}`}>
                <div className={grid['col-xs-6']}>
                  <IconMenu className='main-menu-icon-button'
                      icon='more_vert' position='topRight' menuRipple>
                    <MenuItem
                      className='sign-message'
                      onClick={this.setActiveDialog.bind(this, 'sign-message')}
                      caption='Sign Message' />
                    <MenuItem
                      className='verify-message'
                      onClick={this.setActiveDialog.bind(this, 'verify-message')}
                      caption='Verify Message' />
                  </IconMenu>
                </div>
              </div>
              <Dialogs active={this.state.activeDialog}
                closeDialog={this.setActiveDialog.bind(this, null)}
                account={this.state.account} />
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/counter">counter</Link>
                </li>
                <li>
                  <Link to="/static">Static</Link>
                </li>
              </ul>
            </nav>
            <Route exact path="/" render={() => <p>Home</p>} />
            <Route path="/static" component={Static} />
            <Route path="/counter" component={this.ReduxCounter} />
          </div>
        </Router>
      </section>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
