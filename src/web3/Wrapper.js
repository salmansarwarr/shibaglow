'use client';

import { Wagmi } from './wagmi';

const Wrapper = ({ children }) => {
    return (
        <>
            <Wagmi>
                {children}
            </Wagmi>
        </>
    );
};

export default Wrapper;