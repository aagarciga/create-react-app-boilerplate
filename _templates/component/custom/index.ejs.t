---
to: src/components/customs/<%= Name %>/index.tsx
---
// Copyright 2022 Origin It Solutions B.V

/**
 * (Type docs)
 * 
 * @author username
 * 
 */

import React from 'react';

import './styles.scss';
import styles from './<%= Name %>.module.scss';

interface <%= Name %>Props {
    children?: React.ReactNode;
};

const <%= Name %> = (props: <%= Name %>Props) => {
    const {children} = props;
    return (
        <div className={['<%= h.changeCase.paramCase(name) %>', styles['<%= h.changeCase.paramCase(name) %>']].join(' ')}>
            {children}
        </div>
    );
}

export default <%= Name %>;