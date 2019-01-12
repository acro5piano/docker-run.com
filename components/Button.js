export const Button = ({ title }) => (
  <>
    <div className="button">{title}</div>
    <style jsx>{`
      .button {
        background: #707DED;
        color: #fff;
        padding: 8px 22px;
        border-radius: 5px;
        cursor: pointer;
      }
    `}</style>
  </>
)
