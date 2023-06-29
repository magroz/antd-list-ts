import React, {FC, useEffect} from 'react';
import {Avatar, Button, List, Modal, Spin} from "antd";
import {observer} from "mobx-react-lite";
import data from "../../store/data"
import {PostDTO} from "../../dto/posts";

const MyList: FC = observer(() => {

    useEffect(() => {
        data.fetchPosts()
    }, [])

    if (data.isLoading) {
        return <Spin tip={"Loading..."} size={"large"}/>
    }

    function showPostBody(title: string, content: string) {
        Modal.info({
            title: `title: ${title}`,
            content: (
                <div>
                    <h1>Body:</h1>
                    <p>{content}</p>
                </div>
            )
        });
    }

    return <List
        itemLayout="horizontal"
        dataSource={data.posts}
        renderItem={(item: PostDTO) => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                    title={<Button type="link" onClick={() => data.showModalUser(item.userId)}>{"userId: "}{item.userId}</Button>}
                    description={<Button type="text" onClick={() => showPostBody(item.title, item.body)}>{item.title}</Button>}
                />
            </List.Item>
        )}
    />
});

export default MyList;