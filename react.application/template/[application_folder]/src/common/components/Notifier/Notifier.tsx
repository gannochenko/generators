import { observer } from 'mobx-react';
import { useNotification } from '@gannochenko/ui';
import { useErrorNotification } from '../../lib';
import { SubState } from '../../state/type';

export const Notifier = observer(({ state }: { state: SubState }) => {
    const notify = useNotification();
    useErrorNotification(state.error, notify);

    return null;
});
