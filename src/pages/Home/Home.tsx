import {
  Grid,
  Paper,
  styled,
} from '@mui/material';

import { PageWrapper } from '../../shared/components/PageWrapper';
import LoginForm from './LoginForm';


// **** Home Component **** //

function Home(): JSX.Element {
  return (
    <PageWrapper>
      <Grid
        container={true}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid
          item={true}
          lg={true}
          sx={{
            marginTop: '15%',
          }}
        >
          <LoginPaper elevation={12}>
            <LoginForm/>
          </LoginPaper>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: '#fafafa',
}));


// **** Export default **** //

export default Home;
