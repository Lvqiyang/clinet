import utils from '../utils';

describe('Library', function () {
  beforeEach(utils.beforeEach);
  afterEach(utils.afterEach);

  it('Library-测试1', function () {
    // 点击login页面的login-button
    return this.app.client.click('#login')
    // 等待底部通知框出现'未注册用户登陆！'提示，进入Home页
      .waitUntilTextExists('#notice-bar', '未注册用户登陆！')
      .getText('#notice-bar')
      .then(function (noticeText) {
        console.log(noticeText)
        expect(noticeText).to.equal('系统通知：未注册用户登陆！');
      })
    // 点击顶部导航栏的libary-page，进入libary页
      .click('#library-page')
      .waitUntilTextExists('#notice-bar', '未注册用户登陆！')
      .getText('#notice-bar')
      .then(function (noticeText) {
        console.log(noticeText)
        expect(noticeText).to.equal('系统通知：未注册用户登陆！');
      })
    // 点击工具栏的本地文件(local-file)，浏览本地文件
      .click('#local-file')
      .waitUntilTextExists('#library-leftpanel', 'adrg.csv')
      .getText('#library-leftpanel')
      .then(function (leftpanel) {
        console.log(leftpanel)
        expect(leftpanel).to.deep.equal(['adrg.csv', 'mdc.csv']);
      })
    // 点击左侧列表(library-leftlist)，读取文件内容
      .click('#library-leftlist')
      .waitUntilTextExists('#notice-bar', 'CSV文件读取成功！')
      // .getText('#library-rightpanel')
      // .then(function (rightpanel) {
      //   console.log(rightpanel.length)
      //   expect(rightpanel.length).to.be.above(0);
      // })
    // 点击工具栏下一页(library-down)，读取文件内容
      // .click('#library-down')
      // .getText('#library-rightpanel')
      // .then(function (rightpanel) {
      //   console.log(rightpanel.length)
      //   expect(rightpanel.length).to.be.above(0);
      // })
    // // 点击工具栏上一页(library-up)，读取文件内容
      // .click('#library-up')
      // .getText('#library-rightpanel')
      // .then(function (rightpanel) {
      //   console.log(rightpanel.length)
      //   expect(rightpanel.length).to.be.above(0);
      // })
    // 点击工具栏的编辑数据(library-edit)
      .click('#library-edit')
      .waitUntilTextExists('#edit-right-panel', 'adrg.csv')
      .getText('#edit-right-panel')
      .then(function (lefttable) {
        console.log(lefttable.length)
        expect(lefttable.length).to.be.above(0);
      })
    // 点击工具栏的维度选择(library-dropdown)
      // .click('#library-dropdown')
      // .click('#library-org')
      // .waitUntilTextExists('#library-org', '机构')
      // .getText('#edit-right-panel')
      // .then(function (dropdown) {
      //   console.log(dropdown)
      //   expect(dropdown).to.equal('机构');
      // })
  })
});
