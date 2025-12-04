import React from 'react';

const RightSide = ({ children }) => {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {children}
        </main>
    );
};

export default RightSide;
