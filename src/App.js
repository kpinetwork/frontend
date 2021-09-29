import site_under_construction from "./site_under_construction.png"
import './App.css';
import {Grid} from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <Grid container style={{textAlign: "center"}} fixed={true}>
                <Grid item xs={12}>
                    <h1 data-testid="tittle" style={{color: "black", fontWeight: 700}}>
                        KPINETWORK IS UNDER CONSTRUCTION
                    </h1>
                </Grid>
                <Grid item xs={12} justify="space-between"
                      style={{
                          backgroundImage: `url(${site_under_construction})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          height: 400,
                          backgroundPosition: "center"
                      }}>
                </Grid>
                <Grid item xs={12}>
                    <p style={{color: "black"}}>
                        Our website going to be ready soon.
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
