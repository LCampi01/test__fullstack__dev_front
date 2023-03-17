import PropTypes from 'prop-types';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


function Filters({filters, setFilters, search}) {
  return (
    <Card sx={{ minWidth: 275, m: "20px 0" }}>
      <CardContent sx={{ alignItems: "center" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setFilters({...filters, name: e.target.value})}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e) => setFilters({...filters, username: e.target.value})}  
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              onChange={(e) => setFilters({...filters, email: e.target.value})}
            />
          </Grid>
          <Grid item xs={2} sx={{margin:'auto'}}>
            <Button fullWidth variant="contained" onClick={() => search()}>Clean filters</Button>
          </Grid>
          <Grid item xs={2} sx={{margin:'auto'}}>
            <Button fullWidth variant="contained" onClick={() => search(filters)}>Search</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

Filters.PropTypes = {
    filters: PropTypes.shape({}).isRequired,
    setFilters: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired
}

export default Filters;
