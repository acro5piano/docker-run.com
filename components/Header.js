import { Button } from './Button'

export const Header = () => (
  <>
    <div className="container">
      <div className="header-container">
        <div className="header-left">
          <img src="/static/images/logo.png" />
          <li>Features</li>
          <li>Pricing</li>
          <li>Company</li>
        </div>
        <div className="header-left">
          <li>Login</li>
          <li>
            <Button title="Try for free" />
          </li>
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
