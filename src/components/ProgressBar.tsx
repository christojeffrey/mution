import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

const ProgressBar = (props: { progress: any; }) => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);

    const strokeWidth = 20
    const size = 150

    const { progress } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [setOffset, progress, circumference, offset]);

    return (
        <>
            <svg
                className="svg"
                width={size}
                height={size}
            >
                <circle
                    className="svg-circle-bg"
                    stroke='#D9D9D9'
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke="#F7CE50"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text
                    x={`${center}`}
                    y={`${center}`}
                    className="svg-circle-text">
                    {progress}%
                </text>
            </svg>
        </>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
}

export default ProgressBar;