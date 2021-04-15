import React from 'react';
import ListVisitorComponent from '../Component/Visitors/ListVisitorComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ListVisitorComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});