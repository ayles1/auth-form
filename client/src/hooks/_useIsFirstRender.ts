import { useRef } from 'react';

const _useIsFirstRender = (): boolean => {
    const isFirst = useRef(true);

    if (isFirst.current) {
        isFirst.current = false;

        return true;
    }

    return isFirst.current;
};

export default _useIsFirstRender;
