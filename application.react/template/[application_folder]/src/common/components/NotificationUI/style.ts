import styled, { css, keyframes } from 'styled-components';
import { iconLabel, icon } from '@gannochenko/etc';
import { MessageIcon } from './type';

const mapType2Icon = {
    info: 'info_outline',
    error: 'new_releases',
    offline: 'sync_disabled',
    confirm: 'check_circle',
};

const getMessageIcon = ({ type, icon: iconCode }: MessageIcon) => {
    if (iconCode) {
        return iconCode;
    }

    if (type && mapType2Icon[type]) {
        return mapType2Icon[type];
    }

    return 'info_outline';
};

const appear = keyframes`
  from {
    transform: translate(100%);
  }

  to {
    transform: translate(0);
  }
`;

const disappear = keyframes`
  from {
    opacity: 1;
	transform: translate(0, 0);
  }

  to {
	opacity: 0;
	height: 0;
	transform: translate(0, -20px);
  }
`;

export const NotificationUIRoot = styled.div`
    position: fixed;
    top: 5rem;
    right: 0;
    z-index: 1300;
`;

export const MessageWrap = styled.div<{ closing: boolean }>`
    ${({ closing }) =>
        closing
            ? css`
                  animation: ${disappear} 0.5s ease;
                  animation-fill-mode: forwards;
                  overflow: hidden;
              `
            : ''}
`;

export const Message = styled.div<{ closable?: true }>`
    margin-right: 0.5rem;
    background-color: white;
    animation: ${appear} 0.25s ease;
    ${(props) => (props.closable ? 'padding-right: 3rem;' : '')};
    border: 1px solid lightgray;
    border-radius: 2px;
    position: relative;
    box-shadow: 4px 6px 15px -4px rgba(0, 0, 0, 0.21);
    overflow-x: hidden;
    padding: 0.5rem 2.5rem 0.5rem 0;
    width: 20rem;
`;

export const MessageGap = styled.div`
    padding-bottom: 1rem;
`;

export const Text = styled.div`
    ${(props: MessageIcon) =>
        iconLabel(getMessageIcon(props), '1.3rem', '0', 'baseline', '2.5rem')}
    &:before {
        line-height: 100%;
    }
`;

export const Close = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    ${icon('close', '1rem', '0.7rem')}
    cursor: pointer;
`;
