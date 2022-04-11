import { Skeleton } from 'antd';
import React from 'react';

const CoinSkeleton = () => {
    return (
        <div>
            <Skeleton.Button style={{marginBottom:"5px"}} active={true} size={"small"} block={true} />
            <Skeleton.Button  active={true} size={"default"} block={true} />
        </div>
    );
};

export default CoinSkeleton;