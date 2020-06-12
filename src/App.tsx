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
  /* createEffect(() => { */
  /*   loading = load({ */
  /*     jokes: state.fetching */
  /*       ? getItems({ */
  /*           url: 'https://geek-jokes.sameerkumar.website/api?format=json', */
  /*         }) */
  /*       : null, */
  /*   }) */
  /*   setState({ fetching: false }) */
  /* }) */
  const handleClick = () => {
    load({
      jokes: !state.fetching
        ? getItems({
            url: 'https://geek-jokes.sameerkumar.website/api?format=json',
          }).then((response) => (setState({ fetching: false }), response))
        : [],
    })
    setState({ fetching: true })
  }


  return (
    <div>
      <header class="[ center ]">
        <h1 class="center__text"><a href="https://github.com/sameerkumar18/geek-joke-api">Geek Jokes</a> with SolidJS</h1>
      </header>
      <main class="[ center ]">
        <p class="center__text">{!state.fetching && 'Please click the button!'}</p>
        <p class="center__text">{state.fetching && 'Loading...'}</p>
        <button
          class="[ center ] button"
          disabled={state.fetching}
          onClick={(e) => handleClick()}
        >
          Fetch
        </button>
        <p class="center__text">{state.jokes.length === 0 && 'no data'}</p>
        <ul class="[ flow ]">
          <For each={state.jokes}>{(joke) => <li>{joke.joke}</li>}</For>
        </ul>
      </main>
    </div>
  )
}

export default App
