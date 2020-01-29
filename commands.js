let commands = {
  welcome: message => {
    let member = message.content.slice(8);
    message.channel.send(
      "Welcome  " + member + ", please introduce yourself! Make sure to check out <#662059386100776963>, assign yourself some roles in <#651833116998238222> and share anything you've worked on in <#662315416583929866> We hope you enjoy your stay here and we're looking forward to getting to know you!")
  }
  // kill
  // revive
  // vote
  // add
  // remove
  // stats
  // cleanup
  // say
}