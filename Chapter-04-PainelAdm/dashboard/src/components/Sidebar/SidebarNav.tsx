import { Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title={'GERAL'}>
        <NavLink
          href={'/dashboard'}
          icon={RiInputMethodLine}
          title={'Dashboard'}
        />
        <NavLink href={'/users'} icon={RiContactsLine} title={'Usuários'} />
      </NavSection>

      <NavSection title={'AUTOMAÇÃO'}>
        <NavLink
          href={'/forms'}
          icon={RiInputMethodLine}
          title={'Formularios'}
        />
        <NavLink
          href={'/automation'}
          icon={RiGitMergeLine}
          title={'Automação'}
        />
      </NavSection>
    </Stack>
  )
}
