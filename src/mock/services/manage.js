import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 5701

const serverList = (options) => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    console.log('HEY - this is a mock service', i)
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: 'This is a description',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}

const projects = () => {
  return builder({
    'data': [{
      id: 1,
      cover: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/square_256/nodejslogo.png',
      title: 'NodeJS',
      description: 'Node.js Foundation is a collaborative open source project.',
      status: 1,
      updatedAt: '2019-06-27 00:00:00'
    },
    {
      id: 2,
      cover: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/square_256/angularjs.png',
      title: 'Angular',
      description: 'AngularJS is a JavaScript-based open-source front-end web framework.',
      status: 1,
      updatedAt: '2019-06-27 00:00:00'
    },
    {
      id: 3,
      cover: 'https://d2.alternativeto.net/dist/icons/ant-design_145275.png?width=128&height=128&mode=crop&upscale=false',
      title: 'Ant Design',
      description: 'A design system with values of Nature and Determinacy.',
      status: 1,
      updatedAt: '2018-07-26 00:00:00'
    },
    {
      id: 4,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoam6g8lje8sCjfq1BK9E_CNSafG8_G3yc9JnX7mFcnOXZTZELKQ',
      title: 'CascadeZen Show',
      description: 'CascadeZen pathway to nirvana!',
      status: 1,
      updatedAt: '2018-07-26 00:00:00'
    },
    {
      id: 5,
      cover: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/vue.jpg',
      title: 'Vue JS',
      description: 'The progressive JS framwork',
      status: 1,
      updatedAt: '2018-07-26 00:00:00'
    },
    {
      id: 6,
      cover: 'https://i1.wp.com/kubedex.com/wp-content/uploads/2018/09/mongodb.png?fit=256%2C256&ssl=1',
      title: 'MongoDB',
      description: 'MongoDB is a cross-platform document-oriented database program.',
      status: 1,
      updatedAt: '2018-07-26 00:00:00'
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 6,
    'totalCount': 57
  })
}

const activity = () => {
  return builder([{
    id: 1,
    user: {
      nickname: 'GOOSE THE CAT',
      avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/247gse_ons_crd_01.jpg'
    },
    project: {
      name: 'Project Pegasus',
      action: 'affectionate',
      event: 'Tabby cat that joins Carol Danvers and Nick Fury on their adventure.'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: 'ANANASTASIA',
      avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ohitsme--anna_hd.jpg'
    },
    project: {
      name: 'Go-between',
      action: 'Deadpool',
      event: 'Double-cross'
    },
    time: '2018-08-23 09:35:37'
  },
  {
    id: 1,
    user: {
      nickname: 'PHOENIX',
      avatar: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2016/10/jean-grey-dark-phoenix-suit-promotional-art.jpg?q=50&fit=crop&w=798&h=407'
    },
    project: {
      name: 'Jean Grey',
      action: 'Omega mutant',
      event: 'Telekinetic powers put her at the top'
    },
    time: '2017-05-27 00:00:00'
  },
  {
    id: 1,
    user: {
      nickname: 'THE WHITE QUEEN',
      avatar: 'https://static2.srcdn.com/wordpress/wp-content/uploads/xmen-4-emmafrost.jpg?q=50&fit=crop&w=738'
    },
    project: {
      name: 'Emma Frost',
      action: 'Hallucinations - organic diamond state',
      event: 'Astral project '
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: 'SHE-HULK',
      avatar: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2016/09/she-hulk-strongest-superhero.jpg?q=50&fit=crop&w=738'
    },
    project: {
      name: 'Jennifer Walters',
      action: 'Big kicker ',
      event: 'Attorney for superheroes'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: 'CAPTAIN MARVEL',
      avatar: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2016/08/Carol-Danvers-as-Captain-Marvel-wallpaper.jpg?q=50&fit=crop&w=738'
    },
    project: {
      name: 'Carol Danvers',
      action: 'Absorb energy',
      event: 'Nuclear bomb'
    },
    time: '2018-08-23 14:47:00'
  }
  ])
}

const teams = () => {
  return builder([{
    id: 1,
    name: 'HYDRA',
    avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/hydraorganization_head.jpg'
  },
  {
    id: 2,
    name: 'WARRIORS 3',
    avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/118wrs_ons_crd_02.jpg'
  },
  {
    id: 1,
    name: 'STARFORCE',
    avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/260sfc_ons_crd_01.jpg'
  },
  {
    id: 1,
    name: 'GUN NUNS',
    avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/gun_nuns.jpg'
  },
  {
    id: 1,
    name: 'REVENGERS',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
  }
  ])
}

const radar = () => {
  return builder([{
    item: 'Reference',
    'personal': 70,
    'team': 30,
    'department': 40
  },
  {
    item: 'Word of mouth',
    'personal': 60,
    'team': 70,
    'department': 40
  },
  {
    item: 'Yield',
    'personal': 50,
    'team': 60,
    'department': 40
  },
  {
    item: 'Contribution',
    'personal': 40,
    'team': 50,
    'department': 40
  },
  {
    item: 'Fervid',
    'personal': 60,
    'team': 70,
    'department': 40
  },
  {
    item: 'Citation',
    'personal': 70,
    'team': 50,
    'department': 40
  }
  ])
}

Mock.mock(/\/service/, 'get', serverList)
Mock.mock(/\/list\/search\/projects/, 'get', projects)
Mock.mock(/\/workplace\/activity/, 'get', activity)
Mock.mock(/\/workplace\/teams/, 'get', teams)
Mock.mock(/\/workplace\/radar/, 'get', radar)
