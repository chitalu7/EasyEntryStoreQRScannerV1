import React, { useRef, useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, ButtonBase, Button } from '@material-ui/core';
import QrReader from 'react-qr-reader';
import { render } from '@testing-library/react';
import { blue } from '@material-ui/core/colors';



function App() {
    const classes = useStyles();
    const qrRef = useRef(null);
    //const [scanResultWebCam, setScanResultWebCam] = useState([{"ID":0,"FirstName":'',"LastName":'',"Email":'',"FirstShotDate":'',"FirstShotName":'',"SecondShotDate":'',"SecondShotName":'',"ThirdShotDate":'',"ThirdShotName":'',"Vaccinated":false}]);
    const [scanResultWebCam, setScanResultWebCam] = useState([]);//{ ID:0,FirstName:"",LastName:"",Email:"",FirstShotDate:"",FirstShotName:"",SecondShotDate:"",SecondShotName:"",ThirdShotDate:"",ThirdShotName:"",Vaccinated:false});
    const customerJSONData = [ {"name":"Jane Smith", "vaccine1":"Pz", "vaccine2":"Pz", "vaccine3":null, "booster":null, "status":"false"} ];
    //let dataJSON = [{"ID":0,"FirstName":"Pending","LastName":"Pending","Email":"Pending@","FirstShotDate":"Pending","FirstShotName":"Pending","SecondShotDate":"Pending","SecondShotName":"Pending","ThirdShotDate":"Pending","ThirdShotName":"Pending","Vaccinated":false}];
    let dataJSON = [];
    let arrayResult = [];
    let firstName = "";
    let colorCodeStatus = "";
    let entryAcceptedDenied = "";

    

    const handleErrorWebCam = (error) => {
        console.log(error);
    }



    const handleScanWebCam = (result) => {
        if (result) {
            
            dataJSON = (JSON.parse(result));
            //Greeting(dataJSON);

            arrayResult.push(dataJSON.FirstName);
            arrayResult.push(dataJSON.LastName);
            arrayResult.push(dataJSON.Email);
            arrayResult.push(dataJSON.FirstShotDate);
            arrayResult.push(dataJSON.FirstShotName);
            arrayResult.push(dataJSON.SecondShotDate);
            arrayResult.push(dataJSON.SecondShotName);
            arrayResult.push(dataJSON.ThirdShotDate);
            arrayResult.push(dataJSON.ThirdShotName);
            
            if (dataJSON.Vaccinated == true){
                arrayResult.push("true");
                arrayResult.push("ACCEPTED");
                arrayResult.push("#90EE90");
                
            }
            else {
                arrayResult.push("false");
                arrayResult.push("DENIED");
                arrayResult.push("#FF6863");
            }
            
            console.log("Before the scan: " + dataJSON.FirstName);
            setScanResultWebCam(arrayResult);
        }
        
    }

    

    

       
    return (
        <Container className={classes.container} style={{width: '80%'}}>
            <Card>
                <h2 className={classes.title}>Easy Entry Store QR Code ReactJS</h2>
                <CardContent>
                    <Grid container spacing={2}>

                        <Grid item xl={6} lg={4} md={6} sm={12} xs={12}>
                            <h3>QR Webcam Scanner</h3>
                            <QrReader
                                delay={300}
                                style={{width: '80%'}}
                                onError={handleErrorWebCam}
                                onScan={handleScanWebCam}
                            />

                               
                                                          
                                             
                            
                        </Grid>
                        
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>

                        <h3>Customer Information</h3>                       
                        <b>First Name:      </b><span float="right">{scanResultWebCam[0]}</span><br/><br/>
                        <b>Last Name:       </b><span>{scanResultWebCam[1]}</span><br/><br/>
                        <b>Email:       </b><span>{scanResultWebCam[2]}</span><br/><br/>
                        <b>First Shot Date:     </b><span>{scanResultWebCam[3]}</span><br/><br/>
                        <b>First Shot Name:     </b><span>{scanResultWebCam[4]}</span><br/><br/>
                        <b>Second Shot Date:        </b><span>{scanResultWebCam[5]}</span><br/><br/>
                        <b>Second Shot Name:        </b><span>{scanResultWebCam[6]}</span><br/><br/>
                        <b>Third Shot Date:     </b><span>{scanResultWebCam[7]}</span><br/><br/>
                        <b>Third Shot Name:     </b><span>{scanResultWebCam[8]}</span><br/><br/>
                        <b>Vaccinated:      </b><span>{scanResultWebCam[9]}</span><br/>
                        <div style={{height: '20%', backgroundColor:scanResultWebCam[11]}}><h3 style={{margin: 'auto 20%'}}>STORE ENTRY : {scanResultWebCam[10]}</h3></div>
               
                        <Button>Clear Form</Button>

                        
                     
                        </Grid>
                        
                    </Grid>
                </CardContent>
            </Card>
        </Container>

        
    )

    
}


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        background: '#ADD8E6',
        padding: 20
    }
}));

export default App;



