'use client';

import React from 'react';
import { Button, Input, Typography } from '@/components';
import axios from 'axios';

export default function ExecuteTests () {
    const [endpoint, setEndpoint] = React.useState('');

    const handleExecuteTests = () => {
        const successful = [];
        for (let i = 0; i < 500; i++) {
            try {
                axios.get(endpoint);
                successful.push(endpoint);
            } catch (error) {
                console.error(error);
            }
        }

        alert(`Successfully executed 500 tests on ${endpoint}`);
        alert(`Failed to execute ${500 - successful.length} tests on ${endpoint}`);
    }
    return (
        <div>
            <div
            className={'space-y-1'}
            >
                <Typography variant="h4">
                    Execute Tests
                </Typography>

                <div>
                    <Typography variant="p" className={'text-gray-600'}>
                        Enter an endpoint you want to test and click the button to execute 500 tests.
                    </Typography>
                 </div>
            
            </div>

            <div
            className={'my-5 flex flex-col gap-4'}
            >
                <Input placeholder={'Enter an endpoint you want to test'} size={'lg'} className={'flex-1'} value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />
                <Button onClick={handleExecuteTests} variant={'primary'} className={'w-fit'}>
                    Execute 500 tests
                </Button>
            </div>
        </div>
    )
}