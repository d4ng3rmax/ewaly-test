import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Balance from './Balance';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Balance/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
