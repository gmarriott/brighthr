import { render, screen } from '@testing-library/react';
import { FileItem } from './FileItem';

test('Basic test for File Item render', () => {

    const mockFile =  {
        "type": "pdf",
        "name": "Test mock file for BrightHR",
        "added": "2016-12-06"
    };

    const mockFolder =
    {
        "type": "folder",
        "name": "Expenses",
        "added": "2016-10-06",
        "folder_files":
        [
            {
                "type": "doc",
                "name": "Expenses claim form",
                "added": "2017-05-02"
            },
            {
                "type": "doc",
                "name": "Fuel allowances",
                "added": "2017-05-03"
            }
        ]
    };


    render(<FileItem name={mockFile.name} type={mockFile.type} added={mockFile.added} />);
    const nameElement = screen.getByText("Test mock file for BrightHR");
    const fileDate = screen.getByText("Date Added: 2016-12-06")
    expect(nameElement).toBeTruthy();
    expect(fileDate).toBeTruthy();
});
