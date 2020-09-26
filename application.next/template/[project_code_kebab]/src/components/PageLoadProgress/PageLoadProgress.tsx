import React, { Component } from 'react';

import { PageLoadProgressPropsType, State } from './type';

export class PageLoadProgress extends Component<
    PageLoadProgressPropsType,
    State
> {
    static defaultProps = {
        debounceTolerance: 200,
        fadeTimeout: 1000,
        maximumStepDuration: 1000,
        loading: false,
        observeGlobalLock: false,
    };

    protected loadingBefore: boolean;
    protected startTimer?: number;
    protected timer?: number;
    protected fadeTimer?: number;
    protected step: number;

    constructor(props: PageLoadProgressPropsType) {
        super(props);
        this.loadingBefore = false;
        this.step = 0;

        this.state = {
            loading: false,
            progress: 0,
            shown: false,
            fading: false,
        };
    }

    componentDidMount() {
        this.processProperties();
    }

    componentDidUpdate() {
        this.processProperties();
    }

    processProperties() {
        const { shown } = this.state;
        const {
            debounceTolerance,
            fadeTimeout,
            maximumStepDuration,
            loading,
        } = this.props;

        if (loading !== this.loadingBefore) {
            // preventing the transition from playing backward
            if (loading && shown) {
                return;
            }

            if (!this.loadingBefore && loading) {
                if (this.startTimer) {
                    return;
                }

                this.startTimer = (setTimeout(() => {
                    // restart the process
                    const { stepCount = 15 } = this.props;

                    clearTimeout((this.fadeTimer as unknown) as number);
                    this.step = 0;
                    this.setState(
                        {
                            progress: 0,
                            fading: false,
                            shown: true,
                        },
                        () => {
                            const makeStep = () => {
                                this.timer = (setTimeout(
                                    () => {
                                        this.setState(({ progress }) => ({
                                            progress:
                                                progress +
                                                Math.floor(100 / stepCount),
                                        }));
                                        this.step += 1;
                                        if (this.step + 1 < stepCount - 1) {
                                            makeStep();
                                        }
                                    },
                                    this.step
                                        ? Math.floor(
                                              Math.random() *
                                                  (maximumStepDuration || 1000),
                                          )
                                        : 50,
                                ) as unknown) as number;
                            };
                            makeStep();
                        },
                    );
                }, debounceTolerance) as unknown) as number;
            } else if (this.loadingBefore && !loading) {
                // end the process
                clearTimeout((this.startTimer as unknown) as number);
                this.startTimer = undefined;
                clearTimeout((this.timer as unknown) as number);
                this.setState({
                    progress: 100,
                    fading: true,
                });
                this.fadeTimer = (setTimeout(() => {
                    this.setState({
                        shown: false,
                    });
                }, fadeTimeout) as unknown) as number;
            }
        }

        this.loadingBefore = loading;
    }

    render() {
        const { observeGlobalLock, children } = this.props;
        // @ts-ignore
        if (observeGlobalLock && !window.splashProgressBarUnlocked) {
            return null;
        }

        return children(this.state);
    }
}
