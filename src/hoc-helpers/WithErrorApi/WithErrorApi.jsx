import React, { useState } from 'react';

const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = useState(false);
        return (
            <>
                {
                    errorApi
                        ? <h1>Error is</h1>
                        : (
                            <View
                                setErrorApi={setErrorApi}
                                {...props}
                            />
                        )
                }
            </>
        )
    }
}

export default withErrorApi;
