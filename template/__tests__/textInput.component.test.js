import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from '../src/components/common/textInput';

describe('textInput component', () => {
  it('renders textInput correctly', () => {
    const tree = renderer
      .create(<TextInput handleChangeDebounce={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
