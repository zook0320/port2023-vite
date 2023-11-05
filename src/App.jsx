import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div id="skip">
    <a href="#header">헤더 영역 바로가기</a>
    <a href="#intro">소개 영역 바로가기</a>
    <a href="#skill">스킬 영역 바로가기</a>
    <a href="#site">사이트 영역 바로가기</a>
    <a href="#port">포트폴리오 영역 바로가기</a>
    <a href="#contact">연락처 영역 바로가기</a>
    <a href="#footer">푸터 영역 바로가기</a>
</div>
<main id="main" role="main">
    <section id="intro">
        intro
    </section>


    <section id="skill">
        skill
    </section> 


    <section id="site">
        site
    </section>


    <section id="port">
        port
    </section>


    <section id="contact">
        contact
    </section>

</main>
    </>
  )
}

export default App
