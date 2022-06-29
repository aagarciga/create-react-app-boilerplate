import React from 'react'
import './button.scss'
import styles from './Button.module.scss'

type ButtonProps = {
    primary?: boolean;
    dark?: boolean;
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}

const Button = ({
    primary = false,
    dark = false,
    size = 'medium',
    children,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'primary' : 'secondary';
    const darkClass = dark ? 'dark' : '';
    return (
        <button
            className={[`${styles['button']}`, 'button', mode, size, darkClass].join(' ')}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button