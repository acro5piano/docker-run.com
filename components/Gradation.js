export const Gradation = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        background: linear-gradient(180deg, #deffe7 0%, rgba(255, 255, 255, 0) 100%), #c4ffbe;
      }
    `}</style>
  </div>
)
