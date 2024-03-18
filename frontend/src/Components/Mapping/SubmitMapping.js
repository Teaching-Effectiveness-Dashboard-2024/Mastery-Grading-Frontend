import {Button, Grid, Dropdown, Input, Text, Spacer} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";


const SubmitMapping = () => {

    const navigate = useNavigate();
    const letterGrades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

    const location = useLocation();
    const { selectedClassName, rows } = location.state || { selectedClassName: null, rows: [] };

    if(selectedClassName===null){
        navigate('mapping/create-mapping')
    }
    // Now you can use className and rows as needed in your component
    console.log('Received className:', selectedClassName);
    console.log('Received rows:', rows);


    return (
        <Grid.Container gap={2} direction="column">
            <Grid md={12}>
                <LoggedInNavbar pageNumber={2} />
            </Grid>
            <Grid.Container gap={1} justify="center">
                <Text blockquote b>Map your <span style={{ color: "deepskyblue" }}>{selectedClassName}</span> class assignments with the letter grades</Text>
            </Grid.Container>

            {letterGrades.map((grade, index) => (
                <div key={index} css={{width: "100%"}}>
                    <Grid.Container gap={2} alignItems="center" justify="flex-start">
                        <Grid md={1}></Grid>
                        <Grid md={1}>
                            <Text h3 color={index % 2 === 0 ? "warning" : "secondary"}> {grade}</Text>
                        </Grid>
                        {rows.map((row, idx) => (
                            <Grid md={1} key={idx}>
                                <Input
                                    label={row.assignmentGroup || "Assignment Group"}
                                    type="number"
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                />
                            </Grid>
                        ))}
                    </Grid.Container>
                    {index < letterGrades.length - 1 && (
                        <hr style={{ width: '100%', borderColor: 'rgba(0,0,0,0.1)', borderWidth: '1px', borderStyle: 'solid', marginTop: '10px', marginBottom: '10px' }} />
                    )}
                </div>
            ))}
        </Grid.Container>
    );
};

export default SubmitMapping
