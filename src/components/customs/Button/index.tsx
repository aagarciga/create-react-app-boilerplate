import React from 'react'
import './styles.scss'
import styles from './Button.module.scss'

type ButtonProps = {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * Is this being shown in a dark theme?
     */
    dark?: boolean;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
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