import React from 'react'
import Link from 'next/link'
import { Button } from './Button'
import { TextField } from './TextField'

export class Header extends React.Component {
  state = {
    email: '',
    sending: false,
  }

  subscribe = async () => {
    this.setState({ sending: true })
    await fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      body: JSON.stringify({
        channel: 'notifications',
        text: `docker-run.com subscriber: ${this.state.email}`,
      }),
    })
    this.setState({ sending: false })
    window.alert('Thank you for subscribing us! Get in touch soon.')
  }

  render() {
    const { sending } = this.state

    return (
      <>
        <div className="container">
          <div className="header-container">
            <div className="header-left">
              <Link href="/">
                <a>
                  <img src="/static/images/logo.png" />
                </a>
              </Link>
              <li>
                <a href="https://github.com/acro5piano/docker-run.com" target="_blank">
                  GitHub
                </a>
              </li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Company</li>
            </div>
            <div className="header-left">
              <TextField
                placeholder="you@example.com"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <li>{sending ? '...' : <Button onClick={this.subscribe} title="Subscribe" />}</li>
            </div>
          </div>

          <style jsx>{`
            .container {
              padding: 18px;
              max-width: 1024px;
              margin: auto;
            }
            .header-container {
              display: flex;
              justify-content: space-between;
            }
            .header-left {
              display: flex;
              align-items: center;
            }
            .header-left li {
              list-style: none;
              margin-left: 36px;
              cursor: pointer;
            }
          `}</style>
        </div>
      </>
    )
  }
}
