
import { FileItem } from '../FileItem/FileItem';

interface File {
    type: string;
    name: string;
    added: string;
    folder_files?: folderFiles[];
}

interface folderFiles {
    type: string;
    name: string;
    added: string;
}

interface FileListProps {
    fileFilter: string;
    dateFilter: string;
    search: string;
    fileItems: File[];
}


export const FileList = ({
    fileFilter,
    dateFilter,
    search,
    fileItems,
}: FileListProps) => {
    //check if filters have been set
    if (fileFilter !== "") {
        fileItems = fileItems.filter((item) => item.type === fileFilter.toLocaleLowerCase());
    }

    if(dateFilter !== ""){
        if(dateFilter === "ASC") {
            fileItems.sort(function(a, b) { return new Date(a.added).getTime() - new Date(b.added).getTime() })
        } else if(dateFilter === "DESC") {
            fileItems.sort(function(a, b) { return new Date(b.added).getTime() - new Date(a.added).getTime() })
        }

    }

    if(search !== "" && search.length > 3){
        fileItems = fileItems.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }


    return (
        <div className="list-container">
            <span className="list-length">Results: {fileItems.length}</span>
            <ul className="file-list">
                {fileItems.map((file, index) => {
                    return (
                        <FileItem
                            key={index}
                            name={file.name}
                            type={file.type}
                            added={file.added}
                            folderFiles={file.folder_files}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
