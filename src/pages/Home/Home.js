import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import UsersTable from '@components/UsersTable';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Filters from '@components/Filters';

function Home({fetchUsers, users, columns, fetchingUsers}) {
  const [filters, setFilters] = useState({name: '', username: '', email: ''});

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container maxWidth="xl">
      <Card sx={{minWidth: 275, m: '20px 0'}}>
        <CardContent sx={{alignItems: 'center'}}>
          <Typography align="center" variant="h4" gutterBottom margin="auto">
            Test Fullstack - Dev
          </Typography>
          <Typography
            align="center"
            variant="h6"
            gutterBottom
            margin="10px 0 0 0"
          >
            Build an HTML5/PHP7.2+ webpage to present a list of users
            information, and a search box to filter the list.
          </Typography>
        </CardContent>
      </Card>
      <Filters filters={filters} setFilters={setFilters} search={fetchUsers}/>
      <UsersTable rows={users} columns={columns} fetchingUsers={fetchingUsers}/>
    </Container>
  );
}

Home.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf({}).isRequired,
  fetchingUsers: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf({}).isRequired
};

export default Home;
