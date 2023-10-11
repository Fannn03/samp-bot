export const registerUcpCommandMessage = (channel) => {
  return `
  Dengan menekan tombol dibawah ini, kamu menyetujui peraturan yang ada di server ini.

  Jika memiliki pertanyaan atau kendala kamu bisa menghubungi ke <#${channel}>
  `
}

export const registerUcpDirectMessage = (request, register, support) => {
  return `
  > **Username :** ${request.username}
  > **Password :** ||${request.password}||

  Silahkan buat karakter mu terlebih dahulu di <#${register}>
  Jika kamu memiliki kendala atau pertanyaan, silahkan tanyakan kepada staff server dengan membuat ticket di <#${support}>

  Segala bentuk data yang tidak benar akan kami ubah sewaktu waktu tanpa sepengetahuan dari kamu.
  `
}