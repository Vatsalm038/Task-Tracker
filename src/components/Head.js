import PropTypes from 'prop-types'
import Button from './Button'

const Head = ({title, onAdd,showAdd}) => {
  
  return (
    <header className ='Head'>
      <h1 >{title}</h1>
      <Button color={showAdd ? 'Green' : 'Red'} text={showAdd ? 'Close ' : 'Open'} onClick={onAdd}/>
      
    </header>
  )
}
Head.defaultProps = {
title : 'Task Tracker'

}
Head.propTypes = {
  title : PropTypes.string.isRequired,
};

// const headingStyle = 
// {
//   color : 'blue' , 
//   backgroundColor: 'black'
// }
export default Head
