import React from 'react';
import CreateHelpComponent from '../Component/DomestisHelp/CreateHelpComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<CreateHelpComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});