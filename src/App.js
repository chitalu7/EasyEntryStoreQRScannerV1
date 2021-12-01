import React, { useRef, useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid } from '@material-ui/core';
import QrReader from 'react-qr-reader';

function App() {
    const classes = useStyles();
    const qrRef = useRef(null);
    const [scanResultWebCam, setScanResultWebCam] = useState('');

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
                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <h3>QR Webcam Scanner</h3>
                        <QrReader
                            delay={300}
                            style={{ width: '100%' }}
                            onError={handleErrorWebCam}
                            onScan={handleScanWebCam}
                        />
                        <h3>Scanned by WebCam Code: {scanResultWebCam}</h3>
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



