import React, {FC, useState} from 'react';
import {Modal} from "antd";

interface IProps {
    visible: boolean
    onOk: () => void
}
const MyModal: FC<IProps> = ({visible, onOk}) => {
    return (
        <Modal title="Basic Modal" visible={visible} onOk={onOk}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default MyModal
