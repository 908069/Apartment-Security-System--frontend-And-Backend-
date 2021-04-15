import React from 'react';
import ListVehicleComponent from '../Component/Vehicle/ListVehicleComponents'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ListVehicleComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});