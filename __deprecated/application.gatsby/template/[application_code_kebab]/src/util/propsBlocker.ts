import { ReactText } from 'react';

// shouldForwardProp blocks everything that matches a set of standard HTML attributes plus children, ref and dangerouslySetHTML
// in order to allow event handlers to be passed down to the react elements, we need to explicitly allow them against a white
// list of known events:
const allowedEventProps = {
    // Clipboard Events
    onCopy: true,
    onCopyCapture: true,
    onCut: true,
    onCutCapture: true,
    onPaste: true,
    onPasteCapture: true,

    // Composition Events
    onCompositionEnd: true,
    onCompositionEndCapture: true,
    onCompositionStart: true,
    onCompositionStartCapture: true,
    onCompositionUpdate: true,
    onCompositionUpdateCapture: true,

    // Focus Events
    onFocus: true,
    onFocusCapture: true,
    onBlur: true,
    onBlurCapture: true,

    // Form Events
    onChange: true,
    onChangeCapture: true,
    onBeforeInput: true, // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event
    onBeforeInputCapture: true,
    onInput: true,
    onInputCapture: true,
    onReset: true,
    onResetCapture: true,
    onSubmit: true,
    onSubmitCapture: true,
    onInvalid: true,
    onInvalidCapture: true,

    // Image Events
    onLoad: true,
    onLoadCapture: true,
    onError: true, // also a Media Event
    onErrorCapture: true, // also a Media Event

    // Keyboard Events
    onKeyDown: true,
    onKeyDownCapture: true,
    onKeyPress: true,
    onKeyPressCapture: true,
    onKeyUp: true,
    onKeyUpCapture: true,

    // Media Events
    onAbort: true,
    onAbortCapture: true,
    onCanPlay: true,
    onCanPlayCapture: true,
    onCanPlayThrough: true,
    onCanPlayThroughCapture: true,
    onDurationChange: true,
    onDurationChangeCapture: true,
    onEmptied: true,
    onEmptiedCapture: true,
    onEncrypted: true,
    onEncryptedCapture: true,
    onEnded: true,
    onEndedCapture: true,
    onLoadedData: true,
    onLoadedDataCapture: true,
    onLoadedMetadata: true,
    onLoadedMetadataCapture: true,
    onLoadStart: true,
    onLoadStartCapture: true,
    onPause: true,
    onPauseCapture: true,
    onPlay: true,
    onPlayCapture: true,
    onPlaying: true,
    onPlayingCapture: true,
    onProgress: true,
    onProgressCapture: true,
    onRateChange: true,
    onRateChangeCapture: true,
    onSeeked: true,
    onSeekedCapture: true,
    onSeeking: true,
    onSeekingCapture: true,
    onStalled: true,
    onStalledCapture: true,
    onSuspend: true,
    onSuspendCapture: true,
    onTimeUpdate: true,
    onTimeUpdateCapture: true,
    onVolumeChange: true,
    onVolumeChangeCapture: true,
    onWaiting: true,
    onWaitingCapture: true,

    // MouseEvents
    onAuxClick: true, // https://developer.mozilla.org/en-US/docs/Web/API/Element/auxclick_event
    onAuxClickCapture: true,
    onClick: true,
    onClickCapture: true,
    onContextMenu: true,
    onContextMenuCapture: true,
    onDoubleClick: true,
    onDoubleClickCapture: true,
    onDrag: true,
    onDragCapture: true,
    onDragEnd: true,
    onDragEndCapture: true,
    onDragEnter: true,
    onDragEnterCapture: true,
    onDragExit: true,
    onDragExitCapture: true,
    onDragLeave: true,
    onDragLeaveCapture: true,
    onDragOver: true,
    onDragOverCapture: true,
    onDragStart: true,
    onDragStartCapture: true,
    onDrop: true,
    onDropCapture: true,
    onMouseDown: true,
    onMouseDownCapture: true,
    onMouseEnter: true,
    onMouseLeave: true,
    onMouseMove: true,
    onMouseMoveCapture: true,
    onMouseOut: true,
    onMouseOutCapture: true,
    onMouseOver: true,
    onMouseOverCapture: true,
    onMouseUp: true,
    onMouseUpCapture: true,

    // // Selection Events
    onSelect: true,
    onSelectCapture: true,

    // yep, it is a long one...

    // Touch Events
    onTouchCancel: true,
    onTouchCancelCapture: true,
    onTouchEnd: true,
    onTouchEndCapture: true,
    onTouchMove: true,
    onTouchMoveCapture: true,
    onTouchStart: true,
    onTouchStartCapture: true,

    // Pointer Events
    onPointerDown: true,
    onPointerDownCapture: true,
    onPointerMove: true,
    onPointerMoveCapture: true,
    onPointerUp: true,
    onPointerUpCapture: true,
    onPointerCancel: true,
    onPointerCancelCapture: true,
    onPointerEnter: true,
    onPointerEnterCapture: true,
    onPointerLeave: true,
    onPointerLeaveCapture: true,
    onPointerOver: true,
    onPointerOverCapture: true,
    onPointerOut: true,
    onPointerOutCapture: true,
    onGotPointerCapture: true,
    onGotPointerCaptureCapture: true,
    onLostPointerCapture: true,
    onLostPointerCaptureCapture: true,

    // UI Events
    onScroll: true,
    onScrollCapture: true,

    // Wheel Events
    onWheel: true,
    onWheelCapture: true,

    // Animation Events
    onAnimationStart: true,
    onAnimationStartCapture: true,
    onAnimationEnd: true,
    onAnimationEndCapture: true,
    onAnimationIteration: true,
    onAnimationIterationCapture: true,

    // Transition Events
    onTransitionEnd: true,
    onTransitionEndCapture: true,
};

// finally...

export const propsBlocker = {
    shouldForwardProp: (
        propertyName: ReactText | boolean,
        validateProperty: (propertyName: any) => boolean,
    ) => {
        if (
            typeof propertyName === 'string' &&
            propertyName in allowedEventProps
        ) {
            return true;
        }

        // https://github.com/emotion-js/emotion/blob/main/packages/is-prop-valid/src/props.js
        return validateProperty(propertyName);
    },
};
