import {Hook} from '@oclif/config'

const hook: Hook<'postinstall'> = async function () {
  process.stdout.write('example hook running postinstall\n')
}

export default hook
