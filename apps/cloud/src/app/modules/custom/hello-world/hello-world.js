import {Grid} from "@material-ui/core";

function HelloWorld() {
    return (
        <div className="HelloWorld">
            <Grid container style={{textAlign: "center"}}>
                <Grid item xs={12}>
                    <h1 data-testid="tittle" style={{color: "black", fontWeight: 700}}>
                        Hello World
                    </h1>
                </Grid>
            </Grid>
        </div>
    );
}

export default HelloWorld;