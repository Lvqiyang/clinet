// const AschJS = require('asch-js');
const Request = require('superagent');

export function serverStatus() {
  Request
    .get('127.0.0.1:4096')
    .end((req, res) => {
      console.log('测试服务器连接')
      if (res) {
        console.log(res.statusCode)
      }
    })
}

export function peers() {
  Request
    .get('127.0.0.1:4096/api/peers?limit=2')
    .end((req, res) => {
      console.log('获取本机连接的所有节点信息')
      if (res) {
        console.log(res.body)
      }
    })
}

export function peersVersion() {
  Request
    .get('127.0.0.1:4096/api/peers/version')
    .end((req, res) => {
      console.log('获取本节点版本号等信息')
      if (res) {
        console.log(res.body)
      }
    })
}

export function peersGetIp() {
  Request
    .get('127.0.0.1:4096/api/peers/get?ip=192.168.0.1&port=4096')
    .end((req, res) => {
      console.log('获取指定ip节点信息')
      if (res) {
        console.log(res.body)
      }
    })
}

export function peerList() {
  Request
    .get('127.0.0.1:4096/peer/list')
    .set('magic', '594fe0f3')
    .set('version', '')
    .end((req, res) => {
      console.log('查找dapp peer')
      if (res) {
        console.log(res.body)
      }
    })
}

export function peerBlocks() {
  Request
    .get('127.0.0.1:4096/peer/blocks/common')
    .set('magic', '594fe0f3')
    .set('version', '')
    .end((req, res) => {
      console.log('查找common block')
      if (res) {
        console.log(res.body)
      }
    })
}

