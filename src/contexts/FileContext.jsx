import React from "react";

export const fileContextDefaults = {
    fileFilter: "",
    setFileFilter: Function,
    dateFilter: "",
    setDateFilter: Function
};

export const FileContext = React.createContext(fileContextDefaults);
export const useFileContext = () => React.useContext(FileContext);

export const FileProvider = ({ children }) => {
    const [fileFilter, setFileFilter] = React.useState("");
    const [dateFilter, setDateFilter] = React.useState("");

    // provider wrapper which allows the app to use the filter set function and value
    return (
        <FileContext.Provider
            value={{
                fileFilter,
                setFileFilter,
                dateFilter,
                setDateFilter
            }}
        >
            {children}
        </FileContext.Provider>
    );
};
