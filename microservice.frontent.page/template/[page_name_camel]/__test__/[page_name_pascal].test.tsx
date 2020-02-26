/**
 * https://github.com/sapegin/jest-cheat-sheet
 */

import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fireEvent, cleanup, render, prettyDOM } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import { <%- page_name_pascal %>Page } from '..';

describe('<<%- page_name_pascal %>Page />', () => {
    // beforeAll(async () => {
    // });
    // beforeEach(async () => {
    // });
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        const { getByText, getByTestId, container } = render(
            <<%- page_name_pascal %>Page
            />,
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
        // const anotherNode = getByTestId('search-input') as HTMLElement;
        //
        // // how to fire events
        // fireEvent.click(button);
        // fireEvent.change(input, { target: { value: 'some value' } });
        //
        // // how to wait for an assertion to be fulfilled
        // await wait(() => {
        //     expect(something).toBeTrue();
        // });
        //
        // // how to wait for async events to change the DOM:
        // const element = await waitForElement(
        //     () => getByTestId(container, 'element'),
        //     { container, timeout: 1000 }
        // );
        //
        // expect(element).toBeInstanceOf(HTMLElement);
        //
        // userEvent.type(input, 'Max Mustermann');
    });
});
