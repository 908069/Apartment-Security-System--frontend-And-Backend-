import React from 'react';
import CreateVisitorComponent from '../Component/Visitors/CreateVisitorComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<CreateVisitorComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});