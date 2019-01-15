import Link from 'next/link'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { Button } from '../components/Button'
import { SubTitle } from '../components/SubTitle'
import { Gradation } from '../components/Gradation'
import { TextField } from '../components/TextField'

export default () => (
  <>
    <Head>
      <title>Docker Run</title>
    </Head>

    <Gradation>
      <div className="landing-container">
        <Header />
        <div className="title-container">
          <Title>A new and better way to run Docker Containers in production</Title>
        </div>
        <div className="title-container">
          <SubTitle>
            A complete Docker infrastructure for your production applications: <br />
            Deploy and run your custom Docker image in 30 seconds.
          </SubTitle>
        </div>
        <div className="form-container">
          <div>$ docker run</div>
          <div className="form-input">
            <TextField placeholder="nginx:latest" />
          </div>
          <div className="form-container-button">
            <Link href="/try">
              <a>
                <Button title="Run your container" />
              </a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .form-input {
            margin-left: 12px;
          }
          .landing-container {
            min-height: 100vh;
          }
          .title-container {
            margin: auto;
            max-width: 560px;
            text-align: center;
            margin-top: 100px;
          }
          .form-container {
            margin-top: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .form-container-button {
            margin-left: 24px;
          }
        `}</style>
      </div>
    </Gradation>
  </>
)
