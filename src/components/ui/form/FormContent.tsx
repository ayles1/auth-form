import React, { FC } from 'react';

import IFormContent from './formContent.interface';


const FormContent: FC<IFormContent> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default FormContent;