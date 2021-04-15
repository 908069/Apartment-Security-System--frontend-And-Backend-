import React from 'react';
import ListHelpComponent from '../Component/DomestisHelp/ListHelpComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ListHelpComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});