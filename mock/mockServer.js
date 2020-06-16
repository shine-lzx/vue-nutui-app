import Mock from 'mockjs'
const swipes = [
  {
    imgUrl:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556531040198&di=c6dabc6bb5c6524f9b77ceded00d1fce&imgtype=0&src=http%3A%2F%2Fi3.hexun.com%2F2019-04-28%2F196992413.jpg',
  },
  {
    imgUrl:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556531040180&di=0feae9ec159834591880d72c34137235&imgtype=0&src=http%3A%2F%2Fm1080.com%2Fupimg%2Fzyzp1%2F145186.jpg',
  },
  {
    imgUrl:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556531040164&di=b228224bb92c8baa6fbfa1ac6d31398c&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fimges%2F2017%2F0510%2F20170510101016609.jpg',
  },
]
const patients = [
  {
    id: '1',
    title: '张大爷',
    label: '男',
    path: '/patient',
    imgUrl: '../../static/images/20170622131955_h4eZS.thumb.700_0.jpeg',
  },
  {
    id: '2',
    title: '李大爷',
    label: '男',
    path: '/patient',
    imgUrl: '../../static/images/20170622131955_h4eZS.thumb.700_0.jpeg',
  },
  {
    id: '3',
    title: '张奶奶',
    label: '女',
    path: '/patient',
    imgUrl: '../../static/images/20170622131955_h4eZS.thumb.700_0.jpeg',
  },
  {
    id: '4',
    title: '李大爷',
    label: '男',
    path: '/patient',
    imgUrl: '../../static/images/20170622131955_h4eZS.thumb.700_0.jpeg',
  },
  {
    id: '5',
    title: '王奶奶',
    label: '女',
    path: '/patient',
    imgUrl: '../../static/images/20170622131955_h4eZS.thumb.700_0.jpeg',
  },
]
Mock.mock('/swipes', swipes)
Mock.mock('/patients', patients)
Mock.mock('/patient', 'post', () => {
  return patients
})
