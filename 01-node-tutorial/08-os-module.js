const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  CPUarchitecture: os.arch(),
  CPUcores: os.cpus(),
  CPUspeed: os.cpus()[0].speed,
  CPUmodel: os.cpus()[0].model,
  CPUtimes: os.cpus()[0].times,
  CPUload: os.loadavg(),
  CPUfreeCPU: os.freemem() / os.totalmem(),
  CPUusedCPU: 1 - os.freemem() / os.totalmem(),
  CPUusedCPUpercent: (os.freemem() / os.totalmem()) * 100,
  endianness: os.endianness(),
  homedir: os.homedir(),
  hostname: os.hostname(),
  loadavg: os.loadavg(),
  networks: os.networkInterfaces(),
  platform: os.platform(),
  release: os.release(),
  tmpdir: os.tmpdir(),
  totalCPU: os.totalmem() / os.freemem(),
  uptime: os.uptime(),
  userInfo: os.userInfo(),
  EOL: os.EOL,
  type: os.type(),

}
console.log(currentOS)
