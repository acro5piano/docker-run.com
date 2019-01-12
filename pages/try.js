import React from 'react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { Button } from '../components/Button'
import { SubTitle } from '../components/SubTitle'
import { Gradation } from '../components/Gradation'

const PROGRESS_1_MAX = 22.49
const PROGRESS_2_MAX = 22.23

const getLoadingIndicator = current => {
  switch (current) {
    case '\\':
      return '|'
    case '|':
      return '/'
    case '/':
      return '-'
    case '-':
      return '\\'
  }
}

export default class Try extends React.Component {
  state = {
    loadingIndicator: '\\',
    progress1: 0,
    progress2: 0,
    started: false,
    pulling: false,
    containerLaunching: false,
    containerLaunched: false,
    registering: false,
    registered: false,
    finished: false,
  }

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          loadingIndicator: getLoadingIndicator(this.state.loadingIndicator),
        }),
      200,
    )

    setTimeout(() => this.setState({ started: true }), 1000)
    setTimeout(() => {
      this.setState({ pulling: true })
      setInterval(
        () =>
          this.setState({
            progress1: this.state.progress1 + 5,
            progress2: this.state.progress2 + 3,
          }),
        100,
      )
    }, 2000)
    setTimeout(() => this.setState({ containerLaunching: true }), 6500)
    setTimeout(() => this.setState({ containerLaunched: true }), 9000)
    setTimeout(() => this.setState({ registering: true }), 10000)
    setTimeout(() => this.setState({ registered: true }), 12000)
    setTimeout(() => this.setState({ finished: true }), 15000)
  }

  getRealProgress(progress, max) {
    return String((progress * max) / 100).slice(0, 8)
  }

  getProgressArrow(realProgress) {
    return '='.repeat(Math.min(40, Math.floor(Number(realProgress * 2)))) + '>'
  }

  getProgressArrowSpace(arrow) {
    return ' '.repeat(42 - arrow.length)
  }

  render() {
    const {
      started,
      pulling,
      progress1,
      progress2,
      containerLaunching,
      containerLaunched,
      finished,
      registering,
      registered,
      loadingIndicator,
    } = this.state

    const realProgress1 = this.getRealProgress(progress1, PROGRESS_1_MAX)
    const progress1Arrow = this.getProgressArrow(realProgress1)
    const progress1ArrowSpace = this.getProgressArrowSpace(progress1Arrow)

    const realProgress2 = this.getRealProgress(progress2, PROGRESS_2_MAX)
    const progress2Arrow = this.getProgressArrow(realProgress2)
    const progress2ArrowSpace = this.getProgressArrowSpace(progress2Arrow)

    const didPullCompleted = realProgress1 > PROGRESS_1_MAX && realProgress2 > PROGRESS_2_MAX

    return (
      <>
        <Head>
          <title>Try Docker Run</title>
        </Head>

        <Header />
        <div className="try-console">
          {started && (
            <>
              <p>Unable to find image 'nginx:latest' locally</p>
              <p>latest: Pulling from library/nginx</p>
            </>
          )}
          {pulling && (
            <>
              <p>
                177e7ef0df69:
                {realProgress1 < PROGRESS_1_MAX ? (
                  /* prettier-ignore */
                  <span> Downloading [{progress1Arrow} {progress1ArrowSpace}] {realProgress1}MB/{PROGRESS_1_MAX}MB</span>
                ) : (
                  <span> Pull complete</span>
                )}
              </p>
              <p>
                177e7ef0df69:
                {realProgress2 < PROGRESS_2_MAX ? (
                  /* prettier-ignore */
                  <span> Downloading [{progress2Arrow} {progress2ArrowSpace}] {realProgress2}MB/{PROGRESS_2_MAX}MB</span>
                ) : (
                  <span> Pull complete</span>
                )}
              </p>
            </>
          )}
          {didPullCompleted && (
            <div>
              <p>Digest: sha256:b543f6d0983fbc25b9874e22f4fe257a567111da96fd1d8f1b44315f1236398c</p>
              <p>Status: Downloaded newer image for nginx:latest</p>
            </div>
          )}
          {containerLaunching && (
            <>
              <p> </p>
              <p>Creating container{containerLaunched ? '... done.' : '...'}</p>
            </>
          )}
          {registering && (
            <>
              <p> </p>
              <p>Registering domain{registered ? '... done.' : '...'}</p>
            </>
          )}
          {finished && (
            <>
              <p> </p>
              <p>
                Congratulations! Your container is running at:{' '}
                <a target="_blank" href="https://lbzsifwbocxf8yq.docker-run.com">
                  https://lbzsifwbocxf8yq.docker-run.com
                </a>
              </p>
            </>
          )}
          {!finished && <p>{loadingIndicator}</p>}
          <style jsx>{`
            .try-console {
              white-space: pre-wrap;
              font-family: 'Roboto Mono', monospace;
              padding: 12px 18px;
              color: #f8f8f8;
              width: 80%;
              max-width: 800px;
              overflow: scroll;
              margin: auto;
              border-radius: 4px;
              background: #333;
              min-height: 400px;
              margin-top: 45px;
            }
            .try-console a {
              color: #fff;
              text-decoration: underline;
            }
          `}</style>
        </div>
      </>
    )
  }
}
