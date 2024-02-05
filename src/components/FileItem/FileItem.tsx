import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import { BsArrowDown } from "react-icons/bs";
import CONSTANTS from "../../constants/Config";

interface FolderFile {
    type: string;
    name: string;
    added: string;
}

interface FileItemProps {
    name: string;
    type: string;
    added: string;
    folderFiles?: FolderFile[] | undefined;
}


export const FileItem = ({
    name,
    type,
    added,
    folderFiles
}: FileItemProps) => {
    return (
        <Accordion className="file-item">
            <AccordionSummary
                className="accordian-default"
                expandIcon={type === 'folder' ? <BsArrowDown /> : ""}
                aria-controls="panel1a-content"
                id="panel1a-header"
                disabled={type !== 'folder'}
            >
                <div>
                    {type === 'folder' ? <CONSTANTS.FOLDER_ICON size={56} /> : <CONSTANTS.DEFAULT_ICON size={56} />}
                </div>
                <div className="end-container">
                    <span className="file-details">
                        <span className="file-name">{name}</span>
                        <span className="file-type">Type: {type}</span>
                        <span className="date-added">Date Added: {added}</span>
                    </span>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Date Added</th>
                            </tr>
                            {folderFiles?.map((file, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{file.name}</td>
                                        <td>{file.type}</td>
                                        <td>{file.added}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>
            </AccordionDetails>
        </Accordion>
    );
};
