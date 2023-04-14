import React, { useState } from 'react';
import { Alert } from "react-bootstrap";

export default function Error({ error }) {
    return (
        <Alert variant="danger">
            {error}
        </Alert>
    )
}
