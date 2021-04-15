import React from 'react';
import PostFlatdetails from '../Registration/PostFlatdetails';
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<PostFlatdetails/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});