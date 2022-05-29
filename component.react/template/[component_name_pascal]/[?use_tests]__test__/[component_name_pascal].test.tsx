/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React from 'react';
import { fireEvent, cleanup, render, prettyDOM, waitFor, waitForElement, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { <%- component_name_pascal %> } from '../<%- component_name_pascal %>';

describe('<<%- component_name_pascal %> />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        const { container } = render(
            <<%- component_name_pascal %> />,
        );

        // // ///////////////////////
        // // a short cheat sheet
        //
        // // how to print out current DOM
        // console.log(prettyDOM(container));
        //
        // // how to search for elements
        // const node = container.querySelector(
        //     '.some-selector'
        // ) as HTMLElement;
        // const anotherNode = screen.getByTestId('search-input') as HTMLElement;
        //
        // // how to fire events
        // act(() => {
        //     fireEvent.click(button);
        // });
        //
        // act(() => {
        //     fireEvent.change(input, { target: { value: 'some value' } });
        // });
        //
        // // how to wait for an assertion to be fulfilled
        // await waitFor(() => {
        //     expect(something).toBeTrue();
        // });
        //
        // // how to wait for async events to change the DOM:
        // const element = await waitForElement(
        //     () => screen.getByTestId(container, 'element'),
        //     { container, timeout: 1000 }
        // );
        //
        // expect(element).toBeInstanceOf(HTMLElement);
        // expect(element).toHaveAttribute('href', 'https://google.com');
        // expect(element).toBeDisabled();
        //
        // userEvent.type(input, 'Max Mustermann');
        //
        // // how to check if there is a CSS rule
        // const tree = renderer.create(<<%- component_name_pascal %> />).toJSON();
        // expect(tree).toHaveStyleRule('border-width', '2px');
        //
        // // how to use mock
        // const onClick = jest.fn();
        // const result = render(<<%- component_name_pascal %> onClick={onClick} />);
        // element = result.container.querySelector('.<%- component_name_pascal %>');
        // userEvent.click(element!);
        // expect(onClick).toHaveBeenCalled();
        //
        // // how to test custom hooks
        // const { result } = renderHook(() => useRef());
        // render(<<%- component_name_pascal %> ref={result.current} />);
        // expect(result.current.current).toBeInstanceOf(HTMLElement);
    });
});
