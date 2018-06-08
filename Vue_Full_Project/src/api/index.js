var sample = { id: 'niip00ng@daum.net', name: '이준환' }
var membershipList = [
  { value: 'happyCharge', text: '행복충전' },
  { value: 'levis', text: '리바이스' }]
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
    if (text.loginId === 'junhwan_lee@sk.com') {
      sample.id = 'junhwan_lee@sk.com'
      sample.name = '이준환'
    } else {
      sample.id = 'teemjang@sk.com'
      sample.name = '한대영'
    }
  },
  getDateList (n) {
    var currentDay = new Date()
    var theYear = currentDay.getFullYear()
    var theMonth = currentDay.getMonth()
    var theDate = currentDay.getDate()
    var theDayOfWeek = currentDay.getDay()

    var thisWeek = []

    for (var i = 0; i < n; i++) {
      var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek))
      var yyyy = resultDay.getFullYear()
      var mm = Number(resultDay.getMonth()) + 1
      var dd = resultDay.getDate()

      mm = String(mm).length === 1 ? '0' + mm : mm
      dd = String(dd).length === 1 ? '0' + dd : dd

      thisWeek[i] = yyyy + '-' + mm + '-' + dd
    }
    return thisWeek
  }
}
