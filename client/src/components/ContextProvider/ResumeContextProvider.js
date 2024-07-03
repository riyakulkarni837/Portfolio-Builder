import React, { createContext, useState } from 'react';

export const ResumeContext = createContext("");

const ResumeContextProvider = ({ children }) => {
    const [resume, setResumeData] = useState(null);

    return (
        <ResumeContext.Provider value={{ resume, setResumeData }}>
            {children}
        </ResumeContext.Provider>
    );
}

export default ResumeContextProvider;
