import React, { useRef, useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, ButtonBase, Button } from '@material-ui/core';
import QrReader from 'react-qr-reader';

function App() {
    const classes = useStyles();
    const qrRef = useRef(null);
    const [scanResultWebCam, setScanResultWebCam] = useState('');

    const customerJSONData = [ {"name":"John Smith", "vaccine1":"Pz", "vaccine2":"Pz", "vaccine3":null, "booster":null, "status":"false"} ];

    const handleErrorWebCam = (error) => {
        console.log(error);
    }

    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
            

        }
        //qrRef.current.openImageDialog();
    }
    return (
        <Container className={classes.container}>
            <Card>
                <h2 className={classes.title}>Easy Entry Store QR Code ReactJS</h2>
                <CardContent>
                    <Grid container spacing={2}>

                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <h3>QR Webcam Scanner</h3>
                            <QrReader
                                delay={300}
                                style={{ width: '80%' }}
                                onError={handleErrorWebCam}
                                onScan={handleScanWebCam}
                            />
                            <h3>Scanned by WebCam Code: {scanResultWebCam}</h3>
                                                
                            
                        </Grid>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <h3>Customer Information</h3>
                            <span><h4>Customer Name: John Smith </h4></span>
                            <h4>Vaccine 1: Pz </h4>
                            <h4>Vaccine 2: Pz</h4>
                            <h4>Vaccine 3: Pz</h4>
                            <h4>Booster Shot: Pending</h4>
                            <h4>Status: Vaccinated</h4>
                            <Button>Clear Form</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>

    );
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



