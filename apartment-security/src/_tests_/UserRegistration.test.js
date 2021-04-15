import React from 'react';
import UserRegistration from '../Registration/UserRegistration';
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<UserRegistration/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});