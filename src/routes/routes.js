const Index = () => import('../pages/index/index.vue')
const Shock = () => import('../pages/shock/shock.vue')
const InfectionEntry = () => import('../pages/infectionEntry/infectionEntry.vue')
const InfoEntry = () => import('../pages/InfoEntry/infoEntry.vue')
const Result = () => import('../pages/result/result.vue')
const Table = () => import('../pages/table/table.vue')
const InfectionResult = () => import('../pages/infectionResult/infectionResult.vue')
export default [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/shock',
        component: Shock,
        children: [{
                path: '/shock/entry',
                component: InfoEntry,
                title: '休克详情',
                meta: {

                }
            },
            {
                path: '/shock/result',
                component: Result
            },
            {
                path: '/shock/table',
                component: Table,
                title: '人员列表'
            },
            {
                path: '/shock/InfectionEntry',
                component: InfectionEntry,
                title:'感染详情'
            },
            {
                path: '/shock/infectionResult',
                component: InfectionResult
            },
            {
                path: '/shock/infectionTable',
                component: Table
            }
        ]
    }
    // {
    //     path:'/infection',
    //     components: Shock,
    //     children:[
    //         {
    //             path:'/infection/entry',
    //             component: Shock
    //         },
    //         {
    //             path:'/infection/result',
    //             component: Result
    //         },
    //         {
    //             path:'/infection/table',
    //             component:Table
    //         }
    //     ]
    // }
]