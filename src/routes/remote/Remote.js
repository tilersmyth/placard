/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import RemoteNav from '../../components/RemoteNav';

class Remote extends React.Component {
  constructor() {
    super();
    this.state = { currentUrl: null };
  }

  componentDidMount() {
    this.ifr.onload = () => {
      console.log(this.ifr.contentWindow);
    };
  }

  urlChange = e => {
    console.log(e);
  };

  render() {
    const {
      device: { url },
    } = this.props;

    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      minHeight: '100%',
    };

    return (
      <div>
        <iframe
          id="remote"
          style={style}
          src={url}
          ref={f => {
            this.ifr = f;
          }}
        />
        <RemoteNav url={url} />
      </div>
    );
  }
}

export default Remote;
