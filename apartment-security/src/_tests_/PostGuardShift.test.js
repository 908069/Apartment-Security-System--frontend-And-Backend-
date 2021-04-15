import React from 'react';
import PostGuardShift from '../Registration/PostGuardShift';
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<PostGuardShift/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});