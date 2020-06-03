import { createResourceState, createEffect, Component } from 'solid-js'

const App: Component = () => {
  const [state, load, setState] = createResourceState({
    fetching: false,
    jokes: [],
  })

  const getItem = (url) => fetch(url).then((response) => response.json())

  const getItems = ({ url = '', limit = 5 }) => {
    const urls = Array(limit).fill(url)
    return Promise.all(urls.map(getItem)).catch((error) => console.error(error))
  }

  let loading
  createEffect(() => {
    loading = load({
      jokes: state.fetching
        ? getItems({
            url: 'https://geek-jokes.sameerkumar.website/api?format=json',
          })
        : null,
    })
    setState({ fetching: false })
  })

  return (
    <div>
      <header class="[ center ]">
        <h1 class="center__text">Geek Jokes with SolidJS</h1>
      </header>
      <main class="[ center ]">
        <button
          class="[ center ] button"
          onClick={(e) => setState({ fetching: true })}
        >
          Fetch
        </button>
        <p class="center__text">{loading.jokes && 'Loading...'}</p>
        <p class="center__text">{!state.jokes && 'no data'}</p>
        <ul class="[ flow ]">
          <For each={state.jokes}>{(joke) => <li>{joke.joke}</li>}</For>
        </ul>
      </main>
    </div>
  )
}

export default App
