import React, { forwardRef } from 'react';
import './index.css';

export const SingleLineInput = forwardRef(({ label, error, padding='px-sm-3 px-md-4', rowSpacing = "my-3",...rest }, ref) => {
    return (
        <div className={`w-100 d-flex justify-content-center ${padding}`}>
            <div className={`row w-100 px-0 ${rowSpacing} mx-0`}>
                <input
                    ref={ref}
                    className={`input-single-line no-focus-visible ${error ? 'input-error' : ''}`}
                    {...rest}
                />
                {error && <p className="error-message p-0 m-2 w-auto">{error.message}</p>}
            </div>
        </div>
    );
});
  