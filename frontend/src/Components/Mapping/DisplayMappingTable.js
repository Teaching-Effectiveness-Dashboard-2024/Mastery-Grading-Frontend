import {Button, Avatar, Grid, Image, Text, Card, Row, Table} from "@nextui-org/react";
import {useEffect, useState} from "react";
import axios from "axios";



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
            <Grid justify="center" md={12}>
                <Table
                    bordered
                    sticked
                    TableColumnAlign = 'start'
                    aria-label="Example table with dynamic content"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header columns={columns}>
                        {(column) => (
                            <Table.Column key={column.key} >{column.label}</Table.Column>
                        )}
                    </Table.Header>
                    <Table.Body items={rows}>
                        {(item) => (
                            <Table.Row key={item.mappingId}>
                                {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Grid>
        </Grid.Container>
    )

}


export default DisplayMappingTable
