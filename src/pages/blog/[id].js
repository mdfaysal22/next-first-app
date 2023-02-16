import { useRouter } from 'next/router';
import React from 'react';

const id = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <div>
            <h1>This is dynamic Page. {id}</h1>
        </div>
    );
};

export default id;