import React, {FC} from 'react';
import {Modal, Spin} from "antd";
import {observer} from "mobx-react-lite";
import data from "../../store/data";

const MyModal: FC = observer(() => {

    return (
        <Modal
            title={`id: ${data.userId}`}
            visible={data.isModalVisible}
            onOk={data.hideModal}
            onCancel={data.hideModal}
            cancelButtonProps={{ hidden: true }}
        >
            <Spin spinning={data.isLoadingUser}>
                <p>{"name: "}{data.user?.name}</p>
                <p>{"email: "}{data.user?.email}</p>
            </Spin>
        </Modal>
    )
})

export default MyModal
