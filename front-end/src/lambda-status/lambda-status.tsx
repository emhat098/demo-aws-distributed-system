import { Button, Tag } from "antd";
import { useEffect, useState } from "react";

type StatusType = 'loading' | 'success' | 'failed'

const LambdaStatus = () => {
    const [status, setStatus] = useState<StatusType>('loading');

    useEffect(() => {
        fetch(import.meta.env.VITE_BASE_API_URL + '/helloworld')
            .then(res => res.ok  && setStatus('success'))
            .catch(err => {
                setStatus('failed')
                console.log(err);
            })
    }, []);

    if (status === 'loading') {
        return (
            <Button loading>Loading ...</Button>
        );
    }

    if (status === 'failed') {
        return (
            <Tag color={'error'}>Loading ...</Tag>
        );
    }

    return (
        <Tag color={'success'}>{"Lambda connected."}</Tag>
    );
}

export default LambdaStatus;