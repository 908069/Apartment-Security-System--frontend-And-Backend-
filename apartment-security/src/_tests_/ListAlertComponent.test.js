import React from 'react';
import ListAlertComponent from '../Component/SecurityAlert/ListAlertComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ListAlertComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});