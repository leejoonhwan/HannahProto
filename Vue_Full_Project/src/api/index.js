var sample = { id: 'niip00ng@daum.net', name: '이준환' }
var membershipList = [
  { value: 'happyCharge', text: '행복충전' },
  { value: 'levis', text: '리바이스' }]

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
  getMembershipLists: () => {
    return new Promise((resolve) => {
      resolve({ data: membershipList })
    })
  },
  updateLoginInfo: (text) => {
    if (text.loginId === 'junhwan_lee@sk.com') {
      sample.id = 'junhwan_lee@sk.com'
      sample.name = '이준환'
    } else {
      sample.id = 'teemjang@sk.com'
      sample.name = '한대영'
    }
  }
}
