import React from 'react';
import renderer from 'react-test-renderer';
import SearchInput from '../src/components/common/searchInput';

describe('searchInput component', () => {
  it('renders searchInput correctly', () => {
    const tree = renderer
      .create(<SearchInput handleChangeDebounce={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
