import React from 'react';
import CreateVehicleComponent from '../Component/Vehicle/CreateVehicleComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<CreateVehicleComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});