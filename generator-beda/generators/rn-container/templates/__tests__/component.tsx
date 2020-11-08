import React from 'react';
import renderer from 'react-test-renderer';
import { <%= ComponentName %> } from '../index';
<% if (useHook) { %>
jest.mock('../hooks', () => ({
    use<%= ComponentName %>: jest.fn(),
}));<% } %>

describe('Component `<%= ComponentName %>`', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('correct default render', async () => {
        const component = renderer.create(
            <<%= ComponentName %> />,
          );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});