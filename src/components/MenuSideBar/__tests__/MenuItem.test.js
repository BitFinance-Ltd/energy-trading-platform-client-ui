import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import MenuItem from '../MenuItem';
import { mount } from 'enzyme';

function renderComponent(props) {
    return mount(<MenuItem {...props} />);
}

describe('<MenuItem /> Component', () => {
    it(`should contains following controls:
        - <FontAwesomeIcon>;
        - element '.menu-item-icon'
        - element '.menu-item-label';`, done => {
        const props = { icon: 'faCoffee', label: 'Item' };
        const component = renderComponent(props);
        const text = component.debug();

        expect(component.find(FontAwesomeIcon).length).toEqual(1);
        expect(text.includes('div className="menu-item-icon"')).toEqual(true);
        expect(text.includes('div className="menu-item-label"')).toEqual(true);

        done();
    });

    it('should change style when active', done => {
        const props = { icon: 'faCoffee', label: 'Item', active: true };
        const component = renderComponent(props);
        const text = component.debug();

        expect(
            text.includes('div role="menuitem" className="menu-item menu-item--active"')
        ).toEqual(true);

        done();
    });

    it('should handle on click event', done => {
        const props = { icon: 'faCoffee', label: 'Item', onClick: jest.fn() };
        const component = renderComponent(props);
        component
            .find('.menu-item')
            .at(0)
            .simulate('click');
        expect(props.onClick.mock.calls.length).toEqual(1);

        done();
    });
});
