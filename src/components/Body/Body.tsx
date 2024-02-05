import { FileList } from "../FileList/FileList";
import DATA from "../../data/data";
import { Select } from "../Select/Select";
import { useFileContext } from "../../contexts/FileContext";
import LABEL from "../../constants/Labels";
import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import CONSTANTS from "../../constants/Config";

export const Body = () => {
    const [query, setQuery] = useState<string>("");
    const { setFileFilter, fileFilter, setDateFilter, dateFilter } = useFileContext();
    const files = DATA.FILES;

    return (
        <div className="app__body">
            <div className="app__files">
                <div className="app__filters">
                    <SearchInput onChangeSearchQuery={(query:string | "") => setQuery(query)} />
                    <Select
                        label={LABEL.FILTER_BY_TYPE}
                        options={CONSTANTS.FILTER_OPTIONS}
                        setFilter={setFileFilter}
                        setValue={fileFilter}
                    />
                    <Select
                        label={LABEL.FILTER_BY_DATE}
                        options={CONSTANTS.FILTER_OPTIONS_DATE}
                        setFilter={setDateFilter}
                        setValue={dateFilter}
                    />
                </div>
                <FileList
                    fileFilter={fileFilter}
                    dateFilter={dateFilter}
                    search={query}
                    fileItems={files}
                />
            </div>
        </div>
    );
};
