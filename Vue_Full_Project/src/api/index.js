var sample = { id: 'niip00ng@daum.net', name: '이준환' }
var membershipList = [
  { value: '행복충전', text: '행복충전' },
  { value: '리바이스', text: '리바이스' }]
var memberCnt = [10, 12, 14, 15, 20, 34, 54, 84, 32, 10, 32, 68, 54, 72, 18, 98]
var memberVisitCnt = [45, 45, 45, 45, 45, 50, 50, 50, 50, 50, 50, 50, 60, 60, 60, 60]

var memberShipStatus = ''

export default {
  fetchItemLists: () => {
    return new Promise((resolve) => {
      resolve({ data: sample })
    })
  },
  getMembershipStatus: () => {
    return new Promise((resolve) => {
      resolve({ data: memberShipStatus })
    })
  },
  updateMembershipStatus: (text) => {
    memberShipStatus = text
  },
  getMemberCount: () => {
    return new Promise((resolve) => {
      resolve({ data: memberCnt })
    })
  },
  getMemberVisitCount: () => {
    return new Promise((resolve) => {
      resolve({ data: memberVisitCnt })
    })
  },
  getMembershipLists: () => {
    return new Promise((resolve) => {
      resolve({ data: membershipList })
    })
  },
  updateLoginInfo: (text) => {
    alert(text.password)
    alert(text.loginId)

    if (text.loginId === 'junhwan_lee@sk.com') {
      sample.id = 'junhwan_lee@sk.com'
      sample.name = '이준환'
    } else {
      sample.id = 'teemjang@sk.com'
      sample.name = '한대영'
    }
  }
}
