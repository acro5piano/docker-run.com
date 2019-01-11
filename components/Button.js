export const Button = ({ title }) => (
  <>
    <div className="button">{title}</div>
    <style jsx>{`
      .button {
        background: #3ce0b8;
        color: #fff;
        padding: 8px 18px;
        border-radius: 5px;
        cursor: pointer;
      }
    `}</style>
  </>
)
