import React from 'react';
import CreateDeliveryComponent from '../Component/Delivery/CreateDeliveryComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<CreateDeliveryComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});