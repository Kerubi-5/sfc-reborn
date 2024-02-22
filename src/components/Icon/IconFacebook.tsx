import React from 'react';

interface IconFacebookProps {
    color?: string;
}

export function IconFacebook(props: IconFacebookProps): React.ReactElement {
    return (
        <svg
            viewBox="0.993 1 14.007 13.915"
            height="48"
            width="48"
            focusable="false"
            role="img"
            fill={props.color || 'var(--primary-color)'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15 8a7 7 0 0 0-7-7 7 7 0 0 0-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0 0 15 8z" />
        </svg>
    );
}
