import React from 'react'
import styles from './FileTreeView.module.scss'

type Props = {}

const FileTreeView = ({ }: Props) => {
    return (
        <div className={styles['file-tree']}>
            <ul>
                <li>assets
                    <ul>
                        <li>documents</li>
                        <li>fonts</li>
                        <li>images</li>
                        <li>svgs</li>
                    </ul>
                </li>
                <li>auth</li>
                <li>components
                    <ul>
                        <li>containers</li>
                        <li>customs</li>
                        <li>layouts</li>
                        <li>views
                            <ul>
                                <li>FileTreeView</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>constants</li>
                <li>contexts</li>
                <li>data</li>
                <li>errors</li>
                <li>functions</li>
                <li>hooks</li>
                <li>models</li>
                <li>screens</li>
                <li>services</li>
                <li>store
                    <ul>
                        <li>slices</li>
                    </ul>
                </li>
                <li>stories</li>
                <li>styles</li>
                <li>themes</li>
                <li>types
                    <ul>
                        <li>interfaces</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default FileTreeView