export const Button = ({ title, onClick = () => {} }) => (
  <>
    <div className="button" onClick={onClick}>
      {title}
    </div>
    <style jsx>{`
      .button {
        background: #707ded;
        color: #fff;
        padding: 8px 22px;
        border-radius: 5px;
        cursor: pointer;
      }
    `}</style>
  </>
)
