export default {
  items: [
    {
      name: 'DASHBOARD',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'MEMBERSHIP',
      url: '/membership',
      icon: 'icon-speedometer',
      children: [
        {
          name: '회원 통계',
          url: '/membership/memberStatistics',
          icon: 'icon-puzzle'
        }, {
          name: '마일리지 / 등급 통계',
          url: '/membership/mileageAndGradeStatistics',
          icon: 'icon-puzzle'
        }, {
          name: '혜택 / 이벤트 통계',
          url: '/membership/benefitAndEventStatistics',
          icon: 'icon-puzzle'
        }, {
          name: '상품 거래 통계',
          url: '/membership/prodTransactionStatistics',
          icon: 'icon-puzzle'
        }]
    },
    {
      name: 'CUSTOMER',
      url: '/customer',
      icon: 'icon-speedometer',
      children: [
        {
          name: '가망 고객 분석 리포트',
          url: '/customer/existCustomerReport',
          icon: 'icon-puzzle'
        }, {
          name: '신규 고객 분석 리포트',
          url: '/customer/newCustomerReport',
          icon: 'icon-puzzle'
        }]
    },
    {
      name: 'MARKETING',
      url: '/marketing',
      icon: 'icon-speedometer',
      children: [
        {
          name: '마케팅 조회',
          url: '/marketing/marketingSearch',
          icon: 'icon-puzzle'
        }, {
          name: '마케팅 성과 분석 리포트',
          url: '/marketing/marketingResultReport',
          icon: 'icon-puzzle'
        }]
    },
    {
      name: 'Setting',
      url: '/setting',
      icon: 'icon-speedometer',
      children: [
        {
          name: '프로필 설정',
          url: '/setting/profileSetting',
          icon: 'icon-puzzle'
        }]
    },
    {
      name: 'MANAGEMENT',
      url: '/management',
      icon: 'icon-speedometer',
      children: [
        {
          name: '회원 조회',
          url: '/management/searchMember',
          icon: 'icon-puzzle',
          children: [
            {
              name: '회원 상세/수정',
              url: '/management/searchMember/updateMember',
              icon: 'icon-puzzle'
            }]
        }, {
          name: '회원 초대',
          url: '/management/inviteMember',
          icon: 'icon-puzzle'
        }, {
          name: '보고서 조회',
          url: '/management/searchReport',
          icon: 'icon-puzzle',
          children: [
            {
              name: '보고서 상세/수정',
              url: '/management/searchReport/updateReport',
              icon: 'icon-puzzle'
            }]
        }, {
          name: '보고서 추가',
          url: '/management/addReport',
          icon: 'icon-puzzle'
        }, {
          name: '서비스 관리',
          url: '/management/manageService',
          icon: 'icon-puzzle'
        }]
    }
  ]
}
