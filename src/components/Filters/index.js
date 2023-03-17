import PropTypes from 'prop-types';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import get from 'lodash/get';

function Filters({filters, setFilters, search}) {

  const cleanFilters = () => {
    setFilters({name: '', username: '', email: ''});
    search();
  }

  return (
    <Card sx={{ minWidth: 275, m: "20px 0" }}>
      <CardContent sx={{ alignItems: "center" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={get(filters, 'name', null)}
              onChange={(e) => setFilters({...filters, name: e.target.value})}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={get(filters, 'username', null)}
              onChange={(e) => setFilters({...filters, username: e.target.value})}  
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              value={get(filters, 'email', null)}
              onChange={(e) => setFilters({...filters, email: e.target.value})}
            />
          </Grid>
          <Grid item xs={2} sx={{margin:'auto'}}>
            <Button fullWidth variant="contained" onClick={() => cleanFilters()}>Clean filters</Button>
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
