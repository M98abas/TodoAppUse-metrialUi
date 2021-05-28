import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Mahmoud Abbas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const history = useHistory();
  const handelClick = ()=>{
    history.push("/");
  }
  const handelSaveClick=()=>{
    history.push("/content");

  }
  const uploadHanderl=()=>{
    alert("Upload Images When the server wakeUp")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PlaylistAddOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Todo
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Write title"
                name="email"
                autoComplete="Title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Write Description"
                name="email"
                autoComplete="Des"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                color="secondary"
                variant="outlined"
                required
                onClick={uploadHanderl}
                fullWidth
              >
                  Uploade
                <PublishTwoToneIcon fontSize="large"/>
              </Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            onClick={handelSaveClick}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}