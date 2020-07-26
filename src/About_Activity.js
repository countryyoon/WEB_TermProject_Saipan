import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';


const ActivityLists = [
    {
        nb: 1,
        title: '마나가하',
        image: 'http://www.saipanadventure.com/wp-content/uploads/2018/10/%EC%82%AC%EC%9D%B4%ED%8C%90%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B3%90_%EB%A7%88%EB%82%98%EA%B0%80%ED%95%98%EC%82%AC%EC%A7%84.jpg',
        description:
        '사이판의 랜드마크 또는 사이판의 진주라고 불리는 마나가하 섬! 사이판에 오시면 한번쯤은 가본다는 아주 예쁜 곳이죠. 열대어가 많은 지역으로 물이 유난히 맑고 투명하여 스노클링을 즐기기 아주 좋은 포인트입니다. 물에 자주 들어가시는 분은 자외선 차단제를 수시로 발라주셔야 합니다.',
        price: '$25/person'
    },
    {
        nb: 2,
        title: '패러세일링',
        image: 'http://www.saipanadventure.com/wp-content/uploads/2018/10/%EC%82%AC%EC%9D%B4%ED%8C%90%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B3%90_%EB%A7%88%EB%82%98%ED%8C%8C%EB%9D%BC%EC%82%AC%EC%A7%84.jpg',
        description:
          '마나가하 + 패러세일링 = $65/person',
        price: '$45/person'
    },
    {
        nb: 3,
        title: '바나나보트',
        image: "http://new-tls.s3.amazonaws.com/tls/data/222/be/trip/photo/medium_bananaboat2_1465190519.jpg",
        description:
          '마나가하 + 바나나보트 = $40/person',
        price: '$30/person'
    },
    {
        nb: 4,
        title: '제트스키',
        image: 'https://modo-phinf.pstatic.net/20160526_141/1464238224649f0NRD_JPEG/mosaKOeJD5.jpeg?type=a1100',
        description:
          '제트스키',
        price: '$55/person'
    },
    {
        nb: 5,
        title: '그루토스스노클링',
        image: 'http://www.saipanadventure.com/wp-content/uploads/2018/02/Saipanadventure_grotto_tour-15.jpg',
        description:
          '세계 3대 다이빙포인트 중 하나인 그로토! 사이판에 오시면 꼭 한 번 쯤 들려야만하는 사이판의 대표적인 해저동굴입니다. 유난히 파란 바다와 동굴 반대편에서 들어오는 태양광으로 그로토 동굴 한구석에 켜져있는 자연등. 세계 어느곳에서도 경험하지 못할 사이판 그로토만의 20M아래 새로운 세상을 두 눈으로 직접 만나보세요!',
        price: '$45/person'
    },
    {
        nb: 6,
        title: '호핑투어',
        image: 'http://www.saipanadventure.com/wp-content/uploads/2018/02/%EC%82%AC%EC%9D%B4%ED%8C%90%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B3%90_%ED%98%B8%ED%95%91%ED%88%AC%EC%96%B4-1.jpg',
        description:
          '사이판 천혜의 바다에서 낚시를!? 마나가하 섬 근처에 포인트를 잡고 배에서 낚시를 하는 투어입니다. 낚시 후 바베큐도 제공됩니다. 배멀미가 심하신 분이나 어린아이들 또는 임산부는 무리하여 탑승할 시 안전이 우려되오니 이 점 유의해 주시기 바랍니다.',
          price: '$65/person'
    },
    {
        nb: 7,
        title: '체험다이빙',
        image: 'http://www.saipanadventure.com/wp-content/uploads/2016/12/%EC%B2%B4%ED%97%98%EB%8B%A4%EC%9D%B4%EB%B9%99_%ED%88%AC%EC%96%B4%EB%A6%AC%EC%8A%A4%ED%8A%B8%EC%82%AC%EC%A7%84.jpg',
        description:
          '마나가하 섬 근처 물고기들이 많은 포인트를 잡고 보트에서 다이빙을하는 투어입니다. 다이빙 라이센스를 취득하지 않으셔도 누구나 참여하실 수 있습니다. 보트에 탑승, 장비 착용 및 다이빙 교육, 다이빙 체험등 총 소요시간은 2시간~2시간30분 정도 소요되며, 실제 다이빙 시간은 20분정도 입니다. 보트의 운행시간이 정해져있어, 중간에 임의로 시간을 추가하실 수 없습니다.',
          price: '$70/person'
    },
    {
        nb: 8,
        title: '스카이다이빙',
        image: 'http://skydivesf.com/images/skydive_sanfrancisco_banner3.jpg',
        description:
          '상공 2400M 이상에서 떨어지는 스카이다이빙! 떨어지기 직전의 극도의 공포 이후 나타나는 아름다운 사이판의 자연경관과 바다, 사이판의 전경을 온 몸으로 느낄 수 있는 짜릿한 순간입니다. 사이판에서 가장 특별하고 짜릿한 경험을 찾으신다면 스카이다이빙!',
          price: '$300/person'
    },
    {
        nb: 9,
        title: '선셋크루즈',
        image: 'http://www.saipanadventure.com/wp-content/uploads/2018/02/%EC%88%98%EC%A0%95%EB%90%A8_%EC%82%AC%EC%9D%B4%ED%8C%90%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B3%90_%EC%84%A0%EC%85%8B%ED%81%AC%EB%A3%A8%EC%A6%88.jpg',
        description:
          '사이판 바다 위 크루즈에서 즐기는 특별한 만남! 사이판에서의 석양속에서 제리와 함께 특별한 추억을 만들어드립니다. 태평양과 필리핀해가 만나는 마리아나 해구의 광활한 바다에서 만나는 석양은 여러분께 힐링이 되고 잊을 수 없는 추억을 만들어 드립니다!',
          price: '$85/person'
    },
    {
        nb: 10,
        title: '별빛투어',
        image: 'http://www.saipanadventure.com/wp-content/uploads/2018/02/%EC%82%AC%EC%9D%B4%ED%8C%90%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B3%90_%EB%B3%84%EB%B9%9B%ED%88%AC%EC%96%B4-3.jpg',
        description:
          '사이판의 밤하늘을 즐길수있는 가장 특별한 방법! 별이 가장 잘보이는 반자이클리프(만세절벽)라는 고지대에 차량으로 이동하여 별들이 가득한 밤하늘을 보며 간단히 맥주나 샴페인도 마시면서 여유를 만끽하는 투어입니다. 활동적인 메인투어와는 또 다른 매력을가진 힐링투어라고 할 수 있습니다.',
          price: '$20/person'
    },
    {
        nb: 11,
        title: '마사지',
        image: 'http://www.saipanadventure.com/wp-content/uploads/2016/11/15_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%88%AC%EC%96%B4%EB%A6%AC%EC%8A%A4%ED%8A%B8%EC%82%AC%EC%A7%84.jpg',
        description:
          '사이판 최고의 마사지를 즐겨보세요! 여행으로 인해 쌓인 피로회복은 물론, 다양한 효과가 있는 마사지! 아로마 및 스포츠 마사지를 선택하실 수 있으며, 원하시는 경우 시간을 추가하여 마사지를 받으실 수 있습니다.(추가요금 발생)',
          price: '$40/person'
    },
    {
        nb: 12,
        title: 'ATV',
        image: 'http://www.saipanadventure.com/wp-content/uploads/2016/11/%EC%88%98%EC%A0%95%EB%90%A8_ATV-%EA%B0%80%EC%9D%B4%EB%93%9C.jpg',
        description:
          '누구나 쉽게 운전할 수 있는 사륜오토바이로 평지와 비포장도로, 정글을 직접 달리는 투어입니다. 사이판에서 아름답기로 유명한 오브쟌비치, 레더비치 등 사이판 남쪽 가장 우수한코스로 짜여져있습니다. 면허증 미취득자도 운전이 가능합니다. 12세이하는 보호자님과 함께 탑승해야합니다.',
          price: '$50/person'
    }
];

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '80.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
}));

const About_Activity = () => {
    const classes = useStyles();
    return(
        <div>
            <h1 align='center'>Activity Information</h1>
            <Container className={classes.cardGrid} maxWidth="xl">
                <Grid container spacing={4}>
                    {ActivityLists.map(card => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.image}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.title}
                                    </Typography>
                                    <Typography>
                                        {card.description}
                                    </Typography>
                                    <Typography style={{fontSize: 25, color: 'orange'}} >
                                        {card.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default About_Activity;