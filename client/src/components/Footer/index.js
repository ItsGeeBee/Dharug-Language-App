import styled from '@emotion/styled'
import { Box, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import donation from '../../utils/API'
const useStyles = styled((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    }
  },
  iconsBoxRoot: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: theme.spacing(2),
    }
  },
  copy: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      order: 12,
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    'copy': '© 2022 Dharug Language App.',
    ...props.content
  };


  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center">
          <Typography color="textSecondary" component="p" gutterBottom={false} className={classes.copy}>{content['copy']}</Typography>
          <Box ml="auto" className={classes.iconsBoxRoot}>
            <Button>DONATE</Button>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}