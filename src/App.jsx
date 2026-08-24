import { useState } from 'react'
import './App.css'

const tasks = [
  '搭好页面结构',
  '接入状态管理',
  '连接后端接口',
]

function App() {
  const [count, setCount] = useState(10)

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Vite + React</p>
          <h1>React 项目已启动</h1>
          <p className="intro">
            这里是你的应用起点，可以继续扩展页面、组件、路由和数据接口。
          </p>
        </div>

        <div className="counter-panel" aria-label="计数器">
          <span className="counter-label">交互状态</span>
          <strong>{count}</strong>
          <div className="button-row">
            <button type="button" onClick={() => setCount((value) => value - 1)}>
              -
            </button>
            <button type="button" onClick={() => setCount((value) => value + 1)}>
              +
            </button>
          </div>
        </div>
      </section>

      <section className="task-list" aria-label="下一步">
        {tasks.map((task, index) => (
          <article className="task-item" key={task}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{task}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
