import React, { FC } from 'react'
import styles from './layout.module.scss'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles['layout-container']}>
            Layout
            {children}
        </div>
    )
}

export default Layout