import Mock from 'mockjs2'
import { builder, getBody, getQueryParameters } from '../util'

// login
const username = ['admin', 'user', 'super']
const password = ['73acd9a5972130b75066c82595a1fae3', '8914de686ab28dc22f30d3d8e107ff6c',
                  'e10adc3949ba59abbe56e057f20f883e', '96e79218965eb72c92a549dd5a330112'] // admin, ant.design, 123456

const login = (options) => {
    const body = getBody(options).params;
    console.log('mock: body', body, !username.includes(body.username), !password.includes(body.password))
    if (!username.includes(body.username) || !password.includes(body.password)) {
        return builder({ isLogin: true }, '账户或密码错误', 401)
    }
  
    return builder({
        'id': Mock.mock('@guid'),
        'name': Mock.mock('@name'),
        'username': 'admin',
        'password': '',
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
        'status': 1,
        'telephone': '',
        'lastLoginIp': '27.154.74.117',
        'lastLoginTime': 1534837621348,
        'creatorId': 'admin',
        'createTime': 1497160610259,
        'deleted': 0,
        'roleId': 'admin',
        'lang': 'zh-CN',
        'token': '4291d7da9005377ec9aec4a71ea837f',
    }, '', 200, { 'Custom-Header': Mock.mock('@guid') })
}

// projectsList
const projects = () => {
    return builder({
        'data': [{ 
            id: 1, 
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', 
            title: 'Alipay', 
            description: '那是一种内在的东西， 他们到达不了，也无法触及的', 
            status: 1, 
            updatedAt: '2018-07-26 00:00:00' 
        }, { 
            id: 2, 
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', 
            title: 'Angular', 
            description: '希望是一个好东西，也许是最好的，好东西是不会消亡的', 
            status: 1, 
            updatedAt: '2018-07-26 00:00:00' 
        },{
            id: 3, 
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', 
            title: 'Ant Design', 
            description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆', 
            status: 1, 
            updatedAt: '2018-07-26 00:00:00' 
        },{ 
            id: 4, 
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', 
            title: 'Ant Design Pro', 
            description: '那时候我只会想自己想要什么，从不想自己拥有什么', 
            status: 1, 
            updatedAt: '2018-07-26 00:00:00' 
        },{ 
            id: 5, 
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', 
            title: 'Bootstrap', 
            description: '凛冬将至', 
            status: 1, 
            updatedAt: '2018-07-26 00:00:00' 
        },{ 
            id: 6, 
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', 
            title: 'Vue', 
            description: '生命就像一盒巧克力，结果往往出人意料', 
            status: 1, 
            updatedAt: '2018-07-26 00:00:00' 
        }],
        'pageSize': 10,
        'pageNo': 0,
        'totalPage': 6,
        'totalCount': 57
    }, 'success', 200)
}

const titles = [ 'Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack' ]
const avatar = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'
]
const covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png'
]
const owner = [ '付小小', '吴加好', '周星星', '林东东', '曲丽丽' ];
const dataArr = [];

const test = (options) => {
    const queryParameters = getQueryParameters(options);
    console.log('queryParameters', queryParameters)
    if (queryParameters && !queryParameters.count) {
        queryParameters.count = 5
    }
    for (let i = 0; i < queryParameters.count; i++) {
        const tmpKey = i + 1
        const num = parseInt(Math.random() * (4 + 1), 10)
        dataArr.push({
            id: tmpKey,
            avatar: avatar[num],
            owner: owner[num],
            content: "i love you",
            star: Mock.mock('@integer(1, 999)'),
            percent: Mock.mock('@integer(1, 999)'),
            like: Mock.mock('@integer(1, 999)'),
            message: Mock.mock('@integer(1, 999)'),
            description: "u know that i love you",
            href: "/",
            title: titles[ i % 8 ],
            updatedAt: Mock.mock('@datetime'),
            members: [
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                    name: '曲丽丽',
                    id: Math.ceil(Math.random() * 1000) + 1000
                }, {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                    name: '王昭君',
                    id: Math.ceil(Math.random() * 1000) + 1000
                }, {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                    name: '董娜娜',
                    id: Math.ceil(Math.random() * 1000) + 1000
                }
            ],
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)]
        })
    }
    return builder(dataArr)
}

const testDel = (options) => {
    const queryParameters = getQueryParameters(options);
    console.log('queryParameters', queryParameters)
    let newArr = dataArr.filter(item=>item.id != queryParameters.id);
    return builder(newArr)
}

Mock.mock(/\/auth\/login/, 'post', login)
Mock.mock(/\/list\/search\/projects/, 'get', projects)
Mock.mock('/list/test', 'get', test)
Mock.mock(/\/list\/test\/del/, 'get', testDel)