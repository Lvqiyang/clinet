import utils from '../utils';

describe('Library', function () {
  beforeEach(utils.beforeEach);
  afterEach(utils.afterEach);

  it('Library-测试1', function () {
    // 1、点击login页面的login-button
    return this.app.client.click('#login')
    // 等待底部通知框出现'未注册用户登陆！'提示，进入Home页
      .waitUntilTextExists('#notice-bar', '未注册用户登陆！')

    // 2、点击顶部导航栏的navbar-libary，进入libary页
      .click('#navbar-library')
      .waitUntilTextExists('#notice-bar', '系统通知：术语字典-术语字典')

    // 2.1、点击工具栏的本地文件(local-file)，左列表显示本地测试数据文件
      .click('#library-local-file')
      .waitUntilTextExists('#notice-bar', '本地文件')
    // 2.1.1、点击左侧列表(library-leftlist)，读取数据文件内容，右侧表中显示所选本地文件内容
      .click('#library-leftlist')
      .waitUntilTextExists('#notice-bar', 'CSV文件读取成功！')

    // 2.2、点击工具栏的远程文件(remote-file)，左列表显示远程数据文件
      .click('#library-remote-file')
      .waitUntilTextExists('#notice-bar', '远程文件')
    // 2.2.1、点击左侧列表(library-leftlist)，读取数据文件内容，右侧表中显示所选远程文件内容
      .click('#library-leftlist')
      .waitUntilTextExists('#notice-bar', 'CSV文件读取成功！')

    // 2.3、工具栏的后一页(library-down)，右侧表中显示下一页内容
    // 2.4、工具栏的前一页(library-up)，右侧表中显示上一页内容

    // 2.5、点击工具栏的编辑数据(remote-file)，进入编辑页面，编辑页面右侧显示远程数据文件
      .click('#library-edit')
      .waitUntilTextExists('#edit-input', '')

    // 2.6、点击维度选择(library-dropdown)，显示维度下拉选项
    // 2.6.1、工具栏的维度选择-机构(library-org)，左侧列表显示当前数据内所有机构
    // 2.6.1.1、点击左侧列表(library-leftlist)，右侧表中显示所选机构的对应数据

    // 2.6.2、工具栏的维度选择-时间(library-time)，左侧列表显示当前数据内所有时间
    // 2.6.2.1、点击左侧列表(library-leftlist)，右侧表中显示所选时间的对应数据

    // 2.6.3、工具栏的维度选择-版本(library-version)，左侧列表显示当前数据内所有版本
    // 2.6.3.1、点击左侧列表(library-leftlist)，右侧表中显示所选版本的对应数据

    // 2.6.4、添加列维度
  })
});
