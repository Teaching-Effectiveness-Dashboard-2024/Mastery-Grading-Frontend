import {Button, Grid, Dropdown, Input, Text, Spacer} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";


const CreateMapping = () => {

    const navigate = useNavigate();
    const [selectedClassName, setSelectedClassName] = useState(new Set(["Select Class"]));
    const [isDisabled, setIsDisabled] = useState(false);
    const [rows, setRows] = useState([]);

    const menuItems = [
        { classId: 1234, className: "Class 1" },
        { classId: 1235, className: "Class 2" },
        { classId: 1236, className: "Class 3" },
        { classId: 1237, className: "Class 4" },
    ];

    const gradingSchemes = [
        "Percentage",
        "Completed/Not Completed",
        "Points",
        "Letter Grade",
        "GPA Scale",
    ];

    const handleRowChange = (index, field, value) => {
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                return { ...row, [field]: value, ...(field === 'numberOfAssignments' && { maxScore: value * 100 }) };
            }
            return row;
        });
        setRows(updatedRows);
        // generateJsonObject();
    };



    const handleSelectionChange = (newSelected) => {
        setSelectedClassName(newSelected);
        setIsDisabled(true);
    };

    const submitMappingHandler =()=>{
        // Navigate to the submit mapping page and pass the className and rows as state
        console.log(selectedClassName);
        navigate('/mapping/submit-mapping', { state: { selectedClassName, rows } });
    }

    const initialRow = () => ({
        id: 0,
        assignmentGroup: "",
        gradingScheme: '',
        numberOfAssignments: 1,
        maxScore: 100
    });

    const addRow = () => {
        setRows((currentRows) => [
            ...currentRows,
            {
                id: currentRows.length,
                assignmentGroup: "",
                gradingScheme: '',
                numberOfAssignments: 1,
                maxScore: 100
            },
        ]);
    };

    const resetPage = () => {
        setSelectedClassName(new Set(["Select Class"]));
        setIsDisabled(false);
        // Directly set rows to an array with a single initial row
        setRows([initialRow()]);
    };

    // useEffect(() => {
    //     // Initialize with one row
    //     resetPage(); // Use resetPage to set initial state
    // }, []);

    useEffect(() => {
        // Initialize with one row
        addRow();
    }, []);

    const generateJsonObject = () => {
        const jsonObject = rows.map(row => ({
            assignmentGroup: row.assignmentGroup,
            gradingScheme: row.gradingScheme,
            numberOfAssignments: row.numberOfAssignments,
            maxScore: row.maxScore
        }));
        console.log(jsonObject);
        // If you need to use the JSON object for something else, you can do so here.
        // For example, you could set it in the state, or send it to a server.
    };
    useEffect(() => {
        // Initialize with one row
        generateJsonObject();
    }, []);


    return (
        <Grid.Container gap={2}>
            <Grid md={12}>
                <LoggedInNavbar pageNumber={2} />
            </Grid>
            <Grid md={2}></Grid>
            <Grid justify="left" md={4}>
                <Dropdown isDisabled={isDisabled}>
                    <Dropdown.Button flat color={!isDisabled ? "primary" : "secondary"}>{selectedClassName}</Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Dynamic Actions"
                        items={menuItems}
                        color="primary"
                        disallowEmptySelection={true}
                        selectionMode="single"
                        selectedKeys={selectedClassName}
                        onSelectionChange={(key) => handleSelectionChange(key)}
                    >
                        {(item) => (
                            <Dropdown.Item key={item.className}>{item.className}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
            <Grid md={4} justify="right">
                <Button onClick={resetPage} color={"error"} auto flat>
                    Reset
                </Button>
            </Grid>
            <Grid md={2}></Grid>

            <Grid md={2}></Grid>
            <Grid md={8}>
                <Grid md={5} justify="left">
                    <Text b> Assignment Group</Text>
                </Grid>
                {/*<Spacer></Spacer>*/}
                <Grid md={3} justify="center">
                    <Text b> Grading Scheme</Text>
                </Grid>
                {/*<Spacer></Spacer>*/}
                <Grid md={2} justify="center">
                    <Text b> Number of Assignments</Text>
                </Grid>
                {/*<Spacer></Spacer>*/}
                <Grid md={2} justify="right">
                    <Text b> Maximum Score</Text>
                </Grid>
            </Grid>
            <Grid md={2}></Grid>

            <Grid md={2}></Grid>
            {/*<Grid md={8} css={{ display:"block !important", width:'100%'}}>*/}
            {/*         {rows.map((row, index) => (*/}
            {/*             <Grid.Container key={index} gap={2} css={{ width: '100%', display:"flex" }}>*/}
            {/*                 <Grid md={5} justify="left">*/}
            {/*                     <Input labelPlaceholder="Assignment Group" fullWidth />*/}
            {/*                 </Grid>*/}
            {/*                 <Grid md={3} justify="center">*/}
            {/*                     <Dropdown>*/}
            {/*                         <Dropdown.Button flat color="primary">*/}
            {/*                            Select grading scheme*/}
            {/*                        </Dropdown.Button>*/}
            {/*                        <Dropdown.Menu aria-label="Grading Schemes" color="primary">*/}
            {/*                            {gradingSchemes.map((scheme) => (*/}
            {/*                                <Dropdown.Item key={scheme}>{scheme}</Dropdown.Item>*/}
            {/*                             ))}*/}
            {/*                        </Dropdown.Menu>*/}
            {/*                    </Dropdown>*/}
            {/*                </Grid>*/}
            {/*                /!*<Spacer></Spacer>*!/*/}
            {/*                <Grid md={2} justify="center">*/}
            {/*                    <Dropdown>*/}
            {/*                        <Dropdown.Button flat color="primary">1</Dropdown.Button>*/}
            {/*                        <Dropdown.Menu aria-label="Number Range" color="primary">*/}
            {/*                            {Array.from({ length: 20 }, (_, i) => i).map((number) => (*/}
            {/*                                <Dropdown.Item key={number}>{number}</Dropdown.Item>*/}
            {/*                             ))}*/}
            {/*                        </Dropdown.Menu>*/}
            {/*                    </Dropdown>*/}
            {/*                </Grid>*/}
            {/*                /!*<Spacer></Spacer>*!/*/}
            {/*                <Grid md={2} justify="center"> <Text b>100</Text></Grid>*/}
            {/*            </Grid.Container>*/}
            {/*        ))}*/}
            {/*</Grid>*/}

            <Grid md={8} css={{ display: "block !important", width: '100%' }}>
                {rows.map((row, index) => (
                    <Grid.Container key={index} gap={2} css={{ width: '100%', display: "flex" }}>
                    <Grid md={5} justify="left">
                    <Input
                    labelPlaceholder="Assignment Group"
                    fullWidth
                    value={row.assignmentGroup}
                    onChange={(e) => handleRowChange(index, 'assignmentGroup', e.target.value)}
                    />
                    </Grid>
                        <Grid md={3} justify="center">
                            <Dropdown>
                                <Dropdown.Button flat color="primary">
                                    {row.gradingScheme || 'Select grading scheme'}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Grading Schemes"
                                    color="primary"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={row.gradingScheme ? [row.gradingScheme] : []}
                                    onSelectionChange={(keys) => handleRowChange(index, 'gradingScheme', keys.values().next().value)}>
                                    {gradingSchemes.map((scheme) => (
                                        <Dropdown.Item
                                            key={scheme}
                                            // onClick={() => handleRowChange(index, 'gradingScheme', scheme)}
                                        >
                                            {scheme}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid>
                        <Grid md={2} justify="center">
                            <Dropdown>
                                <Dropdown.Button flat color="primary">{row.numberOfAssignments || 0}</Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Number Range"
                                    color="primary"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={row.gradingScheme ? [row.gradingScheme] : []}
                                    onSelectionChange={(keys) => handleRowChange(index, 'numberOfAssignments', keys.values().next().value)}>
                                    {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
                                        <Dropdown.Item
                                            key={number}
                                            // onClick={() => handleRowChange(index, 'numberOfAssignments', number)}
                                        >
                                            {number}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid>
                    <Grid md={2} justify="center"> <Text b>{row.maxScore}</Text></Grid>
                    </Grid.Container>
                ))}
            </Grid>
            <Grid md={2}></Grid>

            <Grid md={2}></Grid>
            <Grid md={8}>
                <Button onClick={addRow} color="primary" auto>
                    Add Row
                </Button>
            </Grid>
            <Grid md={2}></Grid>


            <Grid md={2}></Grid>
            <Grid md={8} justify="center">
                <Button onClick={submitMappingHandler} color="primary" auto>
                    Submit Mapping
                </Button>
            </Grid>
            <Grid md={2}></Grid>
        </Grid.Container>
    );
};

export default CreateMapping
