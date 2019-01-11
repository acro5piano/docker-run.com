import Head from 'next/head'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { Button } from '../components/Button'
import { SubTitle } from '../components/SubTitle'
import { Gradation } from '../components/Gradation'

export default () => (
  <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans|Roboto" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="shortcut icon" href="/static/images/favicon.ico" />
    </Head>
    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900&subset=japanese');
      @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      * {
        box-sizing: border-box;
      }
      body {
        font-family: 'Open Sans', sans-serif;
        font-family: 'Roboto', sans-serif;
        font-family: 'Nanum Gothic', sans-serif;
        font-size: 14px;
        line-height: 1.67;
        color: #666;
      }
      input,
      textarea {
        line-height: 1.6;
        font-size: 16px;
      }
    `}</style>

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
            <input placeholder="nginx:latest" />
          </div>
          <div className="form-container-button">
            <Button title="Run your container" />
          </div>
        </div>
        <style jsx>{`
          input {
            border-radius: 4px;
            border: none;
            padding: 8px 12px;
            background: #f9f9f9;
          }
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
