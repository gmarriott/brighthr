interface SelectProps {
    label: string;
    options: string[];
    setFilter: Function;
    setValue: string;
}

export const Select = ({
    label,
    options,
    setFilter,
    setValue
}: SelectProps) => {
    //set value from select in context method
    return (
        <select
            name={label}
            onChange={(event) => {
                setFilter(event.target.value);
            }}
            value={setValue}
        >
            <option value="">{label}</option>
            {options.map((x, y) => (
                <option key={y} data-testid={"select-option-" + y}>{x}</option>
            ))}
        </select>
    );
};
