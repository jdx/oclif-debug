import {Command} from '@oclif/command'

export default class Debug extends Command {
  static description = 'debug command'

  async run() {
    this.log(`debugging ${this.config.version}`)
  }
}
