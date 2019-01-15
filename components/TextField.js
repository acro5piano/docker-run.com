export const TextField = props => (
  <>
    <input {...props} />
    <style jsx>{`
      input {
        border-radius: 4px;
        border: none;
        padding: 8px 12px;
        background: #f9f9f9;
      }
      ::placeholder {
        color: #ccc;
        opacity: 1;
      }
    `}</style>
  </>
)
