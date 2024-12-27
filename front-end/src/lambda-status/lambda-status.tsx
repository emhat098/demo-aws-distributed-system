import { useAuth0 } from "@auth0/auth0-react";
import { Button, Tag } from "antd";
import { useEffect, useState } from "react";

type StatusType = 'loading' | 'success' | 'failed'

const LambdaStatus = () => {
    const [status, setStatus] = useState<StatusType>('loading')
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        getAccessTokenSilently().then(token => {
            fetch(import.meta.env.VITE_BASE_API_URL + '/helloworld', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    if (res.ok) {
                        setStatus('success')
                    }
                })
                .catch(err => {
                    setStatus('failed')
                    console.log(err);
                })
        })

    }, [getAccessTokenSilently]);

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