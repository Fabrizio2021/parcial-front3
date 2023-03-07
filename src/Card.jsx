import './Card.css'

export function Card ({ colorName, colorHex }) {
  return (
    <>
      <div className='cardContainer' style={{ background: `#${colorHex}` }}>
        <p>{colorName}</p>
        <span>{`#${colorHex}`}</span>
      </div>
    </>
  )
}