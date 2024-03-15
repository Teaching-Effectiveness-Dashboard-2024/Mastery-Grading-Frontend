import {Button, Grid, Dropdown} from "@nextui-org/react";
import {useEffect, useState} from "react";
import axios from "axios";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";



const CreateMapping = ()=>{

    const [selected, setSelected] = useState(new Set(["Select Class"]));
    const [isDisabled, setIsDisabled] = useState(false);

    const menuItems = [
        { classId: 1234, className: "Class 1" },
        { classId: 1235, className: "Class 2" },
        { classId: 1236, className: "Class 3" },
        { classId: 1237, className: "Class 4" },
    ];

    const handleSelectionChange = (newSelected) => {
        setSelected(newSelected); // Update the selected state with the new selection
        setIsDisabled(true); // Disable the dropdown once a selection is made
    };


    return (
        <Grid.Container gap={2}>
            <Grid md={12}>
                <LoggedInNavbar
                    pageNumber={2}
                />
            </Grid>
            <Grid md={2}>

            </Grid>
            <Grid justify="left" md={8} >
                <Dropdown isDisabled={isDisabled}>
                    <Dropdown.Button flat color={!isDisabled?"primary":"secondary"}>{selected}</Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Dynamic Actions"
                        items={menuItems}
                        color="primary"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected}
                        onSelectionChange={(key) => handleSelectionChange(key)}>
                        {(item) => (
                            <Dropdown.Item
                                key={item.className}
                            >
                                {item.className}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
            <Grid md={2}>

            </Grid>
        </Grid.Container>
    )

}


export default CreateMapping
