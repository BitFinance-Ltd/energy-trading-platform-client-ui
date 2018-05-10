import React from 'react';
import { shallow, mount } from 'enzyme';
import DateField from '../DateField';

const onChangeStub = jest.fn();
function renderComponent(
    { label = 'test', name = 'test', onChange = onChangeStub, ...otherProps } = {},
    mountFn = mount
) {
    return mountFn(<DateField label={label} name={name} onChange={onChange} {...otherProps} />);
}

describe('<DateField /> component', () => {
    afterEach(() => {
        onChangeStub.mockClear();
    });

    it('should renders without errors', () => {
        renderComponent({ value: Date.now() });
    });

    it('should calculate date picker position', () => {
        const dateField = renderComponent({ value: Date.now() });

        jest.spyOn(dateField.instance().dateFieldRef, 'getBoundingClientRect').mockReturnValue({ top: 450 });
        dateField
            .find('TextField')
            .props()
            .onFocus();
        expect(dateField.state().datePickerPosition).toBe('top');
        dateField.instance().dateFieldRef.getBoundingClientRect.mockRestore();

        jest.spyOn(dateField.instance().dateFieldRef, 'getBoundingClientRect').mockReturnValue({ top: 200 });
        dateField
            .find('TextField')
            .props()
            .onFocus();
        expect(dateField.state().datePickerPosition).toBe('bottom');
        dateField.instance().dateFieldRef.getBoundingClientRect.mockRestore();
    });

    it('should display date picker', () => {
        const dateField = renderComponent();

        dateField
            .find('TextField')
            .props()
            .onFocus();
        dateField.update();
        expect(dateField.find('DatePicker')).toHaveLength(1);
    });

    it('should update state and calls onChange callback', () => {
        let dateMock = new Date();
        let timestamp = parseInt(dateMock.getTime() / 1000, 10);
        const dateField = renderComponent({}, shallow);

        dateField.setState({ hasFocus: true });
        dateField.update();
        dateField
            .find('DatePicker')
            .props()
            .onChange(dateMock);
        expect(dateField.state().value).toEqual(timestamp);
        expect(onChangeStub).toHaveBeenCalledWith({ target: { name: 'test', value: timestamp } });

        onChangeStub.mockClear();
        dateMock = new Date();
        timestamp = parseInt(dateMock.getTime() / 1000, 10);
        dateField
            .find('DatePicker')
            .props()
            .onConfirm(dateMock);
        expect(dateField.state().value).toEqual(timestamp);
        expect(dateField.state().hasFocus).toBeFalsy();
        expect(onChangeStub).toHaveBeenCalledWith({ target: { name: 'test', value: timestamp } });
    });

    it('should not calls onChange callback', () => {
        const dateField = renderComponent({}, shallow);

        dateField.setState({ hasFocus: true });
        dateField
            .find('DatePicker')
            .props()
            .onCancel();
        expect(dateField.state().hasFocus).toBeFalsy();
        expect(onChangeStub).not.toHaveBeenCalled();
    });

    it('should not calls onChange callback if onChange is not a function', () => {
        let dateMock = new Date();
        const dateField = renderComponent({ onChange: null }, shallow);

        dateField.setState({ hasFocus: true });
        dateField.update();
        dateField
            .find('DatePicker')
            .props()
            .onChange(dateMock);
        expect(onChangeStub).not.toHaveBeenCalled();
    });
});
