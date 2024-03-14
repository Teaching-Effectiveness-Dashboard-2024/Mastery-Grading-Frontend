import {Button, Avatar, Grid, Image, Text, Card, Row, Table, Col, Tooltip} from "@nextui-org/react";
import {useEffect, useState} from "react";
import axios from "axios";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";



const DisplayMappingTable = ()=>{

    const [data, setData] = useState({mappings:{}})

    const columns = [
        {
            key: "mappingName",
            label: "Mapping Name",
        },
        {
            key: "className",
            label: "Class Name",
        },
        {
            key: "updatedAt",
            label: "Created/Updated At",
        },
    ];
    const rows = [
        {
            "mappingId": 1,
            "mappingName": "mapping 1",
            "canvasUserId": 12345,
            "classId": 1,
            "className": "className 1",
            "mapping": {},
            "createdAt": "2023 - 03 - 13",
            "updatedAt": "2023 - 03 - 13"
        },
        {
            "mappingId": 2,
            "mappingName": "mapping 2",
            "canvasUserId": 12345,
            "classId": 2,
            "className": "className 2",
            "mapping": {},
            "createdAt": "2023 - 03 - 13",
            "updatedAt": "2023 - 03 - 13"
        },
        {
            "mappingId": 3,
            "mappingName": "mapping 3",
            "canvasUserId": 12345,
            "classId": 3,
            "className": "className 3",
            "mapping": {},
            "createdAt": "2023 - 03 - 13",
            "updatedAt": "2023 - 03 - 13"
        },
        {
            "mappingId": 1,
            "mappingName": "mapping 1",
            "canvasUserId": 12345,
            "classId": 1,
            "className": "className 1",
            "mapping": {},
            "createdAt": "2023 - 03 - 13",
            "updatedAt": "2023 - 03 - 13"
        },
        {
            "mappingId": 2,
            "mappingName": "mapping 2",
            "canvasUserId": 12345,
            "classId": 2,
            "className": "className 2",
            "mapping": {},
            "createdAt": "2023 - 03 - 13",
            "updatedAt": "2023 - 03 - 13"
        },
        {
            "mappingId": 3,
            "mappingName": "mapping 3",
            "canvasUserId": 12345,
            "classId": 3,
            "className": "className 3",
            "mapping": {},
            "createdAt": "2023 - 03 - 13",
            "updatedAt": "2023 - 03 - 13"
        },
        {
            "mappingId": 1,
            "mappingName": "mapping 1",
            "canvasUserId": 12345,
            "classId": 1,
            "className": "className 1",
            "mapping": {},
            "createdAt": "2023 - 03 - 13",
            "updatedAt": "2023 - 03 - 13"
        },
        {
            "mappingId": 2,
            "mappingName": "mapping 2",
            "canvasUserId": 12345,
            "classId": 2,
            "className": "className 2",
            "mapping": {},
            "createdAt": "2023 - 03 - 13",
            "updatedAt": "2023 - 03 - 13"
        },
        {
            "mappingId": 2,
            "mappingName": "mapping 2",
            "canvasUserId": 12345,
            "classId": 2,
            "className": "className 2",
            "mapping": {},
            "createdAt": "2023 - 03 - 13",
            "updatedAt": "2023 - 03 - 13"
        },
    ];

    // useEffect( ()=>{
    //     const getData = async ()=> {
    //         // const config = {
    //         //     headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    //         // };
    //         const config = {
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //                 "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //             }
    //         };
    //         //axios.headers.common['Authorization'] = localStorage.getItem('token');
    //         const response = await axios.post("http://localhost:5000/mappingTable",{"email" : localStorage.getItem("email")}, config)
    //         // let ar = response.data.map(e=>e)
    //         console.log(response.data);
    //
    //         setData(response.data)
    //     }
    //     getData().then(r =>  console.log("hello"));
    //     console.log("outside get")
    //
    // },[])

    return (
        <Grid.Container>
            <Grid justify="center" md={12} css={{ width: '100%', padding: '0 !important' }}>
                <div style={{ width: '100%', overflowX: 'auto' }}>
                    <Table
                        bordered
                        sticked
                        TableColumnAlign = 'start'
                        aria-label="Example table with dynamic content"
                        /*css={{
                            height: "auto",
                            minWidth: "100%",
                        }}*/
                        css={{
                            minWidth: '100%', // Ensure the table minimum width is 100% of its parent
                            width: '100%', // This ensures the table uses all the available width
                        }}
                    >
                        <Table.Header columns={columns}>
                            {(column) => (
                                <Table.Column key={column.key} >{column.label}</Table.Column>
                            )}
                            {/*<Table.Column>Actions</Table.Column>*/}
                        </Table.Header>
                        <Table.Body items={rows}>
                            {(item) => (
                                <Table.Row key={item.mappingId}>
                                    {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                                    {/*{<Table.Cell>*/}

                                    {/*    <Row justify="center" align="center">*/}
                                    {/*        <Col css={{d: "flex"}}>*/}
                                    {/*            <Tooltip content="Details">*/}
                                    {/*                <IconButton onClick={() => console.log("View user")}>*/}
                                    {/*                    <EyeIcon size={20} fill="#979797"/>*/}
                                    {/*                </IconButton>*/}
                                    {/*            </Tooltip>*/}
                                    {/*        </Col>*/}
                                    {/*        <Col css={{d: "flex"}}>*/}
                                    {/*            <Tooltip content="Edit user">*/}
                                    {/*                <IconButton onClick={() => console.log("Edit user")}>*/}
                                    {/*                    <EditIcon size={20} fill="#979797"/>*/}
                                    {/*                </IconButton>*/}
                                    {/*            </Tooltip>*/}
                                    {/*        </Col>*/}
                                    {/*        <Col css={{d: "flex"}}>*/}
                                    {/*            <Tooltip*/}
                                    {/*                content="Delete user"*/}
                                    {/*                color="error"*/}
                                    {/*                onClick={() => console.log("Delete user")}*/}
                                    {/*            >*/}
                                    {/*                <IconButton>*/}
                                    {/*                    <DeleteIcon size={20} fill="#FF0080"/>*/}
                                    {/*                </IconButton>*/}
                                    {/*            </Tooltip>*/}
                                    {/*        </Col>*/}
                                    {/*    </Row>*/}

                                    {/*</Table.Cell>}*/}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </Grid>
        </Grid.Container>
    )

}


export default DisplayMappingTable
