import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'

// Member
import BenefitAndEventStatistics from '@/views/membership/BenefitAndEventStatistics'
import MileageAndGradeStatistics from '@/views/membership/MileageAndGradeStatistics'
import ProdTransactionStatistics from '@/views/membership/ProdTransactionStatistics'
import MemberStatistics from '@/views/membership/MemberStatistics'

// Cutomer
import ExistCustomerReport from '@/views/customer/ExistCustomerReport'
import NewCustomerReport from '@/views/customer/NewCustomerReport'

// Marketing
import MarketingSearch from '@/views//marketing/MarketingSearch'
import MarketingResultReport from '@/views//marketing/MarketingResultReport'

// Setting
import ProfileSetting from '@/views/setting/ProfileSetting'

// Management
import UpdateMember from '@/views/management/searchMember/UpdateMember'
import UpdateReport from '@/views/management/searchReport/updateReport'
import InviteMember from '@/views/management/inviteMember'
import AddReport from '@/views/management/addReport'
import ManageService from '@/views/management/manageService'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/pages/Login',
      name: 'Login',
      component: {
        render (c) { return c('router-view') }
      }
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: '홈',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: '대시보드',
          component: Dashboard
        },
        {
          path: 'membership',
          redirect: '/membership/memberStatistics',
          name: '멤버십',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'memberStatistics',
              name: '회원 통계',
              component: MemberStatistics
            }, {
              path: 'prodTransactionStatistics',
              name: '상품 거래 통계',
              component: ProdTransactionStatistics
            }, {
              path: 'mileageAndGradeStatistics',
              name: '마일리지 / 등급 통계',
              component: MileageAndGradeStatistics
            }, {
              path: 'benefitAndEventStatistics',
              name: '혜택 / 이벤트 통계',
              component: BenefitAndEventStatistics
            }
          ]
        },
        {
          path: 'customer',
          redirect: '/customer/existCustomerReport',
          name: '고객',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'existCustomerReport',
              name: '가망 고객 분석 리포트',
              component: ExistCustomerReport
            }, {
              path: 'newCustomerReport',
              name: '신규 고객 분석 리포트',
              component: NewCustomerReport
            }
          ]
        },
        {
          path: 'marketing',
          redirect: '/marketing/marketingSearch',
          name: '마케팅',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'marketingSearch',
              name: '마케팅 조회',
              component: MarketingSearch
            }, {
              path: 'marketingResultReport',
              name: '마케팅 성과 분석 리포트',
              component: MarketingResultReport
            }
          ]
        },
        {
          path: 'setting',
          redirect: '/setting/profileSetting',
          name: 'Setting',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'profileSetting',
              name: '프로필 설정',
              component: ProfileSetting
            }
          ]
        },
        {
          path: 'management',
          redirect: '/management/searchMember/updateMember',
          name: '관리',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'searchMember',
              name: '회원 조회',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'updateMember',
                  name: '회원 상세/수정',
                  component: UpdateMember

                }
              ]
            },
            {
              path: 'searchReport',
              name: '보고서 조회',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'updateReport',
                  name: '보고서 상세/수정',
                  component: UpdateReport

                }
              ]
            },
            {
              path: 'inviteMember',
              name: '회원 초대',
              component: InviteMember
            },
            {
              path: 'addReport',
              name: '보고서 추가',
              component: AddReport
            },
            {
              path: 'manageService',
              name: '서비스 관리',
              component: ManageService
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
