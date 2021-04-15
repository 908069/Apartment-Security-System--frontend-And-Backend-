import React from 'react';
import CreateAlertComponent from '../Component/SecurityAlert/CreateAlertComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<CreateAlertComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});