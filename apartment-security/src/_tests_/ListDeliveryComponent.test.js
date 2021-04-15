import React from 'react';
import ListDeliveryComponent from '../Component/Delivery/ListDeliveryComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ListDeliveryComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});