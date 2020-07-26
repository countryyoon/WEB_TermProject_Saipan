import React,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  //로고있는부분
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    padding: 20,
    //marginBottom: theme.spacing(8),
    backgroundImage: 'url(https://www.casadecampo.com.do/wp-content/uploads/2019/03/aerial-minitas-beach-shoreline.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',   
    textAlign: 'right',   
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const ALists = [
  {
    value: 1,
    label: '마나가하'
  },
  {
    value: 2,
    label: '패러세일링'
  },
  {
    value: 3,
    label: '바나나보트'
  },
  {
    value: 4,
    label: '제트스키'
  },
  {
    value: 5,
    label: '그루토스스노클링'
  },
  {
    value: 6,
    label: '호핑투어'
  },
  {
    value: 7,
    label: '체험다이빙'
  },
  {
    value: 8,
    label: '스카이다이빙'
  },
  {
    value: 9,
    label: '선셋크루즈'
  },
  {
    value: 10,
    label: '별빛투어'
  },
  {
    value: 11,
    label: '마사지'
  },
  {
    value: 12,
    label: 'ATV'
  }
];

const Reservation = () => {
  
  const [Actv, setActv] = React.useState('EUR');

    const handleChange = event => {
      setActv(event.target.value);
    };

    const values = {
      someDate: new Date().toISOString().substring(0, 10)
    };

    const handleSubmit = () => {
      alert("제출이 완료되었습니다.");

    }
    
    const classes = useStyles();




    return(
      <main>
        <Paper className={classes.mainFeaturedPost}>
        <div className={classes.overlay} />
        <br/>
        <Grid container>
          <Grid item md={12}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h2" color="inherit" fontWeight="fontWeightBold" gutterBottom>
                SAIPAN COMMA
              </Typography>
              <Typography color="inherit" paragraph>
                사이판 자유여행 SAIPAN COMMA와 함께하세요!
              </Typography>
              <br/>
            </div>
          </Grid>
        </Grid>
        </Paper>

      <React.Fragment>
      <br/>
        <Typography variant="h4" gutterBottom align='center'>
          Activity Reservation
        </Typography>
        <br/>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="Activity"
              select
              label="you chooose more than 1 activity"
              value={Actv}
              onChange={handleChange}
              helperText="Choose the activity you want to do."
              fullWidth
            >
            {ALists.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Booker"
              name="RName"
              label="Write your name"
              helperText="Booker's name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="number of people" 
              name="nb" // 숫자만 들어가게
              label="number of people" //수정
              helperText="How many people will participate in the activity?"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              required
              id="Adate"
              name="Activity date"
              helperText="Choose a date."
              defaultValue={values.someDate}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone number"
              name="phone"
              label="000-0000-0000"
              helperText="Phone number" //전화번호
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="Email"
              name="Email"
              label="E-mail"
              fullWidth
              helperText="E-mail" //이메일
            />
          </Grid>
        </Grid>
        <div>
          <br/>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            //className={classes.button}
          >
            예약하기
          </Button>
        </div>
      </React.Fragment>
      </main>
    );
}

export default Reservation;