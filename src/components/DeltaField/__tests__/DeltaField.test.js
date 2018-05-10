import React from 'react';
import { shallow } from 'enzyme';
import DeltaField from '../DeltaField';

const labelsDummy = {
    beforeLabel: 'Current Market Price:',
    inputLabel: 'Delta to Market Price',
    afterLabel: 'Sale price:'
};
function renderComponent({ labels = labelsDummy, ...otherProps } = {}, mountFn = shallow) {
    return mountFn(<DeltaField labels={labels} {...otherProps} />);
}

describe('<DeltaField /> component', () => {
    it('should renders without errors', () => {
        renderComponent();
    });

    it('should renders with units', () => {
        const deltaField = renderComponent({ labels: { ...labelsDummy, units: 'cent' } });
        expect(deltaField.find('td')).toHaveLength(9);
    });

    it('should calls onChange callback', () => {
        const onChangeStub = jest.fn();
        const deltaField = renderComponent({ initialValue: 2.5, onChange: onChangeStub });

        deltaField
            .find('NumberField')
            .props()
            .onChange(0.4);
        expect(deltaField.state()).toEqual({ initialValue: 2.5, delta: 0.4, value: 2.9 });
        expect(onChangeStub).toHaveBeenCalledWith(
            expect.objectContaining({
                target: { value: 2.9, delta: 0.4 }
            })
        );
    });

    it('should not calls onChange callback if onChange is not a function', () => {
        const deltaField = renderComponent({ initialValue: null, onChange: null });

        deltaField
            .find('NumberField')
            .props()
            .onChange(0.4);
        expect(deltaField.state()).toEqual({ initialValue: 0, delta: 0.4, value: 0.4 });
    });
});
