// const { Socket } = require('phoenix-channels')
import { Socket } from 'phoenix'
let socket = null
let channel = null
let channel2 = null
let createRoomTime = ''
let username = ''
// 连接(obj, [url, port, username])
export function socketConnect(obj, data) {
  // if (data[0] !== '' && data[1] !== '' && data[2] !== '') {
  socket = new Socket(`ws://${data[0]}:8000/socket`, { params: { token: 'a token', username: data[2] } });
  socket.connect();
  channel2 = socket.channel('online:list', { username: data[2], password: data[3] })
  channel2.join()
    .receive('ok', () => {
      username = data[2]
      obj.$store.commit('SET_NOTICE', '远程服务用户登录成功')
    })
    .receive('error', (err) => {
      obj.$store.commit('SET_NOTICE', err.reason)
    })
  channel2.push('用户信息', {})
  channel2.on('用户信息', (res) => {
    if (obj.$store.state.System.user.login === false) {
      obj.$store.commit('SYSTEM_SET_USER', ['用户登录成功', res.user])
      obj.$store.commit('SYSTEM_SET_SERVER', ['', data[0], data[1]])
      obj.$store.commit('SYSTEM_SET_CONNECT_INFO', true)
    }
  })
  channel2.on('邀请加入', (r) => {
    if (r.invite === username) {
      obj.$store.commit('EDIT_SET_CHAT_TYPE', true);
      obj.$store.commit('SET_NOTICE', `${r.message}`)
      obj.$store.commit('EDIT_SET_SOCKET_RECORD', { message: r.message, type: 'info', time: r.time, room: r.room, create_room_time: r.create_room_time });
      createRoomTime = r.create_room_time
    }
  })
}

export function join(obj, filename, username) {
  channel = socket.channel(`room:${username}`, { username: username, create_room_time: createRoomTime })
  channel.join()
    .receive('ok', () => {
      obj.$store.commit('SET_NOTICE', '加入房间成功')
      channel.push('加入房间', { body: username, username: username, create_room_time: createRoomTime })
      obj.$store.commit('EDIT_SET_CHAT_TYPE', true);
    })
    .receive('error', () => {
      obj.$store.commit('SET_NOTICE', '加入房间失败')
    })
  channel.on('新消息', (r) => {
    obj.$store.commit('EDIT_SET_SOCKET_RECORD', { message: r.body, type: r.type, username: r.username, time: r.time, create_room_time: createRoomTime });
  })
  channel.on('共享文档', (r) => {
    obj.$store.commit('EDIT_SET_SOCKET_RECORD', { message: r.body, type: r.type, username: r.username, time: r.time, create_room_time: createRoomTime });
  })
  channel.on('加入房间', (r) => {
    obj.$store.commit('EDIT_SET_SOCKET_RECORD', { message: r.body, type: 'info', username: r.username, time: r.time, create_room_time: createRoomTime });
  })
  channel.on('离开房间', (r) => {
    obj.$store.commit('EDIT_SET_SOCKET_RECORD', { message: r.body, type: 'info', username: r.username, time: r.time, create_room_time: createRoomTime });
  })
  channel.on('ping', (r) => {
    obj.$store.commit('EDIT_SET_CHAT_USERS', r.users);
  })
}


export function invite(obj, filename, username = '') {
  channel2.push('邀请加入', { body: '', room: filename, username: username, create_room_time: createRoomTime, invite: username, room_owner: filename })
}

export function message(obj, message, username = '', type = 'message') {
  channel.push('新消息', { body: message, username: username, type: type, create_room_time: createRoomTime })
  obj.$store.commit('SET_NOTICE', '消息发送成功')
}

export function leave(obj, username = '') {
  channel.push('离开房间', { body: '离开房间', username: username, create_room_time: createRoomTime });
  obj.$store.commit('SET_NOTICE', '已离开房间')
}
