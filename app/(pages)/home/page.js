import { Wrapper } from '../(components)/wrapper'
import s from './home.module.scss'

import { useLenis } from '@studio-freight/react-lenis'

export default function Home() {
  useLenis(({ scroll }) => {
    console.log(scroll)
  })

  return (
    <Wrapper theme="red" className={s.page}>
      {/* content  */}
    </Wrapper>
  )
}
