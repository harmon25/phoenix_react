import React from 'react';
import { render } from 'react-dom';
import { Socket } from 'phoenix';

import App from './components/app';

render(<App />, document.getElementById('root'));
