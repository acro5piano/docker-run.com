export const Gradation = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        background: linear-gradient(180deg, #ecf6ff 0%, rgba(255, 255, 255, 0) 100%), #81d8fd;
      }
    `}</style>
  </div>
)
