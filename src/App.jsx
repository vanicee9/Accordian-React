import { useState } from 'react'

import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <>
    <h1> Read more demo</h1>
    <div className= {"container " + (isOpen? '' : "para")}>
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium, sit nemo obcaecati ut quasi iste esse quae ea tenetur magni molestias ipsum odit? Dolore unde consectetur corrupti veniam neque maxime ipsa modi laudantium ab explicabo, magnam architecto incidunt adipisci quasi perferendis excepturi quam nulla ex libero fugiat ducimus eum debitis asperiores eligendi. Ex corporis fugit beatae nulla quo maiores unde nihil mollitia quibusdam quidem voluptatum vel, consequuntur vitae molestias voluptatibus ad numquam sint non distinctio ut cupiditate alias? Reprehenderit natus impedit sed beatae sunt quam molestiae pariatur ullam blanditiis minima iusto accusamus, obcaecati veritatis labore deleniti. Corrupti reiciendis laboriosam iure, sapiente ex qui nobis magni earum aliquid repellat quidem atque, minus deserunt veniam doloribus doloremque illum alias, dolorem modi. Totam voluptatum iusto sapiente, qui eos consequatur odit, porro illo quod omnis officia cupiditate cumque, mollitia ad. Aperiam atque est optio reprehenderit enim. Ex hic non quibusdam reiciendis dicta quos voluptatibus fugit iure numquam autem recusandae aut, deleniti nulla harum voluptatem culpa fuga veniam aliquid voluptas modi consectetur? Et sit laudantium ipsum repellat numquam asperiores illum vel molestiae eligendi, fuga omnis, cumque voluptatibus, officia quos ab ratione corrupti minima perferendis. Quibusdam accusantium voluptatem eligendi quasi eius placeat, dolorum odit doloribus!</p>
    <button id = 'btn' onClick = {()=>setIsOpen(!isOpen)}>{isOpen? "read less..." : "read more..."}</button>
    </div>
    </>
  )
}

export default App
