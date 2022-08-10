import { Button, TextField, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import "./carSerch.css";

function CarSerch(): JSX.Element {
    const myUrl = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=3&q=";
    const [carNumber,setNumber] = useState("");
    const numberChange = (args:SyntheticEvent)=>{
        const value = (args.target  as HTMLInputElement).value;
        setNumber(value);
    }
    return (
        <div className="carSerch">
			<div className="Box">
                <Typography variant="h3" className="HeadLine">Car Search</Typography>
                <TextField label="car number" variant="outlined"
                inputProps={{sx:{color:"white"}}}
                InputLabelProps={{style:{color:"red"}}}
                onChange={numberChange}
                /><br/>
                <Button color="primary">Search</Button>
                </div>   
        </div>
    );
}

export default CarSerch;
